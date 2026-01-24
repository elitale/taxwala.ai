import React from "react";
import { faqItems } from "./content";

const FAQSection = ({ openIndex, onToggle }) => (
  <section id="faq" className="py-24 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
        <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <span className="text-sm font-bold">4</span>
        </div>
        <div className="h-px w-12 bg-gray-900" />
        <span className="text-sm font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 reveal-on-scroll">Got questions? We've got answers</h2>

      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={item.q}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden reveal-on-scroll"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <button
                className="faq-toggle w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => onToggle(idx)}
              >
                <span className="font-semibold text-lg">{item.q}</span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform faq-icon ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${open ? "" : "hidden"} px-8 pb-6 faq-content`}>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>

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

export default FAQSection;
