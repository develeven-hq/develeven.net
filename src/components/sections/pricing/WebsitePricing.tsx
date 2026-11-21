"use client";

import React, { useState } from "react";
import PricingCard from "@/components/sections/pricing/PricingCard";
import PartnerCallout from "@/components/sections/pricing/PartnerCallout";
import {
  DollarIcon,
  TakaIcon,
  WebDevIcon,
  LayersIcon,
  CommerceIcon,
  BracesIcon,
} from "@/components/ui/Icons";

const currencies = [
  { id: "usd", label: "USD", icon: DollarIcon },
  { id: "bdt", label: "BDT", icon: TakaIcon },
] as const;

type CurrencyId = (typeof currencies)[number]["id"];

interface PricingTierItem {
  name: string;
  icon: React.ReactNode;
  priceUsd: string;
  priceBdt: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  buttonText?: string;
}

const pricingTiers: PricingTierItem[] = [
  {
    name: "Starter",
    icon: <WebDevIcon size={24} />,
    priceUsd: "$99",
    priceBdt: "৳12,000",
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
    badge: "Recommended",
    featured: true,
    icon: <LayersIcon size={24} />,
    priceUsd: "$249",
    priceBdt: "৳29,000",
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
    priceUsd: "$789",
    priceBdt: "৳95,000",
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
    priceUsd: "$1,249",
    priceBdt: "৳149,000",
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
  const [currency, setCurrency] = useState<CurrencyId>("usd");

  return (
    <section id="websites" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-2 pb-16 sm:pt-4 sm:pb-20 lg:pt-4 lg:pb-24">
        {/* Currency Switcher matching Work section category switcher */}
        <div className="w-full flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center rounded-md bg-dv-bg outline outline-dv-border max-w-full overflow-x-auto">
            {currencies.map((curr) => {
              const isActive = currency === curr.id;
              const Icon = curr.icon;
              return (
                <button
                  key={curr.id}
                  type="button"
                  onClick={() => setCurrency(curr.id)}
                  className={`group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-2 sm:py-2 text-xs sm:text-sm font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-dv-control hover:bg-dv-control-hover text-dv-text"
                      : "text-dv-lead hover:text-dv-accent"
                  }`}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-dv-text" : "text-dv-muted group-hover:text-dv-text"
                    }`}
                  />
                  <span>{curr.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.name}
                {...tier}
                price={currency === "bdt" ? tier.priceBdt : tier.priceUsd}
                currency={currency.toUpperCase()}
              />
            ))}
          </div>
          <PartnerCallout />
        </div>
      </div>
    </section>
  );
}
