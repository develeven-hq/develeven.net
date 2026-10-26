"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { PlusIcon, MinusIcon, FaqIcon } from "@/components/ui/Icons";

export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    question: "What do you need to get started?",
    answer:
      "You don’t need a perfect brief. Bring your idea, the problem you want to solve, and any goals or constraints you already know. We’ll help define the scope, explore the options, and agree on a practical next step.",
  },
  {
    question: "Can you work with our existing website or codebase?",
    answer:
      "Yes. We regularly inherit and improve existing projects. A technical review helps us understand the current state so we can give you an honest assessment and a clear path forward.",
  },
  {
    question: "How do you estimate cost and timelines?",
    answer:
      "We base estimates on scope, complexity, and your delivery constraints. After an initial conversation we’ll give you a clear proposal with milestones, deliverables, and transparent pricing.",
  },
  {
    question: "Will we own the code and source files?",
    answer:
      "Yes. Full ownership of all code, assets, and documentation is transferred to you on completion. No lock-in, no hidden licensing.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing maintenance plans for security updates, performance, and continuous improvement. Or we hand over cleanly — your choice. Either way, you leave with clear documentation.",
  },
];

export interface FAQSectionProps {
  id?: string;
  heading?: string;
  faqs?: FAQItem[];
  inquiryTitle?: string;
  inquiryDescription?: string;
  buttonText?: string;
  buttonHref?: string;
  bgVariant?: "bg" | "card";
}

export default function FAQSection({
  id = "faq",
  heading = "Common questions about working with us",
  faqs = homeFaqs,
  inquiryTitle = "Have a question not answered here?",
  inquiryDescription = "We’re an engineer-led studio with zero sales pressure. Whether you have an existing codebase or an early concept, we’re happy to discuss your specific requirements.",
  buttonText = "Discuss your project",
  buttonHref = "/#contact",
  bgVariant = "bg",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isCardVariant = bgVariant === "card";
  const sectionBg = isCardVariant ? "bg-dv-card" : "bg-dv-bg";
  const cardBg = isCardVariant ? "bg-dv-surface" : "bg-dv-card";
  const dividerBorder = isCardVariant
    ? "border-dv-surface-border"
    : "border-dv-border";
  const toggleBg = isCardVariant
    ? "bg-zinc-700 group-hover:bg-zinc-600"
    : "bg-dv-surface group-hover:bg-zinc-700";

  return (
    <section id={id} className={`w-full ${sectionBg}`}>
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-12 lg:gap-16 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          {heading}
        </h2>

        {/* 2-Column Split: Left Inquiry Card + Right Accordion Stack */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Inquiry Card */}
          <div
            className={`w-full order-2 lg:order-1 lg:col-span-5 ${cardBg} rounded-lg p-7 sm:p-8 lg:p-9 flex flex-col justify-between gap-8 lg:sticky lg:top-28`}
          >
            <div className="w-full flex flex-col items-start gap-5">
              <div className="w-8 h-8 flex items-center justify-center text-dv-lime">
                <FaqIcon size={24} />
              </div>
              <div className="w-full flex flex-col items-start gap-3">
                <h3 className="w-full text-dv-text text-xl sm:text-2xl font-medium font-sans leading-snug tracking-normal">
                  {inquiryTitle}
                </h3>
                <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                  {inquiryDescription}
                </p>
              </div>
            </div>

            <div
              className={`w-full pt-6 border-t ${dividerBorder} flex flex-col items-start gap-5`}
            >
              <Button href={buttonHref} variant="primary" fullWidth>
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Right Column: Elevated Accordion Cards Stack */}
          <div className="w-full order-1 lg:order-2 lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`w-full ${cardBg} rounded-lg p-6 sm:p-7 flex flex-col transition-colors overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center gap-4 sm:gap-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 text-dv-text text-base sm:text-lg font-medium font-sans leading-snug group-hover:text-dv-lime transition-colors">
                      {faq.question}
                    </span>

                    {/* Toggle Icon Box */}
                    <div
                      className={`w-8 h-8 rounded-md ${toggleBg} relative flex items-center justify-center text-dv-lime shrink-0 transition-colors`}
                    >
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "rotate-90 opacity-0 scale-75"
                            : "rotate-0 opacity-100 scale-100"
                        }`}
                      >
                        <PlusIcon size={16} />
                      </span>
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "rotate-0 opacity-100 scale-100"
                            : "-rotate-90 opacity-0 scale-75"
                        }`}
                      >
                        <MinusIcon size={16} />
                      </span>
                    </div>
                  </button>

                  {/* Smooth Expandable Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`pt-4 mt-4 border-t ${dividerBorder}`}
                      >
                        <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
