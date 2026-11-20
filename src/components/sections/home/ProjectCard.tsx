import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import GrainOverlay from "@/components/ui/GrainOverlay";

export interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  deliverableBadge?: string;
  sector?: string;
  technologies?: string[];
  metrics?: {
    value: string;
    label: string;
  };
  href?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  deliverableBadge,
  sector,
  technologies = [],
  metrics,
  href = "/#contact",
}: ProjectCardProps) {
  return (
    <article className="group w-full h-full bg-dv-card rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200">
      {/* Top: Media Container */}
      <div className="relative w-full aspect-16/10 bg-dv-surface overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <GrainOverlay className="opacity-20" />
      </div>

      {/* Bottom: Content Container */}
      <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="flex flex-col gap-4">
          {/* Deliverable Badge & Sector Pills */}
          {(deliverableBadge || sector) && (
            <div className="flex items-center flex-wrap gap-2">
              {deliverableBadge && (
                <span className="bg-blue-50/80 text-blue-600 outline outline-1 outline-blue-200 font-medium font-sans text-xs px-3 py-1.5 rounded-full">
                  {deliverableBadge}
                </span>
              )}
              {sector && (
                <span className="bg-dv-surface text-dv-muted font-medium font-sans text-xs px-3 py-1.5 rounded-full">
                  {sector}
                </span>
              )}
            </div>
          )}

          {/* Title & Subtitle */}
          <div className="flex flex-col gap-1">
            <h3 className="text-dv-text text-2xl sm:text-3xl font-normal font-sans leading-snug">
              {title} — {subtitle}
            </h3>
          </div>

          {/* Description */}
          <p className="text-dv-lead text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            {description}
          </p>

          {/* Tech Stack Pills */}
          {/* {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-dv-surface text-dv-text font-medium font-sans text-xs px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )} */}
        </div>

        {/* Footer: Metric & Action */}
        <div className="pt-4 border-t border-dv-border flex items-center justify-between gap-4">
          {metrics ? (
            <div className="flex flex-col">
              <span className="text-dv-text text-base sm:text-lg font-medium font-sans leading-tight">
                {metrics.value}
              </span>
              <span className="text-dv-muted text-xs font-normal font-sans">
                {metrics.label}
              </span>
            </div>
          ) : (
            <div />
          )}

          <Button href={href} variant="secondary-inset">
            View project
          </Button>
        </div>
      </div>
    </article>
  );
}
