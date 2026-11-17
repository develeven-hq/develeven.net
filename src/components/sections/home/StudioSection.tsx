import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  TerminalIcon,
  CollaborationIcon,
  UptrendIcon,
} from "@/components/ui/Icons";
import GrainOverlay from "@/components/ui/GrainOverlay";

const STUDIO_TENETS = [
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
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          An engineer-led studio working directly with you
        </h2>

        {/* Two Rows Layout matching Services section */}
        <div className="w-full flex flex-col gap-4">
          {/* Row 1: Two Columns (Visual Card + Slogan & CTA Card) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* Card 1: Team photo */}
            <article className="relative w-full min-h-112 sm:min-h-128 lg:min-h-136 bg-dv-card rounded-2xl overflow-hidden">
              <Image
                src="/images/engineering-workspace.jpg"
                alt="DevEleven studio engineers collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <GrainOverlay className="opacity-25" />
            </article>

            {/* Card 2: Slogan, Summary & CTA */}
            <article className="w-full min-h-112 sm:min-h-128 lg:min-h-136 p-8 sm:p-12 lg:p-16 bg-dv-card rounded-2xl flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center gap-4 max-w-md">
                <h3 className="text-dv-text text-2xl sm:text-3xl lg:text-4xl font-normal font-sans tracking-tight leading-snug">
                  Engineers by trade. Partners by nature.
                </h3>
                <p className="text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                  DevEleven is an independent technology studio for teams who care about what they put into the world.
                </p>
              </div>
              <Button href="/#contact" variant="primary">
                Meet our team
              </Button>
            </article>
          </div>

          {/* Row 2: Three Tenet Columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {STUDIO_TENETS.map((tenet) => (
              <article
                key={tenet.title}
                className="w-full min-h-64 sm:min-h-72 p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between"
              >
                {/* Top: Icon Box */}
                <div className="size-10 flex items-center justify-center text-dv-text bg-dv-surface rounded-lg">
                  {tenet.icon}
                </div>

                {/* Bottom: Label & Description */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-dv-muted text-base font-normal font-sans tracking-normal">
                    {tenet.title}
                  </h3>
                  <p className="text-dv-text text-base sm:text-lg font-normal sm:font-normal font-sans leading-snug tracking-normal">
                    {tenet.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
