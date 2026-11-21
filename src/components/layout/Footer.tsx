"use client";

import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import {
  LinkedInIcon,
  XSocialIcon,
  DiscordIcon,
  GitHubIcon,
  BrandLogo,
} from "@/components/ui/Icons";

const serviceLinks = [
  { label: "Website Development", href: "/#services" },
  { label: "Custom Software", href: "/#services" },
  { label: "Game Development", href: "/#services" },
  { label: "Website Maintenance", href: "/#services" },
  { label: "AI-Driven Development", href: "/#services" },
];

const studioLinks = [
  { label: "Selected Work", href: "/#work" },
  { label: "Engineering Standards", href: "/#approach" },
  { label: "Development Process", href: "/#process" },
  { label: "About Studio", href: "/#studio" },
];

const pricingLinks = [
  { label: "Website Packages", href: "/pricing#websites" },
  { label: "Custom Software Rates", href: "/pricing#software" },
  { label: "How We Estimate", href: "/pricing#process" },
  { label: "Pricing FAQ", href: "/pricing#pricing-faq" },
];

const companyLinks = [
  { label: "Start a Conversation", href: "/#contact" },
  { label: "Common Questions", href: "/#faq" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "DevEleven on GitHub",
    href: "https://github.com/develeven-hq",
    icon: GitHubIcon,
    size: 18,
  },
  {
    label: "DevEleven on Discord",
    href: "https://discord.gg/EzD8tqgtMn",
    icon: DiscordIcon,
    size: 18,
  },
  {
    label: "DevEleven on X",
    href: "https://x.com/DevElevenX",
    icon: XSocialIcon,
    size: 16,
  },
  {
    label: "DevEleven on LinkedIn",
    href: "https://linkedin.com/company/develeven-hq",
    icon: LinkedInIcon,
    size: 19,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dv-bg border-t border-dv-border">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 pb-12 flex flex-col gap-12 lg:gap-16">
        {/* 4 Columns Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Services */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Services
            </span>
            <ul className="flex flex-col items-start gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dv-lead hover:text-dv-text text-sm sm:text-base font-medium font-sans hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Studio */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Studio
            </span>
            <ul className="flex flex-col items-start gap-3">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dv-lead hover:text-dv-text text-sm sm:text-base font-medium font-sans hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pricing */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Pricing
            </span>
            <ul className="flex flex-col items-start gap-3">
              {pricingLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dv-lead hover:text-dv-text text-sm sm:text-base font-medium font-sans hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Company
            </span>
            <ul className="flex flex-col items-start gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dv-lead hover:text-dv-text text-sm sm:text-base font-medium font-sans hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Social & Language Selector Bar */}
        <div className="w-full pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-t border-dv-border">
          {/* Left: Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-dv-muted text-xs sm:text-sm font-medium font-sans">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-dv-muted group"
            >
              <BrandLogo size={18} className="w-4.5 h-4.5 transition-transform group-hover:scale-105" />
              <span>© 2026 DevEleven, Inc.</span>
            </Link>
            <Link
              href="/terms"
              className="hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:underline"
            >
              Privacy
            </Link>
            <button
              type="button"
              className="hover:underline cursor-pointer"
            >
              Cookies
            </button>
          </div>

          {/* Right: Social Icons & Language Button */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Curated Developer Studio Socials */}
            <div className="flex items-center gap-4 text-dv-muted">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-dv-text transition-colors duration-200 p-0.5 flex items-center justify-center"
                  >
                    <IconComponent size={item.size} />
                  </a>
                );
              })}
            </div>

            {/* Language Selector Button */}
            <LanguageSwitcher direction="up" />
          </div>
        </div>
      </div>
    </footer>
  );
}
