"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import type { Project } from "@/data/projects";

gsap.registerPlugin(Flip);

const filters = [
  { key: "همه", value: "all" },
  { key: "مسکونی", value: "مسکونی" },
  { key: "فرهنگی", value: "فرهنگی" },
  { key: "پاویون", value: "پاویون" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");
  const grid = useRef<HTMLDivElement>(null);
  const items = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  useLayoutEffect(() => {
    if (!grid.current) return;
    const state = Flip.getState(grid.current.querySelectorAll("[data-project-card]"));

    requestAnimationFrame(() => {
      const cards = Array.from(grid.current?.querySelectorAll<HTMLElement>("[data-project-card]") ?? []);
      gsap.set(cards, { opacity: 0, y: 28 });
      gsap.to(cards, { opacity: 1, y: 0, duration: 0.75, stagger: 0.055, ease: "power4.out", clearProps: "transform" });
      Flip.from(state, { duration: 0.85, ease: "power4.inOut", absolute: true, nested: true, prune: true });
    });
  }, [filter]);

  return (
    <>
      <div className="mb-16 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-black/10 py-5 md:mb-24">
        {filters.map((item) => (
          <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={`relative text-xs transition-opacity duration-300 ${filter === item.value ? "opacity-100" : "text-neutral-500 hover:opacity-100"}`}>
            {item.key}
            <span className={`absolute -bottom-2 right-0 h-px bg-black transition-all duration-500 ${filter === item.value ? "w-full" : "w-0"}`} />
          </button>
        ))}
      </div>
      <div ref={grid} className="grid gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <article key={project.slug} data-project-card className="group">
            <Link href={"/projects/" + project.slug} className="block">
              <div className="image-frame aspect-[4/5] overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width:767px) 100vw,(max-width:1199px) 50vw,33vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.035]" />
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto] gap-5">
                <div>
                  <p className="eyebrow">{project.category} · {project.location} · {project.year}</p>
                  <h2 className="mt-2 text-2xl font-light tracking-[-0.035em]">{project.title}</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-neutral-600">{project.description}</p>
                </div>
                <span className="editorial-arrow mt-1 shrink-0" aria-hidden="true">←</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
