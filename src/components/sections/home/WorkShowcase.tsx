import React from "react";
import ProjectCard, { ProjectCardProps } from "@/components/sections/home/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    id: "orbit",
    title: "Orbit",
    subtitle: "Complex workflows. One clear view.",
    description:
      "A connected operations platform with real-time reporting, role-based access, and automated workflow handoffs built to replace fragmented spreadsheets.",
    imageSrc: "/images/operations-dashboard.jpg",
    imageAlt: "Orbit operations platform dashboard preview",
    technologies: [
      { name: "React", iconSrc: "/icons/tech/react.svg" },
      { name: "Next.js", iconSrc: "/icons/tech/nextjs.svg" },
      { name: "TypeScript", iconSrc: "/icons/tech/typescript.svg" },
      { name: "Tailwind CSS", iconSrc: "/icons/tech/tailwindcss.svg" },
      { name: "Node.js", iconSrc: "/icons/tech/nodejs.svg" },
      { name: "PostgreSQL", iconSrc: "/icons/tech/postgresql.svg" },
    ],
    href: "/#contact",
  },
  {
    id: "afterlight",
    title: "Afterlight",
    subtitle: "A world worth getting lost in.",
    description:
      "An atmospheric exploration experience combining immersive procedural environments, responsive gameplay mechanics, and scalable runtime systems.",
    imageSrc: "/images/exploration-game.png",
    imageAlt: "Afterlight atmospheric exploration game preview",
    technologies: [
      { name: "Unity", iconSrc: "/icons/tech/unity.svg" },
      { name: "C#", iconSrc: "/icons/tech/csharp.svg" },
      { name: "Blender", iconSrc: "/icons/tech/blender.svg" },
      { name: "OpenGL / Shaders", iconSrc: "/icons/tech/opengl.svg" },
    ],
    href: "/#contact",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          Selected projects and build concepts
        </h2>

        {/* Projects */}
        <div className="w-full flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
