import Image from "next/image";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export default function Home(){
  const featured=projects[0];
  return <main className="site-shell">
    <SmoothScroll/><RevealPage/><Header/>
    <section className="relative min-h-[100svh] px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <div className="container grid min-h-[calc(100svh-10rem)] items-end gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div className="order-2 pb-6 md:order-1 md:pb-12">
          <p data-hero-item className="eyebrow">استودیو معماری معاصر · ۱۴۰۵</p>
          <h1 data-hero-item className="display mt-6 max-w-4xl">معماری برای<br/>زندگی آرام.</h1>
          <p data-hero-item className="body-copy mt-8 max-w-lg">فضاهایی که از نور، ماده و سکوت شکل می‌گیرند؛ پروژه‌هایی میان معماری معاصر و تجربه روزمره.</p>
          <div data-hero-item className="mt-8"><EditorialLink href={"/projects/"+featured.slug}>مشاهده پروژه منتخب</EditorialLink></div>
        </div>
        <div data-hero-image className="image-frame order-1 aspect-[4/3] md:order-2 md:aspect-[5/4]">
          <Image src={featured.image} alt={featured.title} fill priority sizes="(max-width:767px) 100vw,58vw" className="object-cover"/>
        </div>
      </div>
    </section>
    <section className="px-4 py-32 md:px-8 md:py-48"><div className="container"><div className="grid gap-16 md:grid-cols-[.7fr_1.3fr] md:gap-24">
      <div data-reveal><p className="eyebrow">پروژه منتخب</p><p className="mt-5 text-sm leading-8 text-neutral-600">هر پروژه تلاشی است برای ساختن رابطه‌ای دقیق میان انسان، مکان و زمان.</p></div>
      <div data-reveal><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
        <div><p className="eyebrow">{featured.category} · {featured.location} · {featured.year}</p><h2 className="display-tight mt-5">{featured.title}</h2><p className="body-copy mt-8">{featured.description}</p><div className="mt-8"><EditorialLink href={"/projects/"+featured.slug}>ورود به پروژه</EditorialLink></div></div>
        <div className="image-frame aspect-[4/5]"><Image src={featured.image} alt={featured.title} fill sizes="(max-width:767px) 100vw,45vw" className="object-cover" data-parallax/></div>
      </div></div>
    </div></div></section>
    <section className="px-4 pb-32 md:px-8 md:pb-48"><div className="container">
      <div className="mb-16 flex items-end justify-between gap-8 md:mb-24"><div data-reveal><p className="eyebrow">منتخب پروژه‌ها</p><h2 className="display-tight mt-4">معماری و مکان</h2></div><div data-reveal className="hidden md:block"><EditorialLink href="/projects">همه پروژه‌ها</EditorialLink></div></div>
      <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><div key={project.slug} data-reveal><ProjectCard project={project}/></div>)}</div>
    </div></section>
    <Footer/>
  </main>;
}
