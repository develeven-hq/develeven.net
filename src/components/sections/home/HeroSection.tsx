"use client";

import React from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/Icons";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative w-full bg-dv-bg overflow-hidden min-h-[80vh] flex items-center justify-center">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-28 sm:py-32 lg:py-36 flex flex-col items-center justify-center text-center gap-10 lg:gap-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 sm:gap-3.5">
          <BrandLogo size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="text-dv-text text-xl sm:text-2xl font-medium font-sans tracking-tight">
            DevEleven
          </span>
        </div>

        <h1 className="text-center text-6xl lg:text-7xl font-medium font-sans leading-[1.02] tracking-tight text-dv-text max-w-5xl">
          Ambitious ideas
          <br />
          Precisely engineered
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button href="/#contact" variant="primary">
            Start a project
          </Button>
          <Button href="/#services" variant="secondary">
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
