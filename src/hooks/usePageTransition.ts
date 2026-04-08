// src/hooks/usePageTransition.ts
import { useRef } from "react";
import { useLocation } from "react-router";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Page transition: fade in on route enter.
 * Wraps page content in a transition container.
 */
export function usePageTransition() {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (!contentRef.current) return;

    // Always scroll to top on route change (even with reduced motion)
    if (!isFirstRender.current) {
      window.scrollTo({ top: 0 });
    }

    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion } = context.conditions!;

      if (reduceMotion || isFirstRender.current) {
        gsap.set(contentRef.current!, { autoAlpha: 1, y: 0 });
        isFirstRender.current = false;
        return;
      }

      // Subsequent route changes: enter animation
      gsap.fromTo(
        contentRef.current!,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
    });
  }, { dependencies: [location.pathname] });

  return contentRef;
}
