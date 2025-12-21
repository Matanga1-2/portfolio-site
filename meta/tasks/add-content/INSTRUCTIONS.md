# Task: Add Content

> **Adding new content pieces to the portfolio site's Content page**

---

## When to Use

Use this task when Matan wants to:
- Add a new blog post (from Substack)
- Add a LinkedIn thought piece
- Add a company blog article
- Add any written content to the Content page

---

## Content Page Overview

The Content page (`/content`) displays all content in a searchable, filterable grid:
- **Location**: [app/content/page.tsx](../../app/content/page.tsx)
- **Data file**: [data/content.ts](../../data/content.ts)
- **Components**: [components/content/](../../components/content/)

Features:
- Search across titles, subtitles, and tags
- Filter by tags (multi-select)
- Pagination (9 items per page)
- Responsive grid (1/2/3 columns)
- Cards link to external source (Substack)

---

## Available Tags

Content must use ONLY these 5 tags:

| Tag | Use For |
|-----|---------|
| `AI` | AI, GenAI, LLMs, agents, MCP, prompts |
| `Engineering` | Code, architecture, APIs, DevOps, testing |
| `Product` | Product management, features, stakeholders, OKRs |
| `Productivity` | Workflows, efficiency, Kanban, knowledge management |
| `Analysis` | Metrics, data, risk, strategy, decision-making |

Each post should have 1-3 tags.

---

## How to Add New Content

### Step 1: Gather Information

Ask for:
1. **Title**: The post title
2. **Subtitle**: Short description (1-2 sentences)
3. **URL**: Substack URL (e.g., `https://blog.matangr.com/p/post-slug`)
4. **Date**: Publication date
5. **Tags**: 1-3 tags from the list above

### Step 2: Add to Data File

Open [data/content.ts](../../data/content.ts) and add a new entry to the `contentData` array:

```typescript
{
  id: 'post-slug',                    // From URL, kebab-case
  title: 'Post Title',
  subtitle: 'Short description of the post',
  date: new Date('2025-01-15T10:00:00.000Z'),
  formattedDate: 'Jan 15, 2025',      // Human-readable
  tags: ['AI', 'Engineering'],        // 1-3 tags
  url: 'https://blog.matangr.com/p/post-slug'
}
```

### Step 3: Position in Array

Add the entry in **date order** (newest first). The array should remain sorted by date descending.

### Step 4: Verify

Run the dev server to confirm:
```bash
npm run dev  # Runs on port 2500
```

Visit http://localhost:2500/content and verify:
- [ ] New post appears in grid
- [ ] Tags display correctly
- [ ] Search finds the new post
- [ ] Link opens correct Substack URL

---

## Content Entry Schema

```typescript
interface ContentItem {
  id: string           // Unique slug from URL
  title: string        // Post title
  subtitle: string     // 1-2 sentence description
  date: Date           // Publication date as Date object
  formattedDate: string // Human-readable date (e.g., "Jan 15, 2025")
  tags: ContentTag[]   // Array of 1-3 tags
  url: string          // Full Substack URL
}

type ContentTag = 'Productivity' | 'Engineering' | 'Product' | 'AI' | 'Analysis'
```

---

## Example: Adding a New Post

**User says**: "Add this to my content: https://blog.matangr.com/p/new-post-about-ai"

**You do**:

1. Fetch/ask for the post details:
   - Title: "Building AI-First Products"
   - Subtitle: "How to integrate AI into your product development process"
   - Date: January 20, 2025
   - Tags: AI, Product

2. Add to `data/content.ts`:

```typescript
{
  id: 'new-post-about-ai',
  title: 'Building AI-First Products',
  subtitle: 'How to integrate AI into your product development process',
  date: new Date('2025-01-20T10:00:00.000Z'),
  formattedDate: 'Jan 20, 2025',
  tags: ['AI', 'Product'],
  url: 'https://blog.matangr.com/p/new-post-about-ai'
}
```

3. Place it at the correct position (sorted by date)

4. Verify it appears on the Content page

---

## Tag Assignment Guidelines

If the user doesn't specify tags, assign them based on content:

| Keywords in Title/Subtitle | Tag |
|---------------------------|-----|
| AI, GenAI, LLM, agent, prompt, MCP | `AI` |
| code, API, architecture, testing, deploy, git | `Engineering` |
| product, feature, OKR, KPI, stakeholder | `Product` |
| productivity, efficiency, workflow, Kanban | `Productivity` |
| metrics, data, analysis, risk, decision | `Analysis` |

---

## File Locations

| What | Where |
|------|-------|
| Content page | `app/content/page.tsx` |
| Content data | `data/content.ts` |
| Types | `types/content.ts` |
| Card component | `components/content/ContentCard.tsx` |
| Filters component | `components/content/ContentFilters.tsx` |
| Tag component | `components/content/TagChip.tsx` |
| Pagination | `components/content/Pagination.tsx` |

---

**Last Updated:** 2025-12-21
