"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";
import {
  MenuIcon,
  CloseIcon,
  BrandLogo,
  ChevronDownIcon,
  WebDevIcon,
  CustomSoftwareIcon,
  GameDevIcon,
  MaintenanceIcon,
  TerminalIcon,
  ArrowUpRight,
} from "@/components/ui/Icons";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

interface NavLinkItem {
  label: string;
  href: string;
  targetId?: string;
}

interface ServiceDropdownItem {
  title: string;
  href: string;
  targetId: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}

const navLinks: NavLinkItem[] = [
  { label: "Services", href: "/#services", targetId: "services" },
  { label: "Work", href: "/#work", targetId: "work" },
  { label: "Approach", href: "/#approach", targetId: "approach" },
  { label: "Studio", href: "/#studio", targetId: "studio" },
  { label: "Pricing", href: "/pricing" },
];

const servicesList: ServiceDropdownItem[] = [
  {
    title: "Website Development",
    href: "/#services",
    targetId: "services",
    icon: WebDevIcon,
  },
  {
    title: "Custom Software",
    href: "/#services",
    targetId: "services",
    icon: CustomSoftwareIcon,
  },
  {
    title: "Game Development",
    href: "/#services",
    targetId: "services",
    icon: GameDevIcon,
  },
  {
    title: "Website Maintenance",
    href: "/#services",
    targetId: "services",
    icon: MaintenanceIcon,
  },
  {
    title: "AI-Driven Development",
    href: "/#services",
    targetId: "services",
    icon: TerminalIcon,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleServicesTriggerMouseEnter = () => {
    clearCloseTimeout();
    setIsServicesOpen(true);
  };

  const handleNavMouseEnter = () => {
    clearCloseTimeout();
  };

  const handleNavMouseLeave = () => {
    clearCloseTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const handleOtherNavLinkMouseEnter = () => {
    clearCloseTimeout();
    setIsServicesOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetId?: string
  ) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

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
        // Target element is on a different route: navigate to the target anchor
        e.preventDefault();
        router.push(href);
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

          // Close services dropdown on substantial scroll
          if (Math.abs(diff) > 15) {
            setIsServicesOpen(false);
          }

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

  // Close menus whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
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

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isServicesOpen ? "bg-dv-bg" : "bg-dv-bg/60 backdrop-blur-3xl"
        } ${
          isVisible || isMobileMenuOpen || isServicesOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full max-w-8xl mx-auto h-18 lg:h-18 px-6 sm:px-8 lg:px-16 flex justify-between items-center">
          {/* Left container: Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-10 xl:gap-12">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center gap-3 overflow-hidden group"
            >
              <BrandLogo
                size={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-dv-text text-lg font-medium font-sans">
                DevEleven
              </span>
            </Link>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div key={link.label} className="relative inline-flex items-center">
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        onMouseEnter={handleServicesTriggerMouseEnter}
                        className={`inline-flex items-center gap-1.5 py-1 text-base font-medium tracking-[0.24px] font-sans transition-colors duration-200 cursor-pointer ${
                          isServicesOpen
                            ? "text-dv-text font-semibold"
                            : "text-dv-muted hover:text-dv-text"
                        }`}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        <span>Services</span>
                        <ChevronDownIcon
                          size={14}
                          className={`transition-transform duration-200 shrink-0 ${
                            isServicesOpen ? "rotate-180 text-dv-text" : "text-dv-muted"
                          }`}
                        />
                      </button>
                    </div>
                  );
                }

                const isPricing = link.href === "/pricing";
                const isActive = isPricing && pathname === "/pricing";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={handleOtherNavLinkMouseEnter}
                    onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                    className={`py-1 text-base font-medium tracking-[0.24px] font-sans transition-colors duration-200 ${
                      isActive
                        ? "text-dv-text font-semibold"
                        : "text-dv-muted hover:text-dv-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Actions (Language Switcher + CTA Button) */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact", "contact")}
              className="h-10 px-4.5 bg-dv-btn-primary-bg text-dv-btn-primary-text rounded-full flex items-center gap-2.5 overflow-hidden hover:bg-dv-btn-primary-hover transition-colors duration-200 group cursor-pointer"
            >
              <span className="text-sm font-medium font-sans">
                Let&apos;s talk
              </span>
              <ArrowIcon color="dark" size="md" />
            </Link>
          </div>

          {/* Mobile Controls (Language Switcher + CTA + Hamburger) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
            <LanguageSwitcher />
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact", "contact")}
              className="px-3.5 py-2 bg-dv-btn-primary-bg text-dv-btn-primary-text rounded-full flex items-center gap-1.5 hover:bg-dv-btn-primary-hover transition-colors duration-200 cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-medium font-sans">
                Talk
              </span>
              <ArrowIcon color="dark" size="md" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-dv-control flex items-center justify-center text-dv-text transition-colors duration-200 cursor-pointer hover:bg-dv-control-hover shrink-0"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={20} color="var(--color-dv-text)" />
              ) : (
                <MenuIcon size={20} color="var(--color-dv-text)" />
              )}
            </button>
          </div>
        </div>

        {/* Full-Width Services Dropdown Panel (Simple & Elegant Reference Layout) */}
        <div
          className={`hidden lg:block w-full bg-dv-bg border-b border-dv-border transition-all duration-300 ease-in-out overflow-hidden ${
            isServicesOpen
              ? "max-h-125 opacity-100 translate-y-0 visible pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >
          <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-6 flex items-start">
            {/* Left Column: Heading + Overview Button */}
            <div className="w-80 shrink-0 flex flex-col items-start gap-6 pr-8">
              <h3 className="text-1xl sm:text-2xl font-medium font-sans text-dv-text tracking-tight leading-snug">
                Explore our
                <br />
                engineering services
              </h3>
              <Link
                href="/#services"
                onClick={(e) => {
                  setIsServicesOpen(false);
                  handleNavClick(e, "/#services", "services");
                }}
                className="px-4.5 py-2 rounded-full bg-dv-surface hover:bg-dv-control-hover text-dv-text text-sm font-medium font-sans transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>See overview</span>
              </Link>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-dv-border self-stretch min-h-55" aria-hidden="true" />

            {/* Middle Column: Services List */}
            <div className="flex flex-col pl-4 min-w-70">
              <span className="text-xs sm:text-sm font-medium font-sans text-dv-muted tracking-wide mb-2 px-3">
                Services
              </span>
              <div className="flex flex-col">
                {servicesList.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={(e) => {
                        setIsServicesOpen(false);
                        handleNavClick(e, service.href, service.targetId);
                      }}
                      className="flex items-center gap-3.5 px-3 py-1 rounded-lg text-dv-text hover:bg-dv-accent-subtle hover:text-dv-accent font-sans text-lg font-normal transition-colors duration-200 group cursor-pointer"
                    >
                      <div className="text-dv-text group-hover:text-dv-accent transition-colors duration-200 shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-dv-text group-hover:text-dv-accent transition-colors duration-200">
                        {service.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop blur overlay: covers the viewport below the header and blurs everything behind */}
      <div
        className={`hidden lg:block fixed inset-0 top-18 z-40 bg-zinc-950/20 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isServicesOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsServicesOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer - outside <header> so fixed positioning is viewport-relative */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-dv-bg z-40 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="w-full flex flex-col px-6 sm:px-8 pt-4 pb-8">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className="w-full flex flex-col border-b border-dv-border/60 pb-1 mb-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="w-full py-3 flex items-center justify-between text-base font-medium font-sans text-dv-text transition-colors duration-200 cursor-pointer"
                    aria-expanded={isMobileServicesOpen}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      size={16}
                      className={`transition-transform duration-200 text-dv-muted ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="flex flex-col gap-2 pl-3 pb-3 border-l border-dv-border ml-2 my-1">
                      {servicesList.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={(e) => {
                              setIsMobileMenuOpen(false);
                              handleNavClick(e, service.href, service.targetId);
                            }}
                            className="py-2 px-2.5 rounded-lg text-sm font-medium font-sans text-dv-text hover:bg-dv-accent-subtle hover:text-dv-accent transition-colors duration-200 flex items-center gap-2.5 group cursor-pointer"
                          >
                            <div className="size-7 rounded-md bg-dv-surface flex items-center justify-center text-dv-text group-hover:text-dv-accent shrink-0 transition-colors duration-200">
                              <IconComponent size={14} />
                            </div>
                            <span className="group-hover:text-dv-accent transition-colors duration-200">{service.title}</span>
                          </Link>
                        );
                      })}
                      <Link
                        href="/#services"
                        onClick={(e) => {
                          setIsMobileMenuOpen(false);
                          handleNavClick(e, "/#services", "services");
                        }}
                        className="py-2 text-xs font-medium font-sans text-dv-text hover:underline inline-flex items-center gap-1 pt-1"
                      >
                        <span>See overview</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            const isPricing = link.href === "/pricing";
            const isActive = isPricing && pathname === "/pricing";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                className={`py-3 text-base font-medium font-sans tracking-normal transition-colors duration-200 ${
                  isActive ? "text-dv-text font-semibold" : "text-dv-muted hover:text-dv-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="w-full pt-4 mt-2 border-t border-dv-border flex items-center justify-between">
            <span className="text-xs font-medium font-sans text-dv-muted tracking-wide">
              Language
            </span>
            <LanguageSwitcher showLabelOnMobile />
          </div>
        </nav>
      </div>

      {/* Layout spacer so page content starts cleanly below the fixed header */}
      <div className="w-full h-20 lg:h-24 shrink-0" aria-hidden="true" />
    </>
  );
}
