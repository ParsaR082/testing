import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

export const metadata={title:"مجله | استودیو معماری"};

const articles=[
  ["ماده","معماری غنی از بافت؛ نسبت، نور و کیفیت سطوح در تجربه فضا."],
  ["طراحی","چگونه یک فضای باز می‌تواند مسیر حرکت و مکث را شکل دهد؟"],
  ["فناوری","وقتی ساخت دیجیتال با منطق معماری و جزئیات انسانی همراه می‌شود."],
  ["نور","قوس، سایه و روشنایی؛ خوانش دوباره‌ی فضاهای آیینی."],
  ["مکان","چرا معماری خوب از مشاهده‌ی دقیق زمینه آغاز می‌شود؟"],
  ["زمان","سطوح، فرسودگی و زیبایی مصالح در گذر سال‌ها."]
];

export default function JournalPage(){
  return <main className="site-shell">
    <SmoothScroll/><Header/>
    <section className="reference-news">
      <div className="reference-news-head">
        <div><p className="eyebrow">مجله</p><h1>یادداشت‌ها</h1></div>
        <p>ایده‌ها، مصالح، فناوری و نگاه‌هایی درباره معماری معاصر.</p>
      </div>

      <div className="reference-news-grid">
        {articles.map(([category,title],index)=>{
          const project=projects[index%projects.length];
          return <article key={title} data-reveal>
            <div className="reference-news-image"><Image src={project.image} alt="" fill sizes="(max-width:767px) 100vw,30vw" className="object-cover"/></div>
            <p className="reference-news-category">{category}</p>
            <h2>{title}</h2>
            <span className="reference-read">ادامه مطلب <i>→</i></span>
          </article>;
        })}
      </div>

      <div className="reference-socials reference-news-socials"><span>ی</span><span>ت</span><span>ف</span></div>
    </section>
    <Footer/>
  </main>;
}
