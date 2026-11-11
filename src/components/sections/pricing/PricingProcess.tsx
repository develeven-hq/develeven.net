import React from "react";
import {
  InspectIcon,
  FoundationIcon,
  PartnershipIcon,
} from "@/components/ui/Icons";

const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Your goals, audience, must-haves, budget and target date. An early idea is enough to begin.",
    deliverable: "Your project context",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Define the scope",
    description:
      "We map the requirements, risks and dependencies, then separate essentials from later phases.",
    deliverable: "A bounded delivery plan",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Agree the proposal",
    description:
      "Review the price, deliverables, milestones and commercial terms before any build starts.",
    deliverable: "Your actual project quote",
    icon: <PartnershipIcon size={20} />,
  },
];

interface StepCardProps {
  step: (typeof steps)[0];
}

function StepCard({ step }: StepCardProps) {
  return (
    <div className="w-full h-full p-6 sm:p-8 lg:p-10 bg-dv-surface rounded-lg flex flex-col justify-between gap-6 hover:bg-dv-surface/90 transition-colors duration-200">
      <div className="flex flex-col gap-5">
        {/* Header Row */}
        <div className="w-full flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-dv-border flex items-center justify-center text-dv-lime shrink-0">
            {step.icon}
          </div>
          <span className="text-dv-lime text-base sm:text-lg font-bold font-sans">
            {step.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-tight">
          {step.title}
        </h3>

        {/* Narrative Description */}
        <p className="text-dv-lead text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
          {step.description}
        </p>
      </div>

      {/* Deliverable */}
      <span className="w-full text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-normal leading-relaxed">
        {step.deliverable}
      </span>
    </div>
  );
}

export default function PricingProcess() {
  return (
    <section id="process" className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          How we scope, estimate, and price your project
        </h2>

        {/* 3 Cards with SVG Timeline Connectors */}
        <div className="w-full flex flex-col items-center">
          {/* Desktop Row: Cards 01, 02 & 03 */}
          <div className="w-full hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 relative items-stretch">
            {/* Card 01 */}
            <StepCard step={steps[0]} />

            {/* Horizontal Timeline Connector: 01 -> 02 */}
            <div className="absolute left-[calc(33.333%-0.5rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 lg:w-12 flex items-center justify-center z-20 pointer-events-none">
              <svg viewBox="0 0 48 20" className="w-full overflow-visible text-dv-lime" fill="none">
                <circle cx="2" cy="10" r="3" fill="currentColor" />
                <line
                  x1="2"
                  y1="10"
                  x2="38"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="36,6 46,10 36,14" fill="currentColor" />
              </svg>
            </div>

            {/* Card 02 */}
            <StepCard step={steps[1]} />

            {/* Horizontal Timeline Connector: 02 -> 03 */}
            <div className="absolute left-[calc(66.667%+0.5rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 lg:w-12 flex items-center justify-center z-20 pointer-events-none">
              <svg viewBox="0 0 48 20" className="w-full overflow-visible text-dv-lime" fill="none">
                <circle cx="2" cy="10" r="3" fill="currentColor" />
                <line
                  x1="2"
                  y1="10"
                  x2="38"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="36,6 46,10 36,14" fill="currentColor" />
              </svg>
            </div>

            {/* Card 03 */}
            <StepCard step={steps[2]} />
          </div>

          {/* Mobile Stack (< lg): 1 Column with Vertical Downward Connectors */}
          <div className="w-full flex lg:hidden flex-col items-center">
            <StepCard step={steps[0]} />

            {/* Mobile Connector: 01 -> 02 */}
            <div className="w-full flex justify-center items-center py-2 pointer-events-none">
              <svg viewBox="0 0 20 40" className="w-5 h-8 overflow-visible text-dv-lime" fill="none">
                <circle cx="10" cy="2" r="3" fill="currentColor" />
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="5,28 10,38 15,28" fill="currentColor" />
              </svg>
            </div>

            <StepCard step={steps[1]} />

            {/* Mobile Connector: 02 -> 03 */}
            <div className="w-full flex justify-center items-center py-2 pointer-events-none">
              <svg viewBox="0 0 20 40" className="w-5 h-8 overflow-visible text-dv-lime" fill="none">
                <circle cx="10" cy="2" r="3" fill="currentColor" />
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="5,28 10,38 15,28" fill="currentColor" />
              </svg>
            </div>

            <StepCard step={steps[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
