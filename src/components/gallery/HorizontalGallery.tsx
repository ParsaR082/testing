"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type HorizontalGalleryItem = {
  src: string;
  alt: string;
  title?: string;
  meta?: string;
};

type HorizontalGalleryProps = {
  items: HorizontalGalleryItem[];
};

export function HorizontalGallery({
  items,
}: HorizontalGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const mediaQuery = window.matchMedia("(max-width: 767px)");

      if (mediaQuery.matches) {
        return;
      }

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: () => getDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      const handleResize = () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
          tween.scrollTrigger?.kill();
          tween.kill();
          return;
        }

        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="horizontal-gallery relative overflow-hidden bg-[#111111] text-background"
    >
      {/* DESKTOP LABEL */}

      <div className="absolute right-6 top-8 z-20 md:right-10 md:top-10">
        <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-background/45 md:text-[10px] md:tracking-[0.1em]">
          فضاهای منتخب
        </span>
      </div>

      {/* DESKTOP TRACK */}

      <div
        ref={trackRef}
        dir="ltr"
        className="hidden h-full w-max items-center gap-[4vw] px-[10vw] md:flex"
      >
        {items.map((item, index) => (
          <article
            key={`${item.src}-${index}`}
            className="relative flex h-[72vh] w-[48vw] shrink-0 flex-col justify-end"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="48vw"
                className="object-cover"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent">
                <div
                  dir="rtl"
                  className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8"
                >
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      {item.title && (
                        <h3 className="text-[clamp(1.5rem,3vw,3rem)] font-light leading-[1.05] tracking-[-0.035em]">
                          {item.title}
                        </h3>
                      )}

                      {item.meta && (
                        <p
                          dir="ltr"
                          className="mt-2 text-[8px] font-medium uppercase leading-[1.4] tracking-[0.18em] text-background/65 md:text-[9px] md:tracking-[0.2em]"
                        >
                          {item.meta}
                        </p>
                      )}
                    </div>

                    <span
                      dir="ltr"
                      className="text-[9px] font-medium leading-none tracking-[0.16em] text-background/45 md:text-[10px] md:tracking-[0.18em]"
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div
          dir="rtl"
          className="flex h-full w-[18vw] shrink-0 items-center justify-center"
        >
          <span className="max-w-[180px] text-center text-[10px] font-medium leading-[1.8] tracking-[0.02em] text-background/35 md:text-[11px]">
            معماری از طریق حرکت تجربه می‌شود.
          </span>
        </div>
      </div>

      {/* MOBILE STACK */}

      <div
        dir="rtl"
        className="px-6 pb-24 pt-28 md:hidden"
      >
        <div className="mb-14">
          <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-background/40">
            فضاهای منتخب
          </span>

          <h2 className="mt-6 max-w-[320px] text-[clamp(2.5rem,11vw,4rem)] font-light leading-[0.94] tracking-[-0.055em]">
            معماری از طریق حرکت تجربه می‌شود.
          </h2>
        </div>

        <div className="space-y-20">
          {items.map((item, index) => (
            <article key={`${item.src}-mobile-${index}`}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                  <div className="absolute bottom-5 left-5 right-5 text-background">
                    <span
                      dir="ltr"
                      className="text-[8px] font-medium leading-none tracking-[0.18em] text-background/45"
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  {item.title && (
                    <h3 className="text-[1.5rem] font-light leading-[1.05] tracking-[-0.035em]">
                      {item.title}
                    </h3>
                  )}

                  {item.meta && (
                    <p
                      dir="ltr"
                      className="mt-2 text-[8px] font-medium uppercase leading-[1.4] tracking-[0.18em] text-background/45"
                    >
                      {item.meta}
                    </p>
                  )}
                </div>

                <span
                  dir="rtl"
                  className="pt-1 text-[9px] font-medium leading-none tracking-[0.02em] text-background/30"
                >
                  مشاهده
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DESKTOP FOOTER */}

      <div
        dir="ltr"
        className="absolute bottom-8 left-6 right-6 z-20 hidden items-center justify-between md:left-10 md:right-10 md:flex"
      >
        <span className="text-[8px] font-medium uppercase leading-none tracking-[0.18em] text-background/35 md:text-[9px] md:tracking-[0.2em]">
          UrumSima / 2026
        </span>

        <span className="text-[8px] font-medium uppercase leading-none tracking-[0.18em] text-background/35 md:text-[9px] md:tracking-[0.2em]">
          Scroll
        </span>
      </div>
    </section>
  );
}