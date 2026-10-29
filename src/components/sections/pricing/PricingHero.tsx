import React from "react";

export default function PricingHero() {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-2 pb-4 sm:pt-3 sm:pb-6 lg:pt-16 lg:pb-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center text-center">
          <h1 className="w-full text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight">
            Choose the plan that
            <br />
            fits your needs.
          </h1>
        </div>
      </div>
    </section>
  );
}
