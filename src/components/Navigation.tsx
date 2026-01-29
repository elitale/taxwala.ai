/**
 * Navigation Component
 * Handles the main navigation bar and mobile menu
 */

import React, { useState } from "react";
import type { NavLink } from "../types/index";
import { MenuIcon, CloseIcon } from "./icons";
import { Logo } from "./Logo";
import { TALLY_FORM_URL } from "../constants/config";
import { useGTMTracking } from "../hooks";

interface NavigationProps {
  navLinks?: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const { trackButtonClick } = useGTMTracking();

  const handleMobileMenuClose = () => setIsMobileOpen(false);

  const handleNavClick = (label: string) => {
    trackButtonClick(label, 'navigation');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight">TaxWala.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <NavigationCTA />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleNavClick(link.label);
                  handleMobileMenuClose();
                }}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <NavigationCTA fullWidth />
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavigationCTAProps {
  fullWidth?: boolean;
}

const NavigationCTA: React.FC<NavigationCTAProps> = ({ fullWidth = false }) => {
  const { trackButtonClick } = useGTMTracking();

  const handleJoinWaitlist = () => {
    trackButtonClick('Join Waitlist', 'navigation');
    window.location.href = TALLY_FORM_URL;
  };

  return (
    <button
      className={`cta-button bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={handleJoinWaitlist}
    >
      Join Waitlist
    </button>
  );
};
