import React from "react";
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Services we provide to build and scale your product
        </h2>

        {/* Two Rows Layout */}
        <div className="w-full flex flex-col gap-4">
          {/* Row 1: Two Columns (Cards) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* Card 1: AI-Driven Development with Terminal Mockup */}
            <div className="w-full relative min-h-128 sm:min-h-144 bg-dv-card rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Abstract cyan background image */}
              <Image
                src="/images/abstract-cyan.jpg"
                alt="Abstract background"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Gradient scrim for depth and text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent pointer-events-none" />

              {/* Floating Terminal Window (Simplified, minimal contents) */}
              <div className="relative z-10 -mt-6 sm:-mt-8 ml-5 sm:ml-7 w-[130%] sm:w-[140%] min-w-[500px] rounded-bl-2xl border-l border-b border-zinc-700/60 bg-zinc-950/92 backdrop-blur-md shadow-2xl p-6 sm:p-7 mb-6 sm:mb-8 flex flex-col justify-between gap-6">
                {/* Terminal Chrome Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-300 font-medium font-sans">
                      Google Antigravity
                    </span>
                    <span className="text-zinc-600 font-sans">·</span>
                    <span className="px-2 py-0.5 rounded text-xs font-sans font-medium bg-dv-lime/10 text-dv-lime border border-dv-lime/20">
                      gemini-argon
                    </span>
                  </div>
                </div>

                {/* Clean Terminal Session Body */}
                <div className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-zinc-400">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <span className="text-dv-lime font-medium">$</span>
                    <span className="text-zinc-300">agy --model gemini-argon</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed max-w-md">
                    Workspace connected. Deep-thinking agent active with verified toolchain access.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400/90 text-xs sm:text-sm">
                    <span>✓</span>
                    <span>System ready for instruction</span>
                  </div>
                </div>

                {/* Prompt Input Box (Ready to send, not sent yet) */}
                <div className="max-w-md sm:max-w-lg flex items-center justify-between gap-3 p-3 bg-zinc-900/95 rounded-xl border border-zinc-700/60 shadow-inner">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-dv-lime font-medium text-xs sm:text-sm shrink-0">&gt;</span>
                    <span className="text-zinc-100 text-xs sm:text-sm font-sans truncate">
                      Build autonomous agent workflow for production release
                    </span>
                    <span className="inline-block w-1.5 h-4 bg-dv-lime animate-pulse shrink-0" />
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700/60 text-zinc-300 text-xs font-sans">
                    <span>Send</span>
                    <span className="text-xs">↵</span>
                  </div>
                </div>
              </div>

              {/* Bottom Copy Block */}
              <div className="relative z-10 px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col gap-2">
                <h3 className="text-white text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                  AI-driven development
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal max-w-xl">
                  Ship resilient software faster with autonomous agent pipelines, deep-thinking LLM architectures, and verified production code.
                </p>
              </div>
            </div>

            {/* Card 2: Empty placeholder */}
            <div className="w-full min-h-128 sm:min-h-144 p-6 sm:p-8 bg-dv-card rounded-2xl flex flex-col" />
          </div>

          {/* Row 2: Four Columns (Cards) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full min-h-64 sm:min-h-72 p-6 sm:p-8 bg-dv-card rounded-2xl flex flex-col" />
            <div className="w-full min-h-64 sm:min-h-72 p-6 sm:p-8 bg-dv-card rounded-2xl flex flex-col" />
            <div className="w-full min-h-64 sm:min-h-72 p-6 sm:p-8 bg-dv-card rounded-2xl flex flex-col" />
            <div className="w-full min-h-64 sm:min-h-72 p-6 sm:p-8 bg-dv-card rounded-2xl flex flex-col" />
          </div>
        </div>
      </div>
    </section>
  );
}
