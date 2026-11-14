"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Rocket,
  ArrowUpRight,
  Code2,
  Eye,
  FolderGit2,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { profileData } from "@/data/profile";
import { ProjectItem } from "@/types/profile";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      key={project.id}
      interactive
      className="group overflow-hidden flex flex-col justify-between p-0 border-[var(--border)] hover:border-[var(--accent)]"
    >
      {/* Top: 16:9 Image container */}
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)] bg-[var(--surface-2)]">
          {!imgError && project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[var(--surface-2)] via-[var(--surface)] to-[var(--surface-2)] text-center">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] mb-2">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <p className="font-mono text-[11px] text-[var(--text-muted)]">
                {"// Preview pending"}
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-40 pointer-events-none" />

          {/* Optional Badge */}
          {project.badge && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] text-[10.5px] font-mono text-[var(--accent)]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-1.5 animate-pulse" />
              {project.badge}
            </div>
          )}
        </div>

        {/* Body: Title, Description, Tech Chips */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-2)] transition-colors"
                aria-label={`Open ${project.title} live link`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-2)] transition-colors"
                aria-label={`Open ${project.title} source code`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, idx) => (
              <Chip key={idx} className="text-[11px] py-0.5 px-2.5">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Divider & Footer Links */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface-2)]/40 flex items-center justify-between text-xs font-mono">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--accent)] hover:underline"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{project.liveLabel || "Live Demonstration"}</span>
          </a>
        ) : (
          <div />
        )}

        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors ml-auto"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{project.sourceLabel || "Source Code"}</span>
          </a>
        )}
      </div>
    </Card>
  );
}

export function Projects() {
  const { projects, moreProjects = [] } = profileData;

  return (
    <section id="projects" className="pt-2 space-y-16">
      {/* Featured Production Systems */}
      <div>
        {/* Header Row: Left Title & Mono Tag, Right Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4 text-[var(--accent)]" />
              <MonoLabel>CASE STUDIES</MonoLabel>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)]">
              Featured Production Systems
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-body)] max-w-md leading-relaxed md:text-right">
            Production applications solving mission-critical data processing, user
            attribution, and agentic workflows.
          </p>
        </div>

        {/* Grid of Projects (1 col mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* More Projects Section */}
      {moreProjects.length > 0 && (
        <div className="pt-10 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FolderGit2 className="w-4 h-4 text-[var(--accent)]" />
                <MonoLabel>MORE WORKS</MonoLabel>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)]">
                More Projects
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-body)] max-w-md leading-relaxed md:text-right">
              Full-stack applications, developer tools, extensions, and open-source utilities.
            </p>
          </div>

          {/* Grid of More Projects (1 col mobile, 2 tablet, 3 desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
