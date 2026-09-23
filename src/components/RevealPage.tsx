"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTimeline
        .fromTo("[data-hero-image]", { clipPath: "inset(100% 0 0 0)", scale: 1.08, y: 22 }, { clipPath: "inset(0% 0 0 0)", scale: 1, y: 0, duration: 1.45 }, 0.1)
        .fromTo("[data-hero-title]", { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.15 }, 0.58)
        .fromTo("[data-hero-meta]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.86)
        .fromTo("[data-hero-copy]", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.94)
        .fromTo("[data-hero-link]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 1.03);

      gsap.to("[data-hero-stage]", {
        yPercent: -18,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: { trigger: "[data-hero-stage]", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>("[data-hero-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -11,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 72, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.15, ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        gsap.fromTo(element, { clipPath: "inset(100% 0 0 0)", scale: 1.04 }, {
          clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.25, ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return <div ref={root} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}
