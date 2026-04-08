// src/hooks/useCountUp.ts
import { useRef, useCallback } from "react";
import { gsap } from "../lib/gsap-setup";

interface CountUpOptions {
  duration?: number;
  start?: number;
}

/**
 * Animates a number from `start` to `end` inside the target element.
 * Returns a ref to attach to the container and a trigger function.
 */
export function useCountUp(end: number, options: CountUpOptions = {}) {
  const { duration = 1.2, start = 0 } = options;
  const ref = useRef<HTMLElement>(null);
  const obj = useRef({ value: start });

  const animate = useCallback(() => {
    if (!ref.current) return;
    obj.current.value = start;
    gsap.to(obj.current, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.current.value).toLocaleString("es-AR");
        }
      },
    });
  }, [end, duration, start]);

  return { ref, animate };
}
