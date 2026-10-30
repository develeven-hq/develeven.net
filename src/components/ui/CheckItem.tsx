import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-start gap-2.5">
      <div className="h-6 flex items-center justify-center shrink-0">
        <div className="flex items-center justify-center shrink-0">
          <CheckIcon size={12.5} />
        </div>
      </div>
      <span className="flex-1 text-dv-muted text-sm lg:text-sm font-medium font-sans leading-6 tracking-normal wrap-break-word">
        {children}
      </span>
    </div>
  );
}
