/**
 * Check Icon Component (Checkmark only, no circle)
 */

import React from "react";

interface CheckIconProps {
  className?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
