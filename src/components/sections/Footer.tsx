"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const { identity, contact } = profileData;
  const [currentYear, setCurrentYear] = React.useState("2026");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(String(new Date().getFullYear()));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const commitHash =
    process.env.NEXT_PUBLIC_COMMIT ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;

  return (
    <footer className="pt-10 pb-6 border-t border-[var(--border)] mt-12 transition-colors">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
        {/* Left: Copyright tagline */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>
            {identity.name} &copy; {currentYear} &middot; {contact.footerTagline}
          </span>
        </div>

        {/* Right: Back to Top & Git Commit Hash */}
        <div className="flex items-center gap-5">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--text-body)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

          {commitHash && (
            <span className="text-[10.5px] text-[var(--text-muted)]">
              commit: {commitHash.slice(0, 7)}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
