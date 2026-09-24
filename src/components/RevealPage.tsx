"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const referenceHero = document.querySelector(".reference-hero");

      if (referenceHero) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
          ".reference-hero-art",
          { clipPath: "inset(100% 0 0 0 round 58% 0 0 0)", scale: 1.08, opacity: 0 },
          { clipPath: "inset(0% 0 0 0 round 58% 0 0 0)", scale: 1, opacity: 1, duration: 1.2 },
          0.08
        )
        .fromTo(
          ".reference-hero-copy > *",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72, stagger: 0.075 },
          0.42
        )
        .fromTo(
          ".reference-socials span",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 },
          0.7
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.closest(".reference-hero")) return;

        gsap.fromTo(element, { y: 42, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.0, ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        if (element.closest(".reference-hero")) return;

        gsap.fromTo(element, { clipPath: "inset(100% 0 0 0)", scale: 1.04 }, {
          clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
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
