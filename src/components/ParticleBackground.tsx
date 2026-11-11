"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ===========================================================================
// PARTICLE APPEARANCE CONFIGURATION
// You can edit any of these defaults directly here to change the look
// across the site, or override them via props on <ParticleBackground />.
// ===========================================================================
export const PARTICLE_CONFIG = {
  // Mode: "gradient" or "single"
  colorMode: "gradient" as "gradient" | "single",

  // Single color (used when colorMode is "single")
  singleColor: "#388BFD",

  // Gradient colors (used when colorMode is "gradient")
  gradientStart: "#FF3366", // Color at start of angle (Top-Right default: vibrant red)
  gradientEnd: "#388BFD",   // Color at end of angle (Bottom-Left default: electric blue)

  // Gradient angle in degrees (0° to 360°):
  //   45°  = Top-Right to Bottom-Left (current default)
  //   90°  = Top to Bottom
  //   0°   = Right to Left
  //   180° = Left to Right
  //   270° = Bottom to Top
  gradientAngle: 35,

  // Gradient spread / transition softness across the screen:
  // Lower values (0.4–0.6) = higher contrast between sides
  // Higher values (0.8–1.2) = softer, broader transition
  gradientSpread: 1.2,

  // Micro-gradient intensity within each individual particle dot (0.0 to 1.0):
  // 0.0 = flat dots, 0.2 = subtle natural dimensional sheen
  dotGradientStrength: 0.20,

  // Particle size (render diameter in 3D world space)
  particleSize: 4,

  // Particle count - smaller dots + higher density fills the sphere silhouette
  // fully, making it read as a larger presence without changing its screen radius.
  particleCountDesktop: 1400,
  particleCountMobile: 650,
};

export interface ParticleBackgroundProps {
  text?: string;
  count?: number;
  particleCount?: number;

  // Color customization
  colorMode?: "gradient" | "single";
  color?: string; // Shortcut for singleColor or legacy compatibility
  singleColor?: string;
  gradientStart?: string;
  gradientEnd?: string;
  gradientAngle?: number; // in degrees (e.g. 45 = top-right to bottom-left)
  gradientSpread?: number;
  dotGradientStrength?: number;

  // Particle size, typography, positioning
  font?: string;
  scale?: number;
  size?: number;
  particleSize?: number;
  yOffset?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMix;
  uniform vec2  uMouse;
  uniform vec3  uSpread;
  uniform float uSize;
  uniform float uSphereRadius;
  uniform float uYOffset;

  uniform float uUseGradient;
  uniform vec3  uColorSingle;
  uniform vec3  uColorStart;
  uniform vec3  uColorEnd;
  uniform vec2  uGradDir;
  uniform float uGradSpread;

  attribute vec3  aSeed;     // random [0,1] per particle - drive unique drift
  attribute vec3  aTarget;   // shape or floater target in world units
  attribute float aFloater;  // 0.0 = forms {} shape, 1.0 = floats in background

  varying float vAlpha;
  varying vec3  vColor;

  void main() {
    // ---- per-particle sinusoidal drift ----------------------------------
    float speedX = 0.5 + aSeed.x * 0.6;
    float speedY = 0.4 + aSeed.y * 0.5;
    float speedZ = 0.3 + aSeed.z * 0.4;

    vec3 drift = vec3(
      sin(uTime * speedX + aSeed.y * 6.28318) * 0.35,
      cos(uTime * speedY + aSeed.z * 6.28318) * 0.35,
      sin(uTime * speedZ + aSeed.x * 6.28318) * 0.20
    );

    // ---- slowly rotating sphere -----------------------------------------
    float rotYAngle = uTime * 0.16;
    mat2 rotY = mat2(cos(rotYAngle), sin(rotYAngle), -sin(rotYAngle), cos(rotYAngle));

    float rotXAngle = 0.28;
    mat2 rotX = mat2(cos(rotXAngle), sin(rotXAngle), -sin(rotXAngle), cos(rotXAngle));

    vec3 spherePos = position * uSphereRadius;
    spherePos.yz = rotX * spherePos.yz;
    spherePos.xz = rotY * spherePos.xz;
    spherePos.y += uYOffset;

    // Sphere dots are perfectly still; drift only applies to floaters/shape
    vec3 floatPos = spherePos;

    // ---- shape position: target + tiny residual drift for shape ---------
    // Floaters keep a healthy drift so they visibly float around
    float shapeDriftAmount = mix(0.06, 0.65, aFloater);
    vec3 shapePos = aTarget + drift * shapeDriftAmount;

    // ---- per-particle staggered transition delay ------------------------
    // aSeed.x (0-1) staggers so particles don't all move at once.
    // local: 0 = still in sphere, 1 = fully at shape / floating.
    float delay  = aSeed.x * 0.45;          // max delay offset
    float window = 1.0 - delay;             // remaining mix window
    float t      = clamp((uMix - delay) / max(window, 0.001), 0.0, 1.0);
    float local  = smoothstep(0.0, 1.0, t);

    // ---- blend sphere → shape ------------------------------------------
    vec3 p = mix(floatPos, shapePos, local);

    // mouse interaction disabled - to be revisited later

    // ---- alpha ----------------------------------------------------------
    // Fully opaque in sphere state; shape/floater alpha unchanged
    float targetAlpha = mix(0.88, 0.45, aFloater);
    vAlpha = mix(1.0, targetAlpha, local);

    // ---- output ---------------------------------------------------------
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position  = projectionMatrix * mv;

    // ---- color calculation: single color vs directional gradient --------
    vec2 ndc = gl_Position.xy / max(gl_Position.w, 0.001);
    float proj = dot(ndc, uGradDir);
    float gradT = clamp((proj / uGradSpread + 1.0) * 0.5, 0.0, 1.0);
    gradT = smoothstep(0.0, 1.0, gradT);
    vec3 gradColor = mix(uColorEnd, uColorStart, gradT);
    vColor = mix(uColorSingle, gradColor, uUseGradient);

    // Balanced depth scaling so back particles do not shrink into faint specks
    float depthScale = mix(1.0, 6.0 / max(-mv.z, 0.1), 0.4);
    gl_PointSize = uSize * depthScale;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uUseGradient;
  uniform vec3  uColorStart;
  uniform vec3  uColorEnd;
  uniform vec2  uGradDir;
  uniform float uDotGradStrength;
  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    // Round dot with clean antialiased circular edge
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float edgeAlpha = smoothstep(0.5, 0.42, dist);

    // Subtle internal directional micro-gradient within each dot
    // In gl_PointCoord, y is 0 at top and 1 at bottom
    vec2 dotNdc = vec2(gl_PointCoord.x - 0.5, 0.5 - gl_PointCoord.y) * 2.0;
    float dotProj = dot(dotNdc, uGradDir);
    float dotT = clamp((dotProj + 1.0) * 0.5, 0.0, 1.0);
    vec3 dotGrad = mix(uColorEnd, uColorStart, dotT);

    // Blend macro particle field color with micro dot gradient
    float dotStrength = uDotGradStrength * uUseGradient;
    vec3 finalColor = mix(vColor, dotGrad, dotStrength);

    gl_FragColor = vec4(finalColor, vAlpha * edgeAlpha);
  }
`;

// ---------------------------------------------------------------------------
// Canvas text → world-space target positions
// ---------------------------------------------------------------------------

function sampleTextToTargets(
  text: string,
  font: string,
  scale: number,
  count: number,
  yOffset: number = 0
): { targets: Float32Array; floaters: Float32Array } {
  const targets = new Float32Array(count * 3);
  const floaters = new Float32Array(count);

  if (typeof document === "undefined") {
    return { targets, floaters };
  }

  // ---- draw text on an offscreen canvas ----------------------------------
  const W = 1024;
  const H = 512;
  const cnv = document.createElement("canvas");
  cnv.width = W;
  cnv.height = H;
  const ctx = cnv.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { targets, floaters };

  // Helper: rasterize text with a given font string, then return a
  // weighted pixel pool where border pixels appear more often than
  // interior pixels - so sampling concentrates near the edges while
  // still leaving some particles in the middle.
  function tryFont(fontStr: string): [number, number][] {
    ctx!.clearRect(0, 0, W, H);
    ctx!.fillStyle = "#ffffff";
    ctx!.font = fontStr;
    ctx!.textBaseline = "middle";

    // Split into individual characters and spread them across the canvas.
    // For a single char, draw it centered. For multiple chars, distribute
    // them evenly between 28%–72% of the canvas width so they appear on
    // the left and right of the viewport rather than bunched together.
    const chars = [...text]; // unicode-safe split
    if (chars.length <= 1) {
      ctx!.textAlign = "center";
      ctx!.fillText(text, W / 2, H / 2);
    } else {
      ctx!.textAlign = "center";
      const leftX  = W * 0.33;
      const rightX = W * 0.67;
      const step   = (rightX - leftX) / (chars.length - 1);
      chars.forEach((char, i) => {
        ctx!.fillText(char, leftX + i * step, H / 2);
      });
    }

    const { data } = ctx!.getImageData(0, 0, W, H);

    // Build a fast filled-pixel lookup
    const filled = new Uint8Array(W * H);
    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        if (data[(py * W + px) * 4] > 128) filled[py * W + px] = 1;
      }
    }

    // Check whether a pixel is within `radius` pixels of an unfilled area
    function nearEdge(px: number, py: number, radius: number): boolean {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = px + dx;
          const ny = py + dy;
          if (nx < 0 || nx >= W || ny < 0 || ny >= H || !filled[ny * W + nx])
            return true;
        }
      }
      return false;
    }

    // Classify each sampled pixel and build a weighted pool.
    // Pixels very close to the edge appear 5×, slightly inside 2×, deep inside 1×.
    const pool: [number, number][] = [];
    for (let py = 0; py < H; py += 2) {
      for (let px = 0; px < W; px += 2) {
        if (!filled[py * W + px]) continue;
        const p: [number, number] = [px, py];
        if (nearEdge(px, py, 3)) {
          // Outer border band - highest concentration
          pool.push(p, p, p, p, p);
        } else if (nearEdge(px, py, 8)) {
          // Inner band - medium concentration
          pool.push(p, p);
        } else {
          // Deep interior - sparse but not zero
          pool.push(p);
        }
      }
    }
    return pool;
  }

  // Try the provided font first, then progressively simpler fallbacks
  let filledPixels = tryFont(font);

  if (filledPixels.length < 50) {
    filledPixels = tryFont(`bold 220px Arial, sans-serif`);
  }
  if (filledPixels.length < 50) {
    filledPixels = tryFont(`bold 220px sans-serif`);
  }
  if (filledPixels.length < 50) {
    // Last resort: very large font to ensure pixels
    filledPixels = tryFont(`200px sans-serif`);
  }

  if (filledPixels.length === 0) return { targets, floaters };

  // Calculate actual bounding box of sampled pixels so shape is optical-center aligned
  let minY = H;
  let maxY = 0;
  for (let j = 0; j < filledPixels.length; j++) {
    const py = filledPixels[j][1];
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
  }
  const centerY = (minY + maxY) / 2;

  // ---- assign targets: ~14% ambient floaters, ~86% curly braces ---------
  for (let i = 0; i < count; i++) {
    const isFloater = Math.random() < 0.14;
    floaters[i] = isFloater ? 1.0 : 0.0;

    if (!isFloater) {
      const [px, py] =
        filledPixels[Math.floor(Math.random() * filledPixels.length)];

      // Convert canvas pixel to world-space coordinates.
      // Canvas center = (W/2, centerY) -> world (0, yOffset).
      targets[i * 3 + 0] = (px - W / 2) / scale;
      targets[i * 3 + 1] = -((py - centerY) / scale) + yOffset;
      targets[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    } else {
      // Loose ambient floaters scattered safely within the visible hero viewport
      targets[i * 3 + 0] = (Math.random() - 0.5) * 10.0;
      targets[i * 3 + 1] = (Math.random() - 0.5) * 4.6 + yOffset;
      targets[i * 3 + 2] = (Math.random() - 0.5) * 2.0;
    }
  }

  return { targets, floaters };
}

// ---------------------------------------------------------------------------
// Inner Three.js scene (runs inside <Canvas>)
// ---------------------------------------------------------------------------

interface ParticlesSceneProps {
  hoverRef: React.MutableRefObject<{ active: boolean; x: number; y: number }>;
  text: string;
  count: number;
  colorMode: "gradient" | "single";
  singleColor: string;
  gradientStart: string;
  gradientEnd: string;
  gradientAngle: number;
  gradientSpread: number;
  dotGradientStrength: number;
  font: string;
  scale: number;
  size: number;
  yOffset: number;
}

function ParticlesScene({
  hoverRef,
  text,
  count,
  colorMode,
  singleColor,
  gradientStart,
  gradientEnd,
  gradientAngle,
  gradientSpread,
  dotGradientStrength,
  font,
  scale,
  size,
  yOffset,
}: ParticlesSceneProps) {
  const { viewport } = useThree();
  const pointsRef = useRef<THREE.Points>(null!);

  // ---- build geometry once (or when count / text / font / scale changes) --
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);

    // Sunflower phyllotaxis projected onto sphere hemispheres:
    //
    // A flat sunflower disk places each dot at:
    //   r = sqrt(i / N)   ← equal-area radial steps (like actual sunflower seeds)
    //   θ = i × golden_angle
    //
    // Projecting that flat disk onto the sphere surface gives:
    //   x, y  - same as the flat disk (r*cos theta, r*sin theta)
    //   z     - derived from the sphere equation sqrt(1 - x^2 - y^2)
    //
    // This keeps the full 3D depth (z varies from 1.0 at the center to 0.0
    // at the equator on the front, and 0.0 -> -1.0 on the back), so the
    // perspective size-scaling and occlusion keep it reading as a solid sphere,
    // while the face-on view reveals clear Fibonacci spiral arms.
    //
    // We run two independent sunflowers - one for each hemisphere - so both
    // halves carry the full spiral pattern.
    const goldenAngle = Math.PI * (3.0 - Math.sqrt(5.0)); // ≈ 2.39996 rad
    const halfCount = Math.floor(count / 2);

    for (let i = 0; i < count; i++) {
      const isBack  = i >= halfCount;
      const j       = isBack ? i - halfCount : i;
      const n       = isBack ? count - halfCount : halfCount;

      // Equal-area radial step - produces the characteristic sunflower spacing
      const r     = Math.sqrt((j + 0.5) / n); // [0, 1)
      const theta = goldenAngle * j;

      const xf = r * Math.cos(theta);
      const yf = r * Math.sin(theta);
      // Project onto sphere: z is real (not zero) for every dot except equator
      const zf = Math.sqrt(Math.max(0.0, 1.0 - xf * xf - yf * yf));

      pos[i * 3 + 0] = xf;
      pos[i * 3 + 1] = yf;
      pos[i * 3 + 2] = isBack ? -zf : zf;

      seeds[i * 3 + 0] = Math.random();
      seeds[i * 3 + 1] = Math.random();
      seeds[i * 3 + 2] = Math.random();
    }

    // Initial synchronous sample (may be pre-font-load, updated below)
    const { targets, floaters } = sampleTextToTargets(text, font, scale, count, yOffset);

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 3));
    geo.setAttribute("aTarget", new THREE.BufferAttribute(targets, 3));
    geo.setAttribute("aFloater", new THREE.BufferAttribute(floaters, 1));

    return geo;
  }, [count, text, font, scale, yOffset]);

  // ---- build material once -----------------------------------------------
  const material = useMemo(() => {
    const rad = (gradientAngle * Math.PI) / 180;
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMix: { value: 0 },
        uMouse: { value: new THREE.Vector2(999, 999) },
        uSpread: { value: new THREE.Vector3(10, 10, 3) },
        uSphereRadius: { value: 2.25 },
        uYOffset: { value: yOffset },
        uSize: { value: size },
        uUseGradient: { value: colorMode === "gradient" ? 1.0 : 0.0 },
        uColorSingle: { value: new THREE.Color(singleColor) },
        uColorStart: { value: new THREE.Color(gradientStart) },
        uColorEnd: { value: new THREE.Color(gradientEnd) },
        uGradDir: { value: new THREE.Vector2(Math.cos(rad), Math.sin(rad)) },
        uGradSpread: { value: gradientSpread },
        uDotGradStrength: { value: dotGradientStrength },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep size / colors / gradient uniforms in sync without rebuilding material
  useEffect(() => {
    material.uniforms.uSize.value = size;
    material.uniforms.uYOffset.value = yOffset;
    material.uniforms.uUseGradient.value = colorMode === "gradient" ? 1.0 : 0.0;
    material.uniforms.uColorSingle.value.set(singleColor);
    material.uniforms.uColorStart.value.set(gradientStart);
    material.uniforms.uColorEnd.value.set(gradientEnd);
    const rad = (gradientAngle * Math.PI) / 180;
    material.uniforms.uGradDir.value.set(Math.cos(rad), Math.sin(rad));
    material.uniforms.uGradSpread.value = gradientSpread;
    material.uniforms.uDotGradStrength.value = dotGradientStrength;
  }, [
    size,
    yOffset,
    colorMode,
    singleColor,
    gradientStart,
    gradientEnd,
    gradientAngle,
    gradientSpread,
    dotGradientStrength,
    material,
  ]);

  // ---- re-sample after fonts load (better quality) -----------------------
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        if (typeof document !== "undefined" && document.fonts) {
          await document.fonts.ready;
        }
      } catch {
        // ignore
      }
      if (cancelled) return;

      const fresh = sampleTextToTargets(text, font, scale, count, yOffset);
      const targetAttr = geometry.getAttribute("aTarget") as THREE.BufferAttribute;
      if (targetAttr && targetAttr.array.length === fresh.targets.length) {
        (targetAttr.array as Float32Array).set(fresh.targets);
        targetAttr.needsUpdate = true;
      }
      const floaterAttr = geometry.getAttribute("aFloater") as THREE.BufferAttribute;
      if (floaterAttr && floaterAttr.array.length === fresh.floaters.length) {
        (floaterAttr.array as Float32Array).set(fresh.floaters);
        floaterAttr.needsUpdate = true;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [text, font, scale, count, yOffset, geometry]);

  // ---- dispose on unmount ------------------------------------------------
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material]
  );

  // ---- animation loop ----------------------------------------------------
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const u = material.uniforms;

    // Update time
    u.uTime.value = state.clock.getElapsedTime();

    // Damp uMix toward target - lower lambda = slower shape formation
    const targetMix = hoverRef.current.active ? 1.0 : 0.0;
    u.uMix.value = THREE.MathUtils.damp(u.uMix.value, targetMix, 1.2, delta);

    // Dynamic responsive sphere radius - fits viewport safely without clipping
    u.uSphereRadius.value = Math.min(viewport.width * 0.38, 2.25);

    // Spread matches viewport so floating particles fill the screen
    u.uSpread.value.set(viewport.width * 1.1, viewport.height * 1.1, 3.0);
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------

export default function ParticleBackground({
  text = "{}",
  count,
  particleCount,
  colorMode = PARTICLE_CONFIG.colorMode,
  color,
  singleColor = PARTICLE_CONFIG.singleColor,
  gradientStart = PARTICLE_CONFIG.gradientStart,
  gradientEnd = PARTICLE_CONFIG.gradientEnd,
  gradientAngle = PARTICLE_CONFIG.gradientAngle,
  gradientSpread = PARTICLE_CONFIG.gradientSpread,
  dotGradientStrength = PARTICLE_CONFIG.dotGradientStrength,
  font = "bold 220px Arial, sans-serif",
  scale = 50,
  size,
  particleSize,
  yOffset = 0,
  className = "",
}: ParticleBackgroundProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<{ active: boolean; x: number; y: number }>({
    active: false,
    x: 0,
    y: 0,
  });

  // If a single `color` shortcut prop is passed, treat as single color mode
  const resolvedMode = color ? "single" : colorMode;
  const resolvedSingle = color || singleColor;
  const resolvedSize = size ?? particleSize ?? PARTICLE_CONFIG.particleSize;
  const resolvedCountProp = count ?? particleCount;

  // Responsive particle count - uses PARTICLE_CONFIG defaults or user override
  const [resolvedCount, setResolvedCount] = useState<number>(() => {
    if (resolvedCountProp !== undefined) return resolvedCountProp;
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
        ? PARTICLE_CONFIG.particleCountMobile
        : PARTICLE_CONFIG.particleCountDesktop;
    }
    return PARTICLE_CONFIG.particleCountDesktop;
  });

  useEffect(() => {
    if (resolvedCountProp !== undefined) {
      setResolvedCount(resolvedCountProp);
      return;
    }
    const onResize = () =>
      setResolvedCount(
        window.innerWidth < 768
          ? PARTICLE_CONFIG.particleCountMobile
          : PARTICLE_CONFIG.particleCountDesktop
      );
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resolvedCountProp]);

  // Attach pointer events to the PARENT of the wrapper div (the hero section),
  // not to the pointer-events-none canvas overlay.
  useEffect(() => {
    const parent = wrapRef.current?.parentElement;
    if (!parent) return;

    const onEnter = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      hoverRef.current.active = true;
      hoverRef.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      hoverRef.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      hoverRef.current.active = true;
      hoverRef.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      hoverRef.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onLeave = () => {
      hoverRef.current.active = false;
    };

    parent.addEventListener("pointerenter", onEnter);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      parent.removeEventListener("pointerenter", onEnter);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <ParticlesScene
          hoverRef={hoverRef}
          text={text}
          count={resolvedCount}
          colorMode={resolvedMode}
          singleColor={resolvedSingle}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          gradientAngle={gradientAngle}
          gradientSpread={gradientSpread}
          dotGradientStrength={dotGradientStrength}
          font={font}
          scale={scale}
          size={resolvedSize}
          yOffset={yOffset}
        />
      </Canvas>
    </div>
  );
}
