import React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  dotColor?: string;
}

export function Chip({
  className,
  active = false,
  dotColor,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 cursor-default select-none",
        active
          ? "border-[var(--accent)] bg-[var(--accent-tint)] text-[var(--accent)]"
          : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-body)] hover:border-[var(--accent)] hover:text-[var(--text)]",
        className
      )}
      {...props}
    >
      {dotColor && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {children}
    </span>
  );
}
