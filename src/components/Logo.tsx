/**
 * Logo Component
 * Displays the TaxWala.ai logo
 * Can be used in both React and Astro components
 */

import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-10 h-10", 
  width,
  height 
}) => {
  // If width/height are provided as numbers, use them; otherwise use className
  const style = width && height ? { width: `${width}px`, height: `${height}px` } : undefined;
  const finalClassName = width && height ? "" : className;

  return (
    <img 
      src="/logo.svg" 
      alt="TaxWala.ai Logo" 
      className={finalClassName}
      style={style}
    />
  );
};
