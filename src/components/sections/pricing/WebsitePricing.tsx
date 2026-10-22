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
    tag: "A focused first impression",
    icon: <WebDevIcon size={24} />,
    price: "$300 - $500",
    period: "/ project",
    scope: "Up to 5 core pages",
    features: [
      "Responsive design & development",
      "Contact form + basic analytics",
      "On-page SEO foundations",
      "Browser testing & launch handover",
      "30-day post-launch warranty & fixes",
    ],
    buttonText: "Discuss launch",
  },
  {
    name: "Growth",
    tag: "Built to evolve",
    badge: "Most popular",
    featured: true,
    icon: <LayersIcon size={24} />,
    price: "$600 - $1,000",
    period: "/ project",
    scope: "Up to 12 pages + CMS",
    features: [
      "Everything in Launch",
      "Custom UI + reusable components",
      "CMS setup & editor training",
      "Blog, case studies + content migration",
      "3 months included maintenance & updates",
    ],
    buttonText: "Discuss growth",
  },
  {
    name: "Commerce",
    tag: "Turn visits into business",
    icon: <CommerceIcon size={24} />,
    price: "$1,000 - $1,800",
    period: "/ project",
    scope: "Storefront + up to 50 products",
    features: [
      "Custom storefront & product templates",
      "Cart, checkout & payment setup",
      "Shipping + product catalog configuration",
      "Purchase analytics & handover training",
      "6 months included store maintenance & updates",
    ],
    buttonText: "Discuss commerce",
  },
];

const softwareTiers: PricingCardProps[] = [
  {
    name: "Custom software",
    tag: "SaaS, internal tools & platforms",
    icon: <BracesIcon size={24} />,
    price: "$1,500 - $3,000",
    period: "/ project",
    scope: "One core workflow, two roles & integration",
    features: [
      "Discovery + system architecture",
      "UX flows & working prototype",
      "Application development + testing",
      "Deployment, documentation & handover",
      "Post-launch warranty & handover support",
    ],
    buttonText: "Scope your software",
  },
  {
    name: "Game development",
    tag: "Playable prototypes & production",
    icon: <GameDevIcon size={24} />,
    price: "$800 - $1,500",
    period: "/ project",
    scope: "One core mechanic, one level & platform",
    features: [
      "Gameplay systems & interaction design",
      "Engine setup + prototype build",
      "Placeholder art & basic UI integration",
      "Playtesting + performance validation",
      "Technical handover & architecture notes",
    ],
    buttonText: "Scope your game",
  },
  {
    name: "Engineering services",
    tag: "Targeted architecture & sprints",
    icon: <EngineeringIcon size={24} />,
    price: "$200 - $500",
    period: "/ project",
    scope: "One bounded technical problem",
    features: [
      "Architecture or codebase assessment",
      "API, integration or automation work",
      "Cloud & delivery pipeline improvements",
      "Refactoring, benchmarks & testing",
      "Findings, implementation notes + handover",
    ],
    buttonText: "Discuss engineering",
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
