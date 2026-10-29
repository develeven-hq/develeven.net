import React from "react";
import PricingCard, { PricingCardProps } from "@/components/sections/pricing/PricingCard";
import {
  WebDevIcon,
  LayersIcon,
  CommerceIcon,
  BracesIcon,
  GameDevIcon,
  EngineeringIcon,
} from "@/components/ui/Icons";

const websiteTiers: PricingCardProps[] = [
  {
    name: "Launch",
    icon: <WebDevIcon size={24} />,
    price: "$200",
    features: [
      "Up to 5 custom pages",
      "Mobile & tablet responsive",
      "Contact form with email alerts",
      "Basic SEO & fast page speed",
      "30 days of post-launch support",
    ],
    buttonText: "Get started",
  },
  {
    name: "Growth",
    badge: "Most popular",
    featured: true,
    icon: <LayersIcon size={24} />,
    price: "$400",
    features: [
      "Up to 12 custom pages",
      "Easy CMS to edit text & images",
      "Blog or case study section",
      "Custom components & UI polish",
      "3 months of post-launch support",
    ],
    buttonText: "Get started",
  },
  {
    name: "Commerce",
    icon: <CommerceIcon size={24} />,
    price: "$1000",
    features: [
      "Storefront for up to 50 products",
      "Cart, checkout & payment setup",
      "Order & inventory management",
      "Product search & category filters",
      "6 months of store support",
    ],
    buttonText: "Get started",
  },
];

const softwareTiers: PricingCardProps[] = [
  {
    name: "Custom software",
    icon: <BracesIcon size={24} />,
    price: "$1500",
    features: [
      "Custom web app or dashboard",
      "User accounts & role permissions",
      "Database & third-party APIs",
      "Production deployment & setup",
      "Full source code ownership",
    ],
    buttonText: "Get started",
  },
  {
    name: "Game development",
    icon: <GameDevIcon size={24} />,
    price: "$800",
    features: [
      "Playable game demo or prototype",
      "Core mechanics & player controls",
      "Custom UI, sound & visual effects",
      "Web, PC, or mobile export",
      "Full source code & project files",
    ],
    buttonText: "Get started",
  },
  {
    name: "Engineering services",
    icon: <EngineeringIcon size={24} />,
    price: "$300",
    features: [
      "Codebase audit & speed fixes",
      "API & third-party integrations",
      "Database & cloud infrastructure",
      "Bug fixes & refactoring",
      "Direct engineer communication",
    ],
    buttonText: "Get started",
  },
];

export default function WebsitePricing() {
  return (
    <section id="websites" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-8 pb-20 lg:pt-10 lg:pb-24 flex flex-col items-start gap-20 lg:gap-24">
        {/* Websites & maintenance */}
        <div className="w-full flex flex-col items-center gap-12 lg:gap-16">
          <div className="w-full flex flex-col items-center text-center gap-3">
            <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight">
              Website development pricing
            </h2>
            <span className="text-dv-lead text-sm font-medium font-sans tracking-wide">
              Price ranges · Post-launch maintenance included
            </span>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>

        {/* Custom software & engineering */}
        <div id="software" className="w-full flex flex-col items-center gap-12 lg:gap-16 scroll-mt-24">
          <div className="w-full flex justify-center text-center">
            <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight">
              Custom software, games, and others
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTiers.map((svc) => (
              <PricingCard key={svc.name} {...svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
