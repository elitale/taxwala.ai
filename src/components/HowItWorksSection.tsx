/**
 * How It Works Section Component
 * Displays the 3-step process
 */

import React from "react";
import { RocketIcon, SmileIcon, CheckIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Form 16",
      description:
        "Upload your Form 16 from employer. Our AI extracts salary, TDS, employer details automatically. Takes 2 minutes.",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      delay: "0.1s",
      IconComponent: RocketIcon,
    },
    {
      number: 2,
      title: "Add Your Deductions",
      description:
        "Tell us about HRA rent payments, 80C investments (PPF, ELSS, insurance), and home loan interest. We calculate exemptions for you.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      delay: "0.2s",
      IconComponent: SmileIcon,
    },
    {
      number: 3,
      title: "Review & File",
      description: "See your tax calculation, refund amount, and all deductions. Approve with one click. We e-file to IT portal immediately.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      delay: "0.3s",
      IconComponent: CheckIcon,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
          <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-sm font-bold">2</span>
          </div>
          <div className="h-px w-12 bg-gray-900" />
          <span className="text-sm font-semibold uppercase tracking-wider">How It Works</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl reveal-on-scroll">
          File your ITR-1 in 15 minutes flat
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step) => {
            const { IconComponent } = step;
            return (
              <div key={step.number} className="reveal-on-scroll" style={{ animationDelay: step.delay }}>
                <div className="mb-6">
                  <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center reveal-on-scroll">
          <p className="text-gray-600 mb-6 text-lg">Have your Form 16 ready? Start now.</p>
          <button
            className="cta-button bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all shadow-lg"
            onClick={() => window.location.href = TALLY_FORM_URL}
          >
            Upload Form 16 & Start
          </button>
        </div>
      </div>
    </section>
  );
};
