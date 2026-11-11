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
  const textColor = "text-dv-muted";
  return (
    <div
      className={`font-sans text-xs sm:text-sm font-medium leading-normal tracking-wide ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}
