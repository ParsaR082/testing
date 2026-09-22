"use client";

import { useEffect, useState } from "react";

export function OpeningSequence({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<
    "black" | "image" | "expand" | "done"
  >("black");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const a = setTimeout(() => setPhase("image"), 900);
    const b = setTimeout(() => setPhase("expand"), 1700);
    const c = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("urumsima:intro-complete"));
      onComplete?.();
    }, 3900);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0b0b0b] overflow-hidden">
      <div
        className={[
          "absolute inset-0 flex items-center justify-center",
          "transition-opacity duration-700",
          phase === "expand" ? "opacity-100" : "opacity-100",
        ].join(" ")}
      >
        <div
          className={[
            "absolute overflow-hidden",
            "transition-all duration-[2200ms]",
            "ease-[cubic-bezier(0.76,0,0.24,1)]",
            phase === "black"
              ? "h-0 w-0 opacity-0"
              : phase === "image"
                ? "h-[34vh] w-[28vw] min-h-[280px] min-w-[260px] opacity-100"
                : "h-screen w-screen opacity-100 [clip-path:inset(0)]",
          ].join(" ")}
        >
          <div
            className={[
              "absolute inset-[-10%] bg-[url('/images/hero.jpg')] bg-cover bg-center",
              "transition-transform duration-[2600ms]",
              "ease-[cubic-bezier(0.76,0,0.24,1)]",
              phase === "expand"
                ? "scale-100"
                : "scale-[1.18]",
            ].join(" ")}
          />
        </div>

        <div
          className={[
            "relative z-10 text-center text-white",
            "transition-all duration-1000",
            phase === "expand"
              ? "-translate-y-20 opacity-0"
              : "translate-y-0 opacity-100",
          ].join(" ")}
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.04em]">
            UrumSima
          </h1>
          <p className="mt-4 text-[10px] tracking-[0.3em]">
            استودیوی معماری
          </p>
        </div>
      </div>
    </div>
  );
}
