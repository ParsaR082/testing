"use client";

import Link from "next/link";

import type { Project } from "@/lib/projects";

import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { TextReveal } from "@/components/animations/TextReveal";

import { ProjectMeta } from "./ProjectMeta";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <article dir="rtl" className={className}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        aria-label={`مشاهده پروژه ${project.name}`}
      >
        <ImageReveal className="aspect-[4/5] bg-[#e8e5df]">
          <ParallaxImage
            src={project.image}
            alt={project.name}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10">
            <div
              dir="rtl"
              className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-start opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:p-8"
            >
              <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-white/80 md:text-[9px] md:tracking-[0.1em]">
                مشاهده پروژه
              </span>
            </div>
          </div>
        </ImageReveal>

        <div className="mt-5 md:mt-6">
          <TextReveal>
            <ProjectMeta project={project} />
          </TextReveal>
        </div>
      </Link>
    </article>
  );
}