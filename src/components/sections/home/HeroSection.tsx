import React from "react";
import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";

export default function HeroSection() {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-7">
          <span className="text-dv-lime text-xs sm:text-sm font-semibold font-sans tracking-wide">
            Independent engineering studio / DevEleven
          </span>

          <h1 className="w-full text-dv-text text-5xl sm:text-7xl lg:text-8xl font-bold font-sans leading-[1.02] tracking-tight pb-2">
            Ambitious ideas.
            <br />
            Precisely
            <br />
            engineered.
          </h1>

          <div className="w-full max-w-xl flex flex-col items-start">
            <p className="w-full text-dv-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Websites, software, and games built to work beautifully. We turn complex
              challenges into reliable digital products — from first sketch to the next
              release.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <Button href="/#contact" variant="primary">
              Discuss your project
            </Button>
            <Button href="/#services" variant="secondary">
              Explore our services
            </Button>
          </div>
        </div>

        {/* Right Column (Fig. 11 Card) */}
        <div className="w-full lg:w-120 xl:w-135 h-120 lg:h-137 relative bg-dv-card rounded-lg outline outline-1 outline-dv-border -outline-offset-1 flex flex-col items-start overflow-hidden shrink-0">
          <img
            src="/images/eleven-sculpture.png"
            alt="Built with intent"
            className="w-full flex-1 object-cover"
          />

          {/* Top Overlay */}
          <div className="left-5 right-5 top-5 absolute flex justify-between items-start overflow-hidden">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Fig. 11 — Built with intent
            </span>
            <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-normal">
              [ X / Y / Z ]
            </span>
          </div>

          {/* Bottom Overlay */}
          <div className="left-5 bottom-5 absolute flex items-center gap-2.5 overflow-hidden">
            <div className="w-5 h-0.5 bg-dv-lime" />
            <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
              Precision is a mindset, not a feature.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
