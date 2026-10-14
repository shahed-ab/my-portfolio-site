"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  valueDisplay?: string;
  className?: string;
}

export function ProgressBar({
  value,
  label,
  valueDisplay,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || valueDisplay) && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--text-body)] font-medium">{label}</span>
          <span className="text-[var(--accent)] font-semibold">
            {valueDisplay ?? `${clamped}%`}
          </span>
        </div>
      )}
      <div className="h-1.5 w-full rounded-full bg-[var(--surface-2)] overflow-hidden border border-[var(--border)]">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all duration-1000 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
