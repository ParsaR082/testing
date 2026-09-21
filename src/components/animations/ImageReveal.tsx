"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          delay,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}