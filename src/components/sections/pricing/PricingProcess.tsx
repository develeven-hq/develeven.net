import React from "react";

const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Your goals, audience, must-haves, budget and target date. An early idea is enough to begin.",
    output: "Input / Your project context",
  },
  {
    number: "02",
    title: "Define the scope",
    description:
      "We map the requirements, risks and dependencies, then separate essentials from later phases.",
    output: "Output / A bounded delivery plan",
  },
  {
    number: "03",
    title: "Agree the proposal",
    description:
      "Review the price, deliverables, milestones and commercial terms before any build starts.",
    output: "Output / Your actual project quote",
  },
];

const proposalItems = [
  "+ Deliverables & exclusions",
  "+ Milestones & payment terms",
  "+ Ownership & support",
];

export default function PricingProcess() {
  return (
    <section id="process" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          How we scope, estimate, and price your project
        </h2>

        {/* Steps Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-5 overflow-hidden"
            >
              <div className="w-full flex items-center gap-4 overflow-hidden">
                <span className="text-dv-lime text-base sm:text-lg font-medium font-sans tracking-wide">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-dv-border" />
              </div>
              <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                {step.title}
              </h3>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                {step.description}
              </p>
              <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
                {step.output}
              </span>
            </div>
          ))}
        </div>

        {/* Checklist Footer */}
        {/* <div className="w-full pt-7 border-t border-dv-light-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 overflow-hidden">
          <span className="text-dv-light-lead text-xs sm:text-sm font-bold font-sans tracking-wider">
            Every proposal should make clear
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 overflow-hidden">
            {proposalItems.map((item) => (
              <span
                key={item}
                className="text-dv-light-text text-sm sm:text-base font-bold font-sans"
              >
                {item}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
