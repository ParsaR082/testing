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
      const showFromBottom = () => {
        gsap.killTweensOf(element);

        gsap.fromTo(
          element,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            ease: "power4.out",
            overwrite: true,
          },
        );
      };

      const showFromTop = () => {
        gsap.killTweensOf(element);

        gsap.fromTo(
          element,
          {
            yPercent: -110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            ease: "power4.out",
            overwrite: true,
          },
        );
      };

      const hideToTop = () => {
        gsap.killTweensOf(element);

        gsap.to(element, {
          yPercent: -110,
          opacity: 0,
          duration: 0.9,
          ease: "power3.inOut",
          overwrite: true,
        });
      };

      const hideToBottom = () => {
        gsap.killTweensOf(element);

        gsap.to(element, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "power3.inOut",
          overwrite: true,
        });
      };

      // Initial state.
      // ScrollTrigger will animate the element into view.
      gsap.set(element, {
        yPercent: 110,
        opacity: 0,
      });

      ScrollTrigger.create({
        trigger: root,

        start: "top 92%",
        end: "bottom 20%",

        onEnter: showFromBottom,
        onLeave: hideToTop,

        onEnterBack: showFromTop,
        onLeaveBack: hideToBottom,
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
