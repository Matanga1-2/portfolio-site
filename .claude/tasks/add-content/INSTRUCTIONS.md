# Task: Add Content

> **Adding new content pieces to the portfolio site**

---

## When to Use

Use this task when Matan wants to:
- Add a new blog post (from Substack or other source)
- Add a LinkedIn thought piece
- Add a company blog article
- Add any written content to the site

---

## Information Gathering

Before adding content, collect:

### Required
1. **Title**: What's the content called?
2. **Source URL**: Where does the full content live? (Substack, LinkedIn, etc.)
3. **Category**: What type of content is this?
   - `thought-leadership` - Philosophical, high-level ideas
   - `practical-guide` - How-tos, workflows, tactical content
   - `industry-analysis` - Market trends, technology analysis
   - `personal-journey` - Career insights, lessons learned
4. **Date**: When was it published?

### Optional
5. **Summary**: 2-3 sentence teaser (will generate if not provided)
6. **Tags**: Relevant keywords
7. **Featured Image**: Image URL or description

---

## Content Entry Format

Each content piece should be structured as:

```typescript
{
  id: string,           // kebab-case slug
  title: string,
  summary: string,      // 2-3 sentences
  category: ContentCategory,
  sourceUrl: string,    // Link to full content
  sourcePlatform: 'substack' | 'linkedin' | 'port-blog' | 'medium' | 'other',
  publishedDate: string, // ISO date
  tags: string[],
  featuredImage?: string,
  featured?: boolean    // Show prominently?
}
```

---

## Process

### Step 1: Gather Information
Ask for the required fields if not provided.

### Step 2: Generate Summary
If no summary provided, draft a 2-3 sentence teaser that:
- Captures the main point
- Creates interest without giving everything away
- Follows writing guidelines (no marketing speak)

### Step 3: Categorize
Help determine the right category based on content type.

### Step 4: Create Entry
Format the content entry for the site's data structure.

### Step 5: Implementation Guidance
Provide instructions for where to add the content in the codebase.

---

## Current Implementation Status

**Note**: The content hub feature is in planning. Until implemented:

1. Document new content in [projects/content-hub-vision.md](../../projects/content-hub-vision.md)
2. Track content entries in a staging format
3. Prepare content for when the feature is built

---

## Example Interaction

**User**: I want to add a new content piece

**Assistant**: Great! Let me gather some details:
1. What's the title?
2. Where is it published? (Substack, LinkedIn, etc.)
3. What category fits best?
   - Thought leadership (big ideas, philosophy)
   - Practical guide (how-tos, workflows)
   - Industry analysis (trends, technology)
   - Personal journey (career, lessons)
4. When was it published?

---

## Quality Checklist

Before finalizing:
- [ ] Title is clear and accurate
- [ ] Summary follows writing guidelines
- [ ] Category is appropriate
- [ ] Source URL is valid
- [ ] Tags are relevant and consistent

---

**Last Updated:** 2025-01-XX
