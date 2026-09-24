import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

      <section className="reference-news reference-projects">
        <div className="reference-news-head">
          <div data-reveal>
            <p className="eyebrow">پروژه‌ها</p>
            <h1>آرشیو معماری</h1>
          </div>
          <p data-reveal>
            مجموعه‌ای از پروژه‌ها؛ از خانه‌های مسکونی تا فضاهای فرهنگی و
            پاویون‌هایی که با نور، ماده و مکان شکل گرفته‌اند.
          </p>
        </div>

        <div className="reference-news-grid">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal
              className="reference-news-card"
            >
              <Link
                href={"/projects/" + project.slug}
                data-page-transition
                className="group block"
              >
                <div
                  className="reference-news-image"
                  data-transition-image
                  data-image-src={project.image}
                  data-transition-grid-target={index === 0 ? "true" : undefined}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:767px) 100vw,30vw"
                    className="object-cover"
                  />
                </div>

                <div className="reference-card-meta">
                  <p>{project.category}</p>
                  <p>{project.location} · {project.year}</p>
                </div>

                <h2>{project.title}</h2>
                <p className="reference-news-excerpt">{project.description}</p>

                <span className="reference-read">
                  مشاهده پروژه <i>→</i>
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="reference-socials reference-news-socials">
          <span>ی</span>
          <span>ت</span>
          <span>ف</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
