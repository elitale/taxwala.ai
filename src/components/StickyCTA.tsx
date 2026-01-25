/**
 * Sticky CTA Component
 * Fixed button that appears when user scrolls past hero section
 */

import React from "react";
import { ArrowRightIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

interface StickyCTAProps {
  isVisible: boolean;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        className="cta-button bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
        onClick={() => window.location.href = TALLY_FORM_URL}
      >
        <span>Join Waitlist</span>
        <ArrowRightIcon />
      </button>
    </div>
  );
};
