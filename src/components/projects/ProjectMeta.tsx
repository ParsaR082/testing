import type { Project } from "@/lib/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div
      dir="rtl"
      className="flex items-start justify-between gap-6 text-[9px] font-medium uppercase leading-[1.4] tracking-[0.16em] md:text-[10px] md:tracking-[0.18em]"
    >
      <div className="text-start">
        <p className="leading-[1.4]">{project.name}</p>

        <p className="mt-1.5 leading-[1.4] text-muted">
          {project.location}
        </p>
      </div>

      <div className="text-end text-muted">
        <p className="leading-[1.4]">{project.year}</p>

        <p className="mt-1.5 leading-[1.4]">{project.category}</p>
      </div>
    </div>
  );
}