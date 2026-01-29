/**
 * Main TaxWala Page Component
 * Orchestrates all sections and handles state management
 */

import React from "react";
import {
  Navigation,
  AIRobot,
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  BenefitsSection,
  TrustSection,
  FAQSection,
  TeamSection,
  GuaranteeSection,
  FinalCTASection,
  StickyCTA,
  Footer,
} from "../components/index";
import { useModalControl, useScrollDetection, useRevealOnScroll, useSmoothScroll } from "../hooks/index";
import type { NavLink } from "../types/index";

const TaxwalaPage: React.FC = () => {
  // Initialize hooks
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModalControl();
  const isStickyVisible = useScrollDetection(800);
  useRevealOnScroll();
  useSmoothScroll();

  // Navigation links configuration
  const navLinks: NavLink[] = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  // YouTube video ID - replace with actual demo video ID
  const videoId: string = "dQw4w9WgXcQ";

  return (
    <>
      {/* Navigation */}
      <Navigation navLinks={navLinks} />

      {/* AI Robot Assistant */}
      <AIRobot />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          isModalOpen={isModalOpen}
          onModalOpen={openModal}
          onModalClose={closeModal}
          videoId={videoId}
        />

        {/* Problem Statement Section */}
        <ProblemSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Trust & Security Section */}
        <TrustSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Team Section */}
        <TeamSection />

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* Final CTA Section */}
        <FinalCTASection />

        {/* Sticky CTA Button */}
        <StickyCTA isVisible={isStickyVisible} />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default TaxwalaPage;
