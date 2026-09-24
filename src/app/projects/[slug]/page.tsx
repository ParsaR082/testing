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
        <div data-reveal className="reference-author"><span>◉</span><span>روایت یک پروژه · استودیو معماری</span></div>
        <p data-reveal className="eyebrow mt-10">{project.category} <span aria-hidden="true">·</span> {project.location} <span aria-hidden="true">·</span> {project.year}</p>
        <h1 data-reveal className="reference-detail-title">{project.title}</h1>
        <p data-reveal className="reference-detail-description">{project.description}</p>
        <div data-reveal className="reference-detail-actions mt-7">
          <EditorialLink href="#project-story">کشف داستان پروژه</EditorialLink>
          <EditorialLink href="/contact">گفت‌وگو درباره پروژه شما</EditorialLink>
        </div>
      </div>
      <div data-transition-hero data-image-reveal data-image-src={project.image} className="reference-detail-image">
        <Image src={project.image} alt={project.title} fill priority sizes="(max-width:767px) 100vw,52vw" className="object-cover"/>
        <span className="reference-image-caption">نگاهی نزدیک به {project.title}</span>
      </div>
    </section>

    <section id="project-story" className="reference-detail-body">
      <div data-reveal><p className="eyebrow">ایده‌ای که فضا را ساخت</p><p className="reference-story-index">۰{index+1} / روایت پروژه</p></div>
      <div data-reveal className="reference-story-copy">
        <h2>معماری، پیش از آن‌که دیده شود، باید احساس شود.</h2>
        <p>{project.description} در این پروژه، طراحی از پرسش‌های ساده اما بنیادین آغاز می‌شود: نور چگونه وارد زندگی روزمره می‌شود؟ مرز میان خلوت و ارتباط کجاست؟ و مصالح چطور می‌توانند بدون اغراق، شخصیت فضا را شکل دهند؟</p>
        <p>پاسخ‌ها در امتداد یک تجربه پیوسته شکل گرفته‌اند؛ از نخستین نگاه به بنا تا حرکت درون آن. جزئیات، تناسبات و نور طبیعی در کنار هم قرار می‌گیرند تا فضایی بسازند که با گذر زمان، لایه‌های تازه‌ای از خود را آشکار کند.</p>
      </div>
    </section>

    <section className="reference-detail-gallery">
      <div data-image-reveal className="reference-detail-gallery-wide"><Image src={project.image} alt={"نمای کلی از "+project.title} fill sizes="90vw" className="object-cover"/><span className="reference-gallery-label">01 — تصویر کلی</span></div>
      <div className="reference-gallery-note"><span className="eyebrow">جزئیات، نور، ماده</span><p>برای درک یک فضا، گاهی باید مکث کرد؛ به برخورد نور با سطح، به بافت مصالح و به فاصله میان عناصر نگاه کرد.</p></div>
      <div className="reference-detail-gallery-small">
        <div data-image-reveal><Image src={project.image} alt={"جزئیات معماری "+project.title} fill sizes="42vw" className="object-cover"/><span className="reference-gallery-label">02 — جزئیات</span></div>
        <div data-image-reveal><Image src={project.image} alt={"فضای داخلی "+project.title} fill sizes="42vw" className="object-cover"/><span className="reference-gallery-label">03 — تجربه فضا</span></div>
      </div>
    </section>

    <section className="reference-project-contact">
      <p className="eyebrow">پروژه‌ای در ذهن دارید؟</p>
      <h2>بیایید ایده‌تان را به یک تجربه فضایی تبدیل کنیم.</h2>
      <p>از یک زمین خالی تا بازآفرینی یک فضای موجود؛ درباره نیازها، محدودیت‌ها و تصویری که در ذهن دارید با ما صحبت کنید.</p>
      <EditorialLink href="/contact">شروع گفت‌وگو با استودیو</EditorialLink>
    </section>

    <section className="reference-next">
      <div><p className="eyebrow">ادامه کاوش</p><h2>{next.title}</h2><p className="reference-next-description">{next.description}</p></div>
      <EditorialLink href={"/projects/"+next.slug}>دیدن پروژه بعدی</EditorialLink>
    </section>
    <Footer/>
  </main>;
}
