import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionLabel({
  children,
  theme = "dark",
  className = "",
}: SectionLabelProps) {
  const textColor = theme === "dark" ? "text-dv-lime" : "text-dv-light-label";
  return (
    <div
      className={`font-sans text-xs sm:text-sm font-medium leading-normal tracking-wide ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}
