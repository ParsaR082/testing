import type { Metadata } from "next";

import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { TextReveal } from "@/components/animations/TextReveal";
import { HorizontalGallery } from "@/components/gallery/HorizontalGallery";
import { PinnedGallery } from "@/components/gallery/PinnedGallery";

export const metadata: Metadata = {
  title: "استودیو",
  description:
    "UrumSima یک استودیوی معماری است که فضا، متریال، نور و تجربه انسانی را کاوش می‌کند.",
};

const sectionLabel =
  "text-right text-[9px] font-medium leading-[1.4] tracking-[0.04em]";

export default function StudioPage() {
  return (
    <main className="studio-section bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-4 z-10 hidden w-px bg-black/[0.06] md:block"
      />

      {/* =========================================================
          01 — STUDIO
      ========================================================= */}
      <section className="bg-background px-6 pb-24 pt-32 md:px-10 md:pb-40 md:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8"
          >
            {/* LEFT EDITORIAL COLUMN */}
            <div className="md:col-span-3">
              <TextReveal>
                <p className={`${sectionLabel} text-muted`}>
                  ۰۱ — استودیو معماری
                </p>
              </TextReveal>

              <div className="mt-8 hidden h-24 w-px bg-black/10 md:block" />

              <TextReveal delay={0.08}>
                <p className="mt-8 max-w-[190px] text-right text-[10px] leading-[1.9] text-foreground/45 md:mt-10">
                  جایی میان نور، ماده و حرکت؛
                  <br />
                  جایی که فضا تبدیل به تجربه می‌شود.
                </p>
              </TextReveal>

              <TextReveal delay={0.16}>
                <span
                  dir="ltr"
                  className="mt-12 block text-[8px] tracking-[0.2em] text-muted/50"
                >
                  SPACE / EXPERIENCE
                </span>
              </TextReveal>
            </div>

            {/* MAIN TITLE */}
            <div className="md:col-span-8 md:col-start-5">
              <TextReveal>
                <h1 className="type-display arshia-title studio-heading max-w-[1000px] pb-2 text-right text-[clamp(4rem,9.2vw,10rem)] font-light leading-[1.08] tracking-[-0.045em]">
                  فضا
                  <br />
                  یک تجربه است.
                </h1>
              </TextReveal>

              <TextReveal delay={0.12}>
                <p className="mt-10 max-w-[460px] text-right text-[12px] font-normal leading-[2] tracking-[-0.005em] text-muted md:mr-auto md:mt-14">
                  ما فضا را تنها به‌عنوان یک فرم نمی‌بینیم؛ بلکه آن را
                  به‌عنوان تجربه‌ای میان نور، متریال، تناسب و زندگی روزمره
                  درک می‌کنیم.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — APPROACH / IMAGE + STATEMENT
      ========================================================= */}
      <section className="bg-[#e8e2d8] px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div
            dir="ltr"
            className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-8"
          >
            {/* IMAGE — LEFT */}
            <div className="md:col-span-6 md:col-start-1">
              <ImageReveal className="aspect-[4/3] w-full bg-[#d9d4ca] md:aspect-[1.08/1]">
                <ParallaxImage
                  src="/images/hero.jpg"
                  alt="فضای معماری UrumSima"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </ImageReveal>
            </div>

            {/* TEXT — RIGHT */}
            <div
              dir="rtl"
              className="md:col-span-5 md:col-start-8 md:pr-4"
            >
              <TextReveal>
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-[9px] font-medium tracking-[0.04em] text-foreground/45">
                    ۰۲ — رویکرد ما
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-black/15"
                  />
                </div>
              </TextReveal>

              <TextReveal delay={0.1}>
                <p className="arshia studio-heading max-w-[620px] text-right text-[clamp(2rem,3.6vw,4.4rem)] font-light leading-[1.2] tracking-[-0.04em]">
                  معماری با درک این آغاز می‌شود که یک فضا باید چه احساسی
                  ایجاد کند، نه صرفاً چگونه به نظر برسد.
                </p>
              </TextReveal>

              <TextReveal delay={0.18}>
                <div className="mt-10 flex items-start gap-5 md:mt-14">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-8 w-px bg-black/15"
                  />

                  <p className="max-w-[300px] text-right text-[10px] leading-[2] text-foreground/50">
                    برای ما، فرم نتیجه‌ی تجربه است؛ نه نقطه‌ی شروع آن.
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — PHILOSOPHY
      ========================================================= */}
      <section className="bg-background px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8"
          >
            {/* LABEL */}
            <div className="md:col-span-2 md:col-start-11">
              <TextReveal>
                <p className={`${sectionLabel} text-muted`}>
                  ۰۳ — فلسفه
                </p>
              </TextReveal>

              <TextReveal delay={0.08}>
                <span className="mt-8 block text-[clamp(4rem,9vw,8rem)] font-light leading-none tracking-[-0.06em] text-black/[0.06]">
                  ۰۳
                </span>
              </TextReveal>
            </div>

            {/* MAIN STATEMENT */}
            <div className="md:col-span-7 md:col-start-2 md:row-start-1 md:self-end">
              <TextReveal>
                <p className="arshia studio-heading max-w-[900px] text-right text-[clamp(2.5rem,5vw,6rem)] font-light leading-[1.16] tracking-[-0.045em]">
                  ما مکان‌هایی خلق می‌کنیم که بخشی از شیوه به یاد آوردن یک
                  لحظه توسط انسان می‌شوند.
                </p>
              </TextReveal>

              <TextReveal delay={0.12}>
                <div className="mt-10 flex items-center justify-end gap-4 md:mt-14">
                  <p className="max-w-[300px] text-right text-[10px] leading-[1.9] text-muted">
                    معماری برای ما فقط چیزی نیست که دیده می‌شود؛
                    چیزی است که در حافظه باقی می‌ماند.
                  </p>

                  <span
                    aria-hidden="true"
                    className="h-px w-14 bg-black/15"
                  />
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — PRINCIPLES
      ========================================================= */}
      <section className="bg-[#e8e2d8] px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          {/* INTRO */}
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <TextReveal>
                <p className={`${sectionLabel} text-foreground/55`}>
                  ۰۴ — اصول
                </p>
              </TextReveal>

              <TextReveal delay={0.08}>
                <span className="mt-8 block text-[clamp(4rem,8vw,7rem)] font-light leading-none tracking-[-0.06em] text-foreground/10">
                  ۰۴
                </span>
              </TextReveal>
            </div>

            <div className="md:col-span-6 md:col-start-5">
              <TextReveal>
                <p className="arshia max-w-[650px] text-right text-[clamp(1.2rem,2vw,1.8rem)] font-light leading-[1.75] tracking-[-0.015em] text-foreground/65">
                  کار ما بر پایه مجموعه‌ای کوچک از ایده‌ها شکل می‌گیرد؛
                  ایده‌هایی که در ظاهر ساده‌اند، اما در عمل پیوسته در حال
                  تغییرند.
                </p>
              </TextReveal>
            </div>
          </div>

          {/* PRINCIPLE CARDS */}
          <div
            dir="rtl"
            className="mt-16 grid grid-cols-1 border-t border-black/10 md:mt-24 md:grid-cols-3"
          >
            {[
              {
                n: "۰۱",
                title: "نور",
                text: "نور روز به‌عنوان یک ماده معماری در نظر گرفته می‌شود و در طول روز به فضا حال‌وهوا، ریتم و حرکت می‌بخشد.",
              },
              {
                n: "۰۲",
                title: "متریال",
                text: "بتن، سنگ، چوب، شیشه و فلز بر اساس توانایی‌شان در پیر شدن، بازتاب نور و ایجاد تجربه‌های لمسی انتخاب می‌شوند.",
              },
              {
                n: "۰۳",
                title: "انسان",
                text: "هر تناسب، گذار و گشودگی در ارتباط با انسان‌هایی در نظر گرفته می‌شود که در نهایت در فضا زندگی خواهند کرد.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={[
                  "group border-black/10 py-12 md:px-12 md:py-20",
                  index !== 2
                    ? "border-b md:border-b-0 md:border-l"
                    : "",
                ].join(" ")}
              >
                <TextReveal delay={index * 0.08}>
                  <span className="block text-[9px] font-medium leading-[1.4] text-foreground/45">
                    {item.n}
                  </span>
                </TextReveal>

                <TextReveal delay={0.08 + index * 0.08}>
                  <h2 className="arshia studio-heading mt-8 text-right text-[clamp(2.2rem,3.2vw,3.8rem)] font-light leading-[1.08] tracking-[-0.03em] transition-transform duration-700 group-hover:-translate-y-1">
                    {item.title}
                  </h2>
                </TextReveal>

                <TextReveal delay={0.16 + index * 0.08}>
                  <p className="mt-8 max-w-[320px] text-right text-[12px] leading-[1.9] tracking-[-0.005em] text-foreground/60">
                    {item.text}
                  </p>
                </TextReveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPATIAL NOTES
      ========================================================= */}
      <section className="bg-background px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <TextReveal>
                <p className={`${sectionLabel} text-muted`}>
                  یادداشت‌های فضایی
                </p>
              </TextReveal>

              <TextReveal delay={0.08}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="arch-mark" aria-hidden="true" />

                  <span
                    dir="ltr"
                    className="text-[8px] tracking-[0.18em] text-muted/60"
                  >
                    URUMSIMA / NOTES
                  </span>
                </div>
              </TextReveal>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <TextReveal>
                <p className="arshia studio-heading max-w-[820px] text-right text-[clamp(2.2rem,4vw,4.8rem)] font-light leading-[1.18] tracking-[-0.04em]">
                  پیش از آنکه یک ساختمان دیده شود، از طریق نور، صدا، مقیاس و
                  مسیر حرکت احساس می‌شود.
                </p>
              </TextReveal>

              {/* SPATIAL NOTE CARDS */}
              <div
                dir="rtl"
                className="mt-16 grid grid-cols-1 border-t border-black/10 md:mt-24 md:grid-cols-3"
              >
                {[
                  {
                    n: "۰۱",
                    title: "ورود",
                    text: "لحظه ورود باید ریتم فضا را آشکار کند؛ نه اینکه همه‌چیز را یک‌باره توضیح دهد.",
                  },
                  {
                    n: "۰۲",
                    title: "مکث",
                    text: "فضاهای آرام و خالی، همان‌قدر مهم‌اند که عناصر ساخته‌شده و پرجزئیات.",
                  },
                  {
                    n: "۰۳",
                    title: "مسیر",
                    text: "حرکت میان فضاها، معماری را از یک تصویر ثابت به یک تجربه پیوسته تبدیل می‌کند.",
                  },
                ].map((item, index) => (
                  <article
                    key={item.n}
                    className="border-b border-black/10 py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:pr-0 md:last:border-l-0"
                  >
                    <TextReveal delay={index * 0.08}>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-foreground/40">
                          {item.n}
                        </span>

                        <span
                          className="h-2 w-2 rotate-45 border border-black/25"
                          aria-hidden="true"
                        />
                      </div>
                    </TextReveal>

                    <TextReveal delay={0.08 + index * 0.08}>
                      <h3 className="arshia studio-heading mt-8 text-right text-[clamp(1.8rem,2.6vw,3rem)] font-light leading-none tracking-[-0.03em]">
                        {item.title}
                      </h3>
                    </TextReveal>

                    <TextReveal delay={0.16 + index * 0.08}>
                      <p className="mt-6 max-w-[280px] text-right text-[11px] leading-[1.9] text-foreground/55">
                        {item.text}
                      </p>
                    </TextReveal>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEYOND FORM
      ========================================================= */}
      <section className="bg-background px-6 pb-28 pt-12 md:px-10 md:pb-48 md:pt-24">
        <div
          dir="rtl"
          className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-8"
        >
          <div className="md:col-span-5 md:col-start-2" dir="ltr">
            <ImageReveal className="aspect-[4/5] w-full bg-[#e8e5df]">
              <ParallaxImage
                src="/images/projects/project-02.jpg"
                alt="جزئیات معماری UrumSima"
                sizes="(max-width: 768px) 100vw, 42vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </ImageReveal>
          </div>

          <div className="flex items-end md:col-span-4 md:col-start-8 md:pb-8">
            <div>
              <TextReveal>
                <span className={`${sectionLabel} block text-muted`}>
                  فراتر از فرم
                </span>
              </TextReveal>

              <TextReveal delay={0.1}>
                <p className="arshia mt-8 max-w-[500px] text-right text-[clamp(1.9rem,3vw,3.3rem)] font-light leading-[1.15] tracking-[-0.03em]">
                  ما به لحظات آرامی علاقه‌مندیم که میان معماری و زندگی روزمره
                  شکل می‌گیرند.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HORIZONTAL PROJECT GALLERY
      ========================================================= */}
      <section dir="ltr">
        <HorizontalGallery
          items={[
            {
              src: "/images/projects/project-01.jpg",
              alt: "معماری خانه کویر",
              title: "خانه کویر",
              meta: "یزد / 2026",
            },
            {
              src: "/images/projects/project-02.jpg",
              alt: "معماری خانه حیاط",
              title: "خانه حیاط",
              meta: "ارومیه / 2025",
            },
            {
              src: "/images/projects/project-03.jpg",
              alt: "معماری خانه بتنی",
              title: "خانه بتنی",
              meta: "تهران / 2025",
            },
            {
              src: "/images/projects/project-04.jpg",
              alt: "معماری خانه نور",
              title: "خانه نور",
              meta: "تبریز / 2024",
            },
          ]}
        />
      </section>

      {/* =========================================================
          PINNED SPATIAL PRINCIPLES
      ========================================================= */}
      <section dir="ltr">
        <PinnedGallery
          items={[
            {
              src: "/images/projects/project-01.jpg",
              alt: "نور و سایه در معماری",
              label: "نور",
              description:
                "نور پیش از آنکه فرم درک شود، حال‌وهوای فضا را تعریف می‌کند. در طول روز تغییر می‌کند و به معماری اجازه می‌دهد به شکلی آرام زنده بماند.",
            },
            {
              src: "/images/projects/project-02.jpg",
              alt: "متریال و معماری حیاط",
              label: "متریال",
              description:
                "متریال حافظه فیزیکی معماری را شکل می‌دهد. سنگ، بتن، چوب و هوا بخشی از تجربه فضا می‌شوند.",
            },
            {
              src: "/images/projects/project-03.jpg",
              alt: "مقیاس انسانی در معماری",
              label: "انسان",
              description:
                "هر تناسب، گذار و گشودگی در ارتباط با انسان‌هایی در نظر گرفته می‌شود که در فضا حرکت می‌کنند و در آن زندگی می‌کنند.",
            },
          ]}
        />
      </section>

      {/* =========================================================
          DARK STATEMENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-dark px-6 py-28 text-background md:px-10 md:py-48">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-1/2 h-72 w-72 rounded-full border border-white/10 md:h-96 md:w-96"
        />

        <div className="mx-auto max-w-[1600px]">
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-2">
              <TextReveal>
                <p className={`${sectionLabel} text-white/45`}>
                  ۰۵ — استودیو
                </p>
              </TextReveal>
            </div>

            <div className="md:col-span-8 md:col-start-4">
              <TextReveal>
                <p className="arshia studio-heading max-w-[1050px] text-right text-[clamp(2.8rem,5.8vw,6.8rem)] font-light leading-[1.16] tracking-[-0.045em]">
                  معماری باید مدت‌ها پس از ترک یک فضا نیز با شما باقی بماند.
                </p>
              </TextReveal>
            </div>
          </div>

          <div className="mt-24 border-t border-white/10 pt-7 md:mt-36">
            <div
              dir="rtl"
              className="flex flex-col gap-3 text-[9px] font-medium leading-[1.4] tracking-[0.04em] text-white/35 md:flex-row md:items-center md:justify-between"
            >
              <span>UrumSima / استودیو معماری</span>
              <span>ارومیه / ایران</span>
              <span dir="ltr">2026</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
