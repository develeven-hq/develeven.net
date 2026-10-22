import React from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-dv-light-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="text-dv-light-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Selected projects and build concepts
        </h2>

      {/* Projects Row */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        {/* Project 1 — Orbit Platform */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden bg-white rounded-2xl drop-shadow-xs">
          <div className="w-full h-96 relative bg-dv-bg flex flex-col items-start overflow-hidden">
            <img
              src="/images/operations-dashboard.png"
              alt="Orbit operations platform"
              className="w-full flex-1 object-cover object-top"
            />
            <div className="w-full h-full left-0 top-20 absolute bg-linear-to-b from-dv-bg/0 via-transparent to-dv-bg/90 pointer-events-none" />
            <span className="left-6 top-6 absolute text-dv-text text-base sm:text-lg font-medium font-sans">
              Orbit
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-dv-lime rounded-full" />
              <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
                Operations platform
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full overflow-hidden group cursor-pointer px-6 py-2">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-dv-light-lead text-xs sm:text-sm font-medium font-sans tracking-wide">
                Custom software / Operations
              </span>
              <h3 className="text-dv-light-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                Complex workflows. One clear view.
              </h3>  
            </div>
            <p className="w-full text-dv-light-body text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal my-4">
              A connected operations platform with real-time reporting, role-based
              access, and fewer manual handoffs.
            </p>  
          </div>
        </div>

        {/* Project 2 — Afterlight Game */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden bg-white rounded-2xl drop-shadow-xs">
          <div className="w-full h-96 relative bg-dv-bg rounded-lg flex flex-col items-start overflow-hidden">
            <img
              src="/images/exploration-game.png"
              alt="Afterlight game"
              className="w-full flex-1 object-cover"
            />
            <div className="w-full h-full left-0 top-20 absolute bg-linear-to-b from-dv-bg/0 via-transparent to-dv-bg/90 pointer-events-none" />
            <span className="left-6 top-6 absolute text-dv-text text-base sm:text-lg font-medium font-sans">
              Afterlight
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-dv-lime rounded-full" />
              <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
                World exploration
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full overflow-hidden group cursor-pointer px-6 py-2">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-dv-light-lead text-xs sm:text-sm font-medium font-sans tracking-wide">
                Game development / Interactive
              </span>
              <h3 className="text-dv-light-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                A world worth getting lost in.
              </h3>
            </div>
            <p className="w-full text-dv-light-body text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal my-4">
              An atmospheric exploration experience combining immersive
              environments, responsive gameplay, and scalable systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
