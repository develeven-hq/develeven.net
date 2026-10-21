import React from "react";

interface StatusDotProps {
  label: string;
  theme?: "lime" | "dark";
  className?: string;
}

export default function StatusDot({
  label,
  theme = "lime",
  className = "",
}: StatusDotProps) {
  const dotColor = theme === "lime" ? "bg-dv-lime" : "bg-dv-dark";
  const textColor = theme === "lime" ? "text-dv-text" : "text-dv-dark";

  return (
    <div className={`justify-start items-center gap-2 inline-flex overflow-hidden ${className}`}>
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
      <span className={`font-sans text-xs sm:text-sm font-medium leading-normal tracking-wide ${textColor}`}>
        {label}
      </span>
    </div>
  );
}
