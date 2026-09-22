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

export function HorizontalGallery({ items }: HorizontalGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || window.matchMedia("(max-width: 767px)").matches) {
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
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative h-screen min-h-[680px] overflow-hidden bg-[#0d0d0d] text-background"
    >
      <div className="absolute inset-x-0 top-0 z-20 h-20 bg-[#0d0d0d]/85 backdrop-blur-md md:h-24" />

      <div className="gallery-edge-fade gallery-edge-fade--left" aria-hidden="true" />      <div className="gallery-edge-fade gallery-edge-fade--right" aria-hidden="true" />      <div className="gallery-edge-line gallery-edge-line--left" aria-hidden="true" />      <div className="gallery-edge-line gallery-edge-line--right" aria-hidden="true" />     <div className="absolute right-6 top-7 z-30 md:right-10 md:top-9">
        <span className="text-[8px] font-medium text-background/45 md:text-[10px]">
          فضاهای منتخب
        </span>
      </div>

      <div
        ref={trackRef}
        dir="ltr"
        className="hidden h-screen min-h-[680px] w-max items-center gap-[5vw] px-[8vw] md:flex"
      >
        {items.map((item, index) => (
          <article
            key={`${item.src}-${index}`}
            className="relative flex h-[68vh] w-[46vw] max-w-[760px] min-w-[560px] shrink-0 items-center"
          >
            <div className="relative h-full w-full overflow-hidden bg-[#1b1b1b] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="46vw"
                priority={index === 0}
                className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              <div
                dir="rtl"
                className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-9"
              >
                <div className="flex items-end justify-between gap-6">
                  <div>
                    {item.title && (
                      <h3 className="text-[clamp(1.7rem,3vw,3.2rem)] font-light leading-[1.05] tracking-[-0.04em]">
                        {item.title}
                      </h3>
                    )}

                    {item.meta && (
                      <p
                        dir="ltr"
                        className="mt-2 text-[8px] tracking-[0.18em] text-background/60 md:text-[9px]"
                      >
                        {item.meta}
                      </p>
                    )}
                  </div>

                  <span
                    dir="ltr"
                    className="text-[9px] tracking-[0.16em] text-background/45 md:text-[10px]"
                  >
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div
          dir="rtl"
          className="flex h-full w-[18vw] shrink-0 items-center justify-center"
        >
          <span className="max-w-[180px] text-center text-[10px] leading-[1.8] text-background/30 md:text-[11px]">
            معماری از طریق حرکت تجربه می‌شود.
          </span>
        </div>
      </div>

      <div dir="rtl" className="px-6 pb-24 pt-28 md:hidden">
        <div className="mb-14">
          <span className="text-[8px] text-background/40">فضاهای منتخب</span>
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
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  {item.title && (
                    <h3 className="text-[1.5rem] font-light leading-[1.05] tracking-[-0.035em]">
                      {item.title}
                    </h3>
                  )}
                  {item.meta && (
                    <p dir="ltr" className="mt-2 text-[8px] tracking-[0.18em] text-background/45">
                      {item.meta}
                    </p>
                  )}
                </div>
                <span className="pt-1 text-[9px] text-background/30">مشاهده</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        dir="ltr"
        className="absolute bottom-7 left-6 right-6 z-30 hidden items-center justify-between md:left-10 md:right-10 md:flex"
      >
        <span className="text-[8px] tracking-[0.18em] text-background/30 md:text-[9px]">
          UrumSima / 2026
        </span>
        <span className="text-[8px] tracking-[0.18em] text-background/30 md:text-[9px]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}