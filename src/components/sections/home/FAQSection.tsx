"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { PlusIcon, MinusIcon } from "@/components/ui/Icons";

const faqs = [
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="max-w-3xl text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Common questions about working with us
        </h2>

        {/* Centered Accordion Container */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-start overflow-hidden border-t border-dv-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`w-full overflow-hidden border-b border-dv-border transition-all ${
                  isOpen ? "pt-6 pb-7" : "py-6.5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center gap-6 text-left cursor-pointer group overflow-hidden"
                >
                  <span className="flex-1 text-dv-text text-base sm:text-lg font-medium font-sans tracking-normal">
                    {faq.question}
                  </span>

                  {/* Toggle Icon */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <MinusIcon size={18} />
                    ) : (
                      <PlusIcon size={18} className="group-hover:stroke-dv-lime transition-colors" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="w-full pt-5">
                    <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Link */}
        <div className="flex items-center justify-center pt-2">
          <Link
            href="/#contact"
            className="text-dv-lime text-sm sm:text-base font-medium font-sans hover:underline flex items-center gap-1.5 group"
          >
            <span>Have another question? Talk to our team</span>
            <ArrowIcon color="lime" size="md" />
          </Link>
        </div>
      </div>
    </section>
  );
}
