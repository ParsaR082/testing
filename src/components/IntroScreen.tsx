"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function IntroScreen() {
  const root = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const square = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLParagraphElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const announceComplete = () => {
      window.dispatchEvent(new Event("architecture:intro-complete"));
    };

    const finishImmediately = () => {
      sessionStorage.setItem("architecture-intro-seen", "1");
      document.documentElement.classList.remove("intro-lock");
      setDone(true);
      requestAnimationFrame(announceComplete);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishImmediately();
      return;
    }

    if (sessionStorage.getItem("architecture-intro-seen") === "1") {
      setDone(true);
      requestAnimationFrame(announceComplete);
      return;
    }

    document.documentElement.classList.add("intro-lock");

    const ctx = gsap.context(() => {
      const viewportCoverScale =
        Math.hypot(window.innerWidth, window.innerHeight) / 76 * 1.35;

      const timeline = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          sessionStorage.setItem("architecture-intro-seen", "1");
          document.documentElement.classList.remove("intro-lock");
          setDone(true);
          announceComplete();
        },
      });

      timeline
        .set(root.current, { autoAlpha: 1 })
        .fromTo(
          square.current,
          { scale: 0.52, rotate: -9, borderRadius: "2px" },
          { scale: 1, rotate: 0, duration: 0.9, ease: "power4.out" }
        )
        .fromTo(
          mark.current,
          { y: 18, opacity: 0, rotate: -8 },
          { y: 0, opacity: 1, rotate: 0, duration: 0.58, ease: "power3.out" },
          "-=0.34"
        )
        .fromTo(
          label.current,
          { y: 12, opacity: 0, letterSpacing: "0.22em" },
          { y: 0, opacity: 1, letterSpacing: "0.08em", duration: 0.5 },
          "-=0.2"
        )
        .to({}, { duration: 0.7 })
        .to(
          [mark.current, label.current],
          { opacity: 0, y: -10, duration: 0.28, ease: "power2.in" }
        )
        .to(
          square.current,
          {
            scale: viewportCoverScale,
            duration: 1.28,
            ease: "power4.in",
          },
          "-=0.06"
        )
        .to(
          root.current,
          { autoAlpha: 0, duration: 0.38, ease: "power2.out" },
          "-=0.2"
        );
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  if (done) return null;

  return (
    <div ref={root} className="intro-screen" aria-hidden="true">
      <div ref={square} className="intro-square" />
      <div ref={mark} className="intro-mark">△</div>
      <p ref={label} className="intro-label">استودیو معماری</p>
    </div>
  );
}
