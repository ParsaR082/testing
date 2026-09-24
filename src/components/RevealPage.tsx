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

          if (art && copy) {
            const introTargets = [header, art, copy, ...Array.from(socials)].filter(
              (target): target is HTMLElement => target instanceof HTMLElement
            );

            gsap.set(introTargets, { autoAlpha: 0 });

            const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

            if (header) {
              intro.fromTo(header, { y: -12, autoAlpha: 0 }, {
                y: 0, autoAlpha: 1, duration: 0.7, clearProps: "transform",
              }, 0);
            }

            intro
              .fromTo(art, {
                clipPath: "inset(100% 0 0 0 round 58% 0 0 0)",
                scale: 1.12, x: 28, autoAlpha: 0,
              }, {
                clipPath: "inset(0% 0 0 0 round 58% 0 0 0)",
                scale: 1, x: 0, autoAlpha: 1, duration: 1.55,
                ease: "power4.inOut",
              }, 0.04)
              .fromTo(copy, { x: -42, y: 18, autoAlpha: 0 }, {
                x: 0, y: 0, autoAlpha: 1, duration: 0.95,
                clearProps: "transform",
              }, 0.38)
              .fromTo(copy.querySelectorAll(":scope > *"), {
                y: 22, autoAlpha: 0,
              }, {
                y: 0, autoAlpha: 1, duration: 0.72, stagger: 0.1,
                ease: "power3.out", clearProps: "transform",
              }, 0.48)
              .fromTo(socials, { x: -14, autoAlpha: 0 }, {
                x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08,
                clearProps: "transform",
              }, 0.9);

            // Attach the scroll-linked exit only after the entrance has completed.
            // This prevents the scrub timeline from competing with the intro's initial hidden state.
            intro.eventCallback("onComplete", () => {
              gsap.timeline({
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.65,
                  invalidateOnRefresh: true,
                },
              })
                .fromTo(copy,
                  { x: 0, y: 0, autoAlpha: 1 },
                  { x: -90, y: -12, autoAlpha: 0, ease: "none" },
                  0
                )
                .fromTo(art,
                  {
                    x: 0, y: 0, scale: 1, autoAlpha: 1,
                    clipPath: "inset(0% 0 0 0 round 58% 0 0 0)",
                  },
                  {
                    x: 95, y: 70, scale: 1.12, autoAlpha: 0,
                    clipPath: "inset(0 0 100% 0 round 58% 0 0 0)",
                    ease: "none",
                  },
                  0
                )
                .fromTo(socials,
                  { x: 0, autoAlpha: 1 },
                  { x: -24, autoAlpha: 0, stagger: 0.025, ease: "none" },
                  0
                );
              ScrollTrigger.refresh();
            });
          }
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          if (element.closest(".reference-hero")) return;

          gsap.fromTo(element, {
            y: 42, autoAlpha: 0, filter: "blur(5px)",
          }, {
            y: 0, autoAlpha: 1, filter: "blur(0px)",
            duration: 0.9, ease: "power4.out",
            clearProps: "transform,filter",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
              invalidateOnRefresh: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
          if (element.closest(".reference-hero")) return;

          gsap.fromTo(element, {
            clipPath: "inset(100% 0 0 0)",
            scale: 1.055,
          }, {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.15,
            ease: "power4.inOut",
            clearProps: "clipPath,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
              invalidateOnRefresh: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          gsap.to(element, {
            yPercent: -7,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, root.current ?? undefined);
    };

    const onIntroComplete = () => startPageMotion();
    window.addEventListener("architecture:intro-complete", onIntroComplete);

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
