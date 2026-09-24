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
  const previousState = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const firstRender = useRef(true);

  const items =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const changeFilter = (nextFilter: string) => {
    if (nextFilter === filter || !grid.current) return;

    const cards = grid.current.querySelectorAll("[data-project-card]");
    previousState.current = Flip.getState(cards, {
      props: "opacity",
    });

    setFilter(nextFilter);
  };

  useLayoutEffect(() => {
    if (!grid.current) return;

    const cards = Array.from(
      grid.current.querySelectorAll<HTMLElement>("[data-project-card]")
    );

    if (firstRender.current) {
      firstRender.current = false;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.065,
          ease: "power4.out",
          clearProps: "transform",
        }
      );

      return;
    }

    const state = previousState.current;
    previousState.current = null;

    if (!state) return;

    gsap.set(cards, { opacity: 0 });

    const flip = Flip.from(state, {
      targets: cards,
      absolute: true,
      nested: true,
      prune: true,
      duration: 0.72,
      ease: "power4.inOut",
      stagger: 0.035,
      onComplete: () => {
        gsap.set(cards, { clearProps: "transform" });
      },
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.62,
      stagger: 0.055,
      delay: 0.08,
      ease: "power4.out",
      clearProps: "transform",
    });

    return () => {
      flip.kill();
      gsap.killTweensOf(cards);
    };
  }, [filter]);

  return (
    <>
      <div className="reference-filters">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => changeFilter(item.value)}
            className={filter === item.value ? "active" : ""}
          >
            {item.key}
            <span />
          </button>
        ))}
      </div>

      <div ref={grid} className="reference-grid">
        {items.map((project) => (
          <article
            key={project.slug}
            data-project-card
            className="reference-card"
          >
            <Link
              href={"/projects/" + project.slug}
              data-page-transition
              className="group block"
            >
              <div
                className="reference-card-image"
                data-transition-image
                data-image-src={project.image}
                data-transition-grid-target={
                  projects[0]?.slug === project.slug ? "true" : undefined
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:767px) 100vw,33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="reference-card-meta">
                <p>{project.category}</p>
                <p>
                  {project.location} · {project.year}
                </p>
              </div>

              <h2>{project.title}</h2>
              <span className="reference-read">
                مشاهده پروژه <i>→</i>
              </span>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
