// src/hooks/useParallax.ts
import { gsap, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Parallax for background images/sections.
 * Fallback implementation without ScrollSmoother.
 *
 * data-parallax="slow" → moves up slower (depth)
 * data-parallax="subtle" → barely noticeable depth
 * data-parallax="fast" → moves down (foreground)
 */
export function useParallax() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion, isMobile } = context.conditions!;

      if (reduceMotion || isMobile) return;

      const speeds: Record<string, number> = {
        slow: -50,
        subtle: -25,
        fast: 30,
      };

      const elements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      elements.forEach((el) => {
        const type = el.dataset.parallax || "subtle";
        const yOffset = speeds[type] ?? speeds.subtle;

        gsap.to(el, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
  });
}
