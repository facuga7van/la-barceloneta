// src/hooks/useGSAPAnimations.ts
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Batch scroll reveal for all [data-gsap] elements.
 * Replaces useScrollAnimations (IntersectionObserver + data-animate).
 * Global hook — no scope (queries the entire document, like the old useScrollAnimations).
 *
 * Supported variants via data-gsap attribute value:
 * - "fade-up" (default) — y: 40→0
 * - "fade-left" — x: -60→0
 * - "fade-right" — x: 60→0
 * - "scale-in" — scale: 0.8→1
 * - "reveal" — clipPath inset reveal (plays once, no scrub)
 */
export function useGSAPAnimations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion } = context.conditions!;

      if (reduceMotion) {
        gsap.set("[data-gsap]", { autoAlpha: 1, y: 0, x: 0, scale: 1 });
        return;
      }

      // Default batch: fade-up
      ScrollTrigger.batch('[data-gsap]:not([data-gsap="fade-left"]):not([data-gsap="fade-right"]):not([data-gsap="scale-in"]):not([data-gsap="reveal"])', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            ease: "back.out(1.4)",
            overwrite: true,
          }),
        start: "top 85%",
      });

      // fade-left
      ScrollTrigger.batch('[data-gsap="fade-left"]', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            stagger: 0.15,
            ease: "back.out(1.4)",
            overwrite: true,
          }),
        start: "top 85%",
      });

      // fade-right
      ScrollTrigger.batch('[data-gsap="fade-right"]', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            stagger: 0.15,
            ease: "back.out(1.4)",
            overwrite: true,
          }),
        start: "top 85%",
      });

      // scale-in
      ScrollTrigger.batch('[data-gsap="scale-in"]', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.4)",
            overwrite: true,
          }),
        start: "top 85%",
      });

      // reveal (clipPath — plays once, NO scrub)
      const reveals = gsap.utils.toArray<HTMLElement>('[data-gsap="reveal"]');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              refreshPriority: 1,
            },
          }
        );
      });
    });
  });
}
