import Link from "next/link";

export function Footer(){
  const links=[{href:"mailto:studio@example.com",label:"ایمیل"},{href:"tel:09123456789",label:"۰۹۱۲۳۴۵۶۷۸۹"},{href:"/projects",label:"مشاهده پروژه‌ها"}];
  return <footer className="border-t border-black/10 py-16 md:py-24">
    <div className="container">
      <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <div><p className="eyebrow">استودیو معماری</p><h2 className="mt-5 max-w-3xl text-[clamp(3rem,7vw,7rem)] font-light leading-[.95] tracking-[-.055em]">فضاهایی برای<br/>زندگی و سکوت.</h2></div>
        <div className="flex flex-col justify-between gap-12 md:items-end">
          <p className="max-w-sm text-sm leading-8 text-neutral-600 md:text-right">معماری معاصر با تمرکز بر نور، ماده، نسبت و ارتباط عمیق با مکان.</p>
          <div className="flex w-full flex-col gap-4 md:items-end">{links.map(link=><Link key={link.label} href={link.href} className="group editorial-link"><span>{link.label}</span><span className="editorial-arrow">←</span></Link>)}</div>
        </div>
      </div>
      <div className="mt-20 flex justify-between border-t border-black/10 pt-5 text-[.7rem] text-neutral-500"><span>© ۱۴۰۵ استودیو معماری</span><span>ارومیه، ایران</span></div>
    </div>
  </footer>;
}
