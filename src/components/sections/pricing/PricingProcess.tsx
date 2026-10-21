import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

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
    <section id="process" className="w-full bg-dv-light-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-3xl flex flex-col items-start gap-5">
            <SectionLabel theme="light">03 / From example to estimate</SectionLabel>
            <h2 className="w-full text-dv-light-text text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              The price follows the plan.
              <br />
              Not the other way around.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-dv-light-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Complexity, integrations, and delivery constraints shape your
              investment. We make those trade-offs visible.
            </p>
          </div>
        </div>

        {/* Steps Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-5 overflow-hidden"
            >
              <div className="w-full flex items-center gap-4 overflow-hidden">
                <span className="text-dv-light-label text-base sm:text-lg font-medium font-sans tracking-wide">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-dv-light-border/60" />
              </div>
              <h3 className="w-full text-dv-light-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                {step.title}
              </h3>
              <p className="w-full text-dv-light-lead text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                {step.description}
              </p>
              <span className="text-dv-light-text text-xs sm:text-sm font-medium font-sans tracking-wide">
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
