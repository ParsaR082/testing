"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links=[
  {href:"/projects",label:"پروژه‌ها"},
  {href:"/studio",label:"استودیو"},
  {href:"/journal",label:"مجله"},
  {href:"/contact",label:"تماس"}
];

export function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-5 md:px-8 md:py-7">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-tight" aria-label="صفحه اصلی">استودیو</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(link=><Link key={link.href} href={link.href} className="text-xs text-neutral-700 transition-opacity duration-300 hover:opacity-50">{link.label}</Link>)}
        </nav>
        <button type="button" className="text-xs md:hidden" aria-expanded={open} aria-label={open?"بستن منو":"باز کردن منو"} onClick={()=>setOpen(v=>!v)}>{open?"بستن":"منو"}</button>
        <span className="hidden text-xs text-neutral-500 md:block">جستجو</span>
      </div>
    </header>
    <AnimatePresence>
      {open&&<motion.div className="fixed inset-0 z-40 flex items-end bg-[#111111] px-6 pb-10 text-[#f5f4f0]" initial={{clipPath:"inset(0 0 100% 0)"}} animate={{clipPath:"inset(0 0 0% 0)"}} exit={{clipPath:"inset(100% 0 0 0)"}} transition={{duration:.8,ease:[.76,0,.24,1]}}>
        <nav className="flex w-full flex-col gap-3">
          {links.map((link,index)=><motion.div key={link.href} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:index*.07,duration:.7}}>
            <Link href={link.href} onClick={()=>setOpen(false)} className="block text-[clamp(2.8rem,12vw,6rem)] font-light leading-none tracking-[-0.05em]">{link.label}</Link>
          </motion.div>)}
        </nav>
      </motion.div>}
    </AnimatePresence>
  </>;
}
