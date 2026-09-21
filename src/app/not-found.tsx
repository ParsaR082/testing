import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="mb-5 text-[9px] uppercase tracking-[0.24em] text-muted">
          404
        </p>

        <h1 className="text-[clamp(3rem,7vw,7rem)] font-light leading-none tracking-[-0.06em]">
          Project not found.
        </h1>

        <Link
          href="/projects"
          className="mt-10 inline-flex border-b border-foreground/40 pb-1 text-[10px] uppercase tracking-[0.2em]"
        >
          Back to projects
        </Link>
      </div>
    </main>
  );
}