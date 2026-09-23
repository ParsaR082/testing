import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata={title:"استودیو | استودیو معماری"};

export default function StudioPage(){
  return <main className="site-shell"><SmoothScroll/><Header/>
    <section className="px-4 pb-32 pt-40 md:px-8 md:pb-48 md:pt-52"><div className="container"><p className="eyebrow">استودیو</p><h1 className="display-tight mt-6 max-w-6xl">معماری به عنوان<br/>تجربه‌ای از مکان.</h1>
      <div className="mt-20 grid gap-16 md:grid-cols-[.7fr_1.3fr]"><p className="eyebrow">درباره ما</p><p className="max-w-3xl text-xl font-light leading-[1.9] md:text-3xl">ما فضاهایی را طراحی می‌کنیم که میان انسان، طبیعت و ساختار تعادل ایجاد می‌کنند. رویکرد استودیو بر مشاهده دقیق مکان، استفاده سنجیده از ماده و ساختن تجربه‌ای آرام و ماندگار است.</p></div>
    </div></section><Footer/>
  </main>;
}
