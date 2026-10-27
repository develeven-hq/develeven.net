import React from "react";
import Image from "next/image";

export interface TechPillProps {
  name: string;
  iconSrc?: string;
  icon?: React.ReactNode;
  label?: string;
  showLabel?: boolean;
}

export default function TechPill({
  name,
  label,
  iconSrc,
  icon,
  showLabel = false,
}: TechPillProps) {
  const displayName = name || label || "";

  const renderIcon = () => {
    if (iconSrc) {
      return (
        <Image
          src={iconSrc}
          alt={displayName}
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      );
    }
    if (icon) {
      return icon;
    }
    return null;
  };

  const hasIcon = iconSrc || icon;

  if (hasIcon) {
    if (showLabel) {
      return (
        <div
          role="img"
          aria-label={displayName}
          className="px-3 py-1.5 rounded-lg bg-dv-surface hover:bg-zinc-700 transition-colors flex items-center gap-2 cursor-default select-none"
        >
          <span className="flex items-center justify-center shrink-0">
            {renderIcon()}
          </span>
          <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-normal leading-normal">
            {displayName}
          </span>
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={displayName}
        title={displayName}
        tabIndex={0}
        className="group relative flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 cursor-default select-none focus:outline-none"
      >
        <div className="flex items-center justify-center">
          {renderIcon()}
        </div>

        {/* Clean floating tooltip on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-950 text-zinc-100 text-xs font-medium font-sans rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-xl z-20"
        >
          {displayName}
        </span>
      </div>
    );
  }

  // Fallback for label-only without outline/border
  return (
    <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-normal leading-normal">
      {displayName}
    </span>
  );
}


