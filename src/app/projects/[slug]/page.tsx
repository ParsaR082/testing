import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { TextReveal } from "@/components/animations/TextReveal";
import { Gallery } from "@/components/gallery/Gallery";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return { title: project.name, description: project.description };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main dir="rtl" className="bg-background text-right text-foreground">
      <section className="relative min-h-screen bg-background px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7 md:col-start-1">
              <TextReveal>
                <p className="text-[10px] font-medium tracking-[0.08em] text-muted">
                  {project.category}
                </p>
              </TextReveal>
              <div className="mt-7 md:mt-9">
                <h1 className="arshia max-w-[1100px] text-[clamp(4rem,9vw,10rem)] font-light leading-[0.86] tracking-[-0.065em]">
                  {project.name}
                </h1>
              </div>
            </div>

            <div className="flex items-end md:col-span-3 md:col-start-10">
              <div className="w-full border-t border-black/10 pt-5">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-[9px] font-medium leading-[1.3] tracking-[0.04em] text-muted">
                  <div><p>موقعیت</p><p className="mt-2 text-[10px] font-normal text-foreground">{project.location}</p></div>
                  <div><p>سال</p><p dir="ltr" className="mt-2 text-[10px] font-normal">{project.year}</p></div>
                  <div><p>مساحت</p><p dir="ltr" className="mt-2 text-[10px] font-normal">{project.area}</p></div>
                  <div><p>وضعیت</p><p className="mt-2 text-[10px] font-normal text-foreground">{project.status}</p></div>
                </div>
              </div>
            </div>
          </div>

          <ImageReveal className="mt-16 aspect-[16/10] w-full bg-[#e8e5df] md:mt-24 md:aspect-[2/1]">
            <ParallaxImage src={project.image} alt={project.name} priority sizes="100vw" className="absolute inset-0 h-full w-full" />
          </ImageReveal>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-background md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-[9px] font-medium tracking-[0.04em] text-white/40">پروژه</p>
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <TextReveal>
                <p className="arshia text-[clamp(2rem,3.5vw,4rem)] font-light leading-[1.18] tracking-[-0.035em] text-white/90">
                  {project.description}
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d8] px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4 md:col-start-2">
              <div className="border-t border-black/10 pt-5">
                <p className="text-[9px] font-medium tracking-[0.04em] text-foreground/50">کانسپت</p>
                <p className="mt-5 max-w-[380px] text-[13px] leading-[1.85] text-foreground/75">
                  {project.concept}
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ImageReveal className="aspect-[4/5] bg-[#d9d4ca]">
                <ParallaxImage
                  src={project.image}
                  alt={`${project.name} — کانسپت معماری`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Gallery project={project} />
        </div>
      </div>

      <section className="bg-background px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-black/10 pt-6">
            <div className="flex flex-col gap-8 md:flex-row-reverse md:items-end md:justify-between">
              <div>
                <p className="text-[9px] font-medium tracking-[0.04em] text-muted">ادامه کاوش</p>
                <h2 className="arshia mt-4 text-[clamp(2.5rem,5vw,6rem)] font-light leading-[0.92] tracking-[-0.05em]">
                  پروژه‌های بیشتر
                </h2>
              </div>
              <Link href="/projects" className="group inline-flex items-center gap-4 text-[10px] font-medium">
                <span>مشاهده همه پروژه‌ها</span>
                <span className="transition-transform duration-500 group-hover:-translate-x-2">←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
