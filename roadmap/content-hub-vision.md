# Project: Content Hub Vision

> **Transforming the portfolio site into a central content hub**

---

## Project Overview

**Goal**: Build a central hub on the personal site that serves as the gateway to all professional content.

**Status**: Planning

**Last Updated**: 2025-01-XX

---

## The Vision

The portfolio site evolves from a simple portfolio into a **content aggregator** where visitors can:
- Discover all types of content Matan produces
- Filter by category and interest
- Access full content via links to source platforms
- See a comprehensive professional presence

---

## Content Categories

### 1. Thought Leadership & Philosophy
High-level idea pieces, industry perspectives, future of work/tech.

**Examples**:
- "Why Agents Need a Context Lake"
- Industry trend analysis
- Vision pieces on AI and engineering

### 2. Practical Guides & Workflows
Step-by-step guides, tactical how-tos, process documentation.

**Examples**:
- "How I Build a PRD"
- "My AI Tools Stack"
- Productivity workflows

### 3. Industry Analysis
Deep dives on technology, market trends, company analysis.

**Examples**:
- Platform engineering landscape
- Developer tools market
- AI in software development

### 4. Personal Journey
Career insights, lessons learned, professional development.

**Examples**:
- Career transitions
- Leadership lessons
- Building in public

---

## Content Sources

| Platform | Purpose | Integration |
|----------|---------|-------------|
| **Substack** | Primary blogging | Teaser + link |
| **LinkedIn** | Short-form thought pieces | Teaser + link |
| **Port Blog** | Company/product content | Teaser + link |
| **Podcasts** | Audio appearances | Embed or link |
| **YouTube** | Video content | Embed or link |
| **Conferences** | Talks and presentations | Recording links |

---

## Site Structure (Proposed)

```
/                     # Homepage with featured content
/content              # Content hub main page
/content/[category]   # Filtered by category
/content/[slug]       # Individual teaser page (optional)
/media                # Media appearances
/tools                # Tools stack showcase
/about                # Expanded about section
```

---

## Implementation Phases

### Phase 1: Foundation (Current)
- [x] Assistant system for content management
- [ ] Content data structure design
- [ ] Basic content listing component

### Phase 2: Content Hub MVP
- [ ] Content hub page with listings
- [ ] Category filtering
- [ ] Content card components
- [ ] Integration with first content source

### Phase 3: Media & Expansion
- [ ] Media appearances section
- [ ] Tools stack section
- [ ] Enhanced filtering and search
- [ ] Featured content rotation

### Phase 4: Polish
- [ ] SEO optimization
- [ ] Social sharing
- [ ] Analytics integration
- [ ] Performance optimization

---

## Technical Considerations

### Content Storage Options

**Option A: Static Data Files**
- Store content in TypeScript/JSON files
- Build-time generation
- Simple, no backend needed
- Manual updates

**Option B: Headless CMS**
- Use Contentful, Sanity, or similar
- Dynamic content updates
- More complex setup
- Better for frequent updates

**Recommendation**: Start with Option A, migrate if needed.

### Content Data Structure

```typescript
// types/content.ts

export type ContentCategory =
  | 'thought-leadership'
  | 'practical-guide'
  | 'industry-analysis'
  | 'personal-journey';

export type SourcePlatform =
  | 'substack'
  | 'linkedin'
  | 'port-blog'
  | 'medium'
  | 'other';

export interface ContentEntry {
  id: string;
  title: string;
  summary: string;
  category: ContentCategory;
  sourceUrl: string;
  sourcePlatform: SourcePlatform;
  publishedDate: string;
  tags: string[];
  featuredImage?: string;
  featured?: boolean;
}

export type MediaType = 'podcast' | 'video' | 'talk' | 'webinar';

export interface MediaEntry {
  id: string;
  title: string;
  show: string;
  type: MediaType;
  url: string;
  publishedDate: string;
  description?: string;
  duration?: string;
  topics: string[];
  thumbnail?: string;
  featured?: boolean;
}
```

---

## Content Staging

Use this section to stage content before the feature is built.

### Pending Content Entries
<!-- Add new content here as they're captured -->

*No entries yet*

### Pending Media Appearances
<!-- Add new media here as they're captured -->

*No entries yet*

---

## Open Questions

1. Should individual content have dedicated pages or just link out?
2. How much teaser content to show vs. link to source?
3. Should we pull content dynamically (RSS) or manually curate?
4. How to handle content that lives in multiple places?

---

## Success Metrics

- All professional content discoverable in one place
- Clear categorization that helps visitors find relevant content
- Increased traffic to source platforms (Substack, LinkedIn)
- Professional presence that showcases thought leadership

---

## Related Files

- [tasks/add-content/INSTRUCTIONS.md](../tasks/add-content/INSTRUCTIONS.md)
- [tasks/add-media-appearance/INSTRUCTIONS.md](../tasks/add-media-appearance/INSTRUCTIONS.md)
- [meta/SITE-OVERVIEW.md](../meta/SITE-OVERVIEW.md)
- [ai-branding-rewrite.md](ai-branding-rewrite.md) - Related: site positioning update

---

**Project Owner**: Matan Grady
**Assistant Support**: Portfolio Site Assistant
