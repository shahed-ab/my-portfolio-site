import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  badge?: React.ReactNode;
}

export function SectionHeading({
  className,
  icon,
  title,
  badge,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-3 mb-6", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--accent-border)] bg-[var(--accent-tint)] text-[var(--accent)] shrink-0">
            {icon}
          </div>
        )}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">
          {title}
        </h2>
      </div>
      {badge}
      {children}
    </div>
  );
}
