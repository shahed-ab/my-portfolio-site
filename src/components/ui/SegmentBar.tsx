import React from "react";
import { cn } from "@/lib/utils";

export interface SegmentBarProps {
  total?: number;
  activeCount: number;
  className?: string;
}

export function SegmentBar({
  total = 5,
  activeCount,
  className,
}: SegmentBarProps) {
  return (
    <div className={cn("flex items-center gap-1.5 w-full", className)}>
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i < activeCount;
        return (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-300",
              isActive
                ? "bg-[var(--accent)]"
                : "bg-[var(--border-strong)] opacity-40"
            )}
          />
        );
      })}
    </div>
  );
}
