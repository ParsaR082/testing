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
    if (sessionStorage.getItem("architecture-intro-seen") === "1") {
      setDone(true);
      window.dispatchEvent(new Event("architecture:intro-complete"));
      return;
    }

    document.documentElement.classList.add("intro-lock");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          sessionStorage.setItem("architecture-intro-seen", "1");
          document.documentElement.classList.remove("intro-lock");
          window.dispatchEvent(new Event("architecture:intro-complete"));
          setDone(true);
        },
      });

      tl.set(root.current, { autoAlpha: 1 })
        .fromTo(square.current, { scale: 0.55, rotate: -7 }, { scale: 1, rotate: 0, duration: 0.82, ease: "power4.out" })
        .fromTo(mark.current, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.62 }, "-=.32")
        .fromTo(label.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.48 }, "-=.25")
        .to({}, { duration: 0.72 })
        .to([mark.current, label.current], { opacity: 0, y: -8, duration: 0.28, ease: "power2.in" })
        .to(square.current, {\n          scale: Math.max(window.innerWidth, window.innerHeight) / 76 * 1.6,\n          duration: 1.18,\n          ease: "power4.in",\n        }, "-=.08")
        .to(root.current, { autoAlpha: 0, duration: 0.36, ease: "power2.out" }, "-=.18");
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
