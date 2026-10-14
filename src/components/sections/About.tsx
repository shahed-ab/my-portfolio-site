"use client";

import React from "react";
import {
  User,
  Globe2,
  Users2,
  Languages,
  Code2,
  Sun,
  Moon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { InnerTile } from "@/components/ui/InnerTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Pill } from "@/components/ui/Pill";
import { Chip } from "@/components/ui/Chip";
import { SegmentBar } from "@/components/ui/SegmentBar";
import { useLiveTime } from "@/hooks/useLiveTime";
import { profileData } from "@/data/profile";

export function About() {
  const { about, location, collaboration, languages } = profileData;
  const liveTime = useLiveTime();

  return (
    <section id="about" className="pt-2">
      <SectionHeading
        icon={<User className="w-4 h-4" />}
        title="About & Work Model"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left Large Card (approx 62% on desktop) */}
        <Card className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Top row: Mono Label + Spec */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-[var(--border)]">
              <MonoLabel>ENGINEERING PHILOSOPHY</MonoLabel>
              <MonoLabel muted>{about.philosophySpec}</MonoLabel>
            </div>

            {/* Lead paragraph */}
            <p className="text-base sm:text-lg font-medium text-[var(--text)] leading-relaxed mb-5">
              {about.lead}
            </p>

            {/* Secondary paragraph */}
            <p className="text-sm text-[var(--text-body)] leading-relaxed mb-8">
              {about.body}
            </p>
          </div>

          {/* Code snippet tile at bottom */}
          <InnerTile className="p-4 sm:p-5 flex items-start gap-3 border-[var(--border)] bg-[var(--surface-2)]">
            <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto select-all">
              <span className="text-[var(--text-muted)]">const </span>
              <span className="text-[var(--text)]">mission </span>
              <span className="text-[var(--text-muted)]">= </span>
              <span className="text-[var(--accent)]">&quot;{about.mission}&quot;</span>
              <span className="text-[var(--text-muted)]">;</span>
            </div>
          </InnerTile>
        </Card>

        {/* Right Stacked Column (approx 38% on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          {/* Card 1: Based in */}
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <MonoLabel className="text-[10px] text-[var(--text-muted)] mb-1 block">
                    BASED IN
                  </MonoLabel>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">
                    {location.city}, {location.country}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {location.timeZoneLabel}
                  </p>
                </div>
              </div>

              {/* Dynamic Sun/Moon Icon based on Dhaka Hour */}
              <div
                className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center text-[var(--accent)] shrink-0"
                title={liveTime.isDaytime ? "Daytime in Dhaka" : "Nighttime in Dhaka"}
              >
                {liveTime.isDaytime ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </div>
            </div>
          </Card>

          {/* Card 2: Collaboration Style */}
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-[var(--accent)]" />
                <MonoLabel>COLLABORATION STYLE</MonoLabel>
              </div>
              <Pill variant="accent" className="text-[11px] py-0.5 px-2.5">
                {collaboration.style}
              </Pill>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-4">
              {collaboration.description}
            </p>

            <div className="flex items-center flex-wrap gap-2">
              {collaboration.chips.map((chip, idx) => (
                <Chip key={idx} className="text-[11px] py-0.5 px-2.5">
                  {chip}
                </Chip>
              ))}
            </div>
          </Card>

          {/* Card 3: Languages & Fluency */}
          <Card className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-4 h-4 text-[var(--accent)]" />
              <MonoLabel>LANGUAGES & FLUENCY</MonoLabel>
            </div>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[var(--text)]">
                        {lang.name}
                      </span>
                      <span className="text-[var(--text-muted)] text-[11px]">
                        ({lang.note})
                      </span>
                    </div>

                    <span className="font-mono text-[11px] font-semibold text-[var(--accent)]">
                      {lang.level}
                    </span>
                  </div>

                  {/* 5-segment rating bar */}
                  <SegmentBar activeCount={lang.segments} total={5} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
