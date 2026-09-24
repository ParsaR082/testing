import Image from "next/image";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

const heroImage =
  "https://images.unsplash.com/photo-1759387459957-a365ee2b7eef?auto=format&fit=crop&w=1800&q=84";

export default function Home() {
  const featured = projects[0];

  return (
    <main className="site-shell">
      <SmoothScroll />
      <RevealPage />
      <Header />

      <section className="reference-hero">
        <div className="reference-hero-copy" data-reveal>
          <p className="eyebrow reference-kicker">استودیو معماری معاصر</p>
          <h1 className="reference-title">بلندپرواز</h1>
          <p className="reference-description">
            بازخوانی معماری معاصر؛ جایی که برنامه، ماده و نور به تجربه‌ای دقیق از فضا تبدیل می‌شوند.
          </p>
          <EditorialLink href={"/projects/" + featured.slug} transitionSource=".reference-hero-art">کاوش پروژه</EditorialLink>
        </div>

        <div className="reference-hero-art" data-image-reveal data-image-src={heroImage} data-transition-source aria-hidden="true">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="70vw"
            className="object-cover"
          />
        </div>

        <div className="reference-socials" aria-label="شبکه‌های اجتماعی">
          <span>ی</span>
          <span>ت</span>
          <span>ف</span>
        </div>
      </section>

      <section className="reference-intro px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr] md:items-start">
          <div data-reveal>
            <p className="eyebrow">استودیو</p>
            <p className="mt-5 max-w-xs text-xs leading-7 text-neutral-500">
              معماری، مکان و تجربه؛ با تمرکز بر جزئیات و سکوت بصری.
            </p>
          </div>
          <p
            data-reveal
            className="max-w-4xl text-xl font-light leading-[1.8] tracking-[-.025em] md:text-3xl"
          >
            هر پروژه برای ما یک روایت مستقل است؛ روایتی که از مکان شروع می‌شود و با نور، ماده و حرکت کامل می‌شود.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">
          <div>
            <p className="eyebrow">پروژه‌ها</p>
            <h2 className="mt-3 text-3xl font-light tracking-[-.04em] md:text-5xl">منتخب</h2>
          </div>
          <EditorialLink href="/projects">همه</EditorialLink>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <div key={project.slug} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
