/**
 * Footer Component
 * Site footer with links and social media
 */

import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="font-bold">TaxWala.ai</span>
            </div>
            <span className="text-sm text-gray-600">© {(new Date()).getFullYear()} Elitale Softwares Pvt Ltd</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <FooterLink href="https://elitale.com/about" label="About" />
            <FooterLink href="https://elitale.com/contact" label="Contact" />
            <FooterLink href="https://elitale.com/privacy" label="Privacy" />
            <FooterLink href="https://elitale.com/terms" label="Terms" />
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-600">Live and Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <a href={href} target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
    {label}
  </a>
);
