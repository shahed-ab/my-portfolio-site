"use client";

import React, { useEffect, useState } from "react";
import { User, Folder, Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "profile", label: "Profile", icon: User },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "experience", label: "Experience & Skills", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

export function LeftRail() {
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "about", "projects", "experience", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          // Map sub-sections to rail nav items
          if (sections[i] === "about" || sections[i] === "profile") {
            setActiveSection("profile");
          } else if (sections[i] === "projects") {
            setActiveSection("projects");
          } else if (sections[i] === "experience" || sections[i] === "skills" || sections[i] === "education") {
            setActiveSection("experience");
          } else if (sections[i] === "contact") {
            setActiveSection("contact");
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const githubUrl = profileData.socials.find((s) => s.platform.toLowerCase() === "github")?.url || "https://github.com";
  const linkedinUrl = profileData.socials.find((s) => s.platform.toLowerCase() === "linkedin")?.url || "https://linkedin.com";

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[72px] bg-[var(--rail-bg)] border-r border-[var(--border)] flex-col items-center justify-between pt-6 pb-8 z-50 transition-colors"
      aria-label="Sidebar navigation"
    >
      {/* Top Logo Tile */}
      <a
        href="#profile"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-10 h-10 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] font-mono font-bold text-lg hover:scale-105 transition-transform"
        aria-label="Abu Shahed - Home"
      >
        A
      </a>

      {/* Center Navigation Icons */}
      <nav className="flex flex-col items-center gap-4" aria-label="Main sections">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer",
                isActive
                  ? "border border-[var(--accent-border)] bg-[var(--accent-tint)] text-[var(--accent)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
              )}
              aria-label={`Scroll to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />

              {/* Tooltip on hover */}
              <span className="absolute left-[80px] px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Icons & Theme Toggle */}
      <div className="flex flex-col items-center gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="absolute left-[80px] px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            GitHub Profile
          </span>
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="absolute left-[80px] px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            LinkedIn Profile
          </span>
        </a>

        <div className="w-6 h-px bg-[var(--border)] my-1" />

        <ThemeToggle />
      </div>
    </aside>
  );
}
