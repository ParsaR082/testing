import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/data/projects";

export const metadata = { title: "ایده‌ها | استودیو معماری" };

const ideas = [
  ["سکوت بصری", "چرا کاهش عناصر گاهی بیشترین فضا را برای تجربه ایجاد می‌کند؟"],
  ["نور به‌عنوان ماده", "نور فقط روشنایی نیست؛ بخشی از ساختار و روایت فضاست."],
  ["معماری و زمان", "مصالح چگونه با گذر زمان شخصیت یک بنا را کامل می‌کنند؟"]
];

export default function IdeasPage() {
  return <main className="site-shell">
    <Header />
    <section className="reference-news">
      <div className="reference-news-head">
        <div><p className="eyebrow">ایده‌ها</p><h1>نگاه‌ها</h1></div>
        <p>یادداشت‌ها و جست‌وجوهای کوتاه درباره فضا، ماده، نور و زندگی.</p>
      </div>
      <div className="reference-news-grid">
        {ideas.map(([title,desc],index)=><article key={title} data-reveal>
          <div className="reference-news-image">
            <Image src={projects[(index+2)%projects.length].image} alt="" fill sizes="(max-width:767px) 100vw,30vw" className="object-cover"/>
          </div>
          <p className="reference-news-category">ایده {String(index+1).padStart(2,"0")}</p>
          <h2>{title}</h2>
          <p className="reference-news-category">{desc}</p>
        </article>)}
      </div>
    </section>
    <Footer />
  </main>;
}
