"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  totalBars?: number;
  onComplete?: () => void;
}

export function Preloader({ totalBars = 38, onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let current = 0;
    let timer: NodeJS.Timeout;

    const step = () => {
      // Natural, realistic progression with variable speeds
      let increment = 0;
      let delay = 35;

      if (current < 25) {
        increment = Math.floor(Math.random() * 3) + 2; // +2% to +4%
        delay = 30 + Math.random() * 25;
      } else if (current < 60) {
        increment = Math.floor(Math.random() * 4) + 2; // +2% to +5%
        delay = 35 + Math.random() * 30;
      } else if (current < 85) {
        increment = Math.floor(Math.random() * 4) + 1; // +1% to +4%
        delay = 40 + Math.random() * 30;
      } else if (current < 99) {
        increment = Math.floor(Math.random() * 3) + 1; // +1% to +3%
        delay = 45 + Math.random() * 35;
      } else {
        increment = 100 - current;
      }

      current = Math.min(100, current + increment);
      setProgress(current);

      if (current < 100) {
        timer = setTimeout(step, delay);
      } else {
        // Hold briefly at 100% so user sees completion
        timer = setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = originalOverflow;
          onComplete?.();
          // Remove from DOM after exit animation finishes
          setTimeout(() => setShouldRender(false), 600);
        }, 320);
      }
    };

    // Kick off animation after brief initial frame
    timer = setTimeout(step, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  // Handle escape key or click to skip
  const handleSkip = () => {
    setProgress(100);
    setIsComplete(true);
    document.body.style.overflow = "";
    onComplete?.();
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  const activeBarsCount = Math.floor((progress / 100) * totalBars);
  const remainingPercent = Math.max(0, 100 - progress);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader-backdrop"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black select-none cursor-default"
          onClick={handleSkip}
          role="dialog"
          aria-label="Loading site"
        >
          {/* Central Modal Card */}
          <motion.div
            key="preloader-card"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.95,
              opacity: 0,
              filter: "blur(6px)",
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-[90%] max-w-[340px] sm:max-w-[360px] rounded-2xl bg-[#0c0d10] border border-[#34d399]/25 px-6 py-5 shadow-[0_0_50px_rgba(0,0,0,0.95),0_0_30px_rgba(52,211,153,0.06)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: LOADING with green status dot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#34d399] uppercase">
                  LOADING
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                SYS.INIT
              </span>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-[#1e2422] mt-2.5 mb-5" />

            {/* Metrics Row: Current % & Remaining % */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-[34px] sm:text-[38px] font-normal text-[#34d399] tracking-tight leading-none select-none">
                {progress}%
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#e4e4e7] tracking-wider uppercase leading-none select-none">
                JUST {remainingPercent}% REMAINING
              </span>
            </div>

            {/* Segmented Vertical Bar Progress Ticker in Website Green */}
            <div
              className="flex items-center gap-[2.5px] sm:gap-[3px] w-full h-[24px] sm:h-[26px]"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {Array.from({ length: totalBars }).map((_, index) => {
                const isActive = progress >= 100 || index < activeBarsCount;
                const isLeading = index === activeBarsCount - 1;
                const isFirstTransition =
                  index === activeBarsCount && progress < 100;
                const isSecondTransition =
                  index === activeBarsCount + 1 && progress < 100;

                const bg = isActive
                  ? "#34d399"
                  : isFirstTransition
                  ? "rgba(52, 211, 153, 0.45)"
                  : isSecondTransition
                  ? "rgba(52, 211, 153, 0.18)"
                  : "#16201b";

                return (
                  <div
                    key={index}
                    className="flex-1 h-full rounded-[1.5px] transition-colors duration-75"
                    style={{
                      backgroundColor: bg,
                      boxShadow: isLeading
                        ? "0 0 10px rgba(52, 211, 153, 0.85)"
                        : isActive
                        ? "0 0 4px rgba(52, 211, 153, 0.35)"
                        : "none",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
