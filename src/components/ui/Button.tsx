import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = "outline",
  size = "md",
  href,
  target,
  rel,
  download,
  icon,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantClasses = {
    filled:
      "bg-[var(--accent-solid)] text-zinc-950 font-semibold shadow-sm hover:brightness-105 hover:shadow-md",
    outline:
      "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--surface)]",
    ghost:
      "border border-transparent bg-transparent text-[var(--text-body)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedClasses}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
