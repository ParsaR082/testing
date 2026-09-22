"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const metaRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasVisitedSite = sessionStorage.getItem(
      "urumsima-site-visited",
    );

    if (hasVisitedSite) {
      setVisible(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(true);

      sessionStorage.setItem(
        "urumsima-site-visited",
        "true",
      );
    }, 2850);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useGSAP(
    () => {
      if (!visible) return;

      const hero = heroRef.current;

      const image = imageRef.current;

      const content = contentRef.current;

      const meta = metaRef.current;

      if (!hero || !image || !content || !meta) return;

      const isMobile = window.matchMedia(
        "(max-width: 767px)",
      ).matches;

      const context = gsap.context(() => {
        const introFrame = window.requestAnimationFrame(() => {
        gsap.fromTo(
          image,
          {
            scale: isMobile ? 1.05 : 1.12,

            x: 0,

            y: 0,
          },
          {
            scale: 1,

            duration: isMobile ? 2.8 : 3.6,

            ease: "power4.out",
          },
        );

        gsap.fromTo(
          content.children,
          {
            yPercent: 110,

            opacity: 0,
          },
          {
            yPercent: 0,

            opacity: 1,

            duration: isMobile ? 1.15 : 1.45,

            stagger: 0.12,

            delay: 0.22,

            ease: "power3.out",
          },
        );

        gsap.fromTo(
          meta,
          {
            opacity: 0,

            y: isMobile ? 12 : 18,
          },
          {
            opacity: 1,

            y: 0,

            duration: 1,

            delay: 0.65,

            ease: "power2.out",
          },
        );

        if (!isMobile) {
          const moveX = gsap.quickTo(image, "x", {
            duration: 1.4,

            ease: "power3.out",
          });

          const moveY = gsap.quickTo(image, "y", {
            duration: 1.4,

            ease: "power3.out",
          });

          const handleMouseMove = (event: MouseEvent) => {
            const x =
              (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
              (event.clientY / window.innerHeight - 0.5) * 2;

            moveX(x * 10);

            moveY(y * 7);
          };

          window.addEventListener(
            "mousemove",
            handleMouseMove,
            {
              passive: true,
            },
          );

          return () => {
            window.removeEventListener(
              "mousemove",
              handleMouseMove,
            );

            moveX.tween.kill();

            moveY.tween.kill();
          };
        }
        });

        return () => {
          window.cancelAnimationFrame(introFrame);
        };
      }, hero);

      return () => {
        context.revert();
      };
    },
    {
      scope: heroRef,

      dependencies: [visible],
    },
  );

  return (
    <section
      ref={heroRef}
      dir="rtl"
      className={[
        "hero relative isolate min-h-[100svh] overflow-hidden",
        "bg-[#111111] text-background",
        "transition-opacity duration-700",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className="hero-image absolute -inset-[3%] will-change-transform md:-inset-[5%]"
        >
          <Image
            src="/images/hero.jpg"
            alt="فضای معماری UrumSima"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      </div>

      <div
        ref={metaRef}
        className="absolute inset-x-0 top-0 z-10 px-6 pt-28 md:px-10 md:pt-32"
      >
        <div
          dir="ltr"
          className="mx-auto flex max-w-[1600px] items-start justify-between"
        >
          <span className="text-[7px] font-medium uppercase leading-none tracking-[0.22em] text-white/65 md:text-[9px] md:tracking-[0.24em]">
            Urumia / Iran
          </span>

          <span className="text-[7px] font-medium uppercase leading-none tracking-[0.22em] text-white/65 md:text-[9px] md:tracking-[0.24em]">
            استودیوی معماری
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 md:pb-12">
        <div className="mx-auto max-w-[1600px]">
          <div
            ref={contentRef}
            className="max-w-[1250px]"
          >
            <div className="hero-text-mask">
              <p
                dir="ltr"
                className="type-label text-[8px] font-medium uppercase leading-none tracking-[0.2em] text-white/55 md:text-[10px] md:tracking-[0.22em]"
              >
                UrumSima
              </p>
            </div>

            <div className="hero-text-mask mt-5 md:mt-7">
              <h1
                dir="rtl"
                className="type-display max-w-[1150px] text-[clamp(3.25rem,11vw,10rem)] font-light leading-[0.9] tracking-[-0.045em] md:leading-[0.86] md:tracking-[-0.055em]"
              >
                معماری که
                <br />
                تجربه انسانی را
                <br />
                شکل می‌دهد.
              </h1>
            </div>
          </div>

          <div
            dir="rtl"
            className="mt-10 flex items-end justify-between gap-8 md:mt-12"
          >
            <p className="type-body max-w-[240px] text-[9px] font-normal leading-[1.55] tracking-[-0.005em] text-white/55 md:max-w-[280px] md:text-[11px] md:leading-[1.6]">
              فضا، نور، متریال و حرکت؛ در کنار یکدیگر و در
              خدمت تجربه انسانی در نظر گرفته می‌شوند.
            </p>

            <span className="hidden text-[8px] font-medium leading-none tracking-[0.04em] text-white/45 md:block md:text-[9px]">
              برای کاوش اسکرول کنید
            </span>

            <span
              dir="ltr"
              className="text-[8px] font-medium leading-none tracking-[0.18em] text-white/45 md:hidden"
            >
              01 / 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}