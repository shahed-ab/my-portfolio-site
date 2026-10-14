import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlight?: boolean;
  interactive?: boolean;
}

export function Card({
  className,
  highlight = false,
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border transition-all duration-300",
        highlight
          ? "border-[var(--accent-border)] bg-gradient-to-br from-[var(--accent-tint)] via-[var(--surface)] to-[var(--surface)] shadow-[var(--card-shadow)]"
          : "border-[var(--border)] bg-[var(--surface)] shadow-[var(--card-shadow)]",
        interactive && "hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
