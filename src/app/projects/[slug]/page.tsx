import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.title + " | استودیو معماری" : "پروژه | استودیو معماری" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="site-shell">
      <SmoothScroll />
      <RevealPage />
      <Header />
      <section className="px-4 pb-24 pt-40 md:px-8 md:pb-40 md:pt-52">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:items-end">
            <div data-reveal><p className="eyebrow">{project.category} · {project.location} · {project.year}</p><h1 className="display-tight mt-6">{project.title}</h1></div>
            <p data-reveal className="body-copy max-w-xl md:justify-self-end">{project.description}</p>
          </div>
          <div data-image-reveal data-transition-hero className="image-frame mt-20 aspect-[16/10] md:mt-32"><Image src={project.image} alt={project.title} fill priority sizes="(max-width:767px) 100vw,90vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="px-4 py-20 md:px-8 md:py-36">
        <div className="container grid gap-16 md:grid-cols-[0.55fr_1.45fr]">
          <div data-reveal><p className="eyebrow">درباره پروژه</p><p className="mt-5 max-w-xs text-sm leading-8 text-neutral-600">روایتی کوتاه از ایده، مکان و تصمیم‌های اصلی پروژه.</p></div>
          <div data-reveal><p className="max-w-4xl text-2xl font-light leading-[1.8] tracking-[-0.025em] md:text-4xl">این پروژه بر پایه رابطه میان نور طبیعی، ماده و حرکت شکل گرفته است. فضاها به جای تعریف یک مسیر ثابت، امکان کشف تدریجی معماری را فراهم می‌کنند؛ هر قاب بخشی از یک تجربه پیوسته است.</p></div>
        </div>
      </section>
      <section className="px-4 pb-32 md:px-8 md:pb-48">
        <div className="container space-y-8 md:space-y-16">
          <div data-image-reveal className="image-frame aspect-[16/9] md:aspect-[2/1]"><Image src={project.image} alt="" fill sizes="(max-width:767px) 100vw,90vw" className="object-cover" data-parallax /></div>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div data-image-reveal className="image-frame aspect-[4/5]"><Image src={project.image} alt="" fill sizes="(max-width:767px) 100vw,42vw" className="object-cover" data-parallax /></div>
            <div data-image-reveal className="image-frame aspect-[5/4] md:mt-32"><Image src={project.image} alt="" fill sizes="(max-width:767px) 100vw,55vw" className="object-cover" data-parallax /></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-32 md:px-8 md:pb-48">
        <div className="container border-t border-black/10 pt-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div data-reveal><p className="eyebrow">پروژه بعدی</p><h2 className="mt-3 text-4xl font-light tracking-[-0.04em] md:text-6xl">{next.title}</h2></div>
            <div data-reveal><EditorialLink href={"/projects/" + next.slug}>ورود به پروژه</EditorialLink></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
