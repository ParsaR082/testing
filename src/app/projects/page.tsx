import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export const metadata = { title: "پروژه‌ها | استودیو معماری" };

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <SmoothScroll />
      <RevealPage />
      <Header />
      <section className="px-4 pb-24 pt-40 md:px-8 md:pb-36 md:pt-52">
        <div className="container">
          <div data-reveal><p className="eyebrow">آرشیو معماری</p><h1 className="display-tight mt-6 max-w-5xl">پروژه‌ها</h1></div>
          <p data-reveal className="body-copy mt-10 max-w-xl">مجموعه‌ای از پروژه‌های مسکونی، فرهنگی و فضایی که با توجه به مکان، نور و ماده شکل گرفته‌اند.</p>
        </div>
      </section>
      <section className="px-4 pb-32 md:px-8 md:pb-48">
        <div className="container"><div data-reveal><ProjectsGrid projects={projects} /></div></div>
      </section>
      <Footer />
    </main>
  );
}
