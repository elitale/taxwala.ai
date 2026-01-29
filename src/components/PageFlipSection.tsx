/**
 * Page Flip Section Component
 * Creates a book page flip effect for each section using GSAP
 */

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PageFlipSectionProps {
  children: React.ReactNode;
  /** Background color for the page */
  pageColor?: string;
  /** Add shadow effect to simulate book depth */
  withShadow?: boolean;
  /** Delay before animation starts (in seconds) */
  delay?: number;
}

export const PageFlipSection: React.FC<PageFlipSectionProps> = ({
  children,
  pageColor = "#ffffff",
  withShadow = true,
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !pageRef.current) return;

    const section = sectionRef.current;
    const page = pageRef.current;

    // Set initial state - page is tilted and ready to flip
    gsap.set(page, {
      transformOrigin: "left center",
      rotationY: -5,
      opacity: 0.95,
      scale: 0.98,
    });

    // Create the page flip animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
      },
    });

    tl.to(page, {
      rotationY: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      delay: delay,
    });

    // Add a subtle page curl effect on scroll
    const curlTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "bottom 65%",
        end: "bottom 15%",
        scrub: 1.5,
      },
    });

    curlTl.to(page, {
      rotationY: 2,
      scale: 0.99,
      duration: 0.5,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Book spine shadow on the left */}
      {withShadow && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900/10 to-transparent pointer-events-none z-10" />
      )}

      {/* Page content */}
      <div
        ref={pageRef}
        className="relative w-full"
        style={{
          backgroundColor: pageColor,
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23000000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-20">{children}</div>

        {/* Right edge shadow for book effect */}
        {withShadow && (
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900/5 to-transparent pointer-events-none z-10" />
        )}
      </div>
    </div>
  );
};
