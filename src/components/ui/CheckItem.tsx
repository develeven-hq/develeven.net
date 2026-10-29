import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-start gap-2.5">
      <div className="h-6 flex items-center justify-center shrink-0">
        <div className="w-4 h-4 bg-dv-surface rounded-full flex items-center justify-center shrink-0">
          <CheckIcon size={10} />
        </div>
      </div>
      <span className="flex-1 text-dv-lead text-sm lg:text-base font-normal font-sans leading-6 tracking-normal wrap-break-word">
        {children}
      </span>
    </div>
  );
}
