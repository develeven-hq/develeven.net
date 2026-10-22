import React from "react";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface CTABannerProps {
  headline: React.ReactNode;
  headlineSize?: "8xl" | "7xl" | "88px" | "80px";
  description: string;
  buttonHeight?: string;
  buttonText?: string;
  note?: string;
  ctaHref?: string;
}

export default function CTABanner({
  headline,
  headlineSize = "8xl",
  description,
  buttonHeight = "h-14",
  buttonText = "Discuss your project",
  ctaHref = "/#contact",
}: CTABannerProps) {
  const isLarge = headlineSize === "8xl" || headlineSize === "88px";

  return (
    <section id="contact" className="w-full bg-dv-lime">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col items-start gap-12 overflow-hidden">
        {/* Bottom Row */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-end gap-10 lg:gap-14 xl:gap-16">
          <h2
            className={`text-dv-dark font-medium font-sans tracking-tight flex-1 pb-2 ${
              isLarge
                ? "text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[1.02]"
                : "text-4xl sm:text-6xl lg:text-7xl leading-tight lg:leading-[1.05]"
            }`}
          >
            {headline}
          </h2>

          <div className="w-full lg:max-w-sm xl:max-w-md shrink-0 flex flex-col items-start gap-7 pb-2">
            <p className="w-full text-dv-dark text-base font-medium font-sans leading-relaxed">
              {description}
            </p>

            <a
              href={ctaHref}
              className={`w-full ${buttonHeight} px-6 rounded-lg bg-dv-dark flex items-center justify-between overflow-hidden hover:bg-dv-dark-hover transition-colors group cursor-pointer`}
            >
              <span className="text-dv-text text-sm font-semibold font-sans">
                {buttonText}
              </span>
              <ArrowIcon
                color="lime"
                size="md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
