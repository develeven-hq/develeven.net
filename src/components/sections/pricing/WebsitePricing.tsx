import React from "react";
import PricingCard, { PricingCardProps } from "@/components/sections/pricing/PricingCard";
import PartnershipBanner from "@/components/sections/pricing/PartnershipBanner";
import {
  WebDevIcon,
  LayersIcon,
  CommerceIcon,
  BracesIcon,
} from "@/components/ui/Icons";

const pricingTiers: PricingCardProps[] = [
  {
    name: "Starter",
    icon: <WebDevIcon size={24} />,
    price: "$99",
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
    name: "Business",
    badge: "Most popular",
    featured: true,
    icon: <LayersIcon size={24} />,
    price: "$249",
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
    name: "Store",
    icon: <CommerceIcon size={24} />,
    price: "$789",
    features: [
      "Storefront for up to 50 products",
      "Cart, checkout & payment setup",
      "Order & inventory management",
      "Product search & category filters",
      "6 months of store support",
    ],
    buttonText: "Get started",
  },
  {
    name: "Custom",
    icon: <BracesIcon size={24} />,
    price: "$1,249",
    features: [
      "Custom web apps & SaaS platforms",
      "Game development & prototypes",
      "API & third-party integrations",
      "Cloud infrastructure & database",
      "Codebase audits & speed fixes",
    ],
    buttonText: "Get started",
  },
];

export default function WebsitePricing() {
  return (
    <section id="websites" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
          <PartnershipBanner />
        </div>
      </div>
    </section>
  );
}
