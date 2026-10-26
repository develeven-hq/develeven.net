"use client";

import React from "react";
import FAQSection, { type FAQItem } from "@/components/sections/FAQSection";

export const pricingFaqs: FAQItem[] = [
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
    <FAQSection
      id="pricing-faq"
      heading="Questions about pricing and proposals"
      faqs={pricingFaqs}
      inquiryTitle="Need a custom estimate or breakdown?"
      inquiryDescription="Every project is unique. If our standard packages don't match your scope or timeline, we're happy to discuss your specific requirements and explore practical phases."
      buttonText="Discuss your project"
      buttonHref="/#contact"
      bgVariant="card"
    />
  );
}

