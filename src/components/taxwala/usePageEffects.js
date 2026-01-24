import { useCallback, useEffect, useState } from "react";

export const useStickyCTA = (threshold = 800) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollTop > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
};

export const useBodyScrollLock = (locked) => {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [locked]);
};

export const useEscapeKey = (onEscape) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        onEscape();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onEscape]);
};

export const useScrollReveal = () => {
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

export const useSmoothAnchorScroll = (onAfterScroll) => {
  const stableAfterScroll = useCallback(onAfterScroll, [onAfterScroll]);

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handler = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      stableAfterScroll();
    };

    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, [stableAfterScroll]);
};
