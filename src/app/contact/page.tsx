import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata={title:"تماس | استودیو معماری"};

export default function ContactPage(){
  return <main className="site-shell"><SmoothScroll/><Header/>
    <section className="min-h-[80svh] px-4 pb-32 pt-40 md:px-8 md:pb-48 md:pt-52"><div className="container"><p className="eyebrow">تماس</p><h1 className="display-tight mt-6 max-w-6xl">بیایید درباره یک فضا صحبت کنیم.</h1>
      <div className="mt-24 grid gap-12 md:grid-cols-3"><div><p className="eyebrow">ایمیل</p><a className="mt-3 block text-lg hover:opacity-50" href="mailto:studio@example.com">studio@example.com</a></div><div><p className="eyebrow">تلفن</p><a className="mt-3 block text-lg hover:opacity-50" href="tel:09123456789">۰۹۱۲۳۴۵۶۷۸۹</a></div><div><p className="eyebrow">مکان</p><p className="mt-3 text-lg">ارومیه، ایران</p></div></div>
    </div></section><Footer/>
  </main>;
}
