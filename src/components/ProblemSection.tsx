/**
 * Problem Statement Section Component
 * Displays the pain points of tax filing
 */

import React from "react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Problem Text */}
          <div className="space-y-8 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Spending <span className="text-primary">20+ hours monthly</span> on tax paperwork?
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Paying <span className="text-primary">₹50,000+ annually</span> to accountants?
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Drowning in <span className="text-primary">receipts and invoices</span>?
            </h2>

            <div className="pt-8">
              <p className="text-2xl font-bold text-gray-900">We're building the solution.</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces"
                  alt="Business owner stressed with paperwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-sm font-semibold text-gray-900">
                  "I spent 3 weeks just organizing receipts for GST filing. Never again."
                </p>
                <p className="text-xs text-gray-600 mt-2">— Typical Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
