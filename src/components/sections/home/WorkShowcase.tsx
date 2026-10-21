import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-dv-light-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex-1 max-w-2xl flex flex-col items-start gap-6">
            <SectionLabel theme="light">02 / Engineering in practice</SectionLabel>
            <h2 className="w-full text-dv-light-text text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              Different challenges. Same rigor.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-dv-light-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Illustrative build concepts. A look at what we can create.
            </p>
          </div>
        </div>

      {/* Projects Row */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        {/* Project 1 — Orbit Platform */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden">
          <div className="w-full h-96 relative bg-dv-bg rounded-lg flex flex-col items-start overflow-hidden">
            <img
              src="/images/operations-dashboard.png"
              alt="Orbit operations platform"
              className="w-full flex-1 object-cover object-top"
            />
            <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-b from-dv-bg/[0.38] via-transparent to-dv-bg/[0.50] pointer-events-none" />
            <span className="left-6 top-6 absolute text-dv-text text-base sm:text-lg font-medium font-sans">
              Orbit
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-dv-lime rounded-full" />
              <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
                Operations platform / Concept 01
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-dv-light-lead text-xs sm:text-sm font-medium font-sans tracking-wide">
                Custom software / Operations
              </span>
              <h3 className="text-dv-light-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal group-hover:underline">
                Complex workflows. One clear view.
              </h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-full border border-dv-light-text/20 group-hover:border-dv-light-text transition-colors">
              <ArrowUpRight size={14} color="var(--color-dv-light-text)" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="w-full text-dv-light-body text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            A connected operations platform with real-time reporting, role-based
            access, and fewer manual handoffs.
          </p>
        </div>

        {/* Project 2 — Afterlight Game */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden">
          <div className="w-full h-96 relative bg-dv-bg rounded-lg flex flex-col items-start overflow-hidden">
            <img
              src="/images/exploration-game.png"
              alt="Afterlight game"
              className="w-full flex-1 object-cover"
            />
            <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-b from-dv-bg/[0.38] via-transparent to-dv-bg/[0.50] pointer-events-none" />
            <span className="left-6 top-6 absolute text-dv-text text-base sm:text-lg font-medium font-sans">
              Afterlight
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-dv-lime rounded-full" />
              <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
                World exploration / Concept 01
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-dv-light-lead text-xs sm:text-sm font-medium font-sans tracking-wide">
                Game development / Interactive
              </span>
              <h3 className="text-dv-light-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal group-hover:underline">
                A world worth getting lost in.
              </h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-full border border-dv-light-text/20 group-hover:border-dv-light-text transition-colors">
              <ArrowUpRight size={14} color="var(--color-dv-light-text)" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="w-full text-dv-light-body text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            An atmospheric exploration experience combining immersive
            environments, responsive gameplay, and scalable systems.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
