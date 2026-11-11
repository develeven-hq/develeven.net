import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-start gap-2.5">
      <div className="py-1.5 flex items-center justify-center shrink-0">
        <div className="flex items-center justify-center shrink-0 text-dv-text">
          <CheckIcon size={16} />
        </div>
      </div>
      <span className="flex-1 text-dv-lead text-sm lg:text-base font-normal font-sans leading-6 tracking-normal wrap-break-word">
        {children}
      </span>
    </div>
  );
}
