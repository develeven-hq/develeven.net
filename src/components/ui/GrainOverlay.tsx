import React from "react";

interface GrainOverlayProps {
  className?: string;
}

/**
 * Procedural grain used on imagery so photos and illustrations share one texture.
 * Purely decorative, so it is hidden from assistive technology.
 */
export default function GrainOverlay({ className = "" }: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 mix-blend-overlay ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
