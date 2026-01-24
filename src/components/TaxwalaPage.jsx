import React, { useCallback, useMemo, useState } from "react";
import BenefitsSection from "./taxwala/BenefitsSection";
import FAQSection from "./taxwala/FAQSection";
import FinalCTASection from "./taxwala/FinalCTASection";
import FooterSection from "./taxwala/FooterSection";
import HeroSection from "./taxwala/HeroSection";
import HowItWorksSection from "./taxwala/HowItWorksSection";
import Navigation from "./taxwala/Navigation";
import ProblemSection from "./taxwala/ProblemSection";
import StickyCTA from "./taxwala/StickyCTA";
import TeamSection from "./taxwala/TeamSection";
import TrustSection from "./taxwala/TrustSection";
import VideoModal from "./taxwala/VideoModal";
import { videoId } from "./taxwala/content";
import {
  useBodyScrollLock,
  useEscapeKey,
  useScrollReveal,
  useSmoothAnchorScroll,
  useStickyCTA,
} from "./taxwala/usePageEffects";

const TaxwalaPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const closeModal = useCallback(() => setModalOpen(false), []);
  const youtubeSrc = useMemo(
    () => (modalOpen ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : ""),
    [modalOpen]
  );

  const stickyVisible = useStickyCTA();
  useBodyScrollLock(modalOpen);
  useEscapeKey(closeModal);
  useScrollReveal();
  useSmoothAnchorScroll(() => setMobileOpen(false));

  const handleFaqToggle = useCallback((index) => {
    setFaqOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <Navigation mobileOpen={mobileOpen} onToggleMenu={() => setMobileOpen((v) => !v)} />

      <main>
        <HeroSection onPlay={() => setModalOpen(true)} />
        <ProblemSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TrustSection />
        <FAQSection openIndex={faqOpen} onToggle={handleFaqToggle} />
        <TeamSection />
        <FinalCTASection />
        <StickyCTA visible={stickyVisible} />
        <FooterSection />
      </main>

      <VideoModal open={modalOpen} onClose={closeModal} src={youtubeSrc} />
    </>
  );
};

export default TaxwalaPage;
