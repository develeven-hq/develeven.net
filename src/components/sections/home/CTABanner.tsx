import React from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

interface CTABannerProps {
  headline: React.ReactNode;
  headlineSize?: "8xl" | "7xl" | "88px" | "80px";
  description?: string;
  buttonHeight?: string;
  buttonText?: string;
  note?: string;
  ctaHref?: string;
}

export default function CTABanner({
  headline,
  buttonText = "Let’s talk",
  ctaHref = "/#contact",
}: CTABannerProps) {
  return (
    <section id="contact" className="w-full bg-dv-bg px-1.5 sm:px-2 py-6 sm:py-8 lg:py-10">
      <div className="w-full min-h-128 sm:min-h-144 lg:min-h-160 py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 bg-black text-white rounded-2xl sm:rounded-3xl flex flex-col items-start justify-center text-left gap-8 sm:gap-10">
        <h2 className="max-w-4xl text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal font-sans tracking-tight leading-tight lg:leading-[1.02] text-left">
          {headline}
        </h2>
        <a
          href={ctaHref}
          className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors duration-200 group inline-flex items-center justify-center gap-2.5 font-sans text-sm sm:text-base font-medium cursor-pointer shrink-0"
        >
          <span>{buttonText}</span>
          <ArrowUpRight
            size={18}
            className="text-zinc-950 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
