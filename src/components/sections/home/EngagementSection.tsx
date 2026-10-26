import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { ProjectIcon, PartnershipIcon, MaintenanceIcon } from "@/components/ui/Icons";

const engagements = [
  {
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    bestFor: "New websites, MVPs, custom platforms",
    icon: <ProjectIcon size={24} />,
  },
  {
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    bestFor: "Growing products, ongoing roadmaps",
    icon: <PartnershipIcon size={24} />,
  },
  {
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    bestFor: "Live websites, established software",
    icon: <MaintenanceIcon size={24} />,
  },
];

export default function EngagementSection() {
  return (
    <section id="engagement" className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Flexible ways to work together
        </h2>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {engagements.map((eng) => (
            <div
              key={eng.title}
              className="p-7 bg-dv-surface/80 rounded-lg flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex flex-col items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-dv-lime">
                  {eng.icon}
                </div>
                <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                  {eng.title}
                </h3>
                <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                  {eng.description}
                </p>
              </div>

              <div className="w-full flex flex-col items-start gap-6">
                {/* Best For Box */}
                <div className="w-full pt-5 border-t border-dv-surface-border flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
                    Best for
                  </span>
                  <p className="w-full text-dv-text text-sm sm:text-base font-medium font-sans">
                    {eng.bestFor}
                  </p>
                </div>

                {/* CTA Link */}
                <Link
                  href="/#contact"
                  className="w-full flex justify-between items-center overflow-hidden group pt-1"
                >
                  <span className="text-dv-lime text-sm sm:text-base font-medium font-sans tracking-normal group-hover:underline">
                    Let’s talk about it
                  </span>
                  <ArrowIcon color="lime" size="md" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
