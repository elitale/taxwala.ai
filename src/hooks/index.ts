/**
 * Custom hooks for MunimChaCha application
 */

import { useEffect, useState } from "react";
import { logFirebaseEvent } from "../lib/firebase";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const useScrollDetection = (threshold: number = 800) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

export const useModalControl = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return { isOpen, setIsOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };
};

export const useRevealOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const targets = Array.from(document.querySelectorAll(".reveal-on-scroll"));
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handler = (e: Event) => {
      const element = e.currentTarget as HTMLAnchorElement;
      const targetId = element.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    anchors.forEach((a) => a.addEventListener("click", handler as EventListener));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler as EventListener));
  }, []);
};

/**
 * Google Tag Manager Tracking Hook
 * Provides tracking methods for user interactions
 * 
 * IMPORTANT: window.gtag must be available (loaded from GTM script in BaseLayout.astro)
 */
export const useGTMTracking = () => {
  const trackMetaEvent = (event: string, payload?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", event, payload || {});
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, section?: string) => {
    const payload = {
      button_name: buttonName,
      section_name: section || "general",
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "button_click", payload);
    }

    trackMetaEvent("button_click", payload);
    logFirebaseEvent("button_click", payload);
  };

  // Track form submissions
  const trackFormSubmit = (formName: string, additionalData?: Record<string, any>) => {
    const payload = {
      form_name: formName,
      ...additionalData,
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", payload);
    }

    trackMetaEvent("form_submit", payload);
    logFirebaseEvent("form_submit", payload);
  };

  // Track section views
  const trackSectionView = (sectionName: string) => {
    const payload = {
      section_name: sectionName,
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "section_view", payload);
    }

    trackMetaEvent("section_view", payload);
    logFirebaseEvent("section_view", payload);
  };

  // Track video plays
  const trackVideoPlay = (videoId: string, videoTitle: string) => {
    const payload = {
      video_id: videoId,
      video_title: videoTitle,
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", payload);
    }

    trackMetaEvent("video_play", payload);
    logFirebaseEvent("video_play", payload);
  };

  // Track modal opens
  const trackModalOpen = (modalName: string) => {
    const payload = {
      modal_name: modalName,
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_open", payload);
    }

    trackMetaEvent("modal_open", payload);
    logFirebaseEvent("modal_open", payload);
  };

  // Track modal closes
  const trackModalClose = (modalName: string) => {
    const payload = {
      modal_name: modalName,
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_close", payload);
    }

    trackMetaEvent("modal_close", payload);
    logFirebaseEvent("modal_close", payload);
  };

  // Track external link clicks
  const trackExternalLink = (url: string, linkText?: string) => {
    const payload = {
      link_url: url,
      link_text: linkText || "unnamed",
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "external_link_click", payload);
    }

    trackMetaEvent("external_link_click", payload);
    logFirebaseEvent("external_link_click", payload);
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackSectionView,
    trackVideoPlay,
    trackModalOpen,
    trackModalClose,
    trackExternalLink,
  };
};
