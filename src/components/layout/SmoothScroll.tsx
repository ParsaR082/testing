"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import {
  ReactLenis,
  type LenisRef,
} from "lenis/react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({
  children,
}: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}