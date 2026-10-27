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
    imageSrc: "/images/operations-dashboard.jpg",
    imageAlt: "Orbit operations platform dashboard preview",
    description:
      "A connected operations platform with real-time reporting, role-based access, and automated workflow handoffs built to replace fragmented spreadsheets.",
    technologies: [
      {
        name: "React",
        iconSrc: "/icons/tech/react.svg",
        icon: <SiReact size={20} className="text-[#61DAFB]" />,
      },
      {
        name: "Next.js",
        iconSrc: "/icons/tech/nextjs.svg",
        icon: <SiNextdotjs size={20} className="text-white" />,
      },
      {
        name: "TypeScript",
        iconSrc: "/icons/tech/typescript.svg",
        icon: <SiTypescript size={20} className="text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/icons/tech/tailwindcss.svg",
        icon: <SiTailwindcss size={20} className="text-[#38BDF8]" />,
      },
      {
        name: "Node.js",
        iconSrc: "/icons/tech/nodejs.svg",
        icon: <SiNodedotjs size={20} className="text-[#5FA04E]" />,
      },
      {
        name: "PostgreSQL",
        iconSrc: "/icons/tech/postgresql.svg",
        icon: <SiPostgresql size={20} className="text-[#336791]" />,
      },
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
      {
        name: "Unity",
        iconSrc: "/icons/tech/unity.svg",
        icon: <SiUnity size={20} className="text-white" />,
      },
      {
        name: "C#",
        iconSrc: "/icons/tech/csharp.svg",
        icon: <TbBrandCSharp size={21} className="text-[#9B4993]" />,
      },
      {
        name: "Blender",
        iconSrc: "/icons/tech/blender.svg",
        icon: <SiBlender size={20} className="text-[#EA7600]" />,
      },
      {
        name: "OpenGL / Shaders",
        iconSrc: "/icons/tech/opengl.svg",
        icon: <SiOpengl size={20} className="text-[#5586A4]" />,
      },
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

