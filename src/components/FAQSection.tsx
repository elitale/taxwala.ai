/**
 * FAQ Section Component
 * Handles the frequently asked questions with accordion functionality
 */

import React, { useState } from "react";
import type { FAQItem } from "../types/index";
import { ChevronDownIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Can I start filing my taxes right now?",
      answer:
        "Yes! MunimChaha is fully live and operational. You can start filing your taxes immediately with no waiting period. The filing fee is ₹200 per return - a one-time payment that's significantly lower than traditional CA fees (₹2000-5000).",
    },
    {
      question: "What does the ₹200 filing fee include?",
      answer:
        "Everything you need for a complete ITR filing: AI-powered data extraction from Form 16, automatic calculation of all deductions (80C, 80D, HRA, home loan interest), validation against 26AS, expert review by tax professionals, and direct e-filing to the Income Tax portal. Plus free re-filing if any errors are found.",
    },
    {
      question: "How do I get started with MunimChaha?",
      answer:
        'Click any "Save Your Taxes" button on this page to sign up. The process takes less than 2 minutes. Upload your Form 16, answer a few questions about deductions, review your pre-filled return, and we\'ll handle the e-filing. You pay ₹200 only when you\'re ready to file.',
    },
    {
      question: "Is my financial data safe?",
      answer:
        "Absolutely. We use bank-level 256-bit encryption, ISO 27001 compliant infrastructure, and your data never leaves India. We never sell your data or share it with third parties. Your security is our top priority.",
    },
    {
      question: "What if I need help filing my taxes?",
      answer:
        "You get access to expert support from our tax professionals. We're available during tax season to answer questions via chat or email, typically responding within a few hours. Complex cases get a free consultation call to ensure accuracy.",
    },
  ];

  const handleToggle = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold">5</span>
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
          <p className="text-gray-600 mb-6 text-lg">Ready to file your taxes?</p>
          <button
            className="cta-button bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            onClick={() => window.location.href = TALLY_FORM_URL}
          >
            Save Your Taxes Today
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
      <ChevronDownIcon
        className={`w-6 h-6 text-gray-400 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && (
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    )}
  </div>
);
