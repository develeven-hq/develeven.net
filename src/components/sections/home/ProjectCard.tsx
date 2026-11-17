import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import GrainOverlay from "@/components/ui/GrainOverlay";

export interface ProjectTechnology {
  name: string;
  iconSrc: string;
}

export interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies?: ProjectTechnology[];
  href?: string;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  href = "/#contact",
}: ProjectCardProps) {
  return (
    <article className="group w-full h-full bg-dv-card rounded-2xl overflow-hidden flex flex-col justify-between">
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
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-1">
            <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-tight">
              {title}
            </h3>
            <p className="text-dv-lead text-sm sm:text-base font-normal font-sans leading-snug tracking-normal">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Button href={href} variant="secondary-inset">
            View project
          </Button>
        </div>
      </div>
    </article>
  );
}
