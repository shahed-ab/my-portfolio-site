"use client";

import React from "react";
import Image from "next/image";
import { Pill } from "@/components/ui/Pill";
import { profileData } from "@/data/profile";

export function TopBar() {
  const { identity, availability } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg)]/85 border-b border-[var(--border)] transition-colors"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Logo Tile + Name */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer group text-left"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] font-mono font-bold text-sm group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
            Hi I&apos;m Shahed
          </span>
        </button>

        {/* Right: Availability pill + avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Pill pulsingDot variant="accent" className="text-[11px] sm:text-xs">
            <span className="hidden xs:inline">Available for</span>{" "}
            {availability.quarter} projects
          </Pill>

          <div className="hidden sm:block h-4 w-px bg-[var(--border)]" />

          <button
            onClick={scrollToTop}
            className="hidden sm:flex items-center gap-2 cursor-pointer group"
            aria-label="Profile summary"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[var(--accent-border)]">
              <Image
                src={identity.avatar}
                alt={identity.name}
                fill
                sizes="28px"
                className="object-cover object-top"
              />
            </div>
            <span className="text-xs font-medium text-[var(--text-body)] group-hover:text-[var(--text)] transition-colors">
              {identity.shortName || identity.name}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
