# Portfolio Site - Overview

> **Understanding the site structure and vision**

---

## What This Site Is

Matan Grady's personal portfolio site serves as a **central hub** for professional presence. It aggregates professional content and showcases work experience.

### Current State
- Homepage with hero, about, work timeline, projects, testimonials, contact sections
- Content page with search, filtering, and pagination
- Work detail pages (TheLotter, Lusha, IDF)
- Terminal/developer aesthetic design

### Future Vision
- Expanded media appearances section
- Tools stack showcase
- Additional work detail pages

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite | Build tool and dev server |
| React 18 | UI components |
| React Router 6 | Client-side routing |
| Tailwind CSS | Styling |
| shadcn/ui | UI component library |
| Framer Motion | Animations |
| TypeScript | Type safety |
| Lucide React | Icons |

### Key Patterns
- **SPA**: Single page application with client-side routing
- **Terminal Theme**: Developer-focused aesthetic with monospace fonts
- **CSS Variables**: HSL-based color tokens
- **Animations**: Scroll-triggered animations via Framer Motion

---

## Site Structure

```
portfolio-site/
├── src/
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Homepage
│   │   ├── Content.tsx    # Content hub
│   │   ├── NotFound.tsx   # 404 page
│   │   └── work/          # Work detail pages
│   ├── components/
│   │   ├── terminal/      # Homepage sections
│   │   └── ui/            # shadcn/ui components
│   ├── data/              # Content data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── App.tsx            # Router setup
│   └── index.css          # Global styles
├── public/                # Static assets
├── meta/                  # Assistant documentation
├── .claude/               # Claude settings
├── index.html             # Entry point
├── vite.config.ts         # Vite config
├── tailwind.config.ts     # Tailwind config
└── netlify.toml           # Netlify deployment config
```

---

## Design System

### Colors (Terminal Theme)
- **Background**: Dark navy (`hsl(215 28% 5%)`)
- **Primary**: Bright green (`hsl(135 73% 52%)`)
- **Accent Cyan**: `hsl(180 100% 50%)`
- **Accent Amber**: `hsl(45 100% 50%)`
- **Text**: Light gray on dark backgrounds

### Typography
- **Mono**: JetBrains Mono (primary)
- **Sans**: Inter
- **Blueprint**: Space Mono
- **Serif**: Instrument Serif

### Animations
- Scroll-triggered fade-ins
- Terminal typing effects
- Cursor blinking
- Subtle hover effects

---

## Content Sections

### 1. Hero
- Terminal window style
- Animated typing effect
- Name and title

### 2. About
- Skills overview
- Focus areas
- Professional summary

### 3. Work Timeline
- Career history with companies
- Promotion badges
- Links to detail pages

### 4. Projects
- Side projects and experiments
- External links

### 5. Testimonials
- Carousel of colleague quotes

### 6. Contact
- Contact methods
- Social links

---

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Index.tsx | Homepage with all sections |
| `/content` | Content.tsx | Blog posts with search/filter |
| `/work/thelotter` | TheLotter.tsx | theLotter case study |
| `/work/lusha` | Lusha.tsx | Lusha case study |
| `/work/idf` | IDF.tsx | IDF case study |
| `*` | NotFound.tsx | 404 page |

---

## Development Workflow

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:8080
```

### Build
```bash
npm run build
# Output in dist/
```

### Preview Production Build
```bash
npm run preview
```

### Deployment
- Hosted on Netlify
- Auto-deploy from main branch
- SPA routing via `netlify.toml`

### Branch Strategy
- `main`: Production
- Feature branches for new work
- PR-based merging

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/pages/Index.tsx` | Homepage composition |
| `src/components/terminal/Hero.tsx` | Hero section |
| `src/components/terminal/Work.tsx` | Work timeline |
| `src/data/content.ts` | Content entries |
| `tailwind.config.ts` | Design tokens |
| `netlify.toml` | Deployment config |

---

**Last Updated:** 2025-12-24
**Purpose:** Provide site context for the portfolio assistant
