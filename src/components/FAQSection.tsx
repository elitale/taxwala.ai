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
        "Yes! TaxWala.ai is fully live and operational. You can start filing your taxes immediately with no waiting period. All salaried professionals get lifetime free access to file their ITR-1 returns.",
    },
    {
      question: "Is TaxWala.ai really free forever for salaried professionals?",
      answer:
        "Yes! Lifetime free access for salaried professionals with no hidden fees. We'll always provide core tax automation for salaried income at no cost. No credit card required, ever.",
    },
    {
      question: "How do I get started with TaxWala.ai?",
      answer:
        'Click any "Save Your Taxes" button on this page to sign up. The process takes less than 2 minutes. You can start filing immediately and complete your tax return by the March deadline.',
    },
    {
      question: "Is my financial data safe?",
      answer:
        "Absolutely. We use bank-level 256-bit encryption, ISO 27001 compliant infrastructure, and your data never leaves India. We never sell your data or share it with third parties. Your security is our top priority.",
    },
    {
      question: "What if I need help filing my taxes?",
      answer:
        "You get access to world-class support from tax experts. We're available to help during tax season and can answer questions within hours. You can also reach our team through chat or email anytime.",
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
