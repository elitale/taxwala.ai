/**
 * Main TaxWala Page Component
 * Orchestrates all sections and handles state management
 */

import React from "react";
import {
  Navigation,
  AIRobot,
  PageFlipSection,
  HeroSection,
  VideoModal,
  MoneyAuditSection,
  ProblemSection,
  HowItWorksSection,
  BenefitsSection,
  FeatureComparison,
  PostFilingLifecycle,
  PricingSection,
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
    { label: "Pricing", href: "#pricing" },
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
        <PageFlipSection pageColor="#fefce8" delay={0}>
          <HeroSection
            isModalOpen={isModalOpen}
            onModalOpen={openModal}
            onModalClose={closeModal}
            videoId={videoId}
          />
        </PageFlipSection>

        {/* Money Audit Section (Value Exchange) */}
        <MoneyAuditSection />

        {/* Benefits Section */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>
          <BenefitsSection />
        </PageFlipSection>

        {/* Feature Comparison Section */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>

        <FeatureComparison />
        </PageFlipSection>

        {/* Post-Filing Lifecycle Section */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>
        <PostFilingLifecycle />
        </PageFlipSection>

        {/* Problem Statement Section */}
        <PageFlipSection pageColor="#fef3c7" delay={0.1}>
          <ProblemSection />
        </PageFlipSection>

        {/* How It Works Section */}
        <PageFlipSection pageColor="#fefce8" delay={0.2}>
          <HowItWorksSection />
        </PageFlipSection>

        {/* Pricing Section */}
        <PageFlipSection pageColor="#eff6ff" delay={0.15}>
          <PricingSection />
        </PageFlipSection>

        {/* Trust & Security Section */}
        <PageFlipSection pageColor="#fef3c7" delay={0.15}>
          <TrustSection />
        </PageFlipSection>

        {/* FAQ Section */}
        <PageFlipSection pageColor="#fefce8" delay={0.1}>
          <FAQSection />
        </PageFlipSection>

        {/* Team Section */}
        <PageFlipSection pageColor="#fffbeb" delay={0.2}>
          <TeamSection />
        </PageFlipSection>

        {/* Guarantee Section */}
        <PageFlipSection pageColor="#fef3c7" delay={0.1}>
          <GuaranteeSection />
        </PageFlipSection>

        {/* Final CTA Section */}
        <PageFlipSection pageColor="#fefce8" delay={0.15}>
          <FinalCTASection />
        </PageFlipSection>

        {/* Sticky CTA Button */}
        <StickyCTA isVisible={isStickyVisible} />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default TaxwalaPage;
