"use client";

import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

const expertiseLinks = [
  { label: "Website development", href: "/#services" },
  { label: "Website maintenance", href: "/#services" },
  { label: "Custom software", href: "/#services" },
  { label: "Game development", href: "/#services" },
  { label: "Engineering services", href: "/#services" },
];

const exploreLinks = [
  { label: "Our approach", href: "/#approach" },
  { label: "The studio", href: "/#studio" },
  { label: "Ways to work together", href: "/#engagement" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 pb-8 flex flex-col gap-12 overflow-hidden">
        {/* Top Row */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 overflow-hidden">
          {/* Brand Column */}
          <div className="w-full lg:max-w-sm flex flex-col gap-5 overflow-hidden">
            <Link href="/" className="flex items-center gap-3 overflow-hidden">
              <div className="flex items-start gap-1.5 overflow-hidden">
                <div className="w-1.5 h-6 bg-dv-lime" />
                <div className="w-1.5 h-6 bg-dv-lime" />
              </div>
              <span className="text-dv-text text-2xl font-bold font-sans tracking-tight">
                DevEleven
              </span>
            </Link>
            <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed">
              Independent thinking. Precise engineering. Digital products built for the long run.
            </p>
            <Link
              href="/#contact"
              className="text-dv-lime text-sm font-medium font-sans hover:underline flex items-center gap-1.5 group"
            >
              <span>Start a conversation</span>
              <ArrowIcon color="lime" size="md" />
            </Link>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-start gap-12 sm:gap-16 lg:gap-20">
            {/* Expertise Column */}
            <div className="flex flex-col gap-3.5 overflow-hidden">
              <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
                Expertise
              </span>
              {expertiseLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Explore Column */}
            <div className="flex flex-col gap-3.5 overflow-hidden">
              <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
                Explore
              </span>
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* /11 Mark */}
            <div className="flex flex-col items-start sm:items-end gap-3 overflow-hidden">
              <span className="text-dv-lime text-7xl lg:text-8xl font-bold font-sans leading-none">
                /11
              </span>
              <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
                Built with intent.
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-dv-border" />

        {/* Bottom Legal Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 overflow-hidden">
          <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans">
            © 2026 DevEleven. All rights reserved.
          </span>

          <div className="flex items-center gap-7 overflow-hidden">
            <Link
              href="/privacy"
              className="text-dv-muted text-xs sm:text-sm font-medium font-sans hover:text-dv-text transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-dv-muted text-xs sm:text-sm font-medium font-sans hover:text-dv-text transition-colors"
            >
              Terms of use
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="text-dv-text text-xs sm:text-sm font-medium font-sans hover:text-dv-lime transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
