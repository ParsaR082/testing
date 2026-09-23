import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export function generateStaticParams(){return projects.map((project)=>({slug:project.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find((item)=>item.slug===slug);
  return {title:project?project.title+" | استودیو معماری":"پروژه | استودیو معماری"};
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find((item)=>item.slug===slug);
  if(!project)notFound();

  const index=projects.findIndex((item)=>item.slug===project.slug);
  const next=projects[(index+1)%projects.length];

  return <main className="site-shell">
    <SmoothScroll/><RevealPage/><Header/>

    <section className="reference-detail-hero">
      <div className="reference-detail-copy">
        <div data-reveal className="reference-author"><span>◉</span><span>استودیو معماری · {project.location}</span></div>
        <p data-reveal className="eyebrow mt-10">{project.category} · {project.year}</p>
        <h1 data-reveal className="reference-detail-title">{project.title}</h1>
        <p data-reveal className="reference-detail-description">{project.description} این پروژه با تمرکز بر رابطه میان نور، ماده و حرکت شکل گرفته و تلاش می‌کند تجربه‌ای آرام و پیوسته از فضا بسازد.</p>
        <div data-reveal className="mt-7"><EditorialLink href="/projects">بازگشت به پروژه‌ها</EditorialLink></div>
      </div>
      <div data-transition-hero data-image-reveal className="reference-detail-image">
        <Image src={project.image} alt={project.title} fill priority sizes="(max-width:767px) 100vw,52vw" className="object-cover"/>
      </div>
    </section>

    <section className="reference-detail-body">
      <div data-reveal><p className="eyebrow">روایت پروژه</p></div>
      <p data-reveal>هر تصمیم از شرایط واقعی مکان آغاز شده است؛ نور روز، جهت دید، جنس سطح و حرکت انسان در فضا. نتیجه، مجموعه‌ای از فضاهای به‌هم‌پیوسته است که به جای نمایش خود، اجازه می‌دهند زندگی و زمان در آن‌ها دیده شود.</p>
    </section>

    <section className="reference-detail-gallery">
      <div data-image-reveal className="reference-detail-gallery-wide"><Image src={project.image} alt="" fill sizes="90vw" className="object-cover"/></div>
      <div className="reference-detail-gallery-small">
        <div data-image-reveal><Image src={project.image} alt="" fill sizes="42vw" className="object-cover"/></div>
        <div data-image-reveal><Image src={project.image} alt="" fill sizes="42vw" className="object-cover"/></div>
      </div>
    </section>

    <section className="reference-next">
      <div><p className="eyebrow">پروژه بعدی</p><h2>{next.title}</h2></div>
      <EditorialLink href={"/projects/"+next.slug}>ورود به پروژه</EditorialLink>
    </section>

    <Footer/>
  </main>;
}
