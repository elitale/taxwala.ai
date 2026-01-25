/**
 * Final CTA Section Component
 * Displays the final call-to-action before footer
 */

import React from "react";
import { ClockIcon, CalendarIcon } from "./icons";
import { TALLY_FORM_ID } from "../constants/config";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-6 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0066FF, #9333ea)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 reveal-on-scroll">
          Don't Get Left Behind
        </h2>

        {/* Urgency Indicators */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-2xl md:text-3xl font-semibold reveal-on-scroll"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3">
            <ClockIcon />
            <span>427 spots remaining</span>
          </div>
          <span className="hidden md:block">•</span>
          <div className="flex items-center gap-3">
            <CalendarIcon />
            <span>Early access closes in 14 days</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl mb-12 opacity-90 reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
          Join 1,247 businesses already on the waitlist. Get lifetime free access before it's too late.
        </p>

        {/* Primary CTA Button */}
        <button
          className="cta-button bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 reveal-on-scroll"
          style={{ animationDelay: "0.3s" }}
          data-tally-open={TALLY_FORM_ID}
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="wave"
        >
          Secure Your Spot Now →
        </button>
      </div>
    </section>
  );
};
