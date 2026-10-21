"use client";

import React from "react";
import {
  WebDevIcon,
  CustomSoftwareIcon,
  FoundationIcon,
  FaqIcon,
  ArrowDown,
} from "@/components/ui/Icons";

const links = [
  {
    label: "01 / Websites & maintenance",
    href: "#websites",
    icon: <WebDevIcon size={15} />,
  },
  {
    label: "02 / Software & games",
    href: "#software",
    icon: <CustomSoftwareIcon size={15} />,
  },
  {
    label: "03 / Process",
    href: "#process",
    icon: <FoundationIcon size={15} />,
  },
  {
    label: "04 / Pricing FAQ",
    href: "#pricing-faq",
    icon: <FaqIcon size={15} />,
  },
];

export default function PricingNav() {
  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav className="w-full border-t border-b border-dv-border bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto h-12 lg:h-14 px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleJump(e, link.href)}
            className="group flex items-center gap-2 text-dv-text text-xs sm:text-sm font-medium font-sans tracking-normal hover:text-dv-lime transition-colors whitespace-nowrap"
          >
            <span className="shrink-0 flex items-center justify-center">
              {link.icon}
            </span>
            <span>{link.label}</span>
            <ArrowDown
              size={13}
              color="currentColor"
              className="text-dv-muted group-hover:text-dv-lime transition-transform duration-200 group-hover:translate-y-0.5 shrink-0"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
