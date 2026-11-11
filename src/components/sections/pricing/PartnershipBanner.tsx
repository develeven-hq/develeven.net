import React from "react";
import Button from "@/components/ui/Button";

export default function PartnershipBanner() {
  return (
    <div id="partnership" className="w-full min-h-128 sm:min-h-144 lg:min-h-160 py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-16 bg-dv-card rounded-2xl flex flex-col items-center justify-center text-center gap-8 sm:gap-10">
      <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
        Need a dedicated team, not just a single project?
      </h2>
      <Button href="/#contact" variant="primary">
        Work with us
      </Button>
    </div>
  );
}
