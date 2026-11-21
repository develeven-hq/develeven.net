import React from "react";
import Link from "next/link";
import CheckItem from "@/components/ui/CheckItem";

export interface PricingCardProps {
  name: string;
  tag?: string;
  badge?: string;
  icon: React.ReactNode;
  price: string;
  currency?: string;
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
  currency = "USD",
  features,
  buttonText = "Get started",
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-6 rounded-2xl overflow-hidden flex flex-col justify-between items-start gap-8 ${
        featured
          ? "bg-white bg-linear-to-b from-blue-50 via-white via-45% to-white outline-1 outline-blue-200"
          : "bg-dv-card"
      }`}
    >
      {badge && (
        <div className="absolute top-0 right-0 px-3.5 py-1.5 bg-blue-600 text-white text-xs font-medium font-sans tracking-wide rounded-bl-xl select-none">
          {badge}
        </div>
      )}
      <div className="w-full flex flex-col items-start gap-5">
        {/* Tier Identity Header */}
        <div className="flex flex-col items-start gap-3 min-w-0">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
            {name}
          </h3>
        </div>

        {/* Price */}
        <div className="w-full flex flex-col items-start gap-1">
          <span className="text-dv-text text-xs sm:text-sm font-normal font-sans">
            Starting from
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-dv-text text-3xl sm:text-4xl xl:text-5xl font-medium font-sans tracking-tight transition-all duration-200">
              {price}
            </span>
            <span className="text-xs sm:text-sm font-medium text-dv-muted font-sans">
              {currency}
            </span>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <Link
          href="/#contact"
          className="w-full mt-2 py-3 px-6 rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 group cursor-pointer bg-dv-btn-primary-bg text-dv-btn-primary-text hover:bg-dv-btn-primary-hover font-medium"
        >
          <span className="text-sm font-sans tracking-normal">
            {buttonText}
          </span>
        </Link>

        {/* 1px Divider */}
        <div className="w-full h-px bg-dv-border" />

        {/* Features Checklist */}
        <div className="w-full flex flex-col items-start gap-3">
          <span className="text-dv-text text-sm lg:text-base font-medium font-sans tracking-wide">
            Plan includes:
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
