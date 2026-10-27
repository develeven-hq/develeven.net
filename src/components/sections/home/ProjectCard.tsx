import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/Icons";

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
      <div className="w-full relative aspect-16/10 sm:aspect-video bg-zinc-900 overflow-hidden">
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
            <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans tracking-tight group-hover:text-dv-lime transition-colors">
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
