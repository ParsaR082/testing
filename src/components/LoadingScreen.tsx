"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#111] text-[#f5f4f0]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.05, duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          className="relative aspect-[4/5] w-[min(42vw,260px)] overflow-hidden bg-[#262522] sm:w-[220px]"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#2d2c28_0%,#111_46%,#34322d_100%)]" />
          <div className="absolute inset-[18%_16%_22%_20%] border border-white/15" />
          <div className="absolute left-[30%] top-[20%] h-[62%] w-px bg-white/25" />
          <div className="absolute bottom-[27%] left-[18%] h-px w-[62%] bg-white/20" />
        </motion.div>
      </div>

      <div className="absolute inset-x-6 bottom-8 flex items-end justify-between text-[10px] uppercase tracking-[0.16em] text-white/55 md:inset-x-8">
        <span>استودیو معماری</span>
        <span>۱۴۰۵</span>
      </div>
    </motion.div>
  );
}
