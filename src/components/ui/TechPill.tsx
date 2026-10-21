import React from "react";

export default function TechPill({ label }: { label: string }) {
  return (
    <div className="px-3 py-2 rounded-md outline outline-1 outline-dv-border -outline-offset-1 justify-start items-start inline-flex overflow-hidden">
      <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-normal leading-normal">
        {label}
      </span>
    </div>
  );
}
