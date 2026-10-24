import React from "react";
import Link from "next/link";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

export interface PricingCardProps {
  name: string;
  tag: string;
  badge?: string;
  icon: React.ReactNode;
  price: string;
  period?: string;
  scope: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

export default function PricingCard({
  name,
  tag,
  badge,
  icon,
  price,
  period = "/ project",
  scope,
  features,
  buttonText,
  featured = false,
}: PricingCardProps) {
  return (
    <div className="p-7 bg-dv-card rounded-lg flex flex-col justify-between items-start gap-8">
      <div className="w-full flex flex-col items-start gap-5">
        {/* Header: Icon + Title on left, Badge on right */}
        <div className="w-full flex justify-between items-start gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              {icon}
            </div>
            <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
              {name}
            </h3>
          </div>
          {badge && (
            <div className="px-2.5 py-1 bg-dv-lime rounded-md flex items-start shrink-0">
              <span className="text-dv-dark text-xs font-medium font-sans tracking-wide">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Punchy Lime Tag */}
        <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-normal">
          {tag}
        </span>

        {/* Price Block: Price + period beside it */}
        <div className="w-full flex items-baseline gap-2.5 flex-wrap">
          <span className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
            {price}
          </span>
          <span className="text-dv-muted text-sm sm:text-base font-normal font-sans tracking-normal">
            {period}
          </span>
        </div>

        {/* 1px Divider */}
        <div className="w-full h-px bg-dv-border" />

        {/* Scope Title */}
        <span className="w-full text-dv-text text-sm sm:text-base font-medium font-sans tracking-normal">
          {scope}
        </span>

        {/* Checklist */}
        <div className="w-full flex flex-col items-start gap-3">
          {features.map((feature) => (
            <CheckItem key={feature}>{feature}</CheckItem>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <Link
        href="/#contact"
        className={`w-full h-14 px-6 rounded-lg flex items-center justify-between transition-colors group cursor-pointer ${
          featured
            ? "bg-dv-lime text-dv-dark hover:bg-dv-lime-hover"
            : "bg-dv-surface hover:bg-dv-surface/80 text-dv-text hover:outline-dv-muted"
        }`}
      >
        <span className="text-sm sm:text-base font-medium font-sans tracking-normal">
          {buttonText}
        </span>
        <ArrowIcon color={featured ? "dark" : "lime"} />
      </Link>
    </div>
  );
}
