/**
 * Guarantee Section
 * Displays TaxWala Confidence Guarantee with 4 trust badges
 * Positioned before final CTA to reduce signup hesitation
 */

import React from "react";
import {
  CheckCircleIcon,
  CheckmarkCircleIcon,
  SupportIcon,
  GiftIcon,
} from "./icons";
import { guaranteeBadges } from "./content";

export const GuaranteeSection: React.FC = () => {
  const icons = [CheckCircleIcon, CheckmarkCircleIcon, SupportIcon, GiftIcon];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TaxWala Confidence Guarantee
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your trust is our priority. Here's our commitment to you.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteeBadges.map((badge, index) => {
            const IconComponent = icons[index];
            const isCABadge = index === 0; // First badge is "CA Reviewed Filings"
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow reveal-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon or Professional Logo */}
                {isCABadge ? (
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src="/ca-logo.png" 
                      alt="CA Institute of India"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 ${badge.iconBg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${badge.iconColor}`} />
                  </div>
                )}

                {/* Badge Content */}
                <h3 className="text-lg font-bold mb-2 leading-tight">
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
