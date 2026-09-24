import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorialLink } from "@/components/EditorialLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealPage } from "@/components/RevealPage";
import { SmoothScroll } from "@/components/SmoothScroll";
import { articles } from "@/data/articles";

export function generateStaticParams(){
  return articles.map((article)=>({slug:article.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=articles.find((item)=>item.slug===slug);
  return {title:article?article.title+" | مجله":"مجله | استودیو معماری"};
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=articles.find((item)=>item.slug===slug);
  if(!article) notFound();

  return <main className="site-shell">
    <SmoothScroll/><RevealPage/><Header/>

    <section className="reference-article-hero">
      <div className="reference-article-copy">
        <div data-reveal className="reference-author">
          <span>◉</span>
          <span>نوشته {article.author}</span>
        </div>
        <p data-reveal className="eyebrow reference-article-category">{article.category}</p>
        <h1 data-reveal className="reference-article-title">{article.title}</h1>
        <p data-reveal className="reference-article-description">{article.excerpt}</p>
        <div data-reveal className="mt-7"><EditorialLink href="/journal" transitionSource=".reference-article-image">بازگشت به مجله</EditorialLink></div>
      </div>

      <div data-transition-hero data-image-reveal className="reference-article-image">
        <Image src={article.image} alt={article.title} fill priority sizes="(max-width:767px) 100vw,52vw" className="object-cover"/>
      </div>
    </section>

    <article className="reference-article-body">
      <p className="eyebrow">روایت</p>
      <div>
        <p>معماری فقط ساختن یک حجم نیست؛ روشی برای خواندن مکان، نور و حرکت است. در این یادداشت به رابطه میان ایده و تجربه می‌پردازیم و تلاش می‌کنیم جزئیات کوچک مؤثر بر کیفیت فضا را دوباره ببینیم.</p>
        <p>وقتی ماده و نور با دقت در کنار هم قرار می‌گیرند، فضا پیش از آن‌که توضیح داده شود، خودش را نشان می‌دهد. همین سکوت و پیوستگی، بخشی از کیفیت معماری معاصر است.</p>
      </div>
    </article>

    <section className="reference-article-wide">
      <Image src={article.image} alt="" fill sizes="90vw" className="object-cover"/>
    </section>

    <section className="reference-next">
      <div><p className="eyebrow">بازگشت</p><h2>یادداشت‌ها</h2></div>
      <EditorialLink href="/journal">مشاهده همه</EditorialLink>
    </section>

    <Footer/>
  </main>;
}
