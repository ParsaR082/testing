"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

type TransitionState = {
  src: string;
  rect: DOMRect;
  href: string;
};

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const previousPath = useRef(pathname);
  const pending = useRef<TransitionState | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[data-project-transition]");
      if (!link || link.target === "_blank") return;

      const cardImage = link.querySelector<HTMLElement>("[data-project-image]");
      const src = cardImage?.getAttribute("data-image-src");
      if (!cardImage || !src) return;

      event.preventDefault();

      pending.current = {
        src,
        rect: cardImage.getBoundingClientRect(),
        href: link.href,
      };

      setActive(true);

      requestAnimationFrame(() => {
        if (!overlay.current || !image.current || !pending.current) return;

        const { rect } = pending.current;

        gsap.set(overlay.current, {
          display: "block",
          opacity: 1,
          clipPath: "inset(0)",
        });

        gsap.set(image.current, {
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          scale: 1,
          borderRadius: 0,
        });

        gsap.to(image.current, {
          duration: 0.72,
          ease: "power4.inOut",
          scale: 1.02,
          onComplete: () => {
            router.push(new URL(pending.current!.href).pathname);
          },
        });
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    if (!active || !image.current || !pending.current || previousPath.current === pathname) return;

    previousPath.current = pathname;

    const finish = () => {
      const target = document.querySelector<HTMLElement>("[data-transition-hero]");
      if (!target || !image.current) {
        setActive(false);
        pending.current = null;
        return;
      }

      const targetRect = target.getBoundingClientRect();

      gsap.set(target, { opacity: 0 });

      gsap.to(image.current, {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height,
        scale: 1,
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.to(target, {
            opacity: 1,
            duration: 0.22,
            ease: "power2.out",
          });
          gsap.to(overlay.current, {
            opacity: 0,
            duration: 0.32,
            delay: 0.04,
            ease: "power2.out",
            onComplete: () => {
              setActive(false);
              pending.current = null;
            },
          });
        },
      });
    };

    const timer = window.setTimeout(finish, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, active]);

  useEffect(() => {
    if (!active || !pending.current) return;
    const sync = () => {
      if (!image.current) return;
      const rect = pending.current.rect;
      gsap.set(image.current, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    };
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [active]);

  return (
    <div ref={overlay} className="page-transition" aria-hidden="true">
      <img ref={image} src={pending.current?.src ?? ""} alt="" />
    </div>
  );
}
