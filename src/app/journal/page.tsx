import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { articles } from "@/data/articles";

export const metadata = { title: "مجله | استودیو معماری" };

export default function JournalPage(){
  return <main className="site-shell">
    <SmoothScroll/><Header/>
    <section className="reference-news">
      <div className="reference-news-head">
        <div><p className="eyebrow">مجله</p><h1>یادداشت‌ها</h1></div>
        <p>ایده‌ها، مصالح، فناوری و نگاه‌هایی درباره معماری معاصر.</p>
      </div>

      <div className="reference-news-grid">
        {articles.map((article)=>(
          <article key={article.slug} data-reveal className="reference-news-card">
            <Link href={"/journal/"+article.slug} data-page-transition className="block">
              <div className="reference-news-image" data-transition-image data-image-src={article.image}>
                <Image src={article.image} alt="" fill sizes="(max-width:767px) 100vw,30vw" className="object-cover"/>
              </div>
              <p className="reference-news-category">{article.category}</p>
              <h2>{article.title}</h2>
              <p className="reference-news-excerpt">{article.excerpt}</p>
              <span className="reference-read">ادامه مطلب <i>→</i></span>
            </Link>
          </article>
        ))}
      </div>

      <div className="reference-socials reference-news-socials"><span>ی</span><span>ت</span><span>ف</span></div>
    </section>
    <Footer/>
  </main>;
}
