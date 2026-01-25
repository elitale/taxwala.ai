/**
 * Footer Component
 * Site footer with links and social media
 */

import React from "react";
import { TwitterIcon, LinkedInIcon } from "./icons";
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
            <span className="text-sm text-gray-600">© 2026 Elitale Softwares Pvt Ltd</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <FooterLink href="#" label="About" />
            <FooterLink href="#" label="Contact" />
            <FooterLink href="#" label="Privacy" />
            <FooterLink href="#" label="Terms" />
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Private Beta</span>
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
  <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
    {label}
  </a>
);

interface SocialLinkProps {
  href: string;
  icon: "twitter" | "linkedin";
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  const icons = {
    twitter: <TwitterIcon />,
    linkedin: <LinkedInIcon />,
  };

  return (
    <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors" aria-label={`Link to ${icon}`}>
      {icons[icon]}
    </a>
  );
};
