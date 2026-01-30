/**
 * AI Robot Component
 * Displays an animated WALL-E style robot with floating animation
 * to emphasize AI-powered tax automation
 */

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

// TypeScript declarations for Zoho SalesIQ
declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        floatbutton: {
          visible: (action: "show" | "hide") => void;
        };
        floatwindow: {
          visible: (action: "show" | "hide") => void;
        };
        ready: (callback: () => void) => void;
        bind?: {
          event?: {
            chatwindow?: {
              close?: (callback: () => void) => void;
            };
          };
        };
      };
    };
  }
}

export const AIRobot: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 16 });
  const [robotSize, setRobotSize] = useState({ width: 128, height: 128 });

  // Load the Lottie animation
  useEffect(() => {
    fetch("/ai-robot.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  // Hide Zoho chat widget by default on load and set up event listeners
  useEffect(() => {
    const setupZohoWidget = () => {
      try {
        // Check if Zoho widget is available
        if (!window.$zoho?.salesiq) {
          return false;
        }

        const zoho = window.$zoho.salesiq;

        // Safely hide widget - check if methods exist before calling
        if (zoho.floatbutton?.visible) {
          zoho.floatbutton.visible("hide");
        }
        if (zoho.floatwindow?.visible) {
          zoho.floatwindow.visible("hide");
        }

        // Set up close event listener safely
        if (typeof zoho.ready === "function") {
          zoho.ready(() => {
            try {
              if (window.$zoho?.salesiq?.bind?.event?.chatwindow?.close) {
                window.$zoho.salesiq.bind.event.chatwindow.close(() => {
                  if (window.$zoho?.salesiq) {
                    if (window.$zoho.salesiq.floatbutton?.visible) {
                      window.$zoho.salesiq.floatbutton.visible("hide");
                    }
                    if (window.$zoho.salesiq.floatwindow?.visible) {
                      window.$zoho.salesiq.floatwindow.visible("hide");
                    }
                  }
                });
              }
            } catch (e) {
              console.debug("Zoho event binding failed:", e);
            }
          });
        }

        return true;
      } catch (error) {
        console.debug("Zoho widget setup error:", error);
        return false;
      }
    };

    // Try immediately
    if (setupZohoWidget()) {
      return;
    }

    // Retry until Zoho loads (with timeout)
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds
    const interval = setInterval(() => {
      attempts++;
      if (setupZohoWidget() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  // Handle robot click to open Zoho chat
  const handleRobotClick = () => {
    try {
      if (window.$zoho?.salesiq) {
        if (window.$zoho.salesiq.floatbutton?.visible) {
          window.$zoho.salesiq.floatbutton.visible("show");
        }
        if (window.$zoho.salesiq.floatwindow?.visible) {
          window.$zoho.salesiq.floatwindow.visible("show");
        }
      }
    } catch (error) {
      console.debug("Robot click error:", error);
    }
  };

  // Update robot size based on screen size
  useEffect(() => {
    const updateRobotSize = () => {
      if (window.innerWidth >= 1024) {
        setRobotSize({ width: 192, height: 192 }); // lg
      } else if (window.innerWidth >= 768) {
        setRobotSize({ width: 160, height: 160 }); // md
      } else {
        setRobotSize({ width: 128, height: 128 }); // sm
      }
    };

    updateRobotSize();
    window.addEventListener("resize", updateRobotSize);
    return () => window.removeEventListener("resize", updateRobotSize);
  }, []);

  // Handle scroll-based position changes with smooth interpolation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min((scrollTop / documentHeight), 1); // 0 to 1
      
      const offset = 16; // padding from edges
      // Account for robot size to keep it fully within viewport
      const maxX = window.innerWidth - robotSize.width - offset;
      const maxY = window.innerHeight - robotSize.height - offset;
      const minX = offset;
      const minY = offset;

      // Calculate position along a square path starting from top-right
      // Total path is divided into 4 segments of 0.25 each
      let x = maxX;
      let y = minY;

      if (scrollPercentage <= 0.25) {
        // Segment 1: Top-right to Bottom-right (move down along right edge)
        const segmentProgress = scrollPercentage / 0.25;
        x = maxX;
        y = minY + ((maxY - minY) * segmentProgress);
      } else if (scrollPercentage <= 0.5) {
        // Segment 2: Bottom-right to Bottom-left (move left along bottom edge)
        const segmentProgress = (scrollPercentage - 0.25) / 0.25;
        x = maxX - ((maxX - minX) * segmentProgress);
        y = maxY;
      } else if (scrollPercentage <= 0.75) {
        // Segment 3: Bottom-left to Top-left (move up along left edge)
        const segmentProgress = (scrollPercentage - 0.5) / 0.25;
        x = minX;
        y = maxY - ((maxY - minY) * segmentProgress);
      } else {
        // Segment 4: Top-left to Top-right (move right along top edge)
        const segmentProgress = (scrollPercentage - 0.75) / 0.25;
        x = minX + ((maxX - minX) * segmentProgress);
        y = minY;
      }

      setRobotPosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [robotSize]);

  if (!animationData) {
    return null;
  }

  return (
    <div 
      className="fixed z-50 pointer-events-none will-change-transform"
      style={{
        left: `${robotPosition.x}px`,
        top: `${robotPosition.y}px`,
        transform: 'translate3d(0, 0, 0)', // GPU acceleration
        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Robot Container with floating animation */}
      <div 
        className="relative animate-float pointer-events-auto cursor-pointer"
        onClick={handleRobotClick}
        role="button"
        aria-label="Open chat support"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRobotClick();
          }
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Robot */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full drop-shadow-2xl"
            />
          ) : (
            // Fallback SVG WALL-E style robot while loading
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot body */}
              <defs>
                <linearGradient id="robotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#0891b2", stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>

              {/* Glow behind robot */}
              <ellipse cx="100" cy="140" rx="70" ry="20" fill="url(#glowGradient)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
              </ellipse>

              {/* Robot tracks/base */}
              <rect x="50" y="150" width="100" height="20" rx="10" fill="#1e40af" />
              <rect x="55" y="152" width="90" height="16" rx="8" fill="#2563eb" />

              {/* Robot body - box shape like WALL-E */}
              <rect x="60" y="90" width="80" height="70" rx="8" fill="url(#robotGradient)" stroke="#1e40af" strokeWidth="2" />
              
              {/* Body details - chest plate */}
              <rect x="70" y="100" width="60" height="50" rx="4" fill="#3b82f6" opacity="0.7" />
              <rect x="75" y="105" width="50" height="40" rx="3" fill="#60a5fa" opacity="0.5" />

              {/* Arms */}
              <rect x="35" y="100" width="20" height="50" rx="5" fill="url(#robotGradient)" stroke="#1e40af" strokeWidth="2">
                <animateTransform attributeName="transform" type="rotate" values="0 45 125;-10 45 125;0 45 125" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="145" y="100" width="20" height="50" rx="5" fill="url(#robotGradient)" stroke="#1e40af" strokeWidth="2">
                <animateTransform attributeName="transform" type="rotate" values="0 155 125;10 155 125;0 155 125" dur="3s" repeatCount="indefinite" />
              </rect>

              {/* Head/neck */}
              <rect x="85" y="70" width="30" height="25" rx="4" fill="#2563eb" />
              
              {/* Head - binocular style like WALL-E */}
              <rect x="70" y="30" width="60" height="45" rx="6" fill="url(#robotGradient)" stroke="#1e40af" strokeWidth="2" />
              
              {/* Eyes - large expressive eyes */}
              <circle cx="85" cy="52" r="12" fill="#1e293b" />
              <circle cx="115" cy="52" r="12" fill="#1e293b" />
              
              {/* Eye pupils - animated */}
              <circle cx="85" cy="52" r="8" fill="#06b6d4">
                <animate attributeName="r" values="8;6;8" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="115" cy="52" r="8" fill="#06b6d4">
                <animate attributeName="r" values="8;6;8" dur="4s" repeatCount="indefinite" />
              </circle>
              
              {/* Eye highlights */}
              <circle cx="87" cy="50" r="3" fill="#e0f2fe" />
              <circle cx="117" cy="50" r="3" fill="#e0f2fe" />

              {/* Antenna */}
              <line x1="100" y1="30" x2="100" y2="20" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
              <circle cx="100" cy="18" r="5" fill="#ef4444">
                <animate attributeName="fill" values="#ef4444;#f97316;#ef4444" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          )}
        </div>
      </div>

      {/* Custom animations styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out 0.5s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .animate-float {
            animation: float 2.5s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};
