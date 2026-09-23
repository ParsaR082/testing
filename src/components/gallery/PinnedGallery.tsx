"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type PinnedGalleryItem = {
  src: string;
  alt: string;
  label: string;
  description: string;
};

type PinnedGalleryProps = {
  items: PinnedGalleryItem[];
};

export function PinnedGallery({
  items,
}: PinnedGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || items.length === 0) return;

      const isMobile = window.matchMedia(
        "(max-width: 767px)",
      ).matches;

      if (isMobile) {
        return;
      }

      const imageItems = itemsRef.current.filter(
        Boolean,
      ) as HTMLDivElement[];

      if (!imageItems.length) return;

      gsap.set(imageItems, {
        yPercent: 105,
        opacity: 0,
      });

      gsap.set(imageItems[0], {
        yPercent: 0,
        opacity: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${items.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      imageItems.forEach((item, index) => {
        if (index === 0) return;

        timeline
          .to(
            imageItems[index - 1],
            {
              yPercent: -105,
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            index - 1,
          )
          .to(
            item,
            {
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            index - 1,
          );
      });

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${items.length * 100}%`,
            scrub: true,
          },
        });
      }

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [items.length],
    },
  );

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* DESKTOP */}

      <div className="mx-auto hidden h-full w-full max-w-[1600px] grid-cols-[0.8fr_1.2fr] gap-16 px-10 py-24 md:grid">
        <div className="flex flex-col justify-between">
          <div className="pb-8">
            <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-foreground/45 md:text-[10px] md:tracking-[0.1em]">
              اصول فضایی
            </span>

            <h2 className="arshia mt-8 max-w-[600px] text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.055em]">
              فضا فقط
              <br />
              اشغال نمی‌شود.
              <br />
              احساس می‌شود.
            </h2>
          </div>

          <div className="max-w-[300px]">
            <p className="text-[11px] font-normal leading-[1.85] tracking-[-0.005em] text-foreground/55 md:text-[12px] md:leading-[1.8]">
              نور، متریال، تناسب و حرکت، زبان آرام و پنهانی را شکل
              می‌دهند که در پس هر پروژه‌ی UrumSima قرار دارد.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative h-[72vh] w-full max-w-[720px] overflow-hidden">
            {items.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                ref={(element) => {
                  itemsRef.current[index] = element;
                }}
                className="absolute inset-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="52vw"
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-background md:bottom-8 md:left-8">
                    <span
                      dir="ltr"
                      className="text-[8px] font-medium leading-none tracking-[0.18em] text-background/55 md:text-[9px] md:tracking-[0.2em]"
                    >
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
                      {item.label}
                    </h3>

                    <p className="mt-2 max-w-[360px] text-[10px] font-normal leading-[1.8] tracking-[-0.005em] text-background/65 md:text-[11px] md:leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -left-5 top-1/2 h-32 w-px -translate-y-1/2 overflow-hidden bg-foreground/10">
            <div
              ref={progressRef}
              className="h-full w-full scale-y-0 bg-foreground/70"
            />
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="px-6 py-28 md:hidden">
        <div className="mb-16">
          <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-muted">
            اصول فضایی
          </span>

          <h2 className="mt-7 max-w-[360px] text-[clamp(2.6rem,11vw,4rem)] font-light leading-[0.94] tracking-[-0.055em]">
            فضا فقط
            <br />
            اشغال نمی‌شود.
            <br />
            احساس می‌شود.
          </h2>

          <p className="mt-8 max-w-[300px] text-[11px] font-normal leading-[1.9] tracking-[-0.005em] text-muted">
            نور، متریال، تناسب و حرکت، زبان آرام و پنهانی را شکل
            می‌دهند که در پس هر پروژه‌ی UrumSima قرار دارد.
          </p>
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-background">
                    <span
                      dir="ltr"
                      className="text-[8px] font-medium leading-none tracking-[0.18em] text-background/50"
                    >
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-[1.7rem] font-light leading-[1.05] tracking-[-0.035em]">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[11px] font-normal leading-[1.9] tracking-[-0.005em] text-muted md:text-[12px] md:leading-[1.85]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}