"use client";

import { TextReveal } from "@/components/animations/TextReveal";

export function HomeIntro() {
  return (
    <section
      dir="rtl"
      className="home-intro px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3"><span className="section-index">01</span>
            <TextReveal>
              <p className="text-[9px] font-medium tracking-[0.04em] text-muted">
                استودیوی معماری UrumSima
              </p>
            </TextReveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <TextReveal>
              <h2 className="max-w-[1100px] text-[clamp(2.8rem,6vw,7rem)] font-light leading-[0.94] tracking-[-0.06em]">
                معماری که تجربه انسانی را شکل می‌دهد.
              </h2>
            </TextReveal>

            <TextReveal delay={0.12}>
              <p className="mt-8 max-w-[520px] text-[12px] leading-[1.9] text-muted md:mt-12">
                ما فضاهایی خلق می‌کنیم که در آن نور، متریال،
                تناسب و حرکت در کنار یکدیگر قرار می‌گیرند تا
                نحوه احساس یک مکان را شکل دهند.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}