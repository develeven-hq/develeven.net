import React from "react";
import Image from "next/image";

export interface TechItem {
  name: string;
  role: string;
  iconSrc?: string;
}

export interface ServiceTechStackProps {
  id?: string;
  heading?: string;
  techs: TechItem[];
}

export default function ServiceTechStack({
  id = "tech-stack",
  heading = "Technologies and standards powering our builds",
  techs,
}: ServiceTechStackProps) {
  return (
    <section id={id} className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          {heading}
        </h2>

        {/* Tech Stack Cards Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techs.map((tech) => (
            <article
              key={tech.name}
              className="w-full min-h-36 sm:min-h-40 p-5 sm:p-6 bg-dv-card rounded-2xl flex flex-col justify-between group"
            >
              {/* Top: Tech Icon */}
              <div className="flex items-center justify-start">
                {tech.iconSrc && (
                  <Image
                    src={tech.iconSrc}
                    alt={tech.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                  />
                )}
              </div>

              {/* Bottom: Role & Name */}
              <div className="flex flex-col gap-1">
                <span className="text-dv-muted text-xs sm:text-sm font-normal font-sans">
                  {tech.role}
                </span>
                <span className="text-dv-text text-base font-medium font-sans tracking-normal">
                  {tech.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
