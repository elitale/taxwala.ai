/**
 * Custom hooks for TaxWala application
 */

import { useEffect, useState } from "react";

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
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "button_click", {
        button_name: buttonName,
        section_name: section || "general",
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("button_click", {
      button_name: buttonName,
      section_name: section || "general",
    });
  };

  // Track form submissions
  const trackFormSubmit = (formName: string, additionalData?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        form_name: formName,
        ...additionalData,
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("form_submit", {
      form_name: formName,
      ...(additionalData || {}),
    });
  };

  // Track section views
  const trackSectionView = (sectionName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "section_view", {
        section_name: sectionName,
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("section_view", {
      section_name: sectionName,
    });
  };

  // Track video plays
  const trackVideoPlay = (videoId: string, videoTitle: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", {
        video_id: videoId,
        video_title: videoTitle,
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("video_play", {
      video_id: videoId,
      video_title: videoTitle,
    });
  };

  // Track modal opens
  const trackModalOpen = (modalName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_open", {
        modal_name: modalName,
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("modal_open", {
      modal_name: modalName,
    });
  };

  // Track modal closes
  const trackModalClose = (modalName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_close", {
        modal_name: modalName,
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("modal_close", {
      modal_name: modalName,
    });
  };

  // Track external link clicks
  const trackExternalLink = (url: string, linkText?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "external_link_click", {
        link_url: url,
        link_text: linkText || "unnamed",
        timestamp: new Date().toISOString(),
      });
    }

    trackMetaEvent("external_link_click", {
      link_url: url,
      link_text: linkText || "unnamed",
    });
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
