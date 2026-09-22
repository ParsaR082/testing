import { TextReveal } from "@/components/animations/TextReveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main dir="rtl" className="bg-background text-right text-foreground">
      <section className="bg-[#111111] px-6 pb-24 pt-32 text-background md:px-10 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <TextReveal>
                <p className="text-[9px] font-medium tracking-[0.04em] text-white/45">
                  آرشیو / پروژه‌ها
                </p>
              </TextReveal>
              <div className="mt-8 hidden h-24 w-px bg-white/15 md:block" />
            </div>

            <div className="md:col-span-8 md:col-start-4">
              <TextReveal>
                <h1 className="max-w-[1000px] text-[clamp(4rem,9vw,9.5rem)] font-light leading-[0.9] tracking-[-0.065em]">
                  پروژه‌ها
                </h1>
              </TextReveal>
              <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:mt-16 md:flex-row md:items-start md:justify-between">
                <TextReveal delay={0.12}>
                  <p className="max-w-[420px] text-[11px] leading-[1.9] text-white/50">
                    مجموعه‌ای از مطالعات فضایی که رابطه میان نور، متریال،
                    زمینه و تجربه انسانی را دنبال می‌کنند.
                  </p>
                </TextReveal>
                <span dir="ltr" className="text-[9px] tracking-[0.18em] text-white/30">
                  04 / 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d8] px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
          <span className="text-[9px] font-medium tracking-[0.04em] text-foreground/50">
            چهار پروژه / چهار روایت
          </span>
          <span className="text-[9px] font-medium tracking-[0.04em] text-foreground/35">
            مسکونی / منتخب
          </span>
        </div>
      </section>

      <section className="bg-background px-6 pb-28 pt-20 md:px-10 md:pb-48 md:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <ProjectGrid />
        </div>
      </section>

      <section className="bg-[#e8e2d8] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div dir="rtl" className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <span className="text-[9px] font-medium tracking-[0.04em] text-foreground/45">
                مسیر بعدی
              </span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <TextReveal>
                <p className="text-[clamp(2.6rem,5vw,5.8rem)] font-light leading-[1.05] tracking-[-0.04em]">
                  هر پروژه، شروع یک پرسش تازه درباره فضاست.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
