import React from "react";
import Image from "next/image";
import { InspectIcon, ResilienceIcon, FoundationIcon } from "@/components/ui/Icons";

const PRINCIPLES = [
  {
    title: "Quality you can inspect",
    description:
      "Readable code, meaningful tests, and thoughtful reviews. No black boxes. No shortcuts you inherit later.",
    icon: <InspectIcon size={24} />,
  },
  {
    title: "Resilience by design",
    description:
      "Security, accessibility, and performance considered from day one - not added at the finish line.",
    icon: <ResilienceIcon size={24} />,
  },
  {
    title: "Built for the next chapter",
    description:
      "Practical architecture, clear documentation, and a codebase your team can confidently take forward.",
    icon: <FoundationIcon size={24} />,
  },
];

const TECH_STACK = [
  { name: "React", role: "Frontend", iconSrc: "/icons/tech/react.svg" },
  { name: "TypeScript", role: "Type safety", iconSrc: "/icons/tech/typescript.svg" },
  { name: "Node.js", role: "Runtime", iconSrc: "/icons/tech/nodejs.svg" },
  { name: "Python", role: "AI & tooling", iconSrc: "/icons/tech/python.svg" },
  { name: "Unity", role: "Game engine", iconSrc: "/icons/tech/unity.svg" },
  { name: "AWS", role: "Cloud & infra", iconSrc: "/icons/tech/aws.svg" },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          The standards we follow to build reliable software
        </h2>

        {/* Two Rows Layout */}
        <div className="w-full flex flex-col gap-4">
          {/* Row 1: Three Principles Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRINCIPLES.map((p) => (
              <article
                key={p.title}
                className="w-full min-h-64 sm:min-h-72 p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between"
              >
                {/* Top: Icon Box */}
                <div className="size-10 flex items-center justify-center text-dv-text border border-dv-border rounded-lg">
                  {p.icon}
                </div>

                {/* Bottom: Label & Description */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-dv-muted text-base font-normal font-sans tracking-normal">
                    {p.title}
                  </span>
                  <p className="text-dv-text text-base sm:text-lg font-normal sm:font-normal font-sans leading-snug tracking-normal">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: Six Technology Cards in One Responsive Row */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech) => (
              <article
                key={tech.name}
                className="w-full min-h-36 sm:min-h-40 p-5 sm:p-6 bg-dv-card rounded-2xl flex flex-col justify-between group"
              >
                {/* Top: Tech Icon */}
                <div className="flex items-center justify-start">
                  <Image
                    src={tech.iconSrc}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                  />
                </div>

                {/* Bottom: Role & Name */}
                <div className="flex flex-col gap-1">
                  <span className="text-dv-muted text-xs sm:text-sm font-normal font-sans">
                    {tech.role}
                  </span>
                  <span className="text-dv-text text-base font-medium font-sans tracking-normal">
                    {tech.name}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
