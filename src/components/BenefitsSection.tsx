/**
 * Benefits Section Component
 * Displays the exclusive benefits of joining the beta
 */

import React from "react";
import type { BenefitItem } from "../types";
import {
  StarIcon,
  SupportIcon,
  LightBulbIcon,
  RocketIcon,
  GiftIcon,
  ClockIcon,
} from "./icons";

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

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, delay }) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Lifetime Free Access": StarIcon,
    "Priority Support": SupportIcon,
    "Shape the Product": LightBulbIcon,
    "First to Launch": RocketIcon,
    "Referral Rewards": GiftIcon,
    "Limited Spots": ClockIcon,
  };

  const IconComponent = iconMap[benefit.title] || StarIcon;

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow reveal-on-scroll"
      style={{ animationDelay: delay }}
    >
      <div className={`w-12 h-12 ${benefit.iconBackground} rounded-xl flex items-center justify-center mb-6`}>
        <IconComponent className={`w-6 h-6 ${benefit.iconColor}`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
  );
};