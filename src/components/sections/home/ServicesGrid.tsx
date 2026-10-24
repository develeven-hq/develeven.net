import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";
import {
  WebDevIcon,
  MaintenanceIcon,
  CustomSoftwareIcon,
  GameDevIcon,
  EngineeringIcon,
} from "@/components/ui/Icons";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string;
  icon: React.ReactNode;
}

function ServiceCard({
  title,
  description,
  tags,
  icon,
}: ServiceCardProps) {
  return (
    <div className="h-68 p-7 bg-dv-card rounded-lg flex flex-col justify-start items-start gap-6 overflow-hidden">
      <div className="w-full flex justify-between items-center overflow-hidden">
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {icon}
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-3 overflow-hidden">
        <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
          {title}
        </h3>
        <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
          {description}
        </p>
      </div>
      <span className="w-full text-dv-lime text-xs sm:text-sm font-medium font-sans tracking-normal leading-relaxed">
        {tags}
      </span>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full bg-dv-bg border-b border-dv-border">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Services we provide to build and scale your product
        </h2>

        {/* 6 Cards Grid (3 cols on desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="Website development"
            description="Fast, accessible websites that turn your brand into a better digital experience. Built for people, search, and scale."
            tags="Marketing sites / E-commerce / Web apps"
            icon={<WebDevIcon size={24} />}
          />
          <ServiceCard
            title="Website maintenance"
            description="Keep your website secure, current, and performing at its best. Proactive maintenance, without the technical overhead."
            tags="Updates / Security / Performance"
            icon={<MaintenanceIcon size={24} />}
          />
          <ServiceCard
            title="Custom software"
            description="Purpose-built tools for the way your business actually works. From customer platforms to complex internal systems."
            tags="SaaS / Business tools / Integrations"
            icon={<CustomSoftwareIcon size={24} />}
          />
          <ServiceCard
            title="Game development"
            description="Compelling worlds, responsive mechanics, and solid technical foundations. From playable prototype to polished release."
            tags="Unity / Unreal / Interactive experiences"
            icon={<GameDevIcon size={24} />}
          />
          <ServiceCard
            title="Engineering & infrastructure"
            description="Connect systems, modernize your stack, and make your infrastructure ready for what comes next."
            tags="APIs / Cloud / DevOps / Modernization"
            icon={<EngineeringIcon size={24} />}
          />

          {/* CTA Card */}
          <div className="h-68 p-7 rounded-lg flex flex-col justify-between items-start overflow-hidden">
            <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
              Not sure where to start?
            </span>
            <p className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
              Bring the challenge. We’ll find the right approach.
            </p>
            <Link
              href="/#contact"
              className="flex items-center gap-4 overflow-hidden group cursor-pointer"
            >
              <span className="text-dv-lime text-sm sm:text-base font-medium font-sans tracking-normal group-hover:underline">
                Let’s figure it out
              </span>
              <ArrowIcon color="lime" size="md" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
