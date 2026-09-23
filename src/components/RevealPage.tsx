"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealPage(){
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const context=gsap.context(()=>{
      gsap.fromTo("[data-hero-item]",{y:40,opacity:0},{y:0,opacity:1,duration:1.2,stagger:.09,ease:"power4.out",delay:.2});
      gsap.fromTo("[data-hero-image]",{clipPath:"inset(100% 0 0 0)",scale:1.06},{clipPath:"inset(0% 0 0 0)",scale:1,duration:1.6,ease:"power4.out",delay:.35});
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element=>{
        gsap.fromTo(element,{y:70,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:element,start:"top 84%",once:true}});
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(element=>{
        gsap.to(element,{yPercent:-8,ease:"none",scrollTrigger:{trigger:element,start:"top bottom",end:"bottom top",scrub:true}});
      });
    },root);
    return ()=>context.revert();
  },[]);
  return <div ref={root} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true"/>;
}
