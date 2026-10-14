"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cloud, Code, Network, Shield, Activity } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconMap = {
  cloud: Cloud,
  code: Code,
  network: Network,
  shield: Shield,
  activity: Activity,
};

function CountUpNumber({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = setTimeout(() => setDisplayValue(target), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1400; // ms
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = easeOut * target;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { stats } = profileData;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
      {stats.map((stat, idx) => {
        const IconComponent = iconMap[stat.icon] || Activity;
        const decimals = stat.numValue && stat.numValue % 1 !== 0 ? 1 : 0;

        return (
          <Card
            key={idx}
            className="p-5 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-200"
          >
            {/* Top row: Mono Label + Icon */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <MonoLabel className="text-[10px] tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </MonoLabel>
              <IconComponent className="w-4 h-4 text-[var(--accent)] shrink-0" />
            </div>

            {/* Middle: Big Stat Number */}
            <div
              className={cn(
                "text-2xl sm:text-3xl font-extrabold tracking-tight mb-2",
                stat.isAccent
                  ? "text-[var(--accent)]"
                  : "text-[var(--text)]"
              )}
            >
              {stat.numValue !== undefined ? (
                <CountUpNumber
                  target={stat.numValue}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={decimals}
                />
              ) : (
                stat.value
              )}
              {stat.label === "EXPERIENCE" && (
                <span className="text-sm font-normal text-[var(--text-muted)] ml-1.5">
                  Years
                </span>
              )}
            </div>

            {/* Bottom: Caption */}
            <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed">
              {stat.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
