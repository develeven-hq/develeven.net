import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesBar from "@/components/sections/home/ServicesBar";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WorkShowcase from "@/components/sections/home/WorkShowcase";
import ApproachSection from "@/components/sections/home/ApproachSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import StudioSection from "@/components/sections/home/StudioSection";
import EngagementSection from "@/components/sections/home/EngagementSection";
import FAQSection from "@/components/sections/home/FAQSection";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "DevEleven - Independent Engineering Studio",
  description:
    "Websites, software, and games built to work beautifully. We turn complex challenges into reliable digital products - from first sketch to the next release.",
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <HeroSection />
      <ServicesBar />
      <ServicesGrid />
      <WorkShowcase />
      <ApproachSection />
      <ProcessSection />
      <StudioSection />
      <EngagementSection />
      <FAQSection />
      <CTABanner
        headline={
          <>
            Big idea?
            <br />
            Let’s make it real.
          </>
        }
        headlineSize="7xl"
        description="Tell us what you’re thinking. We’ll bring the questions, the expertise, and a clear way forward."
        buttonText="Discuss your project"
        note="No sales script. Just a good conversation."
      />
    </div>
  );
}
