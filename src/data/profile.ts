import { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  identity: {
    name: "Abu Shahed",
    shortName: "Abu Shahed",
    role: "Full-Stack Engineer",
    company: "",
    tagline: "Automate work. Build systems. Scale faster.",
    location: "Dhaka, Bangladesh",
    timezone: "Asia/Dhaka",
    avatar: "/shahed.jpg",
    verified: true,
    openToRoles: "Open to remote & high-agency engineering roles",
    terminalPrompt: "abu-shahed@prod-cluster:~$ init_portfolio --all",
  },

  availability: {
    quarter: "Q2",
    systemStatus: "SYS.ACTIVE :: 99.98% OPERATIONAL",
    statusText: "Status: Available",
  },

  stacks: {
    groups: [
      {
        id: "ai-stack",
        label: "AI STACK",
        items: [
          {
            name: "Claude",
            icon: "claude",
            color: "#d97757",
            colorLight: "#c85a36",
            tintBg: true,
          },
          {
            name: "OpenAI",
            icon: "openai",
            color: "#10a37f",
            colorLight: "#0d8a6a",
            tintBg: true,
          },
          {
            name: "Cursor",
            icon: "cursor",
            color: "#9ca3af",
            colorLight: "#4b5563",
            tintBg: true,
          },
          {
            name: "Google Antigravity",
            icon: "antigravity",
            color: "#4285F4",
            colorLight: "#1a73e8",
            tintBg: true,
          },
        ],
      },
      {
        id: "core-stack",
        label: "CORE STACK",
        items: [
          {
            name: "Next.js",
            icon: "nextjs",
            color: "var(--icon-mono)",
            isMono: true,
          },
          {
            name: "TypeScript",
            icon: "typescript",
            color: "#3178c6",
            colorLight: "#3178c6",
          },
          {
            name: "React",
            icon: "react",
            color: "#61dafb",
            colorLight: "#0284c7",
          },
          {
            name: "Node.js",
            icon: "nodejs",
            color: "#5fa04e",
            colorLight: "#3e7d32",
          },
          {
            name: "Express",
            icon: "express",
            color: "var(--icon-mono)",
            isMono: true,
          },
          {
            name: "MongoDB",
            icon: "mongodb",
            color: "#47a248",
            colorLight: "#2d7a31",
          },
        ],
      },
      {
        id: "modern-tools",
        label: "MODERN TOOLS",
        items: [
          {
            name: "VS Code",
            icon: "vscode",
            color: "#007acc",
            colorLight: "#0284c7",
          },
          {
            name: "OpenCode",
            icon: "opencode",
            color: "#14b8a6",
            colorLight: "#0d9488",
          },
          {
            name: "GitHub",
            icon: "github",
            color: "var(--icon-mono)",
            isMono: true,
          },
          {
            name: "Docker",
            icon: "docker",
            color: "#2496ed",
            colorLight: "#1668b5",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
            color: "#38bdf8",
            colorLight: "#0284c7",
          },
          {
            name: "RAG Pipelines",
            icon: "rag",
            iconSrc: "/logos/rag.svg",
            color: "#a855f7",
            colorLight: "#7e22ce",
          },
          {
            name: "LLM Apps",
            icon: "llm",
            iconSrc: "/logos/llm.svg",
            color: "#ec4899",
            colorLight: "#be185d",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
            color: "#4169e1",
            colorLight: "#3355b8",
          },
        ],
      },
    ],
    // Backwards-compatible direct references
    get aiStack() {
      return this.groups[0].items;
    },
    get coreStack() {
      return this.groups[1].items;
    },
    get modernTools() {
      return this.groups[2].items;
    },
  },

  stats: [
    {
      label: "DEPLOYMENTS",
      value: "35+",
      numValue: 35,
      suffix: "+",
      description: "Production launches across SaaS & web apps",
      icon: "cloud",
    },
    {
      label: "EXPERIENCE",
      value: "4+",
      numValue: 4,
      suffix: "+",
      description: "Full-lifecycle software engineering",
      icon: "code",
    },
    {
      label: "AI WORKFLOWS",
      value: "15+",
      numValue: 15,
      suffix: "+",
      description: "Active LLM agents & microservices",
      icon: "network",
    },
    {
      label: "UPTIME SLA",
      value: "99.9%",
      numValue: 99.9,
      suffix: "%",
      description: "Production pipeline stability & health",
      icon: "shield",
      isAccent: true,
    },
  ],

  about: {
    lead: "I specialize in turning intricate business workflows into resilient, self-healing digital systems. Bridging high-performance modern web frontends with distributed backend microservices, my focus centers on practical scalability, clean modular codebases, and LLM-powered agent automation.",
    body: "Whether architecting asynchronous message queues, optimizing complex database aggregation runs, or embedding contextual RAG search pipelines into customer-facing applications, I operate with high agency, autonomous problem-solving, and ruthless attention to UX polish.",
    mission: "Automate the repetitive; empower users to focus on high-leverage execution.",
    philosophySpec: "spec: autonomous-first",
  },

  location: {
    city: "Dhaka",
    country: "Bangladesh",
    timeZoneLabel: "GMT +06:00 · Standard Time",
  },

  collaboration: {
    style: "Remote-First",
    description: "Flourishes in asynchronous, transparent engineering teams. Overlaps cleanly with North American and European standard windows.",
    chips: ["Async Docs", "US Overlap (4h)", "EU Overlap (6h)", "High Agency"],
  },

  languages: [
    {
      name: "English",
      note: "Professional & Technical",
      level: "Fluent",
      segments: 5,
    },
    {
      name: "Bangla",
      note: "Native Tongue",
      level: "Native",
      segments: 5,
    },
    {
      name: "Hindi",
      note: "Conversational",
      level: "Working",
      segments: 4,
    },
  ],

  projects: [
    {
      id: "automate-flow-ai",
      title: "AutomateFlow AI", // [Project 1 placeholder]
      badge: "Live in Production",
      description: "Autonomous multi-agent orchestrator connecting 40+ external API actions via natural language instructions, persistent vector memory (Pinecone), and live telemetry.",
      tags: ["Next.js 15", "Node.js", "PostgreSQL", "Pinecone"],
      image: "/projects/automateflow.jpg",
      liveUrl: "https://example.com/automateflow",
      liveLabel: "Live Demonstration",
      sourceUrl: "https://github.com/shahed-ab/automate-flow-ai",
      sourceLabel: "Source Code",
    },
    {
      id: "saas-metrics-hub",
      title: "SaaSMetrics Hub", // [Project 2 placeholder]
      badge: "Enterprise SaaS",
      description: "Multi-tenant revenue analytics suite computing real-time cohort churn, MRR changes, and automatic reconciliation with Stripe webhook event streams.",
      tags: ["React", "Express", "MongoDB", "Stripe API"],
      image: "/projects/saasmetrics.jpg",
      liveUrl: "https://example.com/saasmetrics",
      liveLabel: "Live Showcase",
      sourceUrl: "https://github.com/shahed-ab/saasmetrics-hub",
      sourceLabel: "Docs & Spec",
    },
    {
      id: "omni-rag-search",
      title: "OmniRAG Search", // [Project 3 placeholder]
      badge: "< 80ms Latency",
      description: "Hybrid dense/sparse semantic retrieval engine and document parser utilizing pgvector, streaming summaries, and contextual chunk re-ranking.",
      tags: ["TypeScript", "FastAPI", "LangChain", "Supabase"],
      image: "/projects/omnirag.jpg",
      liveUrl: "https://example.com/omnirag",
      liveLabel: "Try Interface",
      sourceUrl: "https://github.com/shahed-ab/omnirag-search",
      sourceLabel: "Source Repo",
    },
  ],

  moreProjects: [
    {
      id: "bangla-news-24",
      title: "Bangla News 24 (বাংলা নিউজ ২৪)",
      description: "A modern, visually polished Bengali online news platform.",
      tags: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "daisyUI 5", "Better Auth"],
      image: "/projects/bangla-news-24.png", // Drop real screenshot at /public/projects/bangla-news-24.png
      liveUrl: "https://banglanews-tau.vercel.app/",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/Bangla-news-24-7",
      sourceLabel: "Source Code",
    },
    {
      id: "naming-helper",
      title: "Naming Helper (VS Code Extension)",
      badge: "VS Code Extension",
      description: "Scans JavaScript and TypeScript files in real time, detects weak placeholder names (like x, temp, data2, res), infers what each variable represents, suggests clearer names, and explains why in beginner-friendly language.",
      tags: ["TypeScript", "AST parsing", "VS Code Extension API", "esbuild", "pnpm"],
      image: "/projects/naming-helper.png", // Drop real screenshot at /public/projects/naming-helper.png
      sourceUrl: "https://github.com/shahed-ab/naming-Helper-Extention",
      sourceLabel: "Source Code",
    },
    {
      id: "studiospace",
      title: "StudioSpace",
      description: "A peer-to-peer marketplace where creators discover, book, and host photo studios, film stages, podcast lounges, music suites, and art workshops by the hour.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB", "Google sign-in", "PDF booking invoices"],
      image: "/projects/studiospace.png", // Drop real screenshot at /public/projects/studiospace.png
      liveUrl: "https://studiospace-client-iycx.vercel.app/",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/studiospace-client",
      sourceLabel: "Source Code",
    },
    {
      id: "full-stack-spy",
      title: "FullStackSpy",
      description: "A fast, secure website tech stack detector. Given any public URL, it inspects headers, HTML metadata, scripts, cookies, and DNS records to detect frameworks, CMSs, hosting, CDNs, and analytics tools. Includes 70+ fingerprints, SSRF protection, confidence scoring, caching, and rate limiting.",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Cheerio"],
      image: "/projects/full-stack-spy.png", // Drop real screenshot at /public/projects/full-stack-spy.png
      sourceUrl: "https://github.com/shahed-ab/full-stack-spy",
      sourceLabel: "Source Code",
    },
    {
      id: "bazar-dor",
      title: "BazarDor (বাজার দর)",
      description: "A modern, responsive full-stack app that tracks and displays daily market prices of essential commodities and groceries across Bangladesh.",
      tags: ["Next.js", "TypeScript", "Better Auth", "MongoDB"],
      image: "/projects/bazar-dor.png", // Drop real screenshot at /public/projects/bazar-dor.png
      liveUrl: "https://bazar-dor-web-two.vercel.app/",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/bazar-dor-web",
      sourceLabel: "Source Code",
    },
    {
      id: "fitlog",
      title: "FitLog",
      description: "A production-grade, dark-themed workout library and daily training plan builder for lifters who prioritize precision and intent.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/fitlog.png", // Drop real screenshot at /public/projects/fitlog.png
      liveUrl: "https://fitlog-shah-a974.vercel.app",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/fitlog",
      sourceLabel: "Source Code",
    },
    {
      id: "devstack",
      title: "DevStack",
      description: "A responsive web app that helps developers explore modern web technologies and build their own personalized tech stack.",
      tags: ["React", "Vite", "Tailwind CSS"],
      image: "/projects/devstack.png", // Drop real screenshot at /public/projects/devstack.png
      liveUrl: "https://ph-assignment-5-alpha.vercel.app",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/DevStack",
      sourceLabel: "Source Code",
    },
    {
      id: "keypress-typing-speed-test",
      title: "Keypress Typing Speed Test",
      description: "A browser-based typing speed test with live WPM and accuracy, character-level feedback, an animated keycap caret, and timed modes (15s / 30s / 60s / 120s).",
      tags: ["HTML", "CSS", "JavaScript (no frameworks)"],
      image: "/projects/keypress-typing-speed-test.png", // Drop real screenshot at /public/projects/keypress-typing-speed-test.png
      liveUrl: "https://shahed-ab.github.io/typingspeedtest/",
      liveLabel: "Live Demo",
      sourceUrl: "https://github.com/shahed-ab/typingspeedtest",
      sourceLabel: "Source Code",
    },
  ],

  skills: {
    mode: "percent", // configurable: "percent" or "level"
    categories: [
      {
        id: "frontend",
        title: "Frontend Craft",
        subtitle: "UI Architecture & Performance",
        description: "Specialized in sub-second rendering, complex reactive state trees, accessible design systems, and resilient component structures.",
        icon: "frontend",
        items: [
          { name: "Next.js & React (App Router)", percent: 96, level: "Strong" },
          { name: "TypeScript Strict Systems", percent: 92, level: "Strong" },
          { name: "Tailwind CSS & Design Tokens", percent: 94, level: "Strong" },
          { name: "Framer Motion & Web Animations", percent: 88, level: "Strong" },
        ],
      },
      {
        id: "backend",
        title: "Backend & APIs",
        subtitle: "Distributed Microservices & Concurrency",
        description: "Designing fault-tolerant REST and GraphQL architectures, asynchronous job queues, and robust webhook pipelines with bulletproof idempotency.",
        icon: "backend",
        items: [
          { name: "Node.js, Express & Fastify", percent: 90, level: "Strong" },
          { name: "RESTful & GraphQL Protocols", percent: 88, level: "Strong" },
          { name: "Authentication & OAuth2 / JWT", percent: 85, level: "Strong" },
          { name: "Docker & Container Orchestration", percent: 82, level: "Working" },
        ],
      },
      {
        id: "database-ai",
        title: "Databases & AI Infra",
        subtitle: "Vector Memory & Persistence",
        description: "Optimizing relational schemes, document stores, caching layers, and semantic RAG search architectures across production vector stores.",
        icon: "database",
        items: [
          { name: "PostgreSQL & pgvector", percent: 87, level: "Strong" },
          { name: "MongoDB & Aggregations", percent: 89, level: "Strong" },
          { name: "Redis Caching & Pub/Sub", percent: 84, level: "Working" },
          { name: "RAG & LLM Integration (LangChain)", percent: 86, level: "Strong" },
        ],
      },
    ],
  },

  education: [],

  credentials: [
    {
      id: "cred-1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      status: "Active",
      icon: "aws",
    },
    {
      id: "cred-2",
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      status: "Active",
      icon: "mongodb",
    },
    {
      id: "cred-3",
      title: "Meta Frontend Professional Certificate",
      issuer: "Meta Platforms",
      status: "Active",
      icon: "meta",
    },
  ],

  socials: [
    {
      platform: "GitHub",
      label: "GitHub",
      url: "https://github.com/shahed-ab",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abushahed/",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      label: "Twitter / X",
      url: "https://x.com/example",
      icon: "x",
    },
  ],

  contact: {
    email: "abushahedpov@gmail.com",
    responseTime: "Average response window: < 2 hours",
    pgp: "PGP: 4A98 F1F2 83BC 1D7E", // Optional PGP
    footerTagline: "Designed for high-frequency execution",
  },
};
