/**
 * Checkmark Circle Icon Component (Large Success)
 */

import React from "react";

interface CheckmarkCircleIconProps {
  className?: string;
}

export const CheckmarkCircleIcon: React.FC<CheckmarkCircleIconProps> = ({ className = "w-20 h-20" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
