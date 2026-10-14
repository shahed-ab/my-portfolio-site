"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Terminal,
  Mail,
  Copy,
  Check,
  Lock,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import confetti from "canvas-confetti";
import { Card } from "@/components/ui/Card";
import { InnerTile } from "@/components/ui/InnerTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { useCopy } from "@/hooks/useCopy";
import { contactSchema, ContactFormData } from "@/lib/validation";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: XIcon,
  mail: Mail,
};

export function Contact() {
  const { contact, socials } = profileData;
  const { copied, copy } = useCopy(2000);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      engagement: "Full-Time Software Engineering Role",
      brief: "",
      website_hp: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Failed to dispatch message");
      }

      setStatus("success");
      reset();

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#34d399", "#10b981", "#059669"],
        });
      } catch {
        // Confetti optional
      }

      setTimeout(() => {
        setStatus("idle");
      }, 6000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <section id="contact" className="pt-2">
      <SectionHeading
        icon={<Terminal className="w-4 h-4" />}
        title="Direct Inquiry Terminal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Communication Channel */}
        <Card className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-[var(--border)] mb-4">
              <MonoLabel>COMMUNICATION CHANNEL</MonoLabel>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text)] mb-3">
              Let&apos;s build together.
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-6">
              Interested in partnering on scalable web engineering, RAG pipeline
              integrations, or high-throughput backends? My inbox is always
              monitored.
            </p>

            {/* Email Tile with Copy Button */}
            <InnerTile className="p-3.5 sm:p-4 flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-tint)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs sm:text-sm text-[var(--text)] truncate select-all">
                  {contact.email}
                </span>
              </div>

              <button
                type="button"
                onClick={() => copy(contact.email)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-mono text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer shrink-0"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span className="text-[var(--accent)]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </InnerTile>

            {/* Response Time Indicator */}
            <div className="flex items-center gap-2 text-xs text-[var(--text-body)] mb-7">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{contact.responseTime}</span>
            </div>

            {/* Social Network Links */}
            <div>
              <MonoLabel className="text-[10px] block mb-3">
                CONNECT ACROSS NETWORKS
              </MonoLabel>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => {
                  const Icon =
                    socialIconMap[social.icon as keyof typeof socialIconMap] ||
                    Globe;

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-xs font-medium text-[var(--text-body)] hover:text-[var(--text)] hover:border-[var(--accent)] transition-all"
                    >
                      <Icon className="w-4 h-4 text-[var(--accent)]" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Row: PGP & Availability */}
          <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            {contact.pgp ? <span>{contact.pgp}</span> : <span />}
            <span className="text-[var(--accent)]">{profileData.availability.statusText}</span>
          </div>
        </Card>

        {/* Right Column: Contact Inquiry Form */}
        <Card className="lg:col-span-7 p-6 sm:p-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot hidden field */}
            <input
              type="text"
              {...register("website_hp")}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-medium text-[var(--text-body)] mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Elena Vance"
                  {...register("name")}
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl border bg-[var(--surface-2)] text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-colors",
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--border)] focus:border-[var(--accent)]"
                  )}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono"
                  >
                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-medium text-[var(--text-body)] mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="elena@company.com"
                  {...register("email")}
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl border bg-[var(--surface-2)] text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-colors",
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--border)] focus:border-[var(--accent)]"
                  )}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono"
                  >
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Scope / Engagement Dropdown */}
            <div>
              <label
                htmlFor="contact-engagement"
                className="block text-xs font-mono font-medium text-[var(--text-body)] mb-1.5"
              >
                Project Scope / Engagement
              </label>
              <select
                id="contact-engagement"
                {...register("engagement")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <option value="Full-Time Software Engineering Role">
                  Full-Time Software Engineering Role
                </option>
                <option value="Junior / Internship Role">
                  Junior / Internship Role
                </option>
                <option value="Contract or Freelance Project">
                  Contract or Freelance Project
                </option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Project Brief Textarea */}
            <div>
              <label
                htmlFor="contact-brief"
                className="block text-xs font-mono font-medium text-[var(--text-body)] mb-1.5"
              >
                Project Brief & Context
              </label>
              <textarea
                id="contact-brief"
                rows={4}
                placeholder="Outline what you are building, timeline expectations, and core tech stack requirements..."
                {...register("brief")}
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-xl border bg-[var(--surface-2)] text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-colors resize-none",
                  errors.brief
                    ? "border-red-500 focus:border-red-500"
                    : "border-[var(--border)] focus:border-[var(--accent)]"
                )}
                aria-invalid={errors.brief ? "true" : "false"}
                aria-describedby={errors.brief ? "brief-error" : undefined}
              />
              {errors.brief && (
                <p
                  id="brief-error"
                  className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono"
                >
                  <AlertCircle className="w-3 h-3" /> {errors.brief.message}
                </p>
              )}
            </div>

            {/* Toast / Status banner */}
            {status === "success" && (
              <div className="p-3 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-tint)] text-xs text-[var(--accent)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Your message has been received! I will get back to you shortly.</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-xs text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage || "Failed to send message. Please try again."}</span>
              </div>
            )}

            {/* Footer row: Neutral Inbox transmission note + Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Lock className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Your message goes straight to my inbox.</span>
              </div>

              <Button
                variant="filled"
                size="md"
                type="submit"
                disabled={status === "loading"}
                icon={
                  status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
                className="w-full sm:w-auto min-w-[190px]"
              >
                {status === "loading" ? "Transmitting..." : "Send Direct Message"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
