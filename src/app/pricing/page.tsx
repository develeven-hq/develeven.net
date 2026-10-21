import type { Metadata } from "next";
import React from "react";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingNav from "@/components/sections/pricing/PricingNav";
import WebsitePricing from "@/components/sections/pricing/WebsitePricing";
import PartnershipBanner from "@/components/sections/pricing/PartnershipBanner";
import PricingProcess from "@/components/sections/pricing/PricingProcess";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — DevEleven",
  description:
    "Clear scope. Considered investment. Compare ways to work with DevEleven — from a focused website to a complex product.",
};

export default function PricingPage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <PricingHero />
      <PricingNav />
      <WebsitePricing />
      <PartnershipBanner />
      <PricingProcess />
      <PricingFAQ />
      <CTABanner
        sectionTag="05 / Your project, clearly scoped"
        topRightText="Let’s find the right starting point"
        hasDot={true}
        headline={
          <>
            Big ambition?
            <br />
            Let’s define the build.
          </>
        }
        headlineSize="8xl"
        description="Tell us your goals, the service you need, your budget range and your ideal launch date. We’ll work out a practical next step."
        buttonText="Discuss your project"
        note="No sales script. Just a good conversation."
      />
    </div>
  );
}
