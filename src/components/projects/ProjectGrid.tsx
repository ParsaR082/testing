import { projects } from "@/lib/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-12 md:gap-y-44"
    >
      <ProjectCard
        project={projects[0]}
        priority
        className="md:col-span-7 md:col-start-1"
      />

      <ProjectCard
        project={projects[1]}
        className="md:col-span-4 md:col-start-9 md:mt-44"
      />

      <ProjectCard
        project={projects[2]}
        className="md:col-span-5 md:col-start-2 md:mt-8"
      />

      <ProjectCard
        project={projects[3]}
        className="md:col-span-6 md:col-start-7 md:mt-36"
      />
    </div>
  );
}