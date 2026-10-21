"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GlobeIcon,
  ChevronDownIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  XSocialIcon,
  TikTokIcon,
  TwitchIcon,
  GitHubIcon,
} from "@/components/ui/Icons";

const serviceLinks = [
  { label: "Website development", href: "/#services" },
  { label: "Website maintenance", href: "/#services" },
  { label: "Custom software", href: "/#services" },
  { label: "Dedicated engineering", href: "/#services" },
];

const studioLinks = [
  { label: "Selected work", href: "/#work" },
  { label: "Engineering standards", href: "/#approach" },
  { label: "Development workflow", href: "/#process" },
  { label: "About our studio", href: "/#studio" },
];

const pricingLinks = [
  { label: "Website packages", href: "/pricing#websites" },
  { label: "Custom software rates", href: "/pricing#software" },
  { label: "How we estimate", href: "/pricing#process" },
  { label: "Pricing questions", href: "/pricing#pricing-faq" },
];

const companyLinks = [
  { label: "Start a conversation", href: "/#contact" },
  { label: "Common questions", href: "/#faq" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
];

const socialLinks = [
  {
    label: "DevEleven on LinkedIn",
    href: "https://linkedin.com/company/develeven",
    icon: LinkedInIcon,
    size: 19,
  },
  {
    label: "DevEleven on Instagram",
    href: "https://instagram.com/develeven",
    icon: InstagramIcon,
    size: 18,
  },
  {
    label: "DevEleven on YouTube",
    href: "https://youtube.com/@develeven",
    icon: YouTubeIcon,
    size: 19,
  },
  {
    label: "DevEleven on X",
    href: "https://x.com/develeven",
    icon: XSocialIcon,
    size: 16,
  },
  {
    label: "DevEleven on TikTok",
    href: "https://tiktok.com/@develeven",
    icon: TikTokIcon,
    size: 18,
  },
  {
    label: "DevEleven on Twitch",
    href: "https://twitch.tv/develeven",
    icon: TwitchIcon,
    size: 18,
  },
  {
    label: "DevEleven on GitHub",
    href: "https://github.com/develeven-hq",
    icon: GitHubIcon,
    size: 18,
  },
];

const languages = ["English", "Deutsch", "Español", "Français", "日本語"];

export default function Footer() {
  const [showSubscribeInput, setShowSubscribeInput] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-dv-bg border-t border-dv-border">
      {/* 2. Main Footer Body */}
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 pb-12 flex flex-col gap-12 lg:gap-14">
        {/* Newsletter Section */}
        <div className="w-full flex flex-col items-start gap-3.5">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-3.5 bg-dv-lime rounded-xs shrink-0"
              aria-hidden="true"
            />
            <span className="text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-wide">
              The developer newsletter
            </span>
          </div>

          <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed max-w-md">
            Get tips, technical guides, and best practices.
            <br />
            Twice a month. Right in your inbox.
          </p>

          {!showSubscribeInput && !subscribed ? (
            <button
              type="button"
              onClick={() => setShowSubscribeInput(true)}
              className="mt-1 px-5 py-2.5 bg-dv-lime hover:bg-dv-lime-hover text-dv-dark font-medium text-sm sm:text-base font-sans rounded-lg transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          ) : subscribed ? (
            <div className="mt-1 px-4 py-2 bg-dv-card border border-dv-lime/40 text-dv-lime text-sm sm:text-base font-medium font-sans rounded-lg flex items-center gap-2">
              <span>✓ You&apos;re subscribed to the newsletter!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full max-w-md"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-11 px-3.5 rounded-lg bg-dv-card border border-dv-border text-dv-text placeholder:text-dv-muted text-sm sm:text-base font-sans focus:outline-none focus:border-dv-lime transition-colors"
              />
              <button
                type="submit"
                className="h-11 px-5 bg-dv-lime hover:bg-dv-lime-hover text-dv-dark font-medium text-sm sm:text-base font-sans rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* 3. 4 Columns Links Grid */}
        <div className="w-full pt-8 border-t border-dv-border grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
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
                    className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
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
                    className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
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
                    className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
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
                    className="text-dv-text text-sm sm:text-base font-medium font-sans hover:text-dv-lime transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Bottom Legal, Social & Language Selector Bar */}
        <div className="w-full pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-t border-dv-border/40">
          {/* Left: Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-dv-muted text-xs sm:text-sm font-medium font-sans">
            <span>© 2026 DevEleven, Inc.</span>
            <Link
              href="/terms"
              className="hover:text-dv-text transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-dv-text transition-colors"
            >
              Privacy
            </Link>
            <button
              type="button"
              className="hover:text-dv-text transition-colors cursor-pointer"
            >
              Manage cookies
            </button>
            <button
              type="button"
              className="hover:text-dv-text transition-colors cursor-pointer"
            >
              Do not share my personal information
            </button>
          </div>

          {/* Right: Social Icons & Language Button */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Social Icons Row (Exact 7 icons in GitHub's order) */}
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
                    className="hover:text-[#f0f6fc] transition-colors p-0.5 flex items-center justify-center"
                  >
                    <IconComponent size={item.size} />
                  </a>
                );
              })}
            </div>

            {/* Language Selector Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="h-8 px-3 rounded-md bg-[#21262d] hover:bg-[#30363d] border border-[rgba(240,246,252,0.1)] text-[#f0f6fc] flex items-center gap-2 text-xs sm:text-sm font-medium font-sans transition-colors cursor-pointer"
                aria-expanded={langOpen}
                aria-label={`${selectedLang} - Select language`}
              >
                <GlobeIcon size={16} className="text-[#f0f6fc]" />
                <span>{selectedLang}</span>
                <ChevronDownIcon
                  size={16}
                  className={`text-[#f0f6fc] transition-transform duration-150 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-36 py-1 bg-[#21262d] border border-[#30363d] rounded-md shadow-2xl z-50 flex flex-col overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`px-3 py-1.5 text-xs sm:text-sm text-left font-sans transition-colors cursor-pointer ${
                        selectedLang === lang
                          ? "text-dv-lime bg-[#30363d] font-medium"
                          : "text-[#f0f6fc] hover:bg-[#30363d]"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
