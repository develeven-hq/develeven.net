import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";

const engagements = [
  {
    type: "01 / Project",
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    bestFor: "New websites, MVPs, custom platforms",
  },
  {
    type: "02 / Partnership",
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    bestFor: "Growing products, ongoing roadmaps",
  },
  {
    type: "03 / Ongoing maintenance",
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    bestFor: "Live websites, established software",
  },
];

export default function EngagementSection() {
  return (
    <section id="engagement" className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex-1 max-w-2xl flex flex-col items-start gap-6">
            <SectionLabel>06 / A partnership that fits</SectionLabel>
            <h2 className="w-full text-dv-text text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              Your ambition.
              <br />
              Our way in.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-dv-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Three flexible ways to work together. Choose the model that fits
              your team, timeline, and goals.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {engagements.map((eng) => (
            <div
              key={eng.type}
              className="p-7 bg-dv-bg rounded-lg flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex flex-col items-start gap-5">
                <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
                  {eng.type}
                </span>
                <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                  {eng.title}
                </h3>
                <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                  {eng.description}
                </p>
              </div>

              <div className="w-full flex flex-col items-start gap-6">
                {/* Best For Box */}
                <div className="w-full pt-5 border-t border-dv-border flex flex-col items-start gap-2 overflow-hidden">
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
