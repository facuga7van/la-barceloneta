// src/hooks/useNavbarAnimation.ts
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Navbar hide/show on scroll direction.
 * The navbar is a RIGHT SIDEBAR (fixed, 56px wide) — not a top navbar.
 * - Scroll down → hide (x: 100%, slides off to the right)
 * - Scroll up → show (x: 0)
 * - Initial load: animate in from right
 */
export function useNavbarAnimation() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion, isDesktop } = context.conditions!;

      if (reduceMotion || !isDesktop) {
        gsap.set(navRef.current!, { autoAlpha: 1, x: 0 });
        return;
      }

      const nav = navRef.current!;
      let lastDirection = 0;

      // Entrance animation (from right)
      gsap.from(nav, {
        x: 100,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      });

      // Hide/show on scroll direction — only fires on direction CHANGE
      const showNav = () => gsap.to(nav, { x: 0, duration: 0.3, ease: "power2.out" });
      const hideNav = () => gsap.to(nav, { x: "100%", duration: 0.3, ease: "power2.in" });

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        refreshPriority: -1,
        onUpdate: (self) => {
          if (self.scroll() < 100) {
            if (lastDirection !== 0) { showNav(); lastDirection = 0; }
            return;
          }
          if (self.direction !== lastDirection) {
            lastDirection = self.direction;
            if (self.direction === -1) showNav();
            else hideNav();
          }
        },
      });
    });
  }, { scope: navRef });

  return navRef;
}
