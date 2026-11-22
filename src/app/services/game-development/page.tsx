import type { Metadata } from "next";
import React from "react";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceCapabilities, {
  CapabilityCardItem,
} from "@/components/sections/services/ServiceCapabilities";
import ServiceTechStack from "@/components/sections/services/ServiceTechStack";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/home/CTABanner";
import {
  GameDevIcon,
  InspectIcon,
  LayersIcon,
  EngineeringIcon,
  FoundationIcon,
  ResilienceIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Game Development",
  description:
    "Compelling worlds, responsive mechanics, and solid technical foundations from prototype to release. Engineered by DevEleven.",
};

const capabilities: CapabilityCardItem[] = [
  {
    icon: <GameDevIcon size={20} />,
    label: "Core gameplay mechanics",
    statement:
      "Tight character controllers, physics-driven interactions, and intuitive player controls.",
  },
  {
    icon: <InspectIcon size={20} />,
    label: "Playable prototyping",
    statement:
      "Fast vertical slices to test and validate fun, pacing, and mechanics before scaling production.",
  },
  {
    icon: <LayersIcon size={20} />,
    label: "Multiplatform support",
    statement:
      "Consistent performance, responsive UI, and custom control schemes across PC, Mac, and mobile.",
  },
  {
    icon: <FoundationIcon size={20} />,
    label: "Systems & architecture",
    statement:
      "Clean inventory, quest, progression, and save systems designed to be easily expanded.",
  },
  {
    icon: <EngineeringIcon size={20} />,
    label: "Backend & telemetry",
    statement:
      "Cloud saves, leaderboards, player analytics, and game server integrations.",
  },
  {
    icon: <ResilienceIcon size={20} />,
    label: "Profiling & optimization",
    statement:
      "Frame-rate stabilization, asset optimization, and memory management for smooth performance.",
  },
];

const gameTechs = [
  { name: "Unity", role: "Game engine", iconSrc: "/icons/tech/unity.svg" },
  { name: "C#", role: "Programming", iconSrc: "/icons/tech/csharp.svg" },
  { name: "Blender", role: "3D assets", iconSrc: "/icons/tech/blender.svg" },
  { name: "OpenGL", role: "Rendering", iconSrc: "/icons/tech/opengl.svg" },
  { name: "Python", role: "Pipeline & tools", iconSrc: "/icons/tech/python.svg" },
  { name: "AWS", role: "Game backend", iconSrc: "/icons/tech/aws.svg" },
];

const gameProcessSteps = [
  {
    number: "01",
    title: "Concept & prototype",
    description:
      "We build a fast, playable slice to test core mechanics, controls, and game feel.",
    deliverable: "Playable prototype",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Systems design",
    description:
      "We architect gameplay loops, input handling, and technical systems for the build.",
    deliverable: "Technical design doc",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Production sprints",
    description:
      "We build out levels, audio, UI polish, and mechanics in focused iterative sprints.",
    deliverable: "Sprint builds + test passes",
    icon: <GameDevIcon size={20} />,
  },
  {
    number: "04",
    title: "Polish & release",
    description:
      "Platform profiling, hardware optimization, bug fixes, and store submission.",
    deliverable: "Release build + store assets",
    icon: <ResilienceIcon size={20} />,
  },
];

const gameFaqs: FAQItem[] = [
  {
    question: "Which game engines do you specialize in?",
    answer:
      "We primarily develop in Unity using C# for 2D, 3D, and cross-platform projects. We also build custom web-based interactive experiences using Three.js and WebGL.",
  },
  {
    question: "Can you help with just game programming or full development?",
    answer:
      "Both. We can serve as your full-cycle development team (prototype to launch) or provide specialized technical engineering to implement complex game systems.",
  },
  {
    question: "Do you build for mobile, PC, or web?",
    answer:
      "We build for PC (Steam), Mac, iOS, Android, and web browsers, ensuring responsive input schemes and smooth frame rates across each platform.",
  },
  {
    question: "How do you test game balance and performance?",
    answer:
      "We perform regular profiling passes on target hardware, measure draw calls and memory allocations, and run iterative playtests to fine-tune pacing.",
  },
  {
    question: "Can you take over an in-progress game project?",
    answer:
      "Yes. We can audit your existing Unity project, refactor buggy systems, optimize frame rates, and guide the title to completion.",
  },
];

export default function GameDevelopmentPage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <ServiceHero
        badge="Services / Game Development"
        title={
          <>
            Games engineered with
            <br />
            feel and precision.
          </>
        }
        lead="Responsive gameplay mechanics, immersive environments, and solid technical foundations. From early prototype to multiplatform release."
        primaryCtaText="Start a project"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore our work"
        secondaryCtaHref="/#work"
      />
      <ServiceCapabilities
        heading="What we build and deliver"
        items={capabilities}
      />
      <ServiceTechStack
        heading="Technologies and standards powering our builds"
        techs={gameTechs}
      />
      <ServiceProcess
        heading="Our development process from idea to release"
        steps={gameProcessSteps}
      />
      <FAQSection
        id="faq"
        heading="Common questions about game development"
        faqs={gameFaqs}
        inquiryTitle="Got a game concept in mind?"
        buttonText="Discuss your game"
        buttonHref="/#contact"
      />
      <CTABanner
        headline={
          <>
            Got a game in mind?
            <br />
            Let’s make it playable.
          </>
        }
        buttonText="Let’s talk"
        ctaHref="/#contact"
      />
    </div>
  );
}
