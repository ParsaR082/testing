import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export const metadata={title:"پروژه‌ها | استودیو معماری"};

export default function ProjectsPage(){
  return <main className="site-shell"><SmoothScroll/><Header/>
    <section className="px-4 pb-24 pt-40 md:px-8 md:pb-36 md:pt-52"><div className="container"><p className="eyebrow">آرشیو معماری</p><h1 className="display-tight mt-6 max-w-5xl">پروژه‌ها</h1><p className="body-copy mt-10 max-w-xl">مجموعه‌ای از پروژه‌های مسکونی، فرهنگی و فضایی که با توجه به مکان، نور و ماده شکل گرفته‌اند.</p></div></section>
    <section className="px-4 pb-32 md:px-8 md:pb-48"><div className="container grid gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>
    <Footer/>
  </main>;
}
