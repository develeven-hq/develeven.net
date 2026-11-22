import React from "react";
import Button from "@/components/ui/Button";

export interface ServiceHeroProps {
  title: React.ReactNode;
  lead?: string;
  badge?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function ServiceHero({
  title,
  lead,
  badge,
  primaryCtaText = "Start a project",
  primaryCtaHref = "/#contact",
  secondaryCtaText = "View pricing",
  secondaryCtaHref = "/pricing",
}: ServiceHeroProps) {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 pb-14 sm:pt-20 sm:pb-18 lg:pt-28 lg:pb-20 flex flex-col items-center justify-center text-center">
        {badge && (
          <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide mb-4">
            {badge}
          </span>
        )}
        <div className="max-w-4xl flex flex-col items-center text-center gap-6 sm:gap-8">
          <h1 className="w-full text-dv-text text-5xl sm:text-6xl lg:text-7xl font-normal font-sans tracking-tight leading-[1.02]">
            {title}
          </h1>
          {lead && (
            <p className="max-w-xl text-dv-lead text-base sm:text-lg font-normal font-sans leading-relaxed">
              {lead}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button href={primaryCtaHref} variant="primary">
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
