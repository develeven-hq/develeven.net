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
  MaintenanceIcon,
  InspectIcon,
  LayersIcon,
  CustomSoftwareIcon,
  FoundationIcon,
  ResilienceIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Website Maintenance",
  description:
    "Proactive security, uptime monitoring, and continuous updates without the technical overhead. Maintained by DevEleven.",
};

const capabilities: CapabilityCardItem[] = [
  {
    icon: <MaintenanceIcon size={20} />,
    label: "Uptime & monitoring",
    statement:
      "24/7 uptime tracking, performance metrics, and rapid issue resolution before users notice.",
  },
  {
    icon: <ResilienceIcon size={20} />,
    label: "Security & updates",
    statement:
      "Routine dependency patching, security scans, and firewall monitoring to prevent vulnerabilities.",
  },
  {
    icon: <InspectIcon size={20} />,
    label: "Speed optimization",
    statement:
      "Continuous Core Web Vitals checks, cache audits, and asset tuning to maintain fast page loads.",
  },
  {
    icon: <LayersIcon size={20} />,
    label: "Content & UI changes",
    statement:
      "Monthly engineer hours for new sections, copy adjustments, component updates, and design polishes.",
  },
  {
    icon: <FoundationIcon size={20} />,
    label: "Automated backups",
    statement:
      "Scheduled offsite backups with verified rollback procedures so your data stays safe.",
  },
  {
    icon: <CustomSoftwareIcon size={20} />,
    label: "Engineering on call",
    statement:
      "Direct communication with engineers for priority bug fixes, technical guidance, and advice.",
  },
];

const maintenanceTechs = [
  { name: "Next.js", role: "Web platform", iconSrc: "/icons/tech/nextjs.svg" },
  { name: "React", role: "Frontend", iconSrc: "/icons/tech/react.svg" },
  { name: "TypeScript", role: "Type safety", iconSrc: "/icons/tech/typescript.svg" },
  { name: "Node.js", role: "Runtime", iconSrc: "/icons/tech/nodejs.svg" },
  { name: "PostgreSQL", role: "Database", iconSrc: "/icons/tech/postgresql.svg" },
  { name: "AWS", role: "Cloud & infra", iconSrc: "/icons/tech/aws.svg" },
];

const maintenanceProcessSteps = [
  {
    number: "01",
    title: "Audit & onboard",
    description:
      "We inspect your site, dependencies, hosting setup, and create a baseline health report.",
    deliverable: "Audit report + health baseline",
    icon: <InspectIcon size={20} />,
  },
  {
    number: "02",
    title: "Stabilize & secure",
    description:
      "We fix immediate security risks, update outdated packages, and set up continuous monitoring.",
    deliverable: "Monitoring setup + backups",
    icon: <FoundationIcon size={20} />,
  },
  {
    number: "03",
    title: "Routine updates",
    description:
      "We run monthly package audits, test security patches in staging, and maintain optimal speeds.",
    deliverable: "Monthly maintenance report",
    icon: <MaintenanceIcon size={20} />,
  },
  {
    number: "04",
    title: "Priority support",
    description:
      "Use your allocated hours for fast bug fixes, feature additions, or emergency triage.",
    deliverable: "Same-day ticket triage",
    icon: <ResilienceIcon size={20} />,
  },
];

const maintenanceFaqs: FAQItem[] = [
  {
    question: "Can you maintain a website you did not originally build?",
    answer:
      "Yes. Most of our maintenance clients come to us with existing codebases. We run an initial technical audit to identify risks and get things stabilized.",
  },
  {
    question: "How quickly do you respond to urgent downtime or bugs?",
    answer:
      "For critical downtime or broken workflows, our response window is within 1 to 2 hours. Routine updates and feature edits are handled during regular sprint cycles.",
  },
  {
    question: "What happens if we need more hours than our plan includes?",
    answer:
      "You can add extra development hours at a discounted retainer rate, or we can scope larger feature requests as a separate, fixed-price milestone.",
  },
  {
    question: "Do you handle hosting, domains, and DNS management?",
    answer:
      "Yes. We can manage your cloud infrastructure (Vercel, AWS, Cloudflare), renew SSL certificates, and configure DNS records as part of our service.",
  },
  {
    question: "Is there a long-term contract requirement?",
    answer:
      "No. Our maintenance retainers run on simple month-to-month terms. You can pause, adjust, or cancel with 30 days notice.",
  },
];

export default function WebsiteMaintenancePage() {
  return (
    <div className="w-full flex flex-col items-center bg-dv-bg">
      <ServiceHero
        badge="Services / Website Maintenance"
        title={
          <>
            Website maintenance
            <br />
            without the headache.
          </>
        }
        lead="Proactive security, uptime monitoring, speed improvements, and continuous updates. Reliable engineering support so you can focus on growth."
        primaryCtaText="Get a plan"
        primaryCtaHref="/pricing#websites"
        secondaryCtaText="Talk to us"
        secondaryCtaHref="/#contact"
      />
      <ServiceCapabilities
        heading="What we maintain and protect"
        items={capabilities}
      />
      <ServiceTechStack
        heading="Technologies and standards powering our builds"
        techs={maintenanceTechs}
      />
      <ServiceProcess
        heading="Our ongoing maintenance workflow"
        steps={maintenanceProcessSteps}
      />
      <FAQSection
        id="faq"
        heading="Common questions about website maintenance"
        faqs={maintenanceFaqs}
        inquiryTitle="Need reliable support for your site?"
        buttonText="Discuss maintenance"
        buttonHref="/#contact"
      />
      <CTABanner
        headline={
          <>
            Keep your site fast,
            <br />
            secure, and up to date.
          </>
        }
        buttonText="Let’s talk"
        ctaHref="/#contact"
      />
    </div>
  );
}
