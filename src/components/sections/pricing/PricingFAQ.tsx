import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

const faqs = [
  {
    question: "Are these your final prices?",
    answer:
      "No. Every amount on this page is an indicative USD example, pending confirmation. Your tailored proposal sets the actual currency, price, taxes, scope and commercial terms.",
  },
  {
    question: "What is not included in the examples?",
    answer:
      "Unless explicitly scoped, allow separately for hosting, domains, third-party licenses, original content and ongoing support. Your proposal will itemize inclusions and exclusions.",
  },
  {
    question: "Can we start smaller or phase the work?",
    answer:
      "Yes. Share your priorities and budget so we can explore a smaller first release. Additional features, platforms or integrations can be planned as separate phases.",
  },
  {
    question: "What if the scope changes after we start?",
    answer:
      "New requirements are reviewed against the agreed scope. Any impact on budget and schedule should be documented and approved before the additional work begins.",
  },
  {
    question: "Can you maintain an existing site or codebase?",
    answer:
      "Bring it to the conversation. A technical review helps establish the condition of the code, dependencies and infrastructure before we agree the right maintenance or engineering scope.",
  },
];

export default function PricingFAQ() {
  return (
    <section id="pricing-faq" className="w-full bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-center gap-16 lg:gap-20 overflow-hidden">
        {/* Centered Heading */}
        <h2 className="text-dv-text text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight leading-tight text-center">
          Questions about pricing and proposals
        </h2>

        {/* Centered List */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-start overflow-hidden border-b border-dv-border">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="w-full py-6 border-t border-dv-border flex flex-col items-start gap-3 overflow-hidden"
            >
              <h3 className="w-full text-dv-text text-base sm:text-lg font-medium font-sans tracking-normal">
                {faq.question}
              </h3>
              <p className="w-full text-dv-muted text-sm sm:text-base font-normal font-sans leading-relaxed tracking-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Link */}
        <div className="flex items-center justify-center pt-2">
          <Link
            href="/#contact"
            className="text-dv-lime text-sm sm:text-base font-medium font-sans hover:underline flex items-center gap-1.5 group"
          >
            <span>Talk to our team</span>
            <ArrowIcon color="lime" size="md" />
          </Link>
        </div>
      </div>
    </section>
  );
}
