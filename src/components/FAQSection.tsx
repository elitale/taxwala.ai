/**
 * FAQ Section Component
 * Handles the frequently asked questions with accordion functionality
 */

import React, { useState } from "react";
import type { FAQItem } from "../types/index";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "When will TaxWala.ai launch publicly?",
      answer:
        "We're planning to launch publicly in Q2 2026. Beta users will get access 6-8 weeks before the public launch, giving you exclusive early access to shape the product.",
    },
    {
      question: "Is TaxWala.ai really free forever?",
      answer:
        "Yes! Beta users get lifetime free access with no hidden fees. After public launch, we may introduce premium features, but your core tax automation will always remain free. No credit card required, ever.",
    },
    {
      question: "How do I get an invite to the beta?",
      answer:
        'Join the waitlist by clicking any "Request Early Access" button on this page. We\'re inviting users in batches, prioritizing small businesses and freelancers who will benefit most. You can also skip the waitlist by referring 3 friends.',
    },
    {
      question: "Is my financial data safe?",
      answer:
        "Absolutely. We use bank-level 256-bit encryption, ISO 27001 compliant infrastructure, and your data never leaves India. We never sell your data or share it with third parties. Your security is our top priority.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "After joining the waitlist, you'll receive a unique referral link. Share it with friends, colleagues, or on social media. When 3 people sign up using your link, you'll get instant beta access (skipping the queue) plus exclusive perks and early feature previews.",
    },
  ];

  const handleToggle = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold">4</span>
          </div>
          <div className="h-px w-12 bg-gray-900" />
          <span className="text-sm font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 reveal-on-scroll">Got questions? We've got answers</h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={faq.question} item={faq} index={idx} isOpen={openIndex === idx} onToggle={handleToggle} />
          ))}
        </div>

        {/* CTA After FAQ */}
        <div className="text-center mt-16 reveal-on-scroll">
          <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
          <button
            className="cta-button bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            data-tally-open="wgxDQB"
            data-tally-emoji-text="🚀"
            data-tally-emoji-animation="wave"
          >
            Join our beta
          </button>
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, index, isOpen, onToggle }) => (
  <div
    className="bg-white rounded-xl border border-gray-200 overflow-hidden reveal-on-scroll"
    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
  >
    <button
      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      onClick={() => onToggle(index)}
    >
      <span className="font-semibold text-lg">{item.question}</span>
      <svg
        className={`w-6 h-6 text-gray-400 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    )}
  </div>
);
