/**
 * Play Icon Component
 */

import React from "react";

interface PlayIconProps {
  className?: string;
}

export const PlayIcon: React.FC<PlayIconProps> = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);
