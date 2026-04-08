// src/lib/gsap-setup.ts
// Central plugin registration — import this ONCE in Layout.tsx before any GSAP usage.

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Club GSAP plugins — uncomment when license is available:
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// gsap.registerPlugin(ScrollSmoother, SplitText); // uncomment with license

gsap.defaults({
  duration: 0.8,
  ease: "power2.out",
});

// ── Reusable matchMedia conditions ──
export const MM_CONDITIONS = {
  isDesktop: "(min-width: 768px)",
  isMobile: "(max-width: 767px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export { gsap, ScrollTrigger, useGSAP };
// export { ScrollSmoother, SplitText }; // uncomment with license
