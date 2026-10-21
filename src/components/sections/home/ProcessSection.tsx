import React from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We ask better questions. Together, we define the problem, the users, and what success actually looks like.",
    deliverable: "Project brief + roadmap",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We shape the experience and the system behind it. Prototypes and technical decisions make the plan tangible.",
    deliverable: "Prototype + technical plan",
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We work in focused iterations. You see progress, test real functionality, and help steer every release.",
    deliverable: "Working software + tests",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy with care, hand over with clarity, and keep improving what matters as your product grows.",
    deliverable: "Release + ongoing support",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Our development process from idea to launch
        </h2>

        {/* Steps Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-6 overflow-hidden"
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
              <span className="w-full text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
