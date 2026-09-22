"use client";

import Link from "next/link";
import { useEffect } from "react";

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { label: "خانه", href: "/" },
  { label: "پروژه‌ها", href: "/projects" },
  { label: "استودیو", href: "/studio" },
];

export function Menu({ open, onClose }: MenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      dir="rtl"
      className={[
        "fixed inset-0 z-[65] overflow-hidden",
        "bg-[#111111]/90 text-background",
        "backdrop-blur-md",
        "transition-[clip-path] duration-[900ms]",
        "ease-[cubic-bezier(0.77,0,0.175,1)]",
      ].join(" ")}
      style={{
        clipPath: open
          ? "circle(150% at 56px 40px)"
          : "circle(0% at 56px 40px)",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {/* Noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="بستن منو"
        aria-expanded={open}
        dir="rtl"
        className={[
          "group absolute left-6 top-0 z-30",
          "flex h-20 items-center gap-3",
          "text-[10px] font-medium leading-none",
          "tracking-[0.04em]",
          "text-background",
          "transition-opacity duration-500",
          "md:left-10 md:text-[11px]",
        ].join(" ")}
      >
        <span className="transition-opacity duration-300 group-hover:opacity-60">
          بستن
        </span>

        <span
          aria-hidden="true"
          className={[
            "relative flex h-5 w-5 items-center justify-center",
            "transition-transform duration-500",
            "group-hover:rotate-90",
          ].join(" ")}
        >
          <span className="absolute h-px w-full bg-current" />
          <span className="absolute h-px w-full rotate-90 bg-current" />
        </span>
      </button>

      <div
        className="relative z-10 flex h-full w-full items-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
        style={{
          paddingTop:
            "max(7rem, calc(env(safe-area-inset-top) + 5rem))",
          paddingBottom:
            "max(4rem, calc(env(safe-area-inset-bottom) + 2rem))",
        }}
      >
        <nav
          className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-between"
          aria-label="ناوبری اصلی"
        >
          <ul className="space-y-1 md:space-y-0">
            {links.map((link, index) => (
              <li
                key={link.href}
                className={[
                  "menu-item-mask transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
                  open
                    ? "translate-y-0"
                    : "translate-y-full",
                ].join(" ")}
                style={{
                  transitionDelay: open
                    ? `${index * 70 + 120}ms`
                    : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  dir="rtl"
                  className={[
                    "group relative z-10",
                    "flex min-h-[52px]",
                    "cursor-pointer items-center gap-4",
                    "py-3",
                    "md:inline-flex md:min-h-0",
                    "md:items-baseline md:py-2",
                  ].join(" ")}
                >
                  <span
                    dir="ltr"
                    className={[
                      "w-5 shrink-0",
                      "text-[8px] font-normal leading-none",
                      "tracking-[0.16em]",
                      "text-background/35",
                      "md:w-auto md:text-[10px]",
                      "md:tracking-[0.18em]",
                    ].join(" ")}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={[
                      "text-[clamp(2rem,8vw,5.5rem)]",
                      "font-light leading-[0.9]",
                      "tracking-[-0.055em]",
                      "transition-opacity duration-300",
                      "group-hover:opacity-50",
                      "md:leading-[0.92]",
                      "md:tracking-[-0.06em]",
                    ].join(" ")}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            dir="rtl"
            className={[
              "flex flex-col gap-3",
              "text-[8px] font-medium leading-[1.5]",
              "tracking-[0.04em]",
              "text-background/45",
              "transition-all duration-700",
              "md:text-[9px]",
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay: open ? "420ms" : "0ms",
            }}
          >
            <div className="flex flex-col gap-1">
              <span>استودیوی معماری UrumSima</span>
              <span>ارومیه، ایران</span>
            </div>

            <span className="mt-4 text-[8px] leading-[1.6] tracking-[0.04em] text-background/25 md:hidden">
              معماری / فضا / تجربه
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}