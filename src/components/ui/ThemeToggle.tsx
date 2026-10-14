"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center opacity-70",
          size === "sm" && "w-8 h-8 rounded-lg",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-body)] hover:text-[var(--accent)] hover:border-[var(--accent)] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95",
        size === "sm" && "w-8 h-8 rounded-lg",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-[var(--accent)]" />
      ) : (
        <Sun className="w-4 h-4 text-[var(--accent)]" />
      )}
    </button>
  );
}
