# Task: AI-Native Branding Rewrite

> **Reposition the site to showcase Matan as an AI-native Product Manager**

---

## Status: Ready

**Priority**: High
**Type**: Content Update
**Files Affected**: Multiple components

---

## Context

**Current State**: The site presents Matan as a traditional product leader focused on scaling systems and B2B SaaS. It mentions AI but doesn't capture the current role as an AI-native PM focused on automation.

**Target State**: Transform the site to showcase Matan as an AI-native Product Manager pushing the boundaries of automation and building autonomous engineering systems.

---

## Specific Changes

### 1. Hero Section
**File**: `components/home/Hero.tsx`

| Current | New |
|---------|-----|
| "Product Leader & Builder" | "AI-Native Product Manager" |
| "I tackle complex challenges to build and scale impactful products" | "Building autonomous systems that eliminate manual work" |

### 2. About Me (Short)
**File**: `components/home/AboutMe.tsx`

**Replace current text with**:

> "I've always found ways to automate tasks and build tools that make work more efficient. Today, AI makes this obsession more fun and challenging. I'm currently leading Port's transformation into an agentic engineering platform, creating autonomous systems that handle complete engineering workflows. My work explores what it takes to implement AI agents successfully while keeping humans in the loop for critical decisions."

### 3. Featured Roles Section
**File**: `components/home/FeatureRoles.tsx`

**Update "Internal Developer Portal (IDP)" to**:
- **Title**: "Agentic Engineering Platform"
- **Description**: "Leading Port's AI transformation - building 24+ autonomous agents that handle SDLC from customer tickets to production deployments"

### 4. Builder Projects Section
**File**: `components/home/BuilderProjects.tsx`

**Keep**: "AI Feature Request Triage" as is

**Update** "Port's MCP Server" description to:
> "Production MCP server enabling AI agents to orchestrate Port's platform capabilities autonomously"

**Add new projects**:

| Title | Description | Tags |
|-------|-------------|------|
| Slack AI Router | Built Slack app that routes mentions to specialized AI agents instead of generic chat | Python, Slack API, AI Orchestration |
| Task Automation Framework | Developed comprehensive task management system with automated completeness scorecards | JavaScript, Port API, Automation |

### 5. About Page (Full)
**File**: `app/about/page.tsx`

#### "Who I Am" paragraph
**Replace with**:
> "I'm an AI-native product manager obsessed with eliminating manual work through automation. With eight years of experience, I specialize in building autonomous systems and AI agents that transform how engineering teams operate. Whether through AI orchestration, custom scripts, or workflow automation, I'm constantly experimenting with ways to make processes run themselves."

#### "My Professional Journey" section
**Emphasize**:
- Leading AI team at Port with goal of creating autonomous SDLC
- Managing 24+ AI agents in production
- Developing prompt engineering strategies and AI infrastructure
- Working closely with customers to implement agentic capabilities

#### "Philosophy and Approach"
**Replace with**:
> "My approach centers on radical automation - identifying repetitive tasks and making them disappear. I believe the future isn't just about AI assistance, it's about workflow autonomy that frees humans for creative and strategic work. I work at the intersection of traditional product management and emerging AI capabilities, exploring what it really takes to implement AI agents successfully."

#### "Vision for the Future"
**Replace with**:
> "I'm pushing the boundaries of what's possible with AI agents and autonomous systems. My focus is on making AI agents actually deliver on their promise - not just as assistants, but as autonomous workers that handle complete workflows. I'm building towards a future where the entire SDLC runs itself, with humans focusing on strategy and creativity."

---

## New Section: AI & Automation Stack

**Add new section** (location TBD - could be on About page or new dedicated page)

### Tools and Technologies:
- **AI Agents & Orchestration**
  - Claude, OpenAI APIs
  - n8n workflows
  - Python automation scripts
  - Prompt engineering
  - MCP servers

---

## Tone Guidelines

| Avoid | Use Instead |
|-------|-------------|
| "Empowering" | More direct language |
| "DevOps" | "SDLC" |
| "Enabling" | "Making insights accessible" |
| Generic AI mentions | Specific autonomous systems and agents |

**Overall tone**: Practical and grounded while showing cutting-edge work. Focus on automation, AI agents, and eliminating manual work.

---

## Implementation Checklist

- [ ] Update Hero.tsx (title, tagline)
- [ ] Update AboutMe.tsx (short bio)
- [ ] Update FeatureRoles.tsx (IDP → Agentic Platform)
- [ ] Update BuilderProjects.tsx (MCP description, add 2 new projects)
- [ ] Update about/page.tsx (all sections)
- [ ] Add AI & Automation Stack section
- [ ] Review all content against tone guidelines
- [ ] Test on all screen sizes

---

## Notes

- This task was previously started on branch `update-role-and-about` (stashed changes exist)
- Check stashed changes before starting: `git stash list` and `git stash show -p`
- May want to merge with or replace existing stashed work

---

**Created**: 2025-01-XX
**Source**: Planning conversation with assistant
