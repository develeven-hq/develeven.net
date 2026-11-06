"use client";

import React from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <ParticleBackground />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Ambitious ideas. Precisely engineered
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
          Websites, software, and games built to work beautifully.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/#contact" variant="primary">
            Discuss your project
          </Button>
          <Button href="/#services" variant="secondary">
            Explore our services
          </Button>
        </div>
      </div>
    </section>
  );
}
