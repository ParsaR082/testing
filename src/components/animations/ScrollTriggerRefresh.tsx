"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerRefresh() {
  useLayoutEffect(() => {
    let frameOne = 0;
    let frameTwo = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    // Wait until the current layout has been painted.
    frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        refresh();

        // Give images and other layout-affecting elements
        // one additional moment to settle.
        timeoutId = setTimeout(refresh, 100);
      });
    });

    // Refresh again when all document resources are loaded.
    window.addEventListener("load", refresh);

    // Local fonts can also affect element dimensions.
    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(frameOne);
      cancelAnimationFrame(frameTwo);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
