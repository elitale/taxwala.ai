/**
 * Benefits Section Component
 * Displays the exclusive benefits of joining the beta
 */

import React from "react";
import type { BenefitItem } from "../types";

export const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Lifetime Free Access",
      description: "Beta users get TaxWala.ai free forever. No hidden fees, no credit card required.",
      iconBackground: "bg-gold/20",
      iconColor: "text-gold",
    },
    {
      title: "Priority Support",
      description: "Direct access to our founders. Get help within hours, not days.",
      iconBackground: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Shape the Product",
      description: "Your feedback directly influences features. Build what you need.",
      iconBackground: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "First to Launch",
      description: "Get access weeks before public launch. Start automating immediately.",
      iconBackground: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Referral Rewards",
      description: "Refer 3 friends, skip the waitlist instantly. Get exclusive perks.",
      iconBackground: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Limited Spots",
      description: "Only 500 invites available. Once full, join the public waitlist.",
      iconBackground: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={benefit.title} benefit={benefit} delay={`${(idx + 1) * 0.1}s`} />
          ))}
        </div>

        {/* CTA */}
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
};

interface BenefitCardProps {
  benefit: BenefitItem;
  delay: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, delay }) => (
  <div
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow reveal-on-scroll"
    style={{ animationDelay: delay }}
  >
    <div className={`w-12 h-12 ${benefit.iconBackground} rounded-xl flex items-center justify-center mb-6`}>
      <svg className={`w-6 h-6 ${benefit.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
        <BenefitIcon title={benefit.title} />
      </svg>
    </div>
    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
  </div>
);

interface BenefitIconProps {
  title: string;
}

const BenefitIcon: React.FC<BenefitIconProps> = ({ title }) => {
  const icons: { [key: string]: React.ReactNode } = {
    "Lifetime Free Access": (
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    ),
    "Priority Support": (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    "Shape the Product": (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    "First to Launch": (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    "Referral Rewards": (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    ),
    "Limited Spots": (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return <>{icons[title] || null}</>;
};
