import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({project}:{project:Project}){
  return <article className="group">
    <Link href={"/projects/"+project.slug} className="block">
      <div className="image-frame aspect-[4/5]">
        <Image src={project.image} alt={project.title} fill sizes="(max-width:767px) 100vw,(max-width:1199px) 50vw,33vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.035]"/>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto] gap-5">
        <div><p className="eyebrow">{project.category} · {project.location} · {project.year}</p><h3 className="mt-2 text-2xl font-light tracking-[-0.035em]">{project.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-neutral-600">{project.description}</p></div>
        <span className="editorial-arrow mt-1 shrink-0" aria-hidden="true">←</span>
      </div>
    </Link>
  </article>;
}
