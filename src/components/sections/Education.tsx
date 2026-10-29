"use client";

import React from "react";
import {
  GraduationCap,
  Trophy,
  Award,
  Database,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { InnerTile } from "@/components/ui/InnerTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Pill } from "@/components/ui/Pill";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const credentialIconMap = {
  aws: ShieldCheck,
  mongodb: Database,
  meta: Code2,
  cert: Award,
};

export function Education() {
  const { education, credentials } = profileData;
  const hasCredentials = credentials && credentials.length > 0;
  const primaryEdu = education && education.length > 0 ? education[0] : null;

  if (!primaryEdu && !hasCredentials) {
    return null;
  }

  const sectionIcon = primaryEdu ? (
    <GraduationCap className="w-4 h-4" />
  ) : (
    <Award className="w-4 h-4" />
  );

  const sectionTitle = primaryEdu
    ? hasCredentials
      ? "Education & Credentials"
      : "Education & Degree"
    : "Certifications & Credentials";

  return (
    <section id="education" className="pt-2">
      <SectionHeading icon={sectionIcon} title={sectionTitle} />

      <div
        className={cn(
          "grid grid-cols-1 gap-6",
          primaryEdu && hasCredentials ? "lg:grid-cols-2" : "grid-cols-1"
        )}
      >
        {/* Left Card: Formal Degree */}
        {primaryEdu && (
          <Card className="p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-[var(--border)]">
                <MonoLabel>FORMAL DEGREE</MonoLabel>
                <Pill variant="neutral" className="text-[11px] py-0.5 px-2.5">
                  {primaryEdu.status}
                </Pill>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-1">
                {primaryEdu.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[var(--accent)] mb-4">
                {primaryEdu.institution}
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6">
                {primaryEdu.description}
              </p>
            </div>

            {/* Bottom Honor Row */}
            {primaryEdu.honor && (
              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-2.5 text-xs text-[var(--accent)] font-medium">
                <Trophy className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                <span>{primaryEdu.honor}</span>
              </div>
            )}
          </Card>
        )}

        {/* Right Card: Industry Accreditations (hidden if empty) */}
        {hasCredentials && (
          <Card className="p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-[var(--border)]">
                <MonoLabel>INDUSTRY ACCREDITATIONS</MonoLabel>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-5">
                Certified Credentials
              </h3>

              <div
                className={cn(
                  primaryEdu
                    ? "space-y-3"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
                )}
              >
                {credentials.map((cred) => {
                  const Icon = credentialIconMap[cred.icon] || Award;

                  return (
                    <InnerTile
                      key={cred.id}
                      className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[var(--accent-border)] transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 truncate">
                          <h4 className="text-xs sm:text-sm font-bold text-[var(--text)] truncate">
                            {cred.title}
                          </h4>
                          <p className="text-[11px] text-[var(--text-muted)] truncate">
                            {cred.issuer}
                          </p>
                        </div>
                      </div>

                      <Pill variant="accent" className="text-[10px] py-0.5 px-2 shrink-0">
                        {cred.status}
                      </Pill>
                    </InnerTile>
                  );
                })}
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
