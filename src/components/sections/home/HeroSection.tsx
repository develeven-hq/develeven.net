import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";

export default function HeroSection() {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-7">
          <span className="text-dv-lime text-xs sm:text-sm font-semibold font-sans tracking-wide">
            Booking projects for early 2027
          </span>

          <h1 className="w-full text-dv-text text-7xl font-medium font-sans leading-[1.02] tracking-tight pb-2">
            Ambitious ideas.
            <br />
            Precisely
            <br />
            engineered.
          </h1>

          <div className="w-full max-w-xl flex flex-col items-start">
            <p className="w-full text-dv-lead text-base font-medium font-sans leading-relaxed">
              DevEleven is a software team. We build websites, applications, and games, and we stay on each project after the first release to keep it working.
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
        <div className="w-full lg:w-120 xl:w-135 relative rounded-lg flex flex-col items-start overflow-hidden shrink-0">
          <Image
            src="/images/eleven-sculpture.png"
            alt="Built with intent"
            width={540}
            height={540}
            priority
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 480px, 540px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
