import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "outline" | "muted";
}

export function Badge({
  className,
  variant = "accent",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium border transition-colors",
        variant === "accent" &&
          "border-[var(--accent-border)] bg-[var(--accent-tint)] text-[var(--accent)]",
        variant === "outline" &&
          "border-[var(--border-strong)] bg-transparent text-[var(--text-body)]",
        variant === "muted" &&
          "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
