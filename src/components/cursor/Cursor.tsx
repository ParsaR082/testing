"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const update = () => {
      setEnabled(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const label = labelRef.current;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.55,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.55,
      ease: "power3.out",
    });

    const resize = gsap.quickTo(cursor, "width", {
      duration: 0.35,
      ease: "power3.out",
    });

    const resizeHeight = gsap.quickTo(cursor, "height", {
      duration: 0.35,
      ease: "power3.out",
    });

    const setNormal = () => {
      resize(10);
      resizeHeight(10);

      if (label) {
        gsap.to(label, {
          opacity: 0,
          duration: 0.2,
          overwrite: true,
        });
      }
    };

    const setInteractive = () => {
      resize(20);
      resizeHeight(20);

      if (label) {
        gsap.to(label, {
          opacity: 0,
          duration: 0.2,
          overwrite: true,
        });
      }
    };

    const setProject = () => {
      resize(88);
      resizeHeight(88);

      if (label) {
        gsap.to(label, {
          opacity: 1,
          duration: 0.3,
          delay: 0.08,
          overwrite: true,
        });
      }
    };

    const updateFromPointerPosition = () => {
      const { x, y } = mousePosition.current;

      const element = document.elementFromPoint(x, y);

      if (!element) {
        setNormal();
        return;
      }

      const project = element.closest(
        'a[href^="/projects/"]',
      );

      if (project) {
        setProject();
        return;
      }

      const interactive = element.closest("a, button");

      if (interactive) {
        setInteractive();
        return;
      }

      setNormal();
    };

    const move = (event: MouseEvent) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;

      moveX(event.clientX);
      moveY(event.clientY);

      updateFromPointerPosition();
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const project = target.closest(
        'a[href^="/projects/"]',
      );

      if (project) {
        setProject();
        return;
      }

      const interactive = target.closest("a, button");

      if (interactive) {
        setInteractive();
        return;
      }

      setNormal();
    };

    let scrollFrame = 0;

    const handleScroll = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        updateFromPointerPosition();
      });
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    document.addEventListener(
      "mouseover",
      handleMouseOver,
    );

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", move);

      document.removeEventListener(
        "mouseover",
        handleMouseOver,
      );

      window.removeEventListener("scroll", handleScroll);

      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      moveX.tween.kill();
      moveY.tween.kill();
      resize.tween.kill();
      resizeHeight.tween.kill();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] flex h-[10px] w-[10px] items-center justify-center rounded-full bg-background mix-blend-difference"
    >
      <span
        ref={labelRef}
        className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.14em] text-background opacity-0"
      >
        View
      </span>
    </div>
  );
}