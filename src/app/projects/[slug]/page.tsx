import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(item=>item.slug===slug);return{title:project?project.title+" | استودیو معماری":"پروژه | استودیو معماری"};}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const project=projects.find(item=>item.slug===slug);if(!project)notFound();
  return <main className="site-shell"><SmoothScroll/><Header/>
    <section className="px-4 pb-24 pt-40 md:px-8 md:pb-40 md:pt-52"><div className="container">
      <div className="grid gap-16 md:grid-cols-[.65fr_1.35fr] md:items-end"><div><p className="eyebrow">{project.category} · {project.location} · {project.year}</p><h1 className="display-tight mt-6">{project.title}</h1></div><p className="body-copy max-w-xl md:justify-self-end">{project.description}</p></div>
      <div className="image-frame mt-20 aspect-[16/10] md:mt-32"><Image src={project.image} alt={project.title} fill priority sizes="(max-width:767px) 100vw,90vw" className="object-cover"/></div>
    </div></section>
    <section className="px-4 py-20 md:px-8 md:py-32"><div className="container grid gap-16 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">درباره پروژه</p></div><div><p className="max-w-3xl text-xl font-light leading-[1.8] tracking-[-.02em] md:text-3xl">این پروژه بر پایه رابطه میان نور طبیعی، ماده و حرکت شکل گرفته است. فضاها به جای تعریف یک مسیر ثابت، امکان کشف تدریجی معماری را فراهم می‌کنند.</p></div></div></section>
    <section className="px-4 pb-32 md:px-8 md:pb-48"><div className="container grid gap-8 md:grid-cols-2"><div className="image-frame aspect-[4/5]"><Image src={project.image} alt="" fill sizes="50vw" className="object-cover"/></div><div className="image-frame aspect-[4/5] md:mt-32"><Image src={project.image} alt="" fill sizes="50vw" className="object-cover"/></div></div></section>
    <section className="px-4 pb-32 md:px-8 md:pb-48"><div className="container flex items-center justify-between gap-8 border-t border-black/10 pt-8"><span className="eyebrow">پروژه بعدی</span><EditorialLink href="/projects">بازگشت به پروژه‌ها</EditorialLink></div></section>
    <Footer/>
  </main>;
}
