import React from "react";
import ProjectCard, { ProjectCardProps } from "@/components/sections/home/ProjectCard";
import Button from "@/components/ui/Button";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiUnity,
  SiBlender,
  SiOpengl,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const projects: ProjectCardProps[] = [
  {
    id: "orbit",
    title: "Orbit",
    subtitle: "Complex workflows. One clear view.",
    imageSrc: "/images/operations-dashboard.png",
    imageAlt: "Orbit operations platform dashboard preview",
    description:
      "A connected operations platform with real-time reporting, role-based access, and automated workflow handoffs built to replace fragmented spreadsheets.",
    technologies: [
      { name: "React", icon: <SiReact size={17} /> },
      { name: "Next.js", icon: <SiNextdotjs size={17} /> },
      { name: "TypeScript", icon: <SiTypescript size={17} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={17} /> },
      { name: "Node.js", icon: <SiNodedotjs size={17} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={17} /> },
    ],
    href: "/#contact",
  },
  {
    id: "afterlight",
    title: "Afterlight",
    subtitle: "A world worth getting lost in.",
    imageSrc: "/images/exploration-game.png",
    imageAlt: "Afterlight atmospheric exploration game preview",
    description:
      "An atmospheric exploration experience combining immersive procedural environments, responsive gameplay mechanics, and scalable runtime systems.",
    technologies: [
      { name: "Unity", icon: <SiUnity size={17} /> },
      { name: "C#", icon: <TbBrandCSharp size={18} /> },
      { name: "Blender", icon: <SiBlender size={17} /> },
      { name: "OpenGL / Shaders", icon: <SiOpengl size={17} /> },
    ],
    href: "/#contact",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-dv-card">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-12 lg:gap-16">
        {/* Centered Heading */}
        <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Selected projects and build concepts
        </h2>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* See All Works CTA Button */}
        <div className="flex justify-center items-center pt-2">
          <Button
            href="/#contact"
            variant="secondary"
            className="hover:text-dv-lime transition-colors"
          >
            See all works
          </Button>
        </div>
      </div>
    </section>
  );
}

