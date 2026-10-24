import React from "react";
import Image from "next/image";

const traits = ["Engineer-led", "Collaborative", "Long-term minded"];

export default function StudioSection() {
  return (
    <section id="studio" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          An engineer-led studio working directly with you
        </h2>

        {/* Content Row */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image Box */}
          <div className="w-full lg:w-130 xl:w-143 h-85 sm:h-100 lg:h-108 relative rounded-lg overflow-hidden flex flex-col items-start shrink-0">
            <Image
              src="/images/engineering-workspace.png"
              alt="The DevEleven studio"
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 520px, 572px"
              className="object-cover"
            />
            <div className="left-5 bottom-5 absolute z-10 px-3 py-2 bg-dv-card/90 backdrop-blur-xs rounded-md overflow-hidden flex items-start">
              <span className="text-dv-text text-xs sm:text-sm font-medium font-sans tracking-wide">
                The details are the work.
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full flex flex-col items-start gap-6">
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
      </div>
    </section>
  );
}
