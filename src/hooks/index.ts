/**
 * Custom hooks for TaxWala application
 */

import { useEffect, useState } from "react";

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
