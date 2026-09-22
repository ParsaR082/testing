"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroEntrance({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = () => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
        },
      );
    };

    window.addEventListener("urumsima:intro-complete", start, { once: true });

    return () =>
      window.removeEventListener("urumsima:intro-complete", start);
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
