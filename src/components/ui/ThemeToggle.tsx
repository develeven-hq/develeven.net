"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read active theme from DOM attribute or storage
    const activeTheme =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      (localStorage.getItem("theme") as "light" | "dark") ||
      "light";
    setTheme(activeTheme);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
        document.documentElement.setAttribute("data-theme", e.newValue);
        if (e.newValue === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) meta.setAttribute("content", e.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute("content", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore storage errors in private browsing/restricted sandbox
    }
  };

  const isDark = mounted ? theme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`w-10 h-10 rounded-full bg-dv-card hover:bg-dv-surface border border-dv-border text-dv-text flex items-center justify-center transition-colors cursor-pointer shrink-0 ${className}`}
    >
      {isDark ? (
        <SunIcon size={18} className="text-dv-lime transition-transform duration-200 hover:rotate-45" />
      ) : (
        <MoonIcon size={18} className="text-dv-text transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
