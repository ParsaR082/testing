"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

type TransitionState = {
  src:string;
  rect:DOMRect;
  href:string;
};

export function PageTransition(){
  const router=useRouter();
  const pathname=usePathname();
  const overlay=useRef<HTMLDivElement>(null);
  const image=useRef<HTMLImageElement>(null);
  const previousPath=useRef(pathname);
  const pending=useRef<TransitionState|null>(null);
  const [active,setActive]=useState(false);

  useEffect(()=>{
    document.body.classList.toggle("page-transitioning",active);
    return()=>document.body.classList.remove("page-transitioning");
  },[active]);

  useEffect(()=>{
    const onClick=(event:MouseEvent)=>{
      if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;

      const target=event.target as HTMLElement|null;
      const link=target?.closest<HTMLAnchorElement>("a[data-page-transition]");
      if(!link||link.target==="_blank")return;

      const selector=link.getAttribute("data-transition-source-selector");
      const source=selector
        ? document.querySelector<HTMLElement>(selector)
        : link.querySelector<HTMLElement>("[data-transition-image]");

      const src=source?.getAttribute("data-image-src");
      if(!source||!src)return;

      event.preventDefault();

      pending.current={src,rect:source.getBoundingClientRect(),href:link.href};
      setActive(true);

      requestAnimationFrame(()=>{
        if(!overlay.current||!image.current||!pending.current)return;
        const {rect}=pending.current;

        gsap.set(overlay.current,{display:"block",opacity:1});
        gsap.set(image.current,{
          left:rect.left,top:rect.top,width:rect.width,height:rect.height,
          scale:1,borderRadius:0
        });

        gsap.to(image.current,{
          duration:.68,
          scale:1.012,
          ease:"power4.inOut",
          onComplete:()=>{
            if(pending.current)router.push(new URL(pending.current.href).pathname);
          }
        });
      });
    };

    document.addEventListener("click",onClick,true);
    return()=>document.removeEventListener("click",onClick,true);
  },[router]);

  useEffect(()=>{
    if(!active||!image.current||!pending.current||previousPath.current===pathname)return;
    previousPath.current=pathname;

    const finish=()=>{
      const target=document.querySelector<HTMLElement>(
        "[data-transition-hero], [data-transition-grid-target]"
      );

      if(!target||!image.current){
        setActive(false);
        pending.current=null;
        return;
      }

      const targetRect=target.getBoundingClientRect();
      const detailCopy=document.querySelector<HTMLElement>(
        ".reference-detail-copy, .reference-article-copy"
      );
      const gridCards=Array.from(document.querySelectorAll<HTMLElement>(
        ".reference-news-card, .reference-card"
      ));

      gsap.set(target,{opacity:0});

      if(detailCopy){
        gsap.set(detailCopy.querySelectorAll("[data-reveal]"),{opacity:0,y:18});
      }

      if(gridCards.length){
        gsap.set(gridCards,{opacity:0,y:18});
      }

      const tl=gsap.timeline({
        defaults:{ease:"power4.inOut"},
        onComplete:()=>{
          gsap.to(target,{opacity:1,duration:.2,ease:"power2.out"});

          if(detailCopy){
            gsap.to(detailCopy.querySelectorAll("[data-reveal]"),{
              opacity:1,y:0,duration:.62,stagger:.06,ease:"power4.out"
            });
          }

          if(gridCards.length){
            gsap.to(gridCards,{
              opacity:1,y:0,duration:.58,stagger:.055,
              ease:"power4.out",clearProps:"transform"
            });
          }

          gsap.to(overlay.current,{
            opacity:0,duration:.28,delay:.05,ease:"power2.out",
            onComplete:()=>{
              setActive(false);
              pending.current=null;
            }
          });
        }
      });

      tl.to(image.current,{
        left:targetRect.left,
        top:targetRect.top,
        width:targetRect.width,
        height:targetRect.height,
        scale:1,
        duration:.88
      });
    };

    const timer=window.setTimeout(finish,50);
    return()=>window.clearTimeout(timer);
  },[pathname,active]);

  useEffect(()=>{
    if(!active||!pending.current)return;
    const sync=()=>{
      if(!image.current||!pending.current)return;
      const rect=pending.current.rect;
      gsap.set(image.current,{left:rect.left,top:rect.top,width:rect.width,height:rect.height});
    };
    window.addEventListener("resize",sync);
    return()=>window.removeEventListener("resize",sync);
  },[active]);

  return <div ref={overlay} className="page-transition" aria-hidden="true">
    <img ref={image} src={pending.current?.src??""} alt=""/>
  </div>;
}
