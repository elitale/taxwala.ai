/**
 * Sticky CTA Component
 * Fixed button that appears when user scrolls past hero section
 */

import React from "react";
import { ArrowRightIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";
import { useGTMTracking } from "../hooks";

interface StickyCTAProps {
  isVisible: boolean;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  const { trackButtonClick } = useGTMTracking();

  if (!isVisible) return null;

  const handleSignUp = () => {
    trackButtonClick('Save Your Taxes', 'sticky_cta');
    window.location.href = TALLY_FORM_URL;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        className="cta-button bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
        onClick={handleSignUp}
      >
        <span>Save Your Taxes</span>
        <ArrowRightIcon />
      </button>
    </div>
  );
};
