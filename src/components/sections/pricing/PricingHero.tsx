import React from "react";

export default function PricingHero() {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center text-center gap-3 sm:gap-4">
          <span className="text-dv-lime text-xs sm:text-sm font-semibold font-sans tracking-wide">
            DevEleven / Pricing & engagements
          </span>
          <h1 className="w-full text-dv-text text-4xl sm:text-5xl lg:text-6xl font-medium font-sans tracking-tight leading-[1.08]">
            Choose the plan that fits your needs.
          </h1>
        </div>
      </div>
    </section>
  );
}
