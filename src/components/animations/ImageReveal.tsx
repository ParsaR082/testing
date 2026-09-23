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
      gsap.set(container, {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      const animateIn = (fromClip: string) => {
        gsap.killTweensOf(container);

        gsap.fromTo(
          container,
          {
            clipPath: fromClip,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            delay,
            ease: "power4.inOut",
            overwrite: true,
          },
        );
      };

      const animateOut = (toClip: string) => {
        gsap.killTweensOf(container);

        gsap.to(container, {
          clipPath: toClip,
          duration: 1.1,
          ease: "power4.inOut",
          overwrite: true,
        });
      };

      ScrollTrigger.create({
        trigger: container,

        start: "top 88%",

        // خروج زمانی شروع می‌شود که هنوز بخشی از تصویر دیده می‌شود
        end: "bottom 25%",

        onEnter: () => {
          animateIn("inset(100% 0% 0% 0%)");
        },

        onLeave: () => {
          animateOut("inset(0% 0% 100% 0%)");
        },

        onEnterBack: () => {
          animateIn("inset(0% 0% 100% 0%)");
        },

        onLeaveBack: () => {
          animateOut("inset(100% 0% 0% 0%)");
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
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