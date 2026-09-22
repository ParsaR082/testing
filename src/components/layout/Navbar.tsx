"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu } from "./Menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        dir="rtl"
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-500",
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
          {/* Brand */}

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

          {/* Desktop navigation */}

          <nav
            aria-label="ناوبری اصلی"
            dir="rtl"
            className="hidden items-center gap-7 md:flex"
          >
            <Link
              href="/projects"
              className={[
                "relative",
                "text-[9px] font-medium leading-none",
                "tracking-[0.04em]",
                "text-foreground/70",
                "transition-colors duration-300",
                "hover:text-foreground",
                "md:text-[10px]",
              ].join(" ")}
            >
              پروژه‌ها
            </Link>

            <Link
              href="/studio"
              className={[
                "relative",
                "text-[9px] font-medium leading-none",
                "tracking-[0.04em]",
                "text-foreground/70",
                "transition-colors duration-300",
                "hover:text-foreground",
                "md:text-[10px]",
              ].join(" ")}
            >
              استودیو
            </Link>
          </nav>

          {/* Menu button */}

          <button
            type="button"
            aria-label={
              menuOpen ? "بستن منو" : "باز کردن منو"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            dir="rtl"
            className={[
              "group relative z-[70]",
              "flex items-center gap-3",
              "text-[10px] font-medium leading-none",
              "tracking-[0.04em]",
              "transition-opacity duration-300",
              "md:text-[11px]",
            ].join(" ")}
          >
            <span>
              {menuOpen ? "بستن" : "منو"}
            </span>

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