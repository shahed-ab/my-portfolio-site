"use client";

import React from "react";
import { Code, Server, Database } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { profileData } from "@/data/profile";

const iconMap = {
  frontend: Code,
  backend: Server,
  database: Database,
};

export function Arsenal() {
  const { skills } = profileData;

  return (
    <section id="skills" className="pt-2">
      <SectionHeading
        icon={<Code className="w-4 h-4" />}
        title="Technical Arsenal & Capabilities"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.categories.map((category) => {
          const Icon = iconMap[category.icon] || Code;

          return (
            <Card
              key={category.id}
              className="p-6 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all"
            >
              <div>
                {/* Header: Icon tile + Title + Subtitle */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text)]">
                      {category.title}
                    </h3>
                    <MonoLabel className="text-[10px] block mt-0.5">
                      {category.subtitle}
                    </MonoLabel>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4 pt-4 border-t border-[var(--border)]">
                {category.items.map((item, idx) => (
                  <ProgressBar
                    key={idx}
                    value={item.percent}
                    label={item.name}
                    valueDisplay={
                      skills.mode === "level"
                        ? item.level || `${item.percent}%`
                        : `${item.percent}%`
                    }
                  />
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
