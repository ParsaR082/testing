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
      gsap.set(cards,{opacity:0,y:18});
      gsap.to(cards,{opacity:1,y:0,duration:.55,stagger:.045,ease:"power3.out",clearProps:"transform"});
      Flip.from(state,{duration:.7,ease:"power3.inOut",absolute:true,nested:true,prune:true});
    });
  }, [filter]);

  return <>
    <div className="reference-filters">
      {filters.map((item) => (
        <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={filter===item.value?"active":""}>
          {item.key}<span />
        </button>
      ))}
    </div>

    <div ref={grid} className="reference-grid">
      {items.map((project) => (
        <article key={project.slug} data-project-card className="reference-card">
          <Link href={"/projects/" + project.slug} data-project-transition className="block">
            <div className="reference-card-image" data-project-image data-image-src={project.image}>
              <Image src={project.image} alt={project.title} fill sizes="(max-width:767px) 100vw,33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
            <div className="reference-card-meta">
              <p>{project.category}</p>
              <p>{project.location} · {project.year}</p>
            </div>
            <h2>{project.title}</h2>
            <span className="reference-read">مشاهده پروژه <i>→</i></span>
          </Link>
        </article>
      ))}
    </div>
  </>;
}
