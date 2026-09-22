"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type OpeningSequenceProps = {
  onComplete?: () => void;
};

export function OpeningSequence({
  onComplete,
}: OpeningSequenceProps) {
  const pathname = usePathname();

  const [stage, setStage] = useState<
    "intro" | "reveal" | "complete"
  >("intro");

  useEffect(() => {
    if (pathname !== "/") {
      setStage("complete");
      return;
    }

    const played = sessionStorage.getItem("urumsima-opening-complete");

    if (played) {
      setStage("complete");
      return;
    }

    document.body.style.overflow = "hidden";

    const revealTimer = window.setTimeout(() => {
      setStage("reveal");
    }, 1200);

    const completeTimer = window.setTimeout(() => {
      setStage("complete");
      sessionStorage.setItem("urumsima-opening-complete", "true");
      document.body.style.overflow = "";
      onComplete?.();
    }, 2850);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete, pathname]);

  if (stage === "complete") return null;

  const revealing = stage === "reveal";

  return (
    <div
      dir="rtl"
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[100] overflow-hidden bg-[#111111]",
        "transition-opacity duration-700",
        revealing
          ? "pointer-events-none"
          : "pointer-events-auto",
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <div
          className={[
            "absolute left-1/2 top-1/2 h-[38vh] w-[30vw] min-w-[260px]",
            "min-h-[300px] -translate-x-1/2 -translate-y-1/2",
            "overflow-hidden",
            "transition-[clip-path,width,height,transform]",
            "duration-[1500ms]",
            "ease-[cubic-bezier(0.76,0,0.24,1)]",
            revealing
              ? "h-screen w-screen [clip-path:inset(0%_0%_0%_0%)]"
              : "[clip-path:inset(100%_0%_0%_0%)]",
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-[#252525]">
            <div
              className={[
                "absolute inset-[-8%]",
                "bg-[url('/images/hero.jpg')] bg-cover bg-center",
                "transition-transform duration-[1800ms]",
                "ease-[cubic-bezier(0.76,0,0.24,1)]",
                revealing
                  ? "scale-100"
                  : "scale-[1.08]",
              ].join(" ")}
            />
          </div>
        </div>

        <div
          className={[
            "absolute inset-0 flex items-center justify-center",
            "transition-opacity duration-500",
            revealing
              ? "opacity-0"
              : "opacity-100",
          ].join(" ")}
        >
          <div className="relative flex flex-col items-center text-background">
            <span
              dir="ltr"
              className={[
                "text-[clamp(2rem,4vw,4.5rem)] font-light uppercase leading-none",
                "tracking-[-0.04em]",
                "transition-transform duration-1000",
                "ease-[cubic-bezier(0.76,0,0.24,1)]",
                revealing
                  ? "-translate-y-12"
                  : "translate-y-0",
              ].join(" ")}
            >
              UrumSima
            </span>

            <span
              dir="rtl"
              className={[
                "mt-3 text-[9px] font-medium leading-none tracking-[0.04em]",
                "text-background/55",
                "transition-transform duration-1000",
                "ease-[cubic-bezier(0.76,0,0.24,1)]",
                revealing
                  ? "translate-y-12"
                  : "translate-y-0",
              ].join(" ")}
            >
              استودیوی معماری
            </span>
          </div>
        </div>

        <div
          dir="ltr"
          className={[
            "absolute left-6 right-6 top-8 flex justify-between",
            "text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-background/45",
            "transition-opacity duration-500",
            revealing
              ? "opacity-0"
              : "opacity-100",
          ].join(" ")}
        >
          <span>Urumia / Iran</span>

          <span>2026</span>
        </div>
      </div>
    </div>
  );
}