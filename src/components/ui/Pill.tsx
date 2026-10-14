import React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  pulsingDot?: boolean;
  variant?: "accent" | "neutral";
}

export function Pill({
  className,
  pulsingDot = false,
  variant = "accent",
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border select-none transition-colors",
        variant === "accent"
          ? "border-[var(--accent-border)] bg-[var(--accent-tint)] text-[var(--accent)]"
          : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-body)]",
        className
      )}
      {...props}
    >
      {pulsingDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
        </span>
      )}
      {children}
    </span>
  );
}
