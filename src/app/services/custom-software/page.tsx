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
  CustomSoftwareIcon,
  InspectIcon,
  LayersIcon,
  EngineeringIcon,
  FoundationIcon,
  ResilienceIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Custom Software",
  description:
    "Purpose-built tools, client platforms, and SaaS products tailored to how you operate. Engineered by DevEleven.",
};

const capabilities: CapabilityCardItem[] = [
  {
    icon: <CustomSoftwareIcon size={20} />,
    label: "SaaS products & MVPs",
    statement:
      "Turning product concepts into resilient, production-ready web platforms that scale.",
  },
  {
    icon: <LayersIcon size={20} />,
    label: "Internal tools & portals",
    statement:
      "Custom dashboards, admin consoles, and workflow tools designed to streamline daily operations.",
  },
  {
    icon: <EngineeringIcon size={20} />,
    label: "APIs & integrations",
    statement:
      "Connecting third-party platforms, payment gateways, and databases with rock-solid API design.",
  },
  {
    icon: <FoundationIcon size={20} />,
    label: "Database architecture",
    statement:
      "Practical schema design, reliable data modeling, and performance tuning for fast queries.",
  },
  {
    icon: <InspectIcon size={20} />,
    label: "Audits & refactoring",
    statement:
      "Diagnosing bottlenecks, untangling legacy code, and stabilizing existing systems without full rewrites.",
  },
  {
    icon: <ResilienceIcon size={20} />,
    label: "Security & permissions",
    statement:
      "Role-based access, authentication flows, and data encryption built in from day one.",
  },
];

const softwareTechs = [
  { name: "TypeScript", role: "Type safety", iconSrc: "/icons/tech/typescript.svg" },
  { name: "React", role: "Frontend", iconSrc: "/icons/tech/react.svg" },
  { name: "Node.js", role: "Runtime", iconSrc: "/icons/tech/nodejs.svg" },
  { name: "Python", role: "Backend & tools", iconSrc: "/icons/tech/python.svg" },
  { name: "PostgreSQL", role: "Database", iconSrc: "/icons/tech/postgresql.svg" },
  { name: "AWS", role: "Cloud & infra", iconSrc: "/icons/tech/aws.svg" },
];

const softwareProcessSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We dig into your workflow, pain points, and user requirements before designing solutions.",
    deliverable: "Workflow audit + roadmap",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define database schemas, API contracts, and user journey prototypes.",
    deliverable: "System architecture + schema",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We ship focused iterations with working functionality, automated tests, and regular demos.",
    deliverable: "Production code + test suite",
    icon: <CustomSoftwareIcon size={20} />,
  },
  {
    number: "04",
    title: "Deploy & support",
    description:
      "We deploy to your cloud infrastructure, hand over documentation, and provide ongoing support.",
    deliverable: "Live system + documentation",
    icon: <ResilienceIcon size={20} />,
  },
];

const softwareFaqs: FAQItem[] = [
  {
    question: "What kind of custom software do you build?",
    answer:
      "We specialize in web applications, SaaS platforms, internal business dashboards, client portals, and bespoke API backends tailored to specific business operations.",
  },
  {
    question: "Will we own the intellectual property and code?",
    answer:
      "Yes, absolutely. Full ownership of all source code, database schemas, and documentation is transferred to you on completion with zero vendor lock-in.",
  },
  {
    question: "Can you build on our existing codebase?",
    answer:
      "Yes. We regularly take over, stabilize, and expand existing codebases. We begin with a code audit to understand your system's current state and risks.",
  },
  {
    question: "How do you ensure software quality and reliability?",
    answer:
      "Every project includes type safety with TypeScript, automated test suites, code reviews, and preview deployments before pushing changes to production.",
  },
  {
    question: "Which cloud providers do you support?",
    answer:
      "We work primarily with AWS, Cloudflare, and Vercel, but we can deploy to any modern cloud infrastructure or VPS that your company requires.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <ServiceHero
        badge="Services / Custom Software"
        title={
          <>
            Custom software built
            <br />
            for how you work.
          </>
        }
        lead="Purpose-built internal tools, client portals, and SaaS platforms. We engineer reliable software that fits your operations."
        primaryCtaText="Start a project"
        primaryCtaHref="/#contact"
        secondaryCtaText="View pricing"
        secondaryCtaHref="/pricing"
      />
      <ServiceCapabilities
        heading="What we build and deliver"
        items={capabilities}
      />
      <ServiceTechStack
        heading="Technologies and standards powering our builds"
        techs={softwareTechs}
      />
      <ServiceProcess
        heading="Our development process from idea to release"
        steps={softwareProcessSteps}
      />
      <FAQSection
        id="faq"
        heading="Common questions about custom software"
        faqs={softwareFaqs}
        inquiryTitle="Have a complex workflow to solve?"
        buttonText="Discuss your project"
        buttonHref="/#contact"
      />
      <CTABanner
        headline={
          <>
            Complex workflow?
            <br />
            Let’s build the solution.
          </>
        }
        buttonText="Let’s talk"
        ctaHref="/#contact"
      />
    </div>
  );
}
