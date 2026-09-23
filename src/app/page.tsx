import Image from "next/image";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects[0];

  return (
    <main className="site-shell">
      <LoadingScreen />
      <SmoothScroll />
      <RevealPage />
      <Header />

      <section className="hero-section relative min-h-[150svh] px-4 pt-28 md:px-8 md:pt-32">
        <div data-hero-stage className="container sticky top-0 flex min-h-[100svh] items-center">
          <div className="relative mx-auto w-full max-w-[1440px]">
            <div data-hero-image className="hero-image image-frame relative mx-auto aspect-[4/5] w-[min(72vw,540px)] overflow-hidden md:aspect-[5/6] md:w-[min(39vw,620px)]">
              <Image src={featured.image} alt={featured.title} fill priority sizes="(max-width:767px) 72vw, 39vw" className="object-cover" data-hero-parallax />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-[8vh] md:pb-[10vh]">
              <div className="w-full text-center">
                <p data-hero-meta className="hero-meta eyebrow mb-5 opacity-0">استودیو معماری معاصر · ارومیه · ۱۴۰۵</p>
                <div className="overflow-hidden">
                  <h1 data-hero-title className="hero-title display opacity-0">فضای آرام</h1>
                </div>
                <p data-hero-copy className="mx-auto mt-5 max-w-md text-sm leading-8 text-neutral-600 opacity-0 md:text-base">معماری به‌مثابه مکث؛ ترکیبی از نور، ماده و نسبت که تجربه‌ای آرام و ماندگار می‌سازد.</p>
                <div data-hero-link className="pointer-events-auto mt-7 opacity-0">
                  <EditorialLink href={"/projects/" + featured.slug}>ورود به پروژه</EditorialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-28 md:px-8 md:py-48">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-[0.55fr_1.45fr] md:gap-24">
            <div data-reveal className="md:pt-6">
              <p className="eyebrow">پروژه منتخب</p>
              <p className="mt-6 max-w-xs text-sm leading-8 text-neutral-600">هر پروژه از یک پرسش ساده آغاز می‌شود: چگونه می‌توان میان انسان، مکان، نور و زمان تعادلی دقیق ساخت؟</p>
            </div>
            <div data-reveal>
              <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-end">
                <div className="max-w-xl">
                  <p className="eyebrow">{featured.category} · {featured.location} · {featured.year}</p>
                  <h2 className="display-tight mt-5">{featured.title}</h2>
                  <p className="body-copy mt-8">{featured.description}</p>
                  <div className="mt-9"><EditorialLink href={"/projects/" + featured.slug}>مشاهده پروژه</EditorialLink></div>
                </div>
                <div data-image-reveal className="image-frame aspect-[4/5]">
                  <Image src={featured.image} alt={featured.title} fill sizes="(max-width:767px) 100vw, 45vw" className="object-cover" data-parallax />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-32 md:px-8 md:pb-48">
        <div className="container">
          <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
            <div data-reveal><p className="eyebrow">آرشیو پروژه‌ها</p><h2 className="display-tight mt-4">معماری و مکان</h2></div>
            <div data-reveal><EditorialLink href="/projects">همه پروژه‌ها</EditorialLink></div>
          </div>
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => <div key={project.slug} data-reveal><ProjectCard project={project} /></div>)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
