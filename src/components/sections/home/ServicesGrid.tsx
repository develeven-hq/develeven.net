import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  WebDevIcon,
  CustomSoftwareIcon,
  GameDevIcon,
  MaintenanceIcon,
  SpinnerIcon,
} from "@/components/ui/Icons";

const BOTTOM_SERVICES = [
  {
    icon: <WebDevIcon size={24} />,
    label: "Website development",
    description:
      "Fast, accessible websites and web apps built for performance, search, and scale.",
  },
  {
    icon: <CustomSoftwareIcon size={24} />,
    label: "Custom software",
    description:
      "Purpose-built tools, client platforms, and SaaS products tailored to how you operate.",
  },
  {
    icon: <GameDevIcon size={24} />,
    label: "Game development",
    description:
      "Compelling worlds, responsive mechanics, and solid technical foundations from prototype to release.",
  },
  {
    icon: <MaintenanceIcon size={24} />,
    label: "Website maintenance",
    description:
      "Proactive security, uptime monitoring, and continuous updates without the technical overhead.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          Services we provide to build and scale your product
        </h2>

        {/* Two Rows Layout */}
        <div className="w-full flex flex-col gap-4">
          {/* Row 1: Two Columns (Cards) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* Card 1: AI-Driven Development with Antigravity Screenshot */}
            <div className="w-full relative min-h-112 sm:min-h-128 lg:min-h-136 bg-dv-card rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Abstract cyan background image - darkened via image filter, no dark div overlay */}
              <Image
                src="/images/abstract-cyan.jpg"
                alt="Abstract background"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover brightness-50 contrast-125"
              />

              {/* Procedural grain / noise texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Solid floating window container - soft off-white light theme */}
              <div className="relative z-10 -mt-6 sm:-mt-8 ml-5 sm:ml-7 w-[120%] sm:w-[130%] min-h-72 sm:min-h-88 lg:min-h-96 mb-12 sm:mb-16 lg:mb-20 rounded-bl-2xl border-l border-b border-zinc-300/80 bg-zinc-100 shadow-2xl p-5 sm:p-6 pt-9 sm:pt-11 flex flex-col justify-between overflow-hidden text-zinc-950">
                {/* Streaming AI Response */}
                <div className="flex-1 flex flex-col justify-start gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                  {/* Thinking process in text */}
                  <p className="text-zinc-500 text-xs sm:text-sm font-sans leading-relaxed">
                    Thinking Process: Analyzing pipeline architecture and verification gates...
                  </p>

                  {/* Streaming message text */}
                  <div className="space-y-2 text-xs sm:text-sm text-zinc-800 font-sans leading-relaxed">
                    <p className="font-medium text-zinc-950">
                      I will configure the autonomous agent pipeline with verified release workflows:
                    </p>

                    <div className="space-y-1.5 pl-3 border-l-2 border-zinc-300 text-zinc-700">
                      <p>
                        <span className="font-semibold text-zinc-950">1. Workspace Sandboxing:</span> Spin up hermetic branches with strict dependency pinning.
                      </p>
                      <p>
                        <span className="font-semibold text-zinc-950">2. Verification Matrix:</span> Run automated type checks, unit coverage, and regression gates.
                      </p>
                      <p>
                        <span className="font-semibold text-zinc-950">3. Release Workflow:</span> Enforce continuous telemetry and automated rollbac
                        <span className="inline-block w-1.5 h-3.5 ml-1 bg-zinc-900 align-middle animate-pulse" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imitation Prompt Input Bar */}
                <div className="w-full max-w-md sm:max-w-lg flex items-center gap-2">
                  <div className="flex-1 min-w-0 flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-zinc-300">
                    <span className="text-zinc-800 font-sans text-xs sm:text-sm truncate font-normal">
                      Build autonomous agent pipeline with verified release workflows...
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-zinc-300 flex items-center justify-center text-zinc-700 shrink-0 select-none">
                    <SpinnerIcon size={18} />
                  </div>
                </div>
              </div>

              {/* Bottom Copy Block */}
              <div className="relative z-10 px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col gap-2">
                <h3 className="text-zinc-300 text-base font-normal font-sans leading-snug tracking-normal">
                  AI-driven development
                </h3>
                <p className="text-white text-base font-normal font-sans leading-relaxed tracking-normal max-w-xl">
                  Pairing experienced engineers with AI tools to build and ship software in half the time.
                </p>
              </div>
            </div>

            {/* Card 2: Centered Slogan & All Services CTA */}
            <div className="w-full min-h-112 sm:min-h-128 lg:min-h-136 p-8 sm:p-12 lg:p-16 bg-dv-card rounded-2xl flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
              <h3 className="max-w-md text-dv-text text-2xl sm:text-3xl lg:text-4xl font-normal font-sans tracking-tight leading-snug">
                Every development solution in one place
              </h3>
              <Button href="#services" variant="primary">
                All services
              </Button>
            </div>
          </div>

          {/* Row 2: Four Columns (Cards matching reference layout) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOTTOM_SERVICES.map((service) => (
              <div
                key={service.label}
                className="w-full min-h-64 sm:min-h-72 p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between"
              >
                {/* Top: Service Icon */}
                <div className="size-10 flex items-center justify-center text-dv-text border border-dv-border rounded-lg">
                  {service.icon}
                </div>

                {/* Bottom: Label & Description */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-dv-muted text-base font-normal font-sans tracking-normal">
                    {service.label}
                  </span>
                  <p className="text-dv-text text-base sm:text-lg font-normal sm:font-normal font-sans leading-snug tracking-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
