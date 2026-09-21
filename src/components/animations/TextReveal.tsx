"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Extra clip-safe space as a fraction of the revealed text's font-size.
 * Persian display glyphs (ی, ر, ق, dots) routinely paint outside a tight
 * line-box; the mask must include that ink without loosening leading.
 */
export function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const element = textRef.current;

    if (!root || !element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [delay]);

  return (
    <div ref={rootRef} className="text-reveal">
      <div className="text-reveal__mask">
        <div ref={textRef} className={className}>
          {children}
        </div>
      </div>
    </div>
  );
}
