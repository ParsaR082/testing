"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerRouteRefresh() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let frameOne = 0;
    let frameTwo = 0;

    let timeoutShort: ReturnType<typeof setTimeout> | undefined;
    let timeoutLong: ReturnType<typeof setTimeout> | undefined;

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        refresh();

        timeoutShort = setTimeout(refresh, 100);
        timeoutLong = setTimeout(refresh, 500);
      });
    });

    document.fonts?.ready.then(refresh);

    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(frameOne);
      cancelAnimationFrame(frameTwo);

      if (timeoutShort) {
        clearTimeout(timeoutShort);
      }

      if (timeoutLong) {
        clearTimeout(timeoutLong);
      }

      window.removeEventListener("load", refresh);
    };
  }, [pathname]);

  return null;
}