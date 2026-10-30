import React from "react";
import Link from "next/link";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

export interface PricingCardProps {
  name: string;
  tag?: string;
  badge?: string;
  icon: React.ReactNode;
  price: string;
  period?: string;
  scope?: string;
  features: string[];
  buttonText?: string;
  featured?: boolean;
}

export default function PricingCard({
  name,
  badge,
  icon,
  price,
  features,
  buttonText = "Get started",
  featured = false,
}: PricingCardProps) {
  return (
    <div className="p-6 bg-dv-card rounded-lg flex flex-col justify-between items-start gap-8">
      <div className="w-full flex flex-col items-start gap-5">
        {/* Tier Identity Header */}
        <div className="w-full flex justify-between items-start gap-3">
          <div className="flex flex-col items-start gap-3 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              {icon}
            </div>
            <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
              {name}
            </h3>
          </div>
          {badge && (
            <div className="px-2.5 py-1 bg-dv-lime rounded-md flex items-center shrink-0">
              <span className="text-dv-dark text-xs font-medium font-sans tracking-wide">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="w-full flex flex-col items-start gap-1">
          <span className="text-dv-lead text-xs sm:text-sm font-normal font-sans tracking-wide">
            Starting from
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-dv-text text-4xl sm:text-5xl lg:text-5xl font-medium font-sans tracking-tight">
              {price}
            </span>
            <span className="text-base text-dv-muted">USD</span>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <Link
          href="/#contact"
          className={`w-full h-12 mt-2 px-5 rounded-lg flex items-center justify-between transition-colors group cursor-pointer ${featured
            ? "bg-dv-lime text-dv-dark hover:bg-dv-lime-hover font-semibold"
            : "bg-dv-surface hover:bg-dv-surface/80 text-dv-text hover:outline-dv-muted font-medium"
            }`}
        >
          <span className="text-sm font-sans tracking-normal">
            {buttonText}
          </span>
          <ArrowIcon color={featured ? "dark" : "lime"} />
        </Link>

        {/* 1px Divider */}
        <div className="w-full h-px bg-dv-border" />

        {/* Features Checklist */}
        <div className="w-full flex flex-col items-start gap-3">
          <span className="text-dv-text text-sm lg:text-base font-medium font-sans tracking-wide">
            What&apos;s included:
          </span>
          <div className="w-full flex flex-col items-start gap-2.5">
            {features.map((feature) => (
              <CheckItem key={feature}>{feature}</CheckItem>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
