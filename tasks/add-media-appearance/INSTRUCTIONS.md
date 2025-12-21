# Task: Add Media Appearance

> **Adding podcast appearances, videos, talks, and other media**

---

## When to Use

Use this task when Matan wants to add:
- Podcast appearances
- Video interviews
- Conference talks
- Webinar recordings
- Any media where Matan appears

---

## Information Gathering

Before adding media, collect:

### Required
1. **Title**: Name of the podcast/video/talk
2. **Show/Platform**: Where it was published (podcast name, YouTube channel, conference)
3. **URL**: Link to watch/listen
4. **Date**: When it was published/recorded
5. **Type**: What kind of media?
   - `podcast` - Audio interview/discussion
   - `video` - Video interview or presentation
   - `talk` - Conference or meetup presentation
   - `webinar` - Online presentation/panel

### Optional
6. **Description**: What was discussed (2-3 sentences)
7. **Duration**: Length of the content
8. **Topics**: Key themes covered
9. **Thumbnail**: Image for display

---

## Media Entry Format

```typescript
{
  id: string,           // kebab-case slug
  title: string,
  show: string,         // Podcast name, conference, etc.
  type: 'podcast' | 'video' | 'talk' | 'webinar',
  url: string,
  publishedDate: string,
  description?: string,
  duration?: string,    // "45 min", "1:23:00"
  topics: string[],
  thumbnail?: string,
  featured?: boolean
}
```

---

## Process

### Step 1: Gather Information
Ask for required fields if not provided.

### Step 2: Generate Description
If no description provided, draft 2-3 sentences covering:
- Main topic discussed
- Key takeaways or highlights
- Why someone should watch/listen

### Step 3: Format Entry
Structure the media appearance data.

### Step 4: Implementation Guidance
Provide instructions for adding to the site.

---

## Current Implementation Status

**Note**: The media appearances section is in planning. Until implemented:

1. Document appearances in [projects/content-hub-vision.md](../../projects/content-hub-vision.md)
2. Track entries in staging format
3. Prepare for when the feature is built

---

## Example Interaction

**User**: I appeared on a podcast

**Assistant**: Nice! Let me capture the details:
1. What's the podcast name?
2. What was the episode title?
3. What's the link to listen?
4. When did it go live?
5. What topics did you cover? (brief summary)

---

## Quality Checklist

Before finalizing:
- [ ] Title and show name are accurate
- [ ] URL is valid and accessible
- [ ] Description follows writing guidelines
- [ ] Topics are relevant keywords
- [ ] Type is correctly categorized

---

**Last Updated:** 2025-01-XX
