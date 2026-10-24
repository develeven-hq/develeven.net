import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function PartnershipBanner() {
  return (
    <section className="w-full bg-dv-card border-b border-dv-border">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-14 lg:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
        <div className="max-w-3xl flex flex-col items-start gap-3">
          <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
            Partnership & capacity
          </span>
          <h3 className="text-dv-text text-2xl sm:text-3xl font-medium font-sans tracking-normal leading-snug">
            Need engineering capacity, not a standalone project?
          </h3>
          {/* <p className="w-full text-dv-lead text-base sm:text-lg font-normal font-sans leading-relaxed">
            A dedicated partnership can flex around your roadmap. Team size,
            allocation, and monthly budget are agreed after discovery.
          </p> */}
        </div>

        <Link
          href="/#contact"
          className="h-14 px-7 rounded-lg bg-dv-lime text-dv-dark hover:bg-dv-lime-hover flex items-center justify-between gap-4 transition-colors group cursor-pointer shrink-0"
        >
          <span className="text-sm sm:text-base font-medium font-sans">
            Discuss a partnership
          </span>
          <ArrowIcon color="dark" size="md" />
        </Link>
      </div>
    </section>
  );
}
