import React from "react";
import Link from "next/link";
import { ArrowUpRight, ProjectIcon, PartnershipIcon, MaintenanceIcon } from "@/components/ui/Icons";

const engagements = [
  {
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    icon: <ProjectIcon size={24} />,
  },
  {
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    icon: <PartnershipIcon size={24} />,
  },
  {
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    icon: <MaintenanceIcon size={24} />,
  },
];

export default function EngagementSection() {
  return (
    <section id="engagement" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          Flexible ways to work together
        </h2>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          {engagements.map((eng) => (
            <Link
              key={eng.title}
              href="/#contact"
              className="group w-full min-h-64 sm:min-h-72 p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex items-start justify-between">
                <div className="size-10 flex items-center justify-center text-dv-text bg-dv-surface rounded-lg shrink-0">
                  {eng.icon}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-dv-muted transition-all duration-200 group-hover:text-dv-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-2.5">
                <h3 className="text-dv-muted text-base font-normal font-sans tracking-normal">
                  {eng.title}
                </h3>
                <p className="text-dv-text text-base sm:text-lg font-normal font-sans leading-snug tracking-normal">
                  {eng.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
