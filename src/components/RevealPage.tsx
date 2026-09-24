"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let started = false;
    let context: ReturnType<typeof gsap.context> | undefined;

    const startPageMotion = () => {
      if (started) return;
      started = true;

      context = gsap.context(() => {
        const hero = document.querySelector<HTMLElement>(".reference-hero");
        const shell = document.querySelector<HTMLElement>(".site-shell");

        if (hero) {
          const art = hero.querySelector<HTMLElement>(".reference-hero-art");
          const copy = hero.querySelector<HTMLElement>(".reference-hero-copy");
          const socials = hero.querySelectorAll<HTMLElement>(".reference-socials span");
          const header = shell?.querySelector<HTMLElement>(".site-header");

          gsap.set([header, art, copy, socials], { autoAlpha: 0 });

          const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

          intro
            .fromTo(header,
              { y: -12, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.65, clearProps: "transform" },
              0
            )
            .fromTo(art,
              {
                clipPath: "inset(100% 0 0 0 round 58% 0 0 0)",
                scale: 1.12,
                x: 24,
                autoAlpha: 0,
              },
              {
                clipPath: "inset(0% 0 0 0 round 58% 0 0 0)",
                scale: 1,
                x: 0,
                autoAlpha: 1,
                duration: 1.45,
                ease: "power4.inOut",
                clearProps: "transform",
              },
              0.05
            )
            .fromTo(copy,
              { y: 26, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.78, clearProps: "transform" },
              0.43
            )
            .fromTo(copy?.querySelectorAll(":scope > *") ?? [],
              { y: 15, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.62,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "transform",
              },
              0.55
            )
            .fromTo(socials,
              { y: 12, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.07, clearProps: "transform" },
              0.92
            );
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          if (element.closest(".reference-hero")) return;

          gsap.fromTo(element, { y: 34, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power4.out",
            clearProps: "transform",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
          if (element.closest(".reference-hero")) return;

          gsap.fromTo(element, { clipPath: "inset(100% 0 0 0)", scale: 1.045 }, {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.12,
            ease: "power4.inOut",
            clearProps: "clipPath,transform",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          gsap.to(element, {
            yPercent: -7,
            ease: "none",
            scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        ScrollTrigger.refresh();
      }, root);
    };

    const onIntroComplete = () => startPageMotion();
    window.addEventListener("architecture:intro-complete", onIntroComplete);

    // Handles the case where the intro was already completed this session,
    // or its completion event fires before this component subscribes.
    if (sessionStorage.getItem("architecture-intro-seen") === "1") {
      requestAnimationFrame(startPageMotion);
    }

    return () => {
      window.removeEventListener("architecture:intro-complete", onIntroComplete);
      context?.revert();
    };
  }, []);

  return <div ref={root} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}
