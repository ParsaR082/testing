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
      gsap.set(element, {
        yPercent: 110,
        opacity: 0,
      });

      const animateIn = (fromY: number) => {
        gsap.killTweensOf(element);

        gsap.fromTo(
          element,
          {
            yPercent: fromY,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.25,
            delay,
            ease: "power4.out",
            overwrite: true,
          },
        );
      };

      const animateOut = (toY: number) => {
        gsap.killTweensOf(element);

        gsap.to(element, {
          yPercent: toY,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
          overwrite: true,
        });
      };

      ScrollTrigger.create({
        trigger: root,

        // ورود کمی قبل از رسیدن المان به مرکز صفحه
        start: "top 90%",

        // خروج در حالی که هنوز 25٪ از viewport باقی مانده
        end: "bottom 25%",

        onEnter: () => {
          animateIn(110);
        },

        onLeave: () => {
          animateOut(-110);
        },

        onEnterBack: () => {
          animateIn(-110);
        },

        onLeaveBack: () => {
          animateOut(110);
        },
      });
    }, root);

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