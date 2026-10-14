import React from "react";
import { cn } from "@/lib/utils";

export interface IconTileProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "surface" | "accent" | "circle";
}

export function IconTile({
  className,
  size = "md",
  variant = "surface",
  children,
  ...props
}: IconTileProps) {
  const sizeClasses = {
    sm: "w-8 h-8 rounded-lg text-sm",
    md: "w-10 h-10 rounded-xl text-base",
    lg: "w-12 h-12 rounded-2xl text-lg",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 border transition-colors",
        sizeClasses[size],
        variant === "circle" && "rounded-full",
        variant === "accent"
          ? "border-[var(--accent-border)] bg-[var(--accent-tint)] text-[var(--accent)]"
          : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-body)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
