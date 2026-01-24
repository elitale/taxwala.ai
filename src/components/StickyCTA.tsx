/**
 * Sticky CTA Component
 * Fixed button that appears when user scrolls past hero section
 */

import React from "react";

interface StickyCTAProps {
  isVisible: boolean;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        className="cta-button bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
        data-tally-open="wgxDQB"
        data-tally-emoji-text="🚀"
        data-tally-emoji-animation="wave"
      >
        <span>Join Waitlist</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};
