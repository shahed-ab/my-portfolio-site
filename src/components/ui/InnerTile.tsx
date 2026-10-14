import React from "react";
import { cn } from "@/lib/utils";

export interface InnerTileProps extends React.HTMLAttributes<HTMLDivElement> {
  highlight?: boolean;
}

export function InnerTile({ className, highlight = false, children, ...props }: InnerTileProps) {
  return (
    <div
      className={cn(
        "rounded-[14px] border transition-all duration-200",
        highlight
          ? "border-[var(--accent-border)] bg-[var(--accent-tint)]"
          : "border-[var(--border)] bg-[var(--surface-2)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
