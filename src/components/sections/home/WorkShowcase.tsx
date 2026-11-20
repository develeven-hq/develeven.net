"use client";

import React, { useState } from "react";
import ProjectCard, { ProjectCardProps } from "@/components/sections/home/ProjectCard";
import {
  SlidersHorizontalIcon,
  WebDevIcon,
  GameDevIcon,
} from "@/components/ui/Icons";

interface ShowcaseProject extends ProjectCardProps {
  category: "platforms" | "graphics";
}

const projects: ShowcaseProject[] = [
  {
    id: "orbit",
    category: "platforms",
    deliverableBadge: "Website",
    sector: "Enterprise tooling",
    title: "Orbit",
    subtitle: "Complex workflows. One clear view.",
    description:
      "A connected operations platform with real-time reporting, role-based access, and automated workflow handoffs built to replace fragmented spreadsheets.",
    technologies: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL", "Tailwind CSS"],
    metrics: {
      value: "< 50ms",
      label: "Sync latency",
    },
    imageSrc: "/images/operations-dashboard.jpg",
    imageAlt: "Orbit operations platform dashboard preview",
    href: "/#contact",
  },
  {
    id: "afterlight",
    category: "graphics",
    deliverableBadge: "3D Game",
    sector: "Interactive 3D simulation",
    title: "Afterlight",
    subtitle: "A world worth getting lost in.",
    description:
      "An atmospheric exploration experience combining immersive procedural environments, responsive gameplay mechanics, and scalable runtime systems.",
    technologies: ["Three.js", "WebGL", "WebAssembly", "GLSL Shaders", "TypeScript"],
    metrics: {
      value: "60 FPS",
      label: "Runtime performance",
    },
    imageSrc: "/images/exploration-game.png",
    imageAlt: "Afterlight atmospheric exploration game preview",
    href: "/#contact",
  },
];

const filterCategories = [
  { id: "all", label: "All builds", count: 2, icon: SlidersHorizontalIcon },
  { id: "platforms", label: "Web platforms", count: 1, icon: WebDevIcon },
  { id: "graphics", label: "Graphics & 3D", count: 1, icon: GameDevIcon },
] as const;

type FilterId = (typeof filterCategories)[number]["id"];

export default function WorkShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="work" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-12 lg:gap-16">
        {/* Centered Heading */}
        <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          Selected projects and <br/>
          build concepts
        </h2>

        {/* Category Switcher */}
        <div className="w-full flex justify-center">
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-dv-control outline outline-1 outline-dv-border max-w-full overflow-x-auto">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  className={`group inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-dv-text shadow-xs"
                      : "text-dv-muted hover:text-dv-text hover:bg-dv-control-hover/60"
                  }`}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-dv-text" : "text-dv-muted group-hover:text-dv-text"
                    }`}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two Columns Grid of Vertical Project Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
