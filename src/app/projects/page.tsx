import { TextReveal } from "@/components/animations/TextReveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background px-6 pb-24 pt-32 text-right md:px-10 md:pb-40 md:pt-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-row-reverse items-end justify-between border-b border-black/10 pb-6 md:mb-24">
          <TextReveal>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.86] tracking-[-0.055em]">
              پروژه‌ها
            </h1>
          </TextReveal>

          <TextReveal delay={0.15}>
            <span
              dir="rtl"
              className="hidden pb-1 text-[10px] font-medium leading-none tracking-[0.04em] text-muted md:block"
            >
              پروژه‌های منتخب
            </span>
          </TextReveal>
        </div>

        <ProjectGrid />
      </div>
    </main>
  );
}