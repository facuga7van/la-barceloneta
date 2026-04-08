// src/hooks/useTimelineAnimation.ts
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MM_CONDITIONS } from "../lib/gsap-setup";

/**
 * Pin + scrub + snap animation for the construction timeline.
 *
 * Expected DOM structure inside scope ref:
 * - [data-tl-progress]: Vertical progress bar fill element
 * - [data-tl-step]: Each timeline step container (multiple)
 * - [data-tl-icon]: Icon inside each step
 *
 * The timeline pins in place while the user scrolls through steps.
 */
export function useTimelineAnimation() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!scope.current) return;

    const mm = gsap.matchMedia();

    mm.add(MM_CONDITIONS, (context) => {
      const { reduceMotion, isMobile } = context.conditions!;

      const el = scope.current;
      if (!el) return;

      const steps = gsap.utils.toArray<HTMLElement>("[data-tl-step]", el);
      const progress = el.querySelector<HTMLElement>("[data-tl-progress]");
      const icons = gsap.utils.toArray<HTMLElement>("[data-tl-icon]", el);

      if (steps.length === 0) return;

      // Reduced motion or mobile: show all steps, no pinning
      if (reduceMotion || isMobile) {
        gsap.set(steps, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(icons, { scale: 1, rotation: 0 });
        if (progress) gsap.set(progress, { scaleY: 1 });
        return;
      }

      // Set initial states
      gsap.set(steps.slice(1), { autoAlpha: 0, y: 30, scale: 0.95 });
      gsap.set(icons.slice(1), { scale: 0, rotation: -180 });
      if (progress) gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });

      const numSteps = steps.length;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=3000",
          snap: 1 / (numSteps - 1),
          refreshPriority: 2,
        },
      });

      steps.forEach((step, i) => {
        if (i === 0) return; // First step is visible by default

        const pos = i / numSteps;

        // Progress bar fill
        if (progress) {
          tl.to(progress, { scaleY: (i + 1) / numSteps, duration: 0.3 }, pos);
        }

        // Fade out previous step
        tl.to(steps[i - 1], { autoAlpha: 0.3, scale: 0.95, duration: 0.2 }, pos);

        // Fade in current step
        tl.to(step, { autoAlpha: 1, y: 0, scale: 1, duration: 0.3 }, pos);

        // Icon animation
        if (icons[i]) {
          tl.to(icons[i], { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" }, pos);
        }
      });

      // Last step glow — SEPARATE from scrubbed timeline.
      const lastStep = steps[numSteps - 1];
      if (lastStep) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "+=3000",
          onUpdate: (self) => {
            if (self.progress > 0.95) {
              if (!lastStep.dataset.glowing) {
                lastStep.dataset.glowing = "true";
                gsap.to(lastStep, {
                  filter: "drop-shadow(0 0 20px rgba(242, 9, 9, 0.3))",
                  repeat: -1,
                  yoyo: true,
                  duration: 0.8,
                });
              }
            }
          },
        });
      }
    });
  }, { scope });

  return scope;
}
