"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links=[
  {href:"/projects",label:"پروژه‌ها"},
  {href:"/journal",label:"اخبار"},
  {href:"/studio",label:"هنرمندان"},
  {href:"/contact",label:"تماس"}
];

export function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-mark" aria-label="صفحه اصلی">
          <span className="site-mark-symbol" aria-hidden="true">△</span>
          <span className="site-mark-name">استودیو</span>
        </Link>

        <nav className="site-nav hidden md:flex" aria-label="ناوبری اصلی">
          {links.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <button type="button" className="site-search hidden md:flex" aria-label="جستجو">
          <span>جستجو</span><span aria-hidden="true">⌕</span>
        </button>

        <button type="button" className="site-mobile-menu md:hidden" aria-expanded={open} aria-label={open?"بستن منو":"باز کردن منو"} onClick={()=>setOpen(v=>!v)}>
          {open?"بستن":"منو"}
        </button>
      </div>
    </header>

    <AnimatePresence>
      {open&&<motion.div className="mobile-menu" initial={{clipPath:"inset(0 0 100% 0)"}} animate={{clipPath:"inset(0 0 0% 0)"}} exit={{clipPath:"inset(100% 0 0 0)"}} transition={{duration:.72,ease:[.76,0,.24,1]}}>
        <nav>
          {links.map((link,index)=><motion.div key={link.href} initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{delay:index*.055,duration:.6}}>
            <Link href={link.href} onClick={()=>setOpen(false)}>{link.label}</Link>
          </motion.div>)}
        </nav>
      </motion.div>}
    </AnimatePresence>
  </>;
}
