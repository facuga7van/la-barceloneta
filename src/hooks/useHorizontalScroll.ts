// src/hooks/useHorizontalScroll.ts
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Horizontal scroll: vertical scroll → horizontal card movement.
 * Desktop only. Mobile falls back to normal vertical layout.
 *
 * Expected DOM structure inside scope ref:
 * - [data-hscroll-wrapper]: The flex-row container holding all cards
 * - [data-hscroll-card]: Each card element (multiple)
 * - [data-hscroll-progress]: Optional horizontal progress bar
 */
export function useHorizontalScroll() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!scope.current) return;

    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion, isMobile } = context.conditions!;

      const el = scope.current;
      if (!el) return;

      const wrapper = el.querySelector<HTMLElement>("[data-hscroll-wrapper]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-hscroll-card]", el);
      const progressBar = el.querySelector<HTMLElement>("[data-hscroll-progress]");

      if (!wrapper || cards.length === 0) return;

      // Mobile or reduced motion: vertical stack, no horizontal scroll
      if (reduceMotion || isMobile) {
        gsap.set(cards, { autoAlpha: 1, scale: 1, rotation: 0 });
        return;
      }

      // Setup progress bar initial state
      if (progressBar) {
        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
      }

      // Desktop: horizontal scroll with pin
      const scrollTween = gsap.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          pin: true,
          scrub: 1,
          start: "top top",
          invalidateOnRefresh: true,
          refreshPriority: 3,
          end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
          // Progress bar tracking
          onUpdate: (self) => {
            if (progressBar) gsap.set(progressBar, { scaleX: self.progress });
          },
        },
      });

      // Cards animate in as they enter the horizontal viewport
      cards.forEach((card) => {
        gsap.from(card, {
          autoAlpha: 0,
          scale: 0.9,
          rotation: -3,
          scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: card,
            start: "left 80%",
            toggleActions: "play none none reset",
          },
        });
      });

      // Cleanup: return a function that kills all ScrollTriggers created here
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });
  }, { scope });

  return scope;
}
