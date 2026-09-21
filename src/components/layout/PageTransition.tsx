"use client";

import { useEffect, useState } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none fixed inset-0 z-[100] bg-dark",
          "transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]",
          ready ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div
          className={[
            "transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </>
  );
}