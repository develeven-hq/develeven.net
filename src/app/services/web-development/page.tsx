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
  WebDevIcon,
  InspectIcon,
  LayersIcon,
  FoundationIcon,
  CommerceIcon,
  CustomSoftwareIcon,
  ResilienceIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Fast, accessible websites and web apps built for performance, search, and scale. Engineered by DevEleven.",
};

const capabilities: CapabilityCardItem[] = [
  {
    icon: <WebDevIcon size={20} />,
    label: "Marketing & brand sites",
    statement:
      "Fast, accessible websites built to reflect your brand and convert visitors.",
  },
  {
    icon: <CustomSoftwareIcon size={20} />,
    label: "Web applications",
    statement:
      "Dynamic client portals, dashboards, and internal platforms built with React and TypeScript.",
  },
  {
    icon: <LayersIcon size={20} />,
    label: "Content management",
    statement:
      "Flexible headless CMS setups so your team can edit and publish without developer bottlenecks.",
  },
  {
    icon: <CommerceIcon size={20} />,
    label: "E-commerce",
    statement:
      "Frictionless storefronts with secure checkout, Stripe integration, and simple order flows.",
  },
  {
    icon: <InspectIcon size={20} />,
    label: "Performance & SEO",
    statement:
      "Clean semantic markup, optimized load times, and structured data so search engines index you first.",
  },
  {
    icon: <FoundationIcon size={20} />,
    label: "Codebase refactors",
    statement:
      "Auditing, untangling, and speeding up existing sites without having to start over from scratch.",
  },
];

const webTechs = [
  { name: "React", role: "Frontend", iconSrc: "/icons/tech/react.svg" },
  { name: "Next.js", role: "Framework", iconSrc: "/icons/tech/nextjs.svg" },
  { name: "TypeScript", role: "Type safety", iconSrc: "/icons/tech/typescript.svg" },
  { name: "Tailwind CSS", role: "Styling", iconSrc: "/icons/tech/tailwindcss.svg" },
  { name: "PostgreSQL", role: "Database", iconSrc: "/icons/tech/postgresql.svg" },
  { name: "AWS", role: "Cloud & infra", iconSrc: "/icons/tech/aws.svg" },
];

const webProcessSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We define the problem, the audience, and technical goals before touching any code.",
    deliverable: "Project brief + roadmap",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We map out the component system, data flow, and responsive prototypes.",
    deliverable: "Prototypes + technical plan",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We build in iterative sprints with Next.js, preview URLs, and frequent check-ins.",
    deliverable: "Working code + staging link",
    icon: <WebDevIcon size={20} />,
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We run final speed audits, handle zero-downtime deployment, and provide post-launch warranty.",
    deliverable: "Production release + docs",
    icon: <ResilienceIcon size={20} />,
  },
];

const webFaqs: FAQItem[] = [
  {
    question: "What tech stack do you recommend for new websites?",
    answer:
      "We build primarily with Next.js, React, TypeScript, and Tailwind CSS. It gives great performance, clean developer ergonomics, and long-term maintainability.",
  },
  {
    question: "How long does a website development project take?",
    answer:
      "A typical marketing website takes 2 to 4 weeks. Larger platforms with CMS or e-commerce integrations usually take 4 to 8 weeks.",
  },
  {
    question: "Will our team be able to update content directly?",
    answer:
      "Yes. We integrate easy-to-use headless CMS tools (like Sanity or Strapi) so your team can edit copy and images without touching code.",
  },
  {
    question: "Can you improve or fix our existing website?",
    answer:
      "Yes. We regularly take over and improve existing codebases - whether that means fixing speed issues, updating components, or migrating to Next.js.",
  },
  {
    question: "Will we own the code when the project finishes?",
    answer:
      "Yes. Full ownership of all code, assets, and documentation belongs to you from day one. No lock-in.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <ServiceHero
        badge="Services / Website Development"
        title={
          <>
            Websites built to
            <br />
            perform and scale.
          </>
        }
        lead="Fast, accessible websites and web apps built to last. We focus on clean code, dependable architecture, and thoughtful execution."
        primaryCtaText="Start a project"
        primaryCtaHref="/#contact"
        secondaryCtaText="View pricing"
        secondaryCtaHref="/pricing#websites"
      />
      <ServiceCapabilities
        heading="What we build and deliver"
        items={capabilities}
      />
      <ServiceTechStack
        heading="Technologies and standards powering our builds"
        techs={webTechs}
      />
      <ServiceProcess
        heading="Our development process from idea to release"
        steps={webProcessSteps}
      />
      <FAQSection
        id="faq"
        heading="Common questions about our web development"
        faqs={webFaqs}
        inquiryTitle="Have a specific project in mind?"
        buttonText="Discuss your project"
        buttonHref="/#contact"
      />
      <CTABanner
        headline={
          <>
            Big ambition?
            <br />
            Let’s build your website.
          </>
        }
        buttonText="Let’s talk"
        ctaHref="/#contact"
      />
    </div>
  );
}
