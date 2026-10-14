import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Preloader } from "@/components/ui/Preloader";
import { LeftRail } from "@/components/layout/LeftRail";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopBar } from "@/components/layout/TopBar";
import { profileData } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abushahed.dev"),
  title: `${profileData.identity.name} — Full-Stack Engineer & Systems Architect`,
  description: `${profileData.identity.name} portfolio. ${profileData.identity.tagline} Specialized in Next.js, resilient distributed backends, and AI agent automation.`,
  keywords: [
    "Abu Shahed",
    "Full-Stack Engineer",
    "Next.js Developer",
    "Dhaka Bangladesh",
    "TypeScript",
    "AI Agents",
    "Software Engineer",
  ],
  authors: [{ name: profileData.identity.name }],
  creator: profileData.identity.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abushahed.dev",
    title: `${profileData.identity.name} — Full-Stack Engineer`,
    description: profileData.identity.tagline,
    siteName: `${profileData.identity.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.identity.name} — Full-Stack Engineer`,
    description: profileData.identity.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent-tint)] selection:text-[var(--accent)]">
        <ThemeProvider>
          {/* Pre-launch Terminal Preloader */}
          <Preloader />

          {/* Desktop Left Rail */}
          <LeftRail />

          {/* Main Layout Area */}
          <div className="lg:pl-[72px] flex flex-col min-h-screen">
            <TopBar />
            <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12 pb-24 lg:pb-12">
              {children}
            </main>
          </div>

          {/* Mobile Bottom Navigation */}
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
