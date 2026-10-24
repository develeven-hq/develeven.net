import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

export interface TechIconItem {
  name: string;
  icon: React.ReactNode;
}

export interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  category?: string;
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
  description,
  imageSrc,
  imageAlt,
  technologies,
  tags,
  href = "/#contact",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="w-full flex flex-col h-full bg-dv-surface/80 rounded-lg overflow-hidden group cursor-pointer transition-colors duration-300 hover:bg-zinc-800"
    >
      {/* Clean Media Presentation Frame */}
      <div className="w-full relative aspect-16/10 sm:aspect-16/9 bg-zinc-900 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* Subtle Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
        <div className="flex flex-col items-start gap-3">
          {/* Title & Interactive Arrow */}
          <div className="w-full flex items-center justify-between gap-4">
            <h3 className="text-dv-text text-2xl sm:text-3xl font-bold font-sans tracking-tight group-hover:text-dv-lime transition-colors">
              {title}
            </h3>
            <div className="w-8 h-8 rounded-md bg-zinc-700/50 flex items-center justify-center shrink-0 group-hover:bg-dv-lime group-hover:text-dv-dark transition-all">
              <ArrowUpRight
                size={18}
                className="text-zinc-200 group-hover:text-dv-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          </div>

          {/* Attention-Grabbing Subtitle */}
          <p className="text-zinc-300 text-base sm:text-lg font-medium font-sans leading-snug">
            {subtitle}
          </p>

          {/* High-Contrast Description */}
          <p className="text-zinc-300 text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
            {description}
          </p>
        </div>

        {/* Tech Stack Icons or Fallback Tags */}
        {technologies && technologies.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                aria-label={tech.name}
                className="group/tech relative w-8 h-8 rounded-md bg-zinc-700/60 hover:bg-zinc-700 flex items-center justify-center text-zinc-100 hover:text-white transition-all cursor-default"
              >
                <span className="flex items-center justify-center text-base">
                  {tech.icon}
                </span>
                {/* Floating tooltip */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-950 text-zinc-100 text-xs font-medium font-sans rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-md z-10"
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
                className="px-2.5 py-1 rounded-md bg-zinc-700/70 text-zinc-100 text-xs font-medium font-sans tracking-wide"
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
