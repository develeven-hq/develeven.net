import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden justify-start items-start gap-2.5 inline-flex">
      <div className="w-4 h-5 flex items-center justify-center shrink-0">
        <CheckIcon size={14} />
      </div>
      <span className="flex-1 text-dv-lead text-sm font-normal font-sans leading-relaxed tracking-normal break-words">
        {children}
      </span>
    </div>
  );
}
