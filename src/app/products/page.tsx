import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/data/projects";

export const metadata = { title: "محصولات | استودیو معماری" };

const products = [
  ["میز سنگی", "جزئیات معماری برای فضاهای آرام و ماندگار."],
  ["چراغ خطی", "نور خطی با زبان ساده و متناسب با معماری."],
  ["صندلی خام", "یک حجم کاربردی با تأکید بر ماده و نسبت."]
];

export default function ProductsPage() {
  return <main className="site-shell">
    <Header />
    <section className="reference-news">
      <div className="reference-news-head">
        <div><p className="eyebrow">محصولات</p><h1>اشیای فضا</h1></div>
        <p>مجموعه‌ای کوچک از اشیا و جزئیاتی که از زبان معماری استودیو شکل گرفته‌اند.</p>
      </div>
      <div className="reference-news-grid">
        {products.map(([title,desc],index)=><article key={title} data-reveal>
          <div className="reference-news-image">
            <Image src={projects[index].image} alt="" fill sizes="(max-width:767px) 100vw,30vw" className="object-cover"/>
          </div>
          <p className="reference-news-category">محصول {String(index+1).padStart(2,"0")}</p>
          <h2>{title}</h2>
          <p className="reference-news-category">{desc}</p>
        </article>)}
      </div>
    </section>
    <Footer />
  </main>;
}
