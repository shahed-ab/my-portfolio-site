"use client";

import React, { useEffect, useState } from "react";
import { User, Folder, Terminal, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "profile", label: "Profile", icon: User },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "experience", label: "Experience", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "about", "projects", "experience", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
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

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[var(--surface)]/95 backdrop-blur-md border-t border-[var(--border)] flex items-center justify-around px-4 z-50 transition-colors shadow-lg"
      aria-label="Mobile navigation"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-1 rounded-lg transition-colors cursor-pointer",
              isActive
                ? "text-[var(--accent)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            )}
            aria-label={`Go to ${item.label}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-mono tracking-tight">{item.label}</span>
          </button>
        );
      })}
      <div className="flex items-center pl-2 border-l border-[var(--border)]">
        <ThemeToggle size="sm" />
      </div>
    </nav>
  );
}
