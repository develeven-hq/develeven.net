import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  {
    value: "12",
    suffix: "+",
    label: "Years of combined engineering experience",
  },
  {
    value: "40",
    suffix: "+",
    label: "Products shipped across web, software, and games",
  },
  {
    value: "98",
    suffix: "%",
    label: "Client retention across engagements",
  },
  {
    value: "11",
    suffix: "+",
    label: "Engineers and specialists on the team",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-16 flex flex-col gap-14 lg:gap-16 overflow-hidden">
        {/* Hero Row */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column */}
          <div className="flex-1 w-full flex flex-col items-start gap-7">
            <span className="text-dv-lime text-xs sm:text-sm font-semibold font-sans tracking-wide">
              Booking projects for early 2027
            </span>

            <h1 className="w-full text-dv-text text-6xl lg:text-7xl font-medium font-sans leading-[1.02] tracking-tight pb-2">
              Ambitious ideas.
              <br />
              Precisely
              <br />
              engineered.
            </h1>

            <div className="w-full max-w-xl flex flex-col items-start">
              <p className="w-full text-dv-lead text-base font-medium font-sans leading-relaxed">
                DevEleven is a software team. We build websites, applications, and games, and we stay on each project after the first release to keep it working.
              </p>
            </div>

            <div className="flex flex-wrap items-start gap-3">
              <Button href="/#contact" variant="primary">
                Discuss your project
              </Button>
              <Button href="/#services" variant="secondary">
                Explore our services
              </Button>
            </div>
          </div>

          {/* Right Column (Fig. 11 Card) */}
          <div className="w-full lg:w-120 xl:w-135 relative rounded-lg flex flex-col items-start overflow-hidden shrink-0">
            <Image
              src="/images/eleven-sculpture.png"
              alt="Built with intent"
              width={540}
              height={540}
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 480px, 540px"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Company Stats */}
        <dl className="w-full grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col gap-2",
                index % 2 === 1 ? "border-l border-dv-border pl-6" : "",
                index > 0
                  ? "lg:border-l lg:border-dv-border lg:pl-10"
                  : "lg:pl-0",
              ].join(" ")}
            >
              <dt className="text-dv-muted text-xs sm:text-sm font-medium font-sans leading-relaxed tracking-wide">
                {stat.label}
              </dt>
              <dd className="order-first text-dv-text text-4xl sm:text-5xl font-bold font-sans leading-none tracking-tight tabular-nums">
                {stat.value}
                {stat.suffix && (
                  <span className="text-dv-lime">{stat.suffix}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
