import React from "react";
import { cn } from "@/lib/utils";

export interface MonoLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  muted?: boolean;
}

export function MonoLabel({ className, muted = false, children, ...props }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-[10.5px] uppercase tracking-[0.08em] font-semibold select-none",
        muted ? "text-[var(--text-muted)]" : "text-[var(--accent)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
