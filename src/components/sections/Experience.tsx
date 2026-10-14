"use client";

import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { profileData } from "@/data/profile";

export function Experience() {
  const { experience } = profileData;

  return (
    <section id="experience" className="pt-2">
      <SectionHeading
        icon={<Briefcase className="w-4 h-4" />}
        title="Professional Experience Track"
      />

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-8 space-y-8 sm:space-y-10">
        {/* Continuous vertical timeline connector line */}
        <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-[var(--border-strong)]" />

        {experience.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Concentric Ring-Dot */}
            <div className="absolute -left-[23px] sm:-left-[27px] top-7 w-[20px] h-[20px] rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Experience Card */}
            <Card className="p-5 sm:p-7 hover:border-[var(--border-strong)] transition-all">
              {/* Header: Role, Company, Location Mode, Period Pill */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)]">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1">
                    <span className="font-semibold text-[var(--accent)]">
                      {exp.company}
                    </span>{" "}
                    <span className="text-[var(--text-muted)]">·</span>{" "}
                    <span className="text-[var(--text-body)]">
                      {exp.locationMode}
                    </span>
                  </p>
                </div>

                <div className="self-start sm:self-center">
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-body)]">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet points with emerald check icons */}
              <ul className="space-y-2.5 mb-5" role="list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]">
                {exp.skills.map((skill, idx) => (
                  <Chip key={idx} className="font-mono text-[11px] py-0.5 px-2.5">
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
