import React from "react";
import {
  InspectIcon,
  FoundationIcon,
  CustomSoftwareIcon,
  ResilienceIcon,
} from "@/components/ui/Icons";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We ask better questions. Together, we define the problem, the users, and what success actually looks like.",
    deliverable: "Project brief + roadmap",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We shape the experience and the system behind it. Prototypes and technical decisions make the plan tangible.",
    deliverable: "Prototype + technical plan",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We work in focused iterations. You see progress, test real functionality, and help steer every release.",
    deliverable: "Working software + tests",
    icon: <CustomSoftwareIcon size={20} />,
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy with care, hand over with clarity, and keep improving what matters as your product grows.",
    deliverable: "Release + ongoing support",
    icon: <ResilienceIcon size={20} />,
  },
];

interface StepCardProps {
  step: (typeof steps)[0];
}

function StepCard({ step }: StepCardProps) {
  return (
    <div className="w-full h-full p-6 sm:p-8 lg:p-10 bg-dv-surface/80 rounded-lg flex flex-col justify-between gap-6 hover:bg-dv-surface transition-colors duration-200">
      <div className="flex flex-col gap-5">
        {/* Top Header Row */}
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-zinc-700/60 flex items-center justify-center text-dv-lime shrink-0">
              {step.icon}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-dv-lime text-base sm:text-lg font-bold font-sans">
                {step.number}
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-md bg-zinc-700/60 text-zinc-200 text-xs sm:text-sm font-medium font-sans tracking-normal">
            {step.deliverable}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-dv-text text-2xl sm:text-3xl font-medium font-sans leading-snug tracking-tight">
          {step.title}
        </h3>

        {/* Narrative Description */}
        <p className="text-zinc-300 text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
          {step.description}
        </p>
      </div>

      {/* Bottom Timeline Milestone Indicator */}
      <div className="w-full pt-4 border-t border-zinc-700/50 flex items-center justify-between">
        <span className="text-dv-muted text-xs font-medium font-sans tracking-wide">
          Phase {step.number} Milestone
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-dv-lime" />
          <span className="text-dv-lime text-xs font-medium font-sans">
            Ready for next stage
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Our development process from idea to launch
        </h2>

        {/* 4 Cards in 2 Columns with SVG Timeline Connectors */}
        <div className="w-full flex flex-col items-center">
          {/* Desktop Row 1: Cards 01 & 02 */}
          <div className="w-full hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">
            {/* Card 01 */}
            <StepCard step={steps[0]} />

            {/* Horizontal Timeline Connector: 01 -> 02 */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 lg:w-12 flex items-center justify-center z-20 pointer-events-none">
              <svg viewBox="0 0 48 20" className="w-full overflow-visible" fill="none">
                <circle cx="2" cy="10" r="3" fill="#CEFF69" />
                <line
                  x1="2"
                  y1="10"
                  x2="38"
                  y2="10"
                  stroke="#CEFF69"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="36,6 46,10 36,14" fill="#CEFF69" />
              </svg>
            </div>

            {/* Card 02 */}
            <StepCard step={steps[1]} />
          </div>

          {/* Desktop Connector: 02 -> 03 (S-Curve across row gap) */}
          <div className="w-full hidden md:flex justify-center items-center py-3 relative z-20 pointer-events-none">
            <svg
              viewBox="0 0 1000 64"
              className="w-full max-w-5xl h-12 lg:h-14 overflow-visible"
              fill="none"
            >
              <defs>
                <linearGradient id="proc-curve-grad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#CEFF69" />
                  <stop offset="50%" stopColor="#CEFF69" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#CEFF69" />
                </linearGradient>
              </defs>
              <circle cx="750" cy="2" r="3" fill="#CEFF69" />
              <path
                d="M 750 2 C 750 32, 700 32, 650 32 L 350 32 C 300 32, 250 32, 250 62"
                stroke="url(#proc-curve-grad)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <polygon points="244,52 250,64 256,52" fill="#CEFF69" />
            </svg>
          </div>

          {/* Desktop Row 2: Cards 03 & 04 */}
          <div className="w-full hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">
            {/* Card 03 */}
            <StepCard step={steps[2]} />

            {/* Horizontal Timeline Connector: 03 -> 04 */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 lg:w-12 flex items-center justify-center z-20 pointer-events-none">
              <svg viewBox="0 0 48 20" className="w-full overflow-visible" fill="none">
                <circle cx="2" cy="10" r="3" fill="#CEFF69" />
                <line
                  x1="2"
                  y1="10"
                  x2="38"
                  y2="10"
                  stroke="#CEFF69"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="36,6 46,10 36,14" fill="#CEFF69" />
              </svg>
            </div>

            {/* Card 04 */}
            <StepCard step={steps[3]} />
          </div>

          {/* Mobile Stack (< md): 1 Column with Vertical Downward Connectors */}
          <div className="w-full flex md:hidden flex-col items-center">
            <StepCard step={steps[0]} />

            {/* Mobile Connector: 01 -> 02 */}
            <div className="w-full flex justify-center items-center py-2 pointer-events-none">
              <svg viewBox="0 0 20 40" className="w-5 h-8 overflow-visible" fill="none">
                <circle cx="10" cy="2" r="3" fill="#CEFF69" />
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="30"
                  stroke="#CEFF69"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="5,28 10,38 15,28" fill="#CEFF69" />
              </svg>
            </div>

            <StepCard step={steps[1]} />

            {/* Mobile Connector: 02 -> 03 */}
            <div className="w-full flex justify-center items-center py-2 pointer-events-none">
              <svg viewBox="0 0 20 40" className="w-5 h-8 overflow-visible" fill="none">
                <circle cx="10" cy="2" r="3" fill="#CEFF69" />
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="30"
                  stroke="#CEFF69"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="5,28 10,38 15,28" fill="#CEFF69" />
              </svg>
            </div>

            <StepCard step={steps[2]} />

            {/* Mobile Connector: 03 -> 04 */}
            <div className="w-full flex justify-center items-center py-2 pointer-events-none">
              <svg viewBox="0 0 20 40" className="w-5 h-8 overflow-visible" fill="none">
                <circle cx="10" cy="2" r="3" fill="#CEFF69" />
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="30"
                  stroke="#CEFF69"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="5,28 10,38 15,28" fill="#CEFF69" />
              </svg>
            </div>

            <StepCard step={steps[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

