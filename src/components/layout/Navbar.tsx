"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { Menu } from "./Menu";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);

    const hasVisitedSite = sessionStorage.getItem(
      "urumsima-site-visited",
    );

    if (
      hasVisitedSite ||
      document.documentElement.dataset.siteIntro === "complete"
    ) {
      start();
    } else {
      window.addEventListener("urumsima:intro-complete", start, {
        once: true,
      });
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("urumsima:intro-complete", start);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;

    if (!ready || !header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        {
          y: -24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.05,
          ease: "power3.out",
        },
      );
    }, header);

    return () => ctx.revert();
  }, [ready]);

  return (
    <>
      <header
        ref={headerRef}
        dir="rtl"
        className={[
          "fixed inset-x-0 top-0 z-50",
          ready ? "pointer-events-auto" : "pointer-events-none opacity-0",
          "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500",
          scrolled || menuOpen
            ? [
                "border-b border-black/[0.08]",
                "bg-background/45",
                "backdrop-blur-xl",
                "shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
              ].join(" ")
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            aria-label="صفحه اصلی UrumSima"
            dir="ltr"
            className={[
              "relative z-[70]",
              "text-[12px] font-medium uppercase leading-none",
              "tracking-[0.16em]",
              "transition-opacity duration-300",
              "hover:opacity-60",
              "md:text-[13px] md:tracking-[0.18em]",
            ].join(" ")}
          >
            UrumSima
          </Link>

          <nav
            aria-label="ناوبری اصلی"
            dir="rtl"
            className="hidden items-center gap-7 md:flex"
          >
            <Link
              href="/projects"
              className="relative text-[9px] font-medium leading-[1.5] tracking-0 text-foreground/70 transition-colors duration-300 hover:text-foreground md:text-[10px]"
            >
              پروژه‌ها
            </Link>

            <Link
              href="/studio"
              className="relative text-[9px] font-medium leading-[1.5] tracking-0 text-foreground/70 transition-colors duration-300 hover:text-foreground md:text-[10px]"
            >
              استودیو
            </Link>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            dir="rtl"
            className={[
              "group relative z-[70]",
              "flex items-center gap-3",
              "text-[10px] font-medium leading-[1.5] tracking-0",
              "transition-opacity duration-300",
              "md:text-[11px]",
            ].join(" ")}
          >
            <span>{menuOpen ? "بستن" : "منو"}</span>

            <span
              aria-hidden="true"
              className="relative flex h-4 w-5 flex-col justify-center gap-[5px]"
            >
              <span
                className={[
                  "block h-px w-full origin-center",
                  "bg-current transition-transform duration-500",
                  menuOpen
                    ? "translate-y-[3px] rotate-45"
                    : "",
                ].join(" ")}
              />

              <span
                className={[
                  "block h-px w-full origin-center",
                  "bg-current transition-transform duration-500",
                  menuOpen
                    ? "-translate-y-[3px] -rotate-45"
                    : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </header>

      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
