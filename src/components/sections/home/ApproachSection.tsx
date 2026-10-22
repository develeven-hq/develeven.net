import React from "react";
import TechPill from "@/components/ui/TechPill";
import { InspectIcon, ResilienceIcon, FoundationIcon } from "@/components/ui/Icons";

const principles = [
  {
    title: "Quality you can inspect",
    description:
      "Readable code, meaningful tests, and thoughtful reviews. No black boxes. No shortcuts you inherit later.",
    icon: <InspectIcon size={24} />,
  },
  {
    title: "Resilience by design",
    description:
      "Security, accessibility, and performance considered from day one — not added at the finish line.",
    icon: <ResilienceIcon size={24} />,
  },
  {
    title: "Built for the next chapter",
    description:
      "Practical architecture, clear documentation, and a codebase your team can confidently take forward.",
    icon: <FoundationIcon size={24} />,
  },
];

const techStack = ["React", "Node.js", "Python", "Unity", "AWS"];

export default function ApproachSection() {
  return (
    <section id="approach" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          The standards we follow to build reliable software
        </h2>

        {/* 3 Principles Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="w-full p-6 sm:p-8 bg-dv-card rounded-lg flex flex-col gap-4 overflow-hidden"
            >
              <div className="w-8 h-8 flex items-center justify-center text-dv-lime">
                {p.icon}
              </div>
              <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                {p.title}
              </h3>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Tech Stack & Quality Gate */}
        <div className="w-full p-5 sm:p-6 bg-dv-card rounded-lg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 overflow-hidden">
          <div className="flex flex-wrap items-center gap-2.5 overflow-hidden">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans mr-1">
              Core technologies:
            </span>
            {techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-hidden shrink-0">
            <div className="w-1.5 h-1.5 bg-dv-lime rounded-full" />
            <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
              Quality gate built into every release
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
