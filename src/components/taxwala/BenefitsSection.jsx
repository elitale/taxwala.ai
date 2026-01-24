import React from "react";
import { benefits } from "./content";

const BenefitsSection = () => (
  <section id="benefits" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
        <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <span className="text-sm font-bold">2</span>
        </div>
        <div className="h-px w-12 bg-gray-900" />
        <span className="text-sm font-semibold uppercase tracking-wider">Exclusive Benefits</span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
        Why join the beta now?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, idx) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow reveal-on-scroll"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-6`}>
              <svg className={`w-6 h-6 ${item.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                <path d={item.iconPath} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 reveal-on-scroll">
        <button
          className="cta-button bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          data-tally-open="wgxDQB"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Secure Your Spot
        </button>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
