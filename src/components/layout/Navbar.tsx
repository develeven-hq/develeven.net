"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

interface NavLinkItem {
  label: string;
  href: string;
  targetId?: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Platform", href: "/#services", targetId: "services" },
  { label: "Solutions", href: "/#work", targetId: "work" },
  { label: "Our approach", href: "/#approach", targetId: "approach" },
  { label: "Studio", href: "/#studio", targetId: "studio" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetId?: string
  ) => {
    setIsMobileMenuOpen(false);

    // If logo or home link
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
      return;
    }

    // If pricing link
    if (href === "/pricing") {
      if (pathname === "/pricing") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Anchor-based links (e.g. /#services, /#work, /#approach, /#studio, /#contact)
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Target element exists on current page: smooth scroll inside the page
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else {
        // Target element is on a different route:
        // Do NOT scroll across routes. Navigate cleanly to the target page without scrolling.
        e.preventDefault();
        router.push("/");
      }
    }
  };

  // Show navbar when scrolling back up; hide when scrolling down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always visible at the top of the page
          if (currentScrollY <= 80) {
            setIsVisible(true);
            accumulatedDelta = 0;
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          const diff = currentScrollY - lastScrollY;

          // Reset accumulated delta when scroll direction changes
          if ((diff > 0 && accumulatedDelta < 0) || (diff < 0 && accumulatedDelta > 0)) {
            accumulatedDelta = 0;
          }

          accumulatedDelta += diff;

          // Scrolling down -> hide navbar
          if (accumulatedDelta > 20) {
            setIsVisible(false);
          }
          // Scrolling back up -> reveal navbar
          else if (accumulatedDelta < -15) {
            setIsVisible(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 bg-dv-bg/90 backdrop-blur-xl border-b border-dv-border/60 transition-transform duration-300 ease-in-out ${
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
      <div className="w-full max-w-8xl mx-auto h-20 lg:h-20 px-6 sm:px-8 lg:px-16 flex justify-between items-center">
        {/* Left container: Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-8 xl:gap-12">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 overflow-hidden group"
          >
            <Image
              src="/E%20Cyan%2045%20Degree.svg"
              alt="DevEleven logo"
              width={28}
              height={28}
              priority
              className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-dv-text text-xl font-medium font-sans tracking-tight">
              DevEleven
            </span>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isPricing = link.href === "/pricing";
              const isActive = isPricing && pathname === "/pricing";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                  className={`text-base font-medium tracking-[0.24px] font-sans transition-colors ${
                    isActive
                      ? "text-dv-lime"
                      : "text-dv-text hover:text-dv-lime"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact", "contact")}
          className="hidden lg:flex h-12 px-6 bg-dv-lime rounded-lg items-center gap-6 overflow-hidden hover:bg-dv-lime-hover transition-colors group cursor-pointer"
        >
          <span className="text-dv-dark text-sm sm:text-base font-medium font-sans">
            Let's talk
          </span>
          <ArrowIcon color="dark" />
        </Link>

        {/* Mobile Controls (CTA + Hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", "contact")}
            className="h-10 px-4 bg-dv-lime rounded-lg flex items-center gap-2 hover:bg-dv-lime-hover transition-colors cursor-pointer"
          >
            <span className="text-dv-dark text-xs sm:text-sm font-medium font-sans">
              Talk
            </span>
            <ArrowIcon color="dark" size="md" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-lg bg-dv-card flex items-center justify-center text-dv-text transition-colors cursor-pointer hover:bg-dv-surface"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <CloseIcon size={20} color="var(--color-dv-lime)" />
            ) : (
              <MenuIcon size={20} color="var(--color-dv-text)" />
            )}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Navigation Drawer - outside <header> so fixed positioning is viewport-relative */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-dv-bg z-40 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="w-full flex flex-col px-6 sm:px-8 pt-4">
          {navLinks.map((link) => {
            const isPricing = link.href === "/pricing";
            const isActive = isPricing && pathname === "/pricing";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                className={`py-3 text-base font-medium font-sans tracking-normal transition-colors ${
                  isActive ? "text-dv-lime" : "text-dv-text hover:text-dv-lime"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

    {/* Layout spacer so page content starts cleanly below the fixed header */}
    <div className="w-full h-20 lg:h-24 shrink-0" aria-hidden="true" />
  </>
  );
}
