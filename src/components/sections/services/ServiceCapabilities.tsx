import React from "react";

export interface CapabilityCardItem {
  icon: React.ReactNode;
  label: string;
  statement: string;
}

export interface ServiceCapabilitiesProps {
  id?: string;
  heading?: string;
  items: CapabilityCardItem[];
}

export default function ServiceCapabilities({
  id = "capabilities",
  heading = "What we build and deliver",
  items,
}: ServiceCapabilitiesProps) {
  return (
    <section id={id} className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          {heading}
        </h2>

        {/* Feature Cards Grid matching home page cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {items.map((item) => (
            <article
              key={item.label}
              className="w-full min-h-60 sm:min-h-68 p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between"
            >
              {/* Top: Icon Box */}
              <div className="size-10 rounded-lg bg-dv-surface flex items-center justify-center text-dv-text shrink-0">
                {item.icon}
              </div>

              {/* Bottom: Quiet Label + Primary Statement */}
              <div className="flex flex-col gap-2.5">
                <span className="text-dv-muted text-base font-normal font-sans tracking-normal">
                  {item.label}
                </span>
                <p className="text-dv-text text-base sm:text-lg font-normal font-sans leading-snug tracking-normal">
                  {item.statement}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
