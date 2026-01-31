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
      {/* 1. Navigation Header */}
      <Navigation navLinks={navLinks} />

      {/* AI Robot Assistant */}
      <AIRobot />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section - Strong headline, CTA, and trust signals */}
        <PageFlipSection pageColor="#fefce8" delay={0}>
          <HeroSection
            isModalOpen={isModalOpen}
            onModalOpen={openModal}
            onModalClose={closeModal}
            videoId={videoId}
          />
        </PageFlipSection>

        {/* 3. Trust Signals - Testimonials & Social Proof */}
        <PageFlipSection pageColor="#fef3c7" delay={0.15}>
          <TrustSection />
        </PageFlipSection>

        {/* 4. Problem/Solution Section */}
        <PageFlipSection pageColor="#fef3c7" delay={0.1}>
          <ProblemSection />
        </PageFlipSection>

        {/* 5. Value Exchange - Money Audit (Real Results) */}
        <MoneyAuditSection />

        {/* 6. How It Works - Features/Benefits Visual */}
        <PageFlipSection pageColor="#fefce8" delay={0.2}>
          <HowItWorksSection />
        </PageFlipSection>

        {/* 7. Benefits Section - Feature details and perks */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>
          <BenefitsSection />
        </PageFlipSection>

        {/* 8. Feature Comparison - Competitive advantages */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>
          <FeatureComparison />
        </PageFlipSection>

        {/* 9. Post-Filing Lifecycle - Year-round value */}
        <PageFlipSection pageColor="#fffbeb" delay={0.1}>
          <PostFilingLifecycle />
        </PageFlipSection>

        {/* 10. Pricing Section */}
        <PageFlipSection pageColor="#eff6ff" delay={0.15}>
          <PricingSection />
        </PageFlipSection>

        {/* 11. Team & Guarantee - Trust builders */}
        <PageFlipSection pageColor="#fef3c7" delay={0.1}>
          <GuaranteeSection />
        </PageFlipSection>

        <PageFlipSection pageColor="#fffbeb" delay={0.2}>
          <TeamSection />
        </PageFlipSection>

        {/* 12. FAQ Section - Objection handling */}
        <PageFlipSection pageColor="#fefce8" delay={0.1}>
          <FAQSection />
        </PageFlipSection>

        {/* 13. Final CTA Section - Last conversion opportunity */}
        <PageFlipSection pageColor="#fefce8" delay={0.15}>
          <FinalCTASection />
        </PageFlipSection>

        {/* Sticky CTA Button */}
        <StickyCTA isVisible={isStickyVisible} />

        {/* 14. Footer - Basic links and support */}
        <Footer />
      </main>
    </>
  );
};

export default TaxwalaPage;
