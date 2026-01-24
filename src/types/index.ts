/**
 * Shared types and interfaces for the TaxWala application
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconBackground: string;
  iconColor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  subtitle: string;
  image: string;
  badgeColor: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScrollState {
  isStickyVisible: boolean;
  isMobileOpen: boolean;
}
