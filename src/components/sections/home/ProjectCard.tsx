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
  technologies,
  href = "/#contact",
  reverse = false,
}: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 bg-dv-card rounded-2xl overflow-hidden">
      {/* Media Column */}
      <div
        className={`relative w-full aspect-16/10 lg:aspect-auto lg:min-h-112 bg-dv-bg overflow-hidden lg:col-span-7 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top"
        />
        <GrainOverlay className="opacity-20" />
      </div>

      {/* Content Column */}
      <div
        className={`flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10 lg:col-span-5 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-tight">
          {title}
        </h3>

        <p className="text-dv-lead text-sm sm:text-base font-normal font-sans leading-snug tracking-normal">
          {subtitle}
        </p>

        <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
          {description}
        </p>

        {technologies && technologies.length > 0 ? (
          <div className="mt-1 flex flex-wrap items-center gap-3 opacity-60">
            {technologies.map((tech) => (
              <Image
                key={tech.name}
                src={tech.iconSrc}
                alt={tech.name}
                width={18}
                height={18}
                className="h-4.5 w-4.5 object-contain brightness-0"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-2">
          <Button href={href} variant="primary">
            View project
          </Button>
        </div>
      </div>
    </article>
  );
}
