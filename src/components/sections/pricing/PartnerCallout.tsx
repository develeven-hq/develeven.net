import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnerCallout() {
  return (
    <div className="w-full px-6 py-5 sm:px-8 sm:py-6 bg-dv-card rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
      {/* Left: Real Partner Logo (RushSec) + Partnership Offer */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 min-w-0">
        {/* RushSec Logo */}
        <div
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 select-none flex items-center justify-center"
          title="RushSec"
        >
          <Image
            src="/images/rushsec.png"
            alt="RushSec logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Partnership Offer Text */}
        <div className="flex flex-col items-start gap-0.5 sm:gap-1 min-w-0">
          <h3 className="text-dv-text text-base sm:text-lg font-medium font-sans leading-snug">
            Partner with us
          </h3>
          <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-normal">
            Need a dedicated team, not just a single project?
          </p>
        </div>
      </div>

      {/* Right: Get started button */}
      <Link
        href="/#contact"
        className="px-5 sm:px-6 py-2.5 rounded-full bg-dv-surface hover:bg-dv-surface-hover text-dv-text text-sm sm:text-base font-medium font-sans transition-colors duration-200 cursor-pointer shrink-0 inline-flex items-center justify-center self-start md:self-center"
      >
        Get started
      </Link>
    </div>
  );
}
