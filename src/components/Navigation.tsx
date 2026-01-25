/**
 * Navigation Component
 * Handles the main navigation bar and mobile menu
 */

import React, { useState } from "react";
import type { NavLink } from "../types/index";
import { CheckmarkCircleIcon, MenuIcon, CloseIcon } from "./icons";
import { TALLY_FORM_URL } from "../constants/config";

interface NavigationProps {
  navLinks?: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const handleMobileMenuClose = () => setIsMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <CheckmarkCircleIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">TaxWala.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link.href}
                href={link.href}
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
                onClick={handleMobileMenuClose}
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

const NavigationCTA: React.FC<NavigationCTAProps> = ({ fullWidth = false }) => (
  <button
    className={`cta-button bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm ${
      fullWidth ? "w-full" : ""
    }`}
    onClick={() => window.location.href = TALLY_FORM_URL}
  >
    Join Waitlist
  </button>
);
