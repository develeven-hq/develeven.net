import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const traits = ["Engineer-led", "Collaborative", "Long-term minded"];

export default function StudioSection() {
  return (
    <section id="studio" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden">
        {/* Left Image Box */}
        <div className="w-full lg:w-130 xl:w-143 h-85 sm:h-100 lg:h-108 relative rounded-lg outline outline-1 outline-dv-border -outline-offset-1 overflow-hidden flex flex-col items-start shrink-0">
          <img
            src="/images/engineering-workspace.png"
            alt="The DevEleven studio"
            className="w-full h-full object-cover"
          />
          <div className="left-5 bottom-5 absolute px-3 py-2 bg-dv-bg rounded-md overflow-hidden flex items-start">
            <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
              The details are the work.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-6">
          <SectionLabel>05 / The people behind the code</SectionLabel>
          <h2 className="w-full text-dv-text text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
            Engineers by trade.
            <br />
            Partners by nature.
          </h2>
          <p className="w-full text-dv-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
            DevEleven is a technology studio for teams who care about what they put into
            the world. We bring curious thinking, hands-on engineering, and a shared
            sense of ownership to every project.
          </p>
          <p className="w-full text-dv-lead text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
            You work directly with the people building your product. Less translation.
            Better decisions. A closer partnership.
          </p>

          <div className="w-full h-px bg-dv-border" />

          <div className="w-full flex flex-wrap justify-between items-start gap-4 overflow-hidden">
            {traits.map((trait) => (
              <span
                key={trait}
                className="text-dv-lime text-sm sm:text-base font-semibold font-sans tracking-wide"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
