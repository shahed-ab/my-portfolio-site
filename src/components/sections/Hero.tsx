"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  MapPin,
  Clock,
  Zap,
  Download,
  Mail,
  CheckCircle2,
  Terminal as TerminalIcon,
  Check,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { TechChip } from "@/components/ui/TechChip";
import { useLiveTime } from "@/hooks/useLiveTime";
import { profileData } from "@/data/profile";

export function Hero() {
  const { identity, availability, stacks } = profileData;
  const liveTime = useLiveTime(identity.timezone);

  // Terminal typing animation state
  const [typedText, setTypedText] = useState("");
  const fullPrompt = identity.terminalPrompt;

  useEffect(() => {
    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = setTimeout(() => setTypedText(fullPrompt), 0);
      return () => clearTimeout(timer);
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullPrompt.length) {
        setTypedText(fullPrompt.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 38);

    return () => clearInterval(interval);
  }, [fullPrompt]);

  return (
    <section id="profile" className="pt-2 sm:pt-4">
      <Card className="overflow-hidden p-0 border-[var(--border)]">
        {/* Banner Area */}
        <div
          className="relative h-44 sm:h-52 w-full border-b border-[var(--border)] overflow-hidden"
          style={{
            backgroundColor: "var(--banner-bg)",
            backgroundImage: "var(--banner-dots)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Subtle gradient vignette to fade dots to bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--surface)] opacity-85" />

          {/* Top row in banner: Terminal line on left, Status pill on right */}
          <div className="relative z-10 flex items-center justify-between gap-3 p-3.5 sm:p-5">
            {/* Banner Terminal Line (Left) */}
            <div className="flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] text-[11px] sm:text-xs font-mono text-[var(--text-body)] shadow-sm max-w-[55%] sm:max-w-[70%] truncate">
              <TerminalIcon className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
              <span className="truncate">
                {typedText}
                <span className="animate-pulse text-[var(--accent)]">_</span>
              </span>
            </div>

            {/* System Status Pill (Right) */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] text-[10px] sm:text-[11px] font-mono font-medium text-[var(--text)] shadow-sm shrink-0">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{availability.systemStatus}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-4 sm:px-8 pb-8 sm:pb-10 pt-0 text-center flex flex-col items-center">
          {/* Avatar (overlapping banner) */}
          <div className="relative -mt-16 sm:-mt-20 mb-5">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-[var(--surface)] border-2 border-[var(--accent)] shadow-xl overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={identity.avatar}
                  alt={identity.name}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Verified Check Badge */}
            <div
              className="absolute bottom-1 right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--accent-solid)] text-zinc-950 flex items-center justify-center border-2 border-[var(--surface)] shadow-md"
              title="Verified Engineer"
            >
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)]">
              {identity.name}
            </h1>
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent)] fill-[var(--accent-tint)]" />
          </div>

          <p className="text-base sm:text-lg text-[var(--text-body)] font-medium max-w-xl mb-4">
            {identity.tagline}
          </p>

          {/* Open to Roles Pill */}
          <div className="mb-5">
            <Pill pulsingDot variant="accent" className="py-1.5 px-4 text-xs sm:text-sm">
              {identity.openToRoles}
            </Pill>
          </div>

          {/* Info Row */}
          <div className="flex items-center justify-center flex-wrap gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-[var(--text-body)] mb-7">
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>
                {identity.role} at{" "}
                <span className="font-semibold text-[var(--text)]">
                  {identity.company}
                </span>
              </span>
            </div>

            <span className="hidden sm:inline text-[var(--text-muted)]">·</span>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>{identity.location}</span>
            </div>

            <span className="hidden sm:inline text-[var(--text-muted)]">·</span>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>{liveTime.mounted ? liveTime.fullDisplay : "1:33 AM GMT+6 (Night)"}</span>
            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-8 w-full sm:w-auto">
            <Button
              variant="filled"
              size="md"
              href="#contact"
              icon={<Zap className="w-4 h-4 fill-current" />}
              className="min-w-[130px]"
            >
              Hire Me
            </Button>

            <Button
              variant="outline"
              size="md"
              href="/resume.pdf"
              download="Abu_Shahed_Resume.pdf"
              target="_blank"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="md"
              href="#contact"
              icon={<Mail className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Tech Stack Chip Groups */}
          <div className="w-full max-w-3xl space-y-3 pt-4 border-t border-[var(--border)]">
            {stacks.groups.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-center flex-wrap gap-2"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] px-2.5 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border)] shrink-0">
                  {group.label}
                </span>
                {group.items.map((tech) => (
                  <TechChip key={tech.name} chip={tech} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
