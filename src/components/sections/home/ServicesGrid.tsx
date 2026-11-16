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
import GrainOverlay from "@/components/ui/GrainOverlay";

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
            {/* Card 1: AI-Driven Development */}
            <div className="relative w-full min-h-112 sm:min-h-128 lg:min-h-136 bg-dv-card rounded-2xl overflow-hidden flex flex-col justify-end gap-5 p-4 sm:p-6">
              <Image
                src="/images/abstract-cyan.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Scrim keeps the copy readable over the artwork */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/80 via-45% to-transparent to-80%"
              />

              <GrainOverlay className="opacity-25" />

              {/* Contained product window */}
              <div className="relative z-10 flex w-full flex-col gap-3 rounded-2xl bg-dv-bg p-4 sm:p-5">
                <div className="flex flex-col gap-2">
                  <p className="text-dv-muted text-xs sm:text-sm font-sans leading-relaxed">
                    Thinking process: reviewing pipeline and verification gates
                  </p>
                  <p className="text-dv-text text-sm sm:text-base font-sans leading-snug">
                    I will configure the build pipeline with verified release gates.
                  </p>
                </div>

                {/* Prompt bar */}
                <div className="flex items-center gap-2">
                  <div className="flex min-w-0 flex-1 items-center rounded-lg bg-dv-surface px-3 py-2">
                    <span className="truncate text-dv-text text-xs sm:text-sm font-sans">
                      Automate our release workflow
                    </span>
                  </div>
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-dv-surface text-dv-text">
                    <SpinnerIcon size={16} />
                  </div>
                </div>
              </div>

              {/* Bottom Copy Block */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-dv-inverse-muted text-base font-normal font-sans leading-snug tracking-normal">
                  AI-driven development
                </h3>
                <p className="max-w-xl text-dv-bg text-base font-normal font-sans leading-relaxed tracking-normal">
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
                <div className="size-10 flex items-center justify-center text-dv-text bg-dv-surface rounded-lg">
                  {service.icon}
                </div>

                {/* Bottom: Label & Description */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-dv-muted text-base font-normal font-sans tracking-normal">
                    {service.label}
                  </h3>
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
