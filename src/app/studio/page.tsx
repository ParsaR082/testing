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
    <main className="studio-section bg-background text-foreground">\n      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 right-4 z-10 hidden w-px bg-black/[0.06] md:block" />
      {/* HERO */}
      <section className="bg-background px-6 pb-24 pt-32 md:px-10 md:pb-40 md:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <TextReveal>
                <p className={`${sectionLabel} text-muted`}>۰۱ — استودیو معماری</p>
              </TextReveal>
              <div className="mt-8 hidden h-24 w-px bg-black/10 md:block" />
            </div>

            <div className="md:col-span-8 md:col-start-4">
              <TextReveal>
                <h1 className="studio-heading max-w-[1000px] text-right text-[clamp(4rem,9.2vw,10rem)] font-light leading-[1.08] tracking-[-0.045em] pb-2">
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

      {/* HERO IMAGE */}
      <section className="bg-[#e8e2d8] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1600px]" dir="ltr">
          <ImageReveal className="aspect-[4/3] w-full bg-[#d9d4ca] md:aspect-[2.15/1]">
            <ParallaxImage
              src="/images/hero.jpg"
              alt="فضای معماری UrumSima"
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </ImageReveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#e8e2d8] relative px-6 pb-28 pt-24 md:px-10 md:pb-48 md:pt-32">
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <TextReveal>
                <p className={`${sectionLabel} text-foreground/55`}>۰۲ — رویکرد ما</p>
              </TextReveal>
              <span className="mt-8 block text-[clamp(4rem,9vw,8rem)] font-light leading-none tracking-[-0.06em] text-foreground/10">
                ۰۲
              </span>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <TextReveal>
                <p className="studio-heading max-w-[760px] text-right text-[clamp(2.5rem,4.7vw,5.5rem)] font-light leading-[1.18] tracking-[-0.045em]">
                  معماری با درک این آغاز می‌شود که یک فضا باید چه احساسی
                  ایجاد کند، نه صرفاً چگونه به نظر برسد.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-background px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2 md:col-start-11">
              <TextReveal>
                <p className={`${sectionLabel} text-muted`}>۰۳ — فلسفه</p>
              </TextReveal>
              <span className="mt-8 block text-[clamp(4rem,9vw,8rem)] font-light leading-none tracking-[-0.06em] text-black/[0.06]">
                ۰۳
              </span>
            </div>

            <div className="md:col-span-8 md:col-start-2 md:row-start-1 md:self-end">
              <TextReveal>
                <p className="studio-heading max-w-[980px] text-right text-[clamp(2.6rem,5.4vw,6.5rem)] font-light leading-[1.16] tracking-[-0.045em]">
                  ما مکان‌هایی خلق می‌کنیم که بخشی از شیوه به یاد آوردن یک
                  لحظه توسط انسان می‌شوند.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#e8e2d8] px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <TextReveal>
                <p className={`${sectionLabel} text-foreground/55`}>۰۴ — اصول</p>
              </TextReveal>
              <span className="mt-8 block text-[clamp(4rem,8vw,7rem)] font-light leading-none tracking-[-0.06em] text-foreground/10">
                ۰۴
              </span>
            </div>

            <div className="md:col-span-5 md:col-start-5">
              <TextReveal>
                <p className="text-right text-[12px] font-normal leading-[1.9] tracking-[-0.005em] text-foreground/60">
                  کار ما بر پایه مجموعه‌ای کوچک از ایده‌ها شکل می‌گیرد؛
                  ایده‌هایی که در ظاهر ساده‌اند، اما در عمل پیوسته در حال
                  تغییرند.
                </p>
              </TextReveal>
            </div>
          </div>

          <div dir="rtl" className="mt-16 grid grid-cols-1 border-t border-black/10 md:mt-24 md:grid-cols-3">
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
                  "group border-black/10 py-12 md:py-20 md:px-12",
                  index !== 2 ? "border-b md:border-b-0 md:border-l" : "",
                ].join(" ")}
              >
                <span className="text-[9px] font-medium leading-[1.4] text-foreground/45">
                  {item.n}
                </span>
                <h2 className="studio-heading mt-8 text-right text-[clamp(2.2rem,3.2vw,3.8rem)] font-light leading-[1.08] tracking-[-0.03em] transition-transform duration-700 group-hover:-translate-y-1">
                  {item.title}
                </h2>
                <p className="mt-8 max-w-[320px] text-right text-[12px] leading-[1.9] tracking-[-0.005em] text-foreground/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND FORM */}
      <section className="bg-background px-6 pb-28 pt-12 md:px-10 md:pb-48 md:pt-24">
        <div dir="rtl" className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
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
                <span className={`${sectionLabel} block text-muted`}>فراتر از فرم</span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <p className="mt-8 max-w-[500px] text-right text-[clamp(1.9rem,3vw,3.3rem)] font-light leading-[1.15] tracking-[-0.03em]">
                  ما به لحظات آرامی علاقه‌مندیم که میان معماری و زندگی روزمره
                  شکل می‌گیرند.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL PROJECT GALLERY */}
      <section dir="ltr">
        <HorizontalGallery
          items={[
            { src: "/images/projects/project-01.jpg", alt: "معماری خانه کویر", title: "خانه کویر", meta: "یزد / 2026" },
            { src: "/images/projects/project-02.jpg", alt: "معماری خانه حیاط", title: "خانه حیاط", meta: "ارومیه / 2025" },
            { src: "/images/projects/project-03.jpg", alt: "معماری خانه بتنی", title: "خانه بتنی", meta: "تهران / 2025" },
            { src: "/images/projects/project-04.jpg", alt: "معماری خانه نور", title: "خانه نور", meta: "تبریز / 2024" },
          ]}
        />
      </section>

      {/* PINNED SPATIAL PRINCIPLES */}
      <section dir="ltr">
        <PinnedGallery
          items={[
            {
              src: "/images/projects/project-01.jpg",
              alt: "نور و سایه در معماری",
              label: "نور",
              description: "نور پیش از آنکه فرم درک شود، حال‌وهوای فضا را تعریف می‌کند. در طول روز تغییر می‌کند و به معماری اجازه می‌دهد به شکلی آرام زنده بماند.",
            },
            {
              src: "/images/projects/project-02.jpg",
              alt: "متریال و معماری حیاط",
              label: "متریال",
              description: "متریال حافظه فیزیکی معماری را شکل می‌دهد. سنگ، بتن، چوب و هوا بخشی از تجربه فضا می‌شوند.",
            },
            {
              src: "/images/projects/project-03.jpg",
              alt: "مقیاس انسانی در معماری",
              label: "انسان",
              description: "هر تناسب، گذار و گشودگی در ارتباط با انسان‌هایی در نظر گرفته می‌شود که در فضا حرکت می‌کنند و در آن زندگی می‌کنند.",
            },
          ]}
        />
      </section>

      {/* DARK STATEMENT */}
      <section className="relative overflow-hidden bg-dark px-6 py-28 text-background md:px-10 md:py-48">\n        <div aria-hidden="true" className="absolute -left-24 top-1/2 h-72 w-72 rounded-full border border-white/10 md:h-96 md:w-96" />
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <TextReveal>
                <p className={`${sectionLabel} text-white/45`}>۰۵ — استودیو</p>
              </TextReveal>
            </div>
            <div className="md:col-span-8 md:col-start-4">
              <TextReveal>
                <p className="studio-heading max-w-[1050px] text-right text-[clamp(2.8rem,5.8vw,6.8rem)] font-light leading-[1.16] tracking-[-0.045em]">
                  معماری باید مدت‌ها پس از ترک یک فضا نیز با شما باقی بماند.
                </p>
              </TextReveal>
            </div>
          </div>
          <div className="mt-24 border-t border-white/10 pt-7 md:mt-36">
            <div dir="rtl" className="flex flex-col gap-3 text-[9px] font-medium leading-[1.4] tracking-[0.04em] text-white/35 md:flex-row md:items-center md:justify-between">
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
