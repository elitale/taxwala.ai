import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
  setUserProperties,
  type Analytics,
} from "firebase/analytics";
import { FIREBASE_CONFIG } from "../constants/config";

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

function getFirebaseAnalytics(): Analytics | null {
  if (typeof window === "undefined") return null;

  if (!app) {
    app = initializeApp(FIREBASE_CONFIG);
  }
  if (!analytics) {
    analytics = getAnalytics(app);
  }
  return analytics;
}

function getDeviceInfo(): Record<string, string> {
  const ua = navigator.userAgent;
  let deviceType = "desktop";
  if (/Mobi|Android/i.test(ua)) deviceType = "mobile";
  else if (/Tablet|iPad/i.test(ua)) deviceType = "tablet";

  return {
    device_type: deviceType,
    device_name: navigator.platform || "unknown",
    user_agent: ua,
    screen_width: String(window.screen.width),
    screen_height: String(window.screen.height),
    language: navigator.language,
  };
}

function log(eventName: string, params?: Record<string, unknown>) {
  const a = getFirebaseAnalytics();
  if (!a) return;
  logEvent(a, eventName, {
    ...params,
    timestamp: new Date().toISOString(),
  });
}

// ─── Web Vitals ──────────────────────────────────────────────

function observeWebVitals() {
  if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") return;

  // LCP
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      if (last) {
        log("web_vital_lcp", { value: Math.round(last.startTime), metric: "LCP" });
      }
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {
    // browser doesn't support LCP
  }

  // FCP
  try {
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          log("web_vital_fcp", { value: Math.round(entry.startTime), metric: "FCP" });
        }
      }
    });
    fcpObserver.observe({ type: "paint", buffered: true });
  } catch {
    // browser doesn't support paint timing
  }

  // CLS
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
        }
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });

    // Report CLS on page hide
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        log("web_vital_cls", { value: Math.round(clsValue * 1000) / 1000, metric: "CLS" });
      }
    });
  } catch {
    // browser doesn't support layout-shift
  }

  // INP (Interaction to Next Paint – replaces FID)
  try {
    const inpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const eventEntry = entry as PerformanceEntry & { duration: number };
        log("web_vital_inp", { value: Math.round(eventEntry.duration), metric: "INP" });
      }
    });
    inpObserver.observe({ type: "event", buffered: true });
  } catch {
    // browser doesn't support event timing
  }

  // TTFB from Navigation Timing
  try {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (navEntries.length > 0) {
      const ttfb = navEntries[0].responseStart - navEntries[0].requestStart;
      log("web_vital_ttfb", { value: Math.round(ttfb), metric: "TTFB" });
    }
  } catch {
    // navigation timing not available
  }
}

// ─── Auto-tracking setup ────────────────────────────────────

function trackPageLoad() {
  const device = getDeviceInfo();
  log("page_load", {
    page_url: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || "direct",
    ...device,
  });

  // Set user properties for device segmentation
  const a = getFirebaseAnalytics();
  if (a) {
    setUserProperties(a, {
      device_type: device.device_type,
      screen_resolution: `${device.screen_width}x${device.screen_height}`,
      language: device.language,
    });
  }
}

function trackClicks() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    const button = target.closest("button");

    if (anchor) {
      const href = anchor.getAttribute("href") || "";
      const text = anchor.textContent?.trim().slice(0, 100) || "";
      const isExternal = anchor.hostname !== window.location.hostname;
      const section = anchor.closest("nav, header, footer, main, section");
      const sectionTag = section?.tagName.toLowerCase() || "unknown";
      const sectionId = section?.id || sectionTag;

      log("link_click", {
        link_url: href,
        link_text: text,
        is_external: isExternal,
        section: sectionId,
        location: sectionTag === "header" || anchor.closest("nav") ? "header" :
                  sectionTag === "footer" ? "footer" : "body",
      });
    }

    if (button) {
      const text = button.textContent?.trim().slice(0, 100) || "";
      const section = button.closest("section, header, footer, main");
      const sectionId = section?.id || section?.tagName.toLowerCase() || "unknown";

      log("button_click", {
        button_text: text,
        section: sectionId,
      });
    }
  });
}

function trackVideoInteractions() {
  // Track YouTube / HTML5 video plays via event delegation
  const observer = new MutationObserver(() => {
    document.querySelectorAll("video").forEach((video) => {
      if (video.dataset.fbTracked) return;
      video.dataset.fbTracked = "1";

      video.addEventListener("play", () => {
        log("video_play", {
          video_src: video.currentSrc?.slice(0, 200) || "unknown",
          video_duration: Math.round(video.duration || 0),
        });
      });
      video.addEventListener("pause", () => {
        log("video_pause", {
          video_src: video.currentSrc?.slice(0, 200) || "unknown",
          video_current_time: Math.round(video.currentTime || 0),
        });
      });
      video.addEventListener("ended", () => {
        log("video_complete", {
          video_src: video.currentSrc?.slice(0, 200) || "unknown",
        });
      });
    });

    // Track iframe-based video modals (YouTube embeds)
    document.querySelectorAll("iframe[src*='youtube']").forEach((iframe) => {
      const el = iframe as HTMLIFrameElement;
      if (el.dataset.fbTracked) return;
      el.dataset.fbTracked = "1";
      log("video_embed_loaded", {
        video_src: el.src?.slice(0, 200) || "unknown",
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function trackSectionVisibility() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const sectionId = el.id || el.dataset.section || "unnamed";
          log("section_view", {
            section_id: sectionId,
            section_tag: el.tagName.toLowerCase(),
          });
          observer.unobserve(el); // fire only once per section
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe all sections
  document.querySelectorAll("section[id], [data-section]").forEach((el) => {
    observer.observe(el);
  });
}

function trackScrollDepth() {
  const milestones = [25, 50, 75, 90, 100];
  const reached = new Set<number>();

  window.addEventListener(
    "scroll",
    () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = Math.round((window.scrollY / scrollHeight) * 100);

      for (const m of milestones) {
        if (pct >= m && !reached.has(m)) {
          reached.add(m);
          log("scroll_depth", { depth_percent: m });
        }
      }
    },
    { passive: true }
  );
}

function trackTimeOnPage() {
  const start = Date.now();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      const seconds = Math.round((Date.now() - start) / 1000);
      log("time_on_page", { duration_seconds: seconds });
    }
  });
}

// ─── Public initializer ─────────────────────────────────────

export function initFirebaseAnalytics() {
  if (typeof window === "undefined") return;

  // Initialize Firebase + Analytics
  getFirebaseAnalytics();

  // Run all trackers
  trackPageLoad();
  observeWebVitals();
  trackClicks();
  trackVideoInteractions();
  trackSectionVisibility();
  trackScrollDepth();
  trackTimeOnPage();
}

// Re-export for manual event logging from components
export { log as logFirebaseEvent };
