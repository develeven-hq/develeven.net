import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, getProjectTypeIcon } from "@/components/ui/Icons";

export interface TechIconItem {
  name: string;
  icon?: React.ReactNode;
  iconSrc?: string;
}

export interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  category?: string;
  type?: "website" | "application" | "game" | string;
  typeIcon?: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies?: TechIconItem[];
  tags?: string[];
  href?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  category,
  type,
  typeIcon,
  description,
  imageSrc,
  imageAlt,
  technologies,
  tags,
  href = "/#contact",
}: ProjectCardProps) {
  const resolvedTypeIcon =
    typeIcon || getProjectTypeIcon(type || category, { size: 20 });
  return (
    <Link
      href={href}
      className="w-full flex flex-col h-full bg-dv-card rounded-2xl overflow-hidden group cursor-pointer transition-colors duration-300 hover:bg-dv-card/80"
    >
      {/* Clean Media Presentation Frame */}
      <div className="w-full relative aspect-16/10 sm:aspect-video bg-dv-bg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
        <div className="flex flex-col items-start gap-3">
          {/* Title & Interactive Arrow */}
          <div className="w-full flex items-center justify-between gap-4">
            <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans tracking-tight transition-colors flex items-center gap-2.5">
              {resolvedTypeIcon && (
                <span className="text-dv-text shrink-0 flex items-center justify-center">
                  {resolvedTypeIcon}
                </span>
              )}
              <span>{title}</span>
            </h3>
            <div className="w-8 h-8 rounded-md bg-dv-surface flex items-center justify-center shrink-0 group-hover:bg-dv-border transition-all">
              <ArrowUpRight
                size={18}
                className="text-dv-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          </div>

          {/* Attention-Grabbing Subtitle */}
          <p className="text-dv-text text-base font-medium font-sans leading-snug">
            {subtitle}
          </p>

          {/* High-Contrast Description */}
          <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            {description}
          </p>
        </div>

        {/* Tech Stack Icons or Fallback Tags */}
        {technologies && technologies.length > 0 ? (
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                aria-label={tech.name}
                className="group/tech relative flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-default"
              >
                {tech.iconSrc ? (
                  <Image
                    src={tech.iconSrc}
                    alt={tech.name}
                    width={22}
                    height={22}
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain"
                  />
                ) : (
                  <span className="flex items-center justify-center text-lg sm:text-xl">
                    {tech.icon}
                  </span>
                )}
                {/* Floating tooltip */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-dv-text text-dv-bg text-xs font-medium font-sans rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-md z-10"
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ) : tags && tags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-dv-border text-dv-text text-xs font-medium font-sans tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
