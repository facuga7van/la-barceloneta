// src/hooks/useHeroAnimations.ts
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Hero entrance timeline — autoplay on mount.
 *
 * Expected DOM structure (use refs or data attributes):
 * - [data-hero-bg]: Background image/video
 * - [data-hero-logo]: Logo/brand element
 * - [data-hero-headline]: Main headline text
 * - [data-hero-subtitle]: Subtitle text
 * - [data-hero-stats]: Stats container (children are individual stats)
 * - [data-hero-cta]: CTA button
 */
export function useHeroAnimations() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scope.current) return;

    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion } = context.conditions!;

      // Reduced motion: show everything, no animations
      if (reduceMotion) {
        gsap.set(scope.current!.querySelectorAll("[data-hero-bg], [data-hero-logo], [data-hero-headline], [data-hero-subtitle], [data-hero-stats] > *, [data-hero-cta]"), {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const el = scope.current;
      if (!el) return;

      const bg = el.querySelector("[data-hero-bg]");
      const logo = el.querySelector("[data-hero-logo]");
      const headline = el.querySelector("[data-hero-headline]");
      const subtitle = el.querySelector("[data-hero-subtitle]");
      const stats = el.querySelectorAll("[data-hero-stats] > *");
      const cta = el.querySelector("[data-hero-cta]");

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Background scale
      if (bg) {
        gsap.set(bg, { scale: 1.15 });
        tl.to(bg, { scale: 1, duration: 3, ease: "power1.out" }, 0);
      }

      // 2. Logo reveal
      if (logo) {
        gsap.set(logo, { autoAlpha: 0, y: -30 });
        tl.to(logo, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.3);
      }

      // 3. Headline — simple fade (SplitText fallback)
      if (headline) {
        gsap.set(headline, { autoAlpha: 0, y: 40 });
        tl.to(headline, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.6);
      }

      // 4. Subtitle
      if (subtitle) {
        gsap.set(subtitle, { autoAlpha: 0, y: 20 });
        tl.to(subtitle, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.0);
      }

      // 5. Stats — staggered reveal + countUp trigger
      if (stats.length > 0) {
        gsap.set(stats, { autoAlpha: 0, y: 20 });
        tl.to(stats, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          onStart: () => {
            el.dispatchEvent(new CustomEvent("hero:countup"));
          },
        }, 1.2);
      }

      // 6. CTA button — scale in
      if (cta) {
        gsap.set(cta, { autoAlpha: 0, scale: 0.9 });
        tl.to(cta, { autoAlpha: 1, scale: 1, duration: 0.5 }, 1.4);
      }

      // CTA glow pulse — SEPARATE from timeline
      if (cta) {
        tl.call(() => {
          gsap.to(cta, {
            filter: "drop-shadow(0 0 15px rgba(242, 9, 9, 0.4))",
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
          });
        });
      }

      // Parallax on hero background (scroll-driven)
      if (bg) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
          refreshPriority: 0,
          onUpdate: (self) => {
            gsap.set(bg, { y: self.progress * -50 });
          },
        });
      }
    });
  }, { scope });

  return scope;
}
