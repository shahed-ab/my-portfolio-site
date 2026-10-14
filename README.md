# Abu Shahed — Full-Stack Developer Portfolio

A production-grade, pixel-faithful developer portfolio for **Abu Shahed** (Full-Stack Developer, Dhaka, Bangladesh). Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, next-themes, Lucide React, and Zod.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router with Server Components & Edge Opengraph)
- **Styling**: Tailwind CSS v4 with custom design tokens as CSS variables
- **Theming**: `next-themes` (Class strategy, default Dark mode, polished Light mode, zero hydration flash)
- **Fonts**: Inter (UI typography) and JetBrains Mono (terminal, labels, code snippets) via `next/font/google`
- **Icons**: `lucide-react` with custom SVG brand icons
- **Motion**: `framer-motion` + CSS transitions (respects `prefers-reduced-motion`)
- **Validation & Forms**: `zod` + `react-hook-form`
- **Email Service**: Resend (`/api/contact` route handler with in-memory IP rate limiting and anti-bot honeypot)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node 24)
- `npm`

### 2. Installation
```bash
# Clone the repository
git clone <repo-url>
cd "last portfolio"

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for contact form transmission
RESEND_API_KEY=re_your_api_key_here

# Recipient email where contact inquiries are sent
CONTACT_TO_EMAIL=abushahedpov@gmail.com

# Git commit hash (automatically supplied by Vercel in CI)
NEXT_PUBLIC_COMMIT=
```

> **Note**: If `RESEND_API_KEY` is not provided, the contact endpoint runs in safe development mode and logs submissions to the console.

---

## 📝 How to Customize Content (`/src/data/profile.ts`)

All content across the entire portfolio is centralized and strongly typed in [`/src/data/profile.ts`](file:///d:/last%20portfolio/src/data/profile.ts) using types defined in [`/src/types/profile.ts`](file:///d:/last%20portfolio/src/types/profile.ts). No text is hardcoded inside components.

| Section | Keys in `profileData` | Description |
| :--- | :--- | :--- |
| **Hero** | `identity`, `availability`, `stacks` | Name, role, company, tagline, terminal typing prompt, tech chips, availability pill |
| **Stats** | `stats` | Metric labels, count-up numbers, suffixes, descriptions, accent flags |
| **About** | `about`, `location`, `collaboration`, `languages` | Engineering philosophy, Dhaka timezone, remote overlap chips, fluency bars with speech samples |
| **Projects** | `projects` | Case study titles, 16:9 thumbnails, tags, live URLs, repository links |
| **Experience** | `experience` | Roles, companies, hybrid/remote mode, date range, achievement bullets |
| **Arsenal** | `skills` | Categories, skill items, percentages, display mode (`"percent"` or `"level"`) |
| **Education** | `education`, `credentials` | Degree, honors, certified credentials |
| **Contact** | `contact`, `socials` | Email address, response time SLA, optional PGP key, GitHub/LinkedIn links |

### Replacing Placeholders
Look for marked placeholders such as `[Company]`, `[Project name]`, or `TODO` inside `profile.ts` and replace them with your personalized details.

---

## 🚢 Deploying to Vercel

1. Push your code to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. In **Project Settings** > **Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_COMMIT` = `$VERCEL_GIT_COMMIT_SHA`
4. Click **Deploy**. Vercel will build and host your portfolio at edge speeds.

---

## 🎨 Design Tokens

- **Dark Theme (Default)**: `--bg: #0a0a0a`, `--surface: #141414`, `--accent: #34d399`, `--accent-solid: #10b981`
- **Light Theme**: `--bg: #f6f7f6`, `--surface: #ffffff`, `--accent: #047857`, `--accent-solid: #059669` (WCAG 4.5:1 compliant)
- **Geometry**: Card radius 20px, inner tile radius 14px, chips fully rounded, 1px borders.
