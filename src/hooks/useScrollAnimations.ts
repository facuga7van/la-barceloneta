import { useEffect } from "react";

/**
 * Observes elements with `data-animate` attribute and adds `is-visible` class
 * when they enter the viewport. Supports these animation types via data-animate value:
 * - "fade-up" (default): fade in + slide up
 * - "fade-in": simple fade
 * - "fade-left": fade in + slide from left
 * - "fade-right": fade in + slide from right
 * - "scale-in": fade in + subtle scale
 *
 * Optional: data-delay="100" to stagger children (ms)
 */
export function useScrollAnimations(rootSelector?: string) {
  useEffect(() => {
    const root = rootSelector
      ? document.querySelector(rootSelector)
      : document;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>("[data-animate]");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) {
              setTimeout(() => el.classList.add("is-visible"), Number(delay));
            } else {
              el.classList.add("is-visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootSelector]);
}
