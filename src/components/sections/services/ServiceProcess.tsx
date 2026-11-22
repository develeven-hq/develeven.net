import React from "react";

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ReactNode;
}

export interface ServiceProcessProps {
  id?: string;
  heading?: string;
  steps: ProcessStepItem[];
}

export default function ServiceProcess({
  id = "process",
  heading = "Our development process from idea to release",
  steps,
}: ServiceProcessProps) {
  return (
    <section id={id} className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-normal font-sans tracking-tight leading-tight text-center">
          {heading}
        </h2>

        {/* Process Step Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-full h-full p-6 sm:p-7 lg:p-8 bg-dv-card rounded-2xl flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-5">
                {/* Header Row */}
                <div className="w-full flex items-center justify-between">
                  <div className="size-10 rounded-lg bg-dv-surface flex items-center justify-center text-dv-text shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-dv-text text-base sm:text-lg font-bold font-sans">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-dv-lead text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverable - Single clean line matching homepage ProcessSection */}
              <span className="w-full text-dv-muted text-xs sm:text-sm font-medium font-sans tracking-normal leading-relaxed">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
