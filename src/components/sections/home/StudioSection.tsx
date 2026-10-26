import React from "react";
import Image from "next/image";
import {
  TerminalIcon,
  CollaborationIcon,
  UptrendIcon,
} from "@/components/ui/Icons";

const studioTenets = [
  {
    title: "Engineer-led",
    description:
      "Every scoping session, architectural decision, and technical review is led by practitioners who actively write production code.",
    icon: <TerminalIcon size={24} />,
  },
  {
    title: "Collaborative",
    description:
      "We integrate directly alongside your team with shared git repositories, transparent sprint updates, and direct channel access.",
    icon: <CollaborationIcon size={24} />,
  },
  {
    title: "Long-term minded",
    description:
      "We build clean architectures, write meaningful tests, and deliver clean documentation your team can confidently take forward.",
    icon: <UptrendIcon size={24} />,
  },
];

export default function StudioSection() {
  return (
    <section id="studio" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-12 lg:gap-16 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          An engineer-led studio working directly with you
        </h2>

        {/* Top Tier: 2-Column Overview (Image Card + Narrative Card) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Media Card */}
          <div className="w-full relative rounded-lg bg-dv-card overflow-hidden min-h-75 sm:min-h-90 lg:min-h-full flex flex-col justify-end p-6">
            <Image
              src="/images/engineering-workspace.jpg"
              alt="DevEleven studio engineers collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Narrative Card */}
          <div className="w-full bg-dv-card rounded-lg p-6 sm:p-8 lg:p-9 flex flex-col justify-between gap-6">
            <div className="w-full flex flex-col items-start gap-4">
              <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                Engineers by trade. Partners by nature.
              </h3>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                DevEleven is an independent technology studio for teams who care about what they put into the world. We bring curious thinking, hands-on engineering, and a shared sense of ownership to every project.
              </p>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                You work directly with the people building your product. Less translation, better decisions, and a closer partnership from first commit to production.
              </p>
            </div>

            {/* Bottom Section - matching EngagementCard style */}
            <div className="w-full pt-5 border-t border-dv-border flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-wide">
                How we operate
              </span>
              <p className="w-full text-dv-text text-sm sm:text-base font-medium font-sans">
                Senior practitioners only. Direct Slack and repository access on every project.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: 3 Core Studio Tenets */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {studioTenets.map((tenet) => (
            <div
              key={tenet.title}
              className="w-full p-6 pb-8 sm:p-8 sm:pb-12 bg-dv-card rounded-lg flex flex-col gap-4 overflow-hidden"
            >
              <div className="w-8 h-8 flex items-center justify-center text-dv-lime">
                {tenet.icon}
              </div>
              <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                {tenet.title}
              </h3>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
