"use client";

import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";

export function StudioStatement() {
  return (
    <section
      dir="rtl"
      className="home-statement bg-dark px-6 py-24 text-background md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3"><span className="section-index text-white/40">03</span>
            <TextReveal>
              <p className="text-[9px] font-medium tracking-[0.04em] text-white/40">
                استودیو
              </p>
            </TextReveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <TextReveal>
              <p className="text-[clamp(2.5rem,5.5vw,6.5rem)] font-light leading-[0.94] tracking-[-0.06em]">
                ما باور داریم معماری تنها چیزی نیست که
                می‌بینید.
                <br />
                چیزی است که به یاد می‌سپارید.
              </p>
            </TextReveal>

            <div className="mt-10 flex flex-col gap-7 md:mt-16 md:flex-row md:items-end md:justify-between">
              <TextReveal delay={0.1}>
                <p className="max-w-[420px] text-[11px] leading-[1.9] text-white/50">
                  UrumSima که در ارومیه، ایران مستقر است، رابطه
                  میان فضا، حال‌وهوا، متریال و زندگی روزمره را
                  کاوش می‌کند.
                </p>
              </TextReveal>

              <Link
                href="/studio"
                dir="rtl"
                className="group inline-flex items-center gap-4 text-[10px] font-medium tracking-[0.04em]"
              >
                <span className="border-b border-white/25 pb-1 transition-colors duration-500 group-hover:border-white/70">
                  آشنایی با استودیو
                </span>

                <span className="transition-transform duration-500 group-hover:-translate-x-2">
                  ←
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}