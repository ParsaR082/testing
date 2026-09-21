import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { TextReveal } from "@/components/animations/TextReveal";
import { Gallery } from "@/components/gallery/Gallery";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      dir="rtl"
      className="bg-background text-right text-foreground"
    >
      {/* HERO */}
      <section className="relative min-h-screen px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7 md:col-start-1">
              <TextReveal>
                <p
                  dir="rtl"
                  className="text-right text-[10px] font-medium leading-[1.2] tracking-[0.08em] text-muted"
                >
                  {project.category}
                </p>
              </TextReveal>

              <div className="mt-7 md:mt-9">
                <h1 className="max-w-[1100px] text-[clamp(4rem,9vw,10rem)] font-light leading-[0.86] tracking-[-0.065em]">
                  {project.name}
                </h1>
              </div>
            </div>

            <div className="flex items-end md:col-span-3 md:col-start-10">
              <div className="w-full border-t border-black/10 pt-5">
                <div
                  dir="rtl"
                  className="grid grid-cols-2 gap-x-8 gap-y-6 text-[9px] font-medium leading-[1.3] tracking-[0.04em] text-muted"
                >
                  <div>
                    <p>موقعیت</p>
                    <p className="mt-2 text-[10px] font-normal tracking-[0.01em] text-foreground">
                      {project.location}
                    </p>
                  </div>

                  <div>
                    <p>سال</p>
                    <p
                      dir="ltr"
                      className="mt-2 text-[10px] font-normal tracking-[0.02em] text-foreground"
                    >
                      {project.year}
                    </p>
                  </div>

                  <div>
                    <p>مساحت</p>
                    <p
                      dir="ltr"
                      className="mt-2 text-[10px] font-normal tracking-[0.02em] text-foreground"
                    >
                      {project.area}
                    </p>
                  </div>

                  <div>
                    <p>وضعیت</p>
                    <p className="mt-2 text-[10px] font-normal tracking-[0.01em] text-foreground">
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ImageReveal className="mt-16 aspect-[16/10] w-full bg-[#e8e5df] md:mt-24 md:aspect-[2/1]">
            <ParallaxImage
              src={project.image}
              alt={project.name}
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full"
            />
          </ImageReveal>
        </div>
      </section>

      {/* PROJECT DESCRIPTION */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3 md:col-start-2">
            <p
              dir="rtl"
              className="text-right text-[9px] font-medium leading-[1.3] tracking-[0.04em] text-muted"
            >
              پروژه
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-6">
            <TextReveal>
              <p className="text-[clamp(1.8rem,3vw,3.4rem)] font-light leading-[1.18] tracking-[-0.03em]">
                {project.description}
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4 md:col-start-2">
              <div className="border-t border-black/10 pt-5">
                <p
                  dir="rtl"
                  className="text-right text-[9px] font-medium leading-[1.3] tracking-[0.04em] text-muted"
                >
                  کانسپت
                </p>

                <p className="mt-5 max-w-[380px] text-[13px] font-normal leading-[1.85] tracking-[-0.005em] text-foreground/80">
                  {project.concept}
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <ImageReveal className="aspect-[4/5] bg-[#e8e5df]">
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

      {/* GALLERY */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Gallery project={project} />
      </div>

      {/* CONTINUE EXPLORING */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-black/10 pt-6">
            <div className="flex flex-col gap-8 md:flex-row-reverse md:items-end md:justify-between">
              <div>
                <p
                  dir="rtl"
                  className="text-right text-[9px] font-medium leading-[1.3] tracking-[0.04em] text-muted"
                >
                  ادامه کاوش
                </p>

                <h2 className="mt-4 text-[clamp(2.5rem,5vw,6rem)] font-light leading-[0.92] tracking-[-0.05em]">
                  پروژه‌های بیشتر
                </h2>
              </div>

              <Link
                href="/projects"
                dir="rtl"
                className="group inline-flex items-center gap-4 text-[10px] font-medium leading-none tracking-[0.04em]"
              >
                <span>مشاهده همه پروژه‌ها</span>

                <span className="transition-transform duration-500 group-hover:-translate-x-2">
                  ←
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}