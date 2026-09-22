"use client";

import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";

export function ContactFooter() {
  return (
    <section
      dir="rtl"
      className="px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="border-t border-black/10 pt-7">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <TextReveal>
                <p className="text-[9px] font-medium tracking-[0.04em] text-muted">
                  شروع یک گفت‌وگو
                </p>
              </TextReveal>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <TextReveal>
                <h2 className="max-w-[1000px] text-[clamp(3rem,7vw,8rem)] font-light leading-[0.88] tracking-[-0.065em]">
                  بیایید مکانی خلق کنیم که ارزش به یاد
                  ماندن داشته باشد.
                </h2>
              </TextReveal>

              <div className="mt-10 flex flex-col gap-7 md:mt-14 md:flex-row md:items-center md:justify-between">
                <a
                  href="mailto:studio@urumsima.com"
                  dir="ltr"
                  className="group inline-flex w-fit items-center gap-4 text-[11px] font-medium tracking-[0.04em]"
                >
                  <span className="border-b border-black/20 pb-1 transition-colors duration-500 group-hover:border-black">
                    studio@urumsima.com
                  </span>

                  <span className="transition-transform duration-500 group-hover:-translate-x-2">
                    ←
                  </span>
                </a>

                <Link
                  href="/projects"
                  dir="rtl"
                  className="text-[10px] font-medium tracking-[0.04em] text-muted transition-colors duration-300 hover:text-foreground"
                >
                  مشاهده پروژه‌های ما
                </Link>
              </div>
            </div>
          </div>

          <div
            dir="rtl"
            className="mt-24 flex flex-col gap-3 border-t border-black/10 pt-6 text-[9px] font-medium tracking-[0.04em] text-muted md:mt-32 md:flex-row md:items-center md:justify-between"
          >
            <span dir="ltr">UrumSima</span>
            <span>معماری / فضا / تجربه</span>
            <span dir="ltr">Urmia / Iran — 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}