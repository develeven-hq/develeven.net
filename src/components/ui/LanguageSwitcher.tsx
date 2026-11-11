"use client";

import React, { useEffect, useRef, useState } from "react";
import { GlobeIcon, ChevronDownIcon, CheckIcon } from "@/components/ui/Icons";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ja", label: "日本語" },
];

interface LanguageSwitcherProps {
  className?: string;
  direction?: "down" | "up";
  showLabelOnMobile?: boolean;
}

export default function LanguageSwitcher({
  className = "",
  direction = "down",
  showLabelOnMobile = false,
}: LanguageSwitcherProps) {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read from localStorage if set
    try {
      const stored = localStorage.getItem("develeven_lang");
      if (stored && LANGUAGES.some((l) => l.label === stored)) {
        setSelectedLang(stored);
      }
    } catch {
      // Ignore in restricted environments
    }

    const handleLangSync = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedLang(customEvent.detail);
      }
    };

    window.addEventListener("develeven_lang_change", handleLangSync);
    return () => window.removeEventListener("develeven_lang_change", handleLangSync);
  }, []);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectLanguage = (langLabel: string) => {
    setSelectedLang(langLabel);
    setIsOpen(false);
    try {
      localStorage.setItem("develeven_lang", langLabel);
    } catch {
      // Ignore
    }
    window.dispatchEvent(
      new CustomEvent("develeven_lang_change", { detail: langLabel })
    );
  };

  const menuPosition =
    direction === "up"
      ? "bottom-full mb-2"
      : "top-full mt-2";

  return (
    <div ref={containerRef} className="relative inline-block text-left shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 px-3 sm:px-3.5 rounded-full bg-dv-card hover:bg-dv-surface border border-dv-border text-dv-text flex items-center gap-2 text-xs sm:text-sm font-medium font-sans transition-colors cursor-pointer shrink-0 ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${selectedLang} - Select language`}
      >
        <GlobeIcon size={16} className="text-dv-text shrink-0" />
        <span className={showLabelOnMobile ? "inline" : "hidden sm:inline"}>
          {selectedLang}
        </span>
        <ChevronDownIcon
          size={14}
          className={`text-dv-muted transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className={`absolute right-0 ${menuPosition} w-40 py-1.5 bg-dv-card border border-dv-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-md`}
        >
          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.label;
            return (
              <button
                key={lang.code}
                type="button"
                role="menuitem"
                onClick={() => selectLanguage(lang.label)}
                className={`px-3.5 py-2 text-xs sm:text-sm text-left font-sans transition-colors cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "text-dv-text bg-dv-surface font-semibold"
                    : "text-dv-text hover:bg-dv-surface"
                }`}
              >
                <span>{lang.label}</span>
                {isSelected && (
                  <CheckIcon size={14} className="text-dv-text shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
