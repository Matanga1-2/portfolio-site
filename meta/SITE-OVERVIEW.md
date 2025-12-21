# Portfolio Site - Overview

> **Understanding the site structure and vision**

---

## What This Site Is

Matan Grady's personal portfolio site serves as a **central hub** for professional presence. It's evolving from a simple portfolio into a comprehensive content aggregator.

### Current State
- Homepage with hero, about, portfolio, testimonials, contact sections
- About page with detailed background
- Featured roles/projects with dedicated pages
- Builder projects section

### Future Vision
- Content hub aggregating all professional content
- Category-based filtering (thought leadership, guides, media)
- Tools stack showcase
- Expanded media appearances section

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| React 18 | UI components |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| TypeScript | Type safety |
| Lucide React | Icons |

### Key Patterns
- **App Router**: Using `app/` directory structure
- **Client Components**: Most components use `'use client'` for interactivity
- **CSS**: Tailwind with custom navy color palette
- **Animations**: Scroll-triggered animations via Framer Motion

---

## Site Structure

```
portfolio-site/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── projects/          # Projects listing
│   └── roles/             # Detailed role pages
├── components/            # React components
│   ├── home/              # Homepage sections
│   ├── shared/            # Header, Footer
│   └── projects/          # Project cards
├── assets/                # Images and static files
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities
├── public/                # Public assets
│
# Assistant System (new)
├── CLAUDE.md              # Entry point
├── AGENTS.md              # Task routing hub
├── meta/                  # Context files
├── tasks/                 # Task instructions
├── reference/             # Guidelines and standards
└── projects/              # Planning documents
```

---

## Design System

### Colors
- **Primary Navy**: `#0a192f` (bg-navy-primary)
- **Accent Green**: `#10b981` (green-500)
- **Accent Blue**: `#3b82f6` (blue-500)
- **Text**: White/gray-300 on dark backgrounds

### Typography
- Bold headlines with gradient text accents
- Clean, readable body text
- Monospace for technical content

### Animations
- Scroll-triggered fade-ins
- Subtle hover effects
- Gradient glows and blurs for depth

---

## Content Sections (Current)

### 1. Hero
- Name and title
- Tagline: "Product Leader & Builder"
- CTA buttons to portfolio and contact

### 2. About Me
- Brief professional bio
- Profile image
- Link to full about page

### 3. Featured Roles (Portfolio)
- Past significant roles with impact
- Dedicated pages for each role
- Currently: HR System, Lottery Platform

### 4. Builder Projects
- Side projects and experiments
- Currently: EvalKit AI

### 5. Testimonials
- Carousel of colleague quotes

### 6. Get in Touch
- Contact information
- Social links

---

## Content Sections (Planned)

### Content Hub
- Aggregated blog posts (Substack, LinkedIn, company blog)
- Category filtering
- Teaser cards linking to full content

### Media Appearances
- Podcast interviews
- Video content
- Conference talks

### Tools Stack
- Tools and technologies used daily
- Productivity setup
- AI tools and workflows

---

## Development Workflow

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Deployment
- Hosted on Vercel (assumed)
- Auto-deploy from main branch

### Branch Strategy
- `main`: Production
- Feature branches for new work
- PR-based merging

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage composition |
| `components/home/Hero.tsx` | Hero section |
| `components/home/AboutMe.tsx` | About preview |
| `components/home/FeatureRoles.tsx` | Portfolio section |
| `tailwind.config.ts` | Design tokens |

---

**Last Updated:** 2025-01-XX
**Purpose:** Provide site context for the portfolio assistant
