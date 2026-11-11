import type { Metadata } from "next";
import React from "react";
import PricingHero from "@/components/sections/pricing/PricingHero";
import WebsitePricing from "@/components/sections/pricing/WebsitePricing";
// import PricingProcess from "@/components/sections/pricing/PricingProcess";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear scope. Considered investment. Compare ways to work with DevEleven - from a focused website to a complex product.",
};

export default function PricingPage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <PricingHero />
      <WebsitePricing />
      {/* <PricingProcess /> */}
      <PricingFAQ />
      <CTABanner
        headline={
          <>
            Big ambition?
            <br />
            Let’s define the build.
          </>
        }
        buttonText="Let’s talk"
      />
    </div>
  );
}
