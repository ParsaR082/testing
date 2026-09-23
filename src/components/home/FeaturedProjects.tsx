"use client";

import Link from "next/link";

import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { TextReveal } from "@/components/animations/TextReveal";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      dir="rtl"
      className="home-projects px-6 pb-24 md:px-10 md:pb-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <TextReveal>
            <div>
              <p className="text-[9px] font-medium tracking-[0.04em] text-muted">
                پروژه‌های منتخب
              </p>

              <h2 className="type-display arshia-title mt-4 text-[clamp(2rem,4vw,4rem)] font-light tracking-[-0.045em]">
                پروژه‌های منتخب
              </h2>
            </div>
          </TextReveal>

          <Link
            href="/projects"
            dir="rtl"
            className="group hidden items-center gap-4 text-[10px] font-medium tracking-[0.04em] md:inline-flex"
          >
            <span className="border-b border-black/20 pb-1 transition-colors duration-500 group-hover:border-black">
              مشاهده همه
            </span>

            <span className="transition-transform duration-500 group-hover:-translate-x-2">
              ←
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-12 md:gap-x-8 md:gap-y-28">
          {featuredProjects.map((project, index) => {
            const layout =
              index === 0
                ? "md:col-span-8 md:col-start-1"
                : index === 1
                  ? "md:col-span-5 md:col-start-8 md:mt-24"
                  : index === 2
                    ? "md:col-span-7 md:col-start-2"
                    : "md:col-span-5 md:col-start-9 md:mt-20";

            const aspect =
              index === 0
                ? "aspect-[16/10]"
                : index === 1
                  ? "aspect-[4/5]"
                  : index === 2
                    ? "aspect-[3/2]"
                    : "aspect-[4/5]";

            return (
              <article
                key={project.slug}
                className={layout}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <ImageReveal
                    className={`${aspect} bg-[#e8e5df]`}
                  >
                    <ParallaxImage
                      src={project.image}
                      alt={`${project.name} — ${project.location}`}
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 42vw"
                      }
                      className="absolute inset-0 h-full w-full transition-[filter] duration-700 group-hover:brightness-[0.82]"
                    />

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="flex w-full items-end justify-between p-6 text-background md:p-8">
                        <span className="text-[10px] font-medium tracking-[0.04em]">
                          مشاهده پروژه
                        </span>

                        <span className="translate-x-2 text-sm opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                          ←
                        </span>
                      </div>
                    </div>
                  </ImageReveal>

                  <div className="meta-line mt-4 flex items-start justify-between gap-8 md:mt-5">
                    <div>
                      <p className="editorial-label mb-2">
                        {String(index + 1).padStart(2, "0")} / {project.category}
                      </p>
                      <TextReveal>
                        <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-light tracking-[-0.035em]">
                          {project.name}
                        </h3>
                      </TextReveal>

                      <p className="mt-2 text-[9px] font-medium tracking-[0.04em] text-muted">
                        {project.location}
                      </p>
                    </div>

                    <span
                      dir="ltr"
                      className="pt-1 text-[9px] tracking-[0.18em] text-muted"
                    >
                      {project.year}
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-16 md:hidden">
          <Link
            href="/projects"
            dir="rtl"
            className="inline-flex items-center gap-4 text-[10px] font-medium tracking-[0.04em]"
          >
            <span className="border-b border-black/20 pb-1">
              مشاهده همه پروژه‌ها
            </span>

            <span>←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}