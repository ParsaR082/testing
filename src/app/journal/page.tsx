import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata={title:"مجله | استودیو معماری"};
const articles=[["نور در معماری","چگونه نور طبیعی می‌تواند ریتم یک فضا را شکل دهد؟"],["ماده و زمان","سطوح خام، فرسودگی و زیبایی مصالح در گذر زمان."],["حیاط معاصر","بازخوانی یکی از کهن‌ترین الگوهای فضایی معماری ایران."]];

export default function JournalPage(){
  return <main className="site-shell"><SmoothScroll/><Header/>
    <section className="px-4 pb-32 pt-40 md:px-8 md:pb-48 md:pt-52"><div className="container"><p className="eyebrow">مجله</p><h1 className="display-tight mt-6">یادداشت‌ها و ایده‌ها</h1>
      <div className="mt-24 border-t border-black/10">{articles.map(([title,text],index)=><article key={title} className="grid gap-6 border-b border-black/10 py-10 md:grid-cols-[120px_1fr_1fr] md:py-14"><span className="eyebrow">۰{index+1}</span><h2 className="text-3xl font-light tracking-[-.04em] md:text-5xl">{title}</h2><p className="max-w-md text-sm leading-8 text-neutral-600">{text}</p></article>)}</div>
    </div></section><Footer/>
  </main>;
}
