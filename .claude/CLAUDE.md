# Portfolio Site Assistant - Entry Point

This is Matan Grady's personal portfolio site assistant. It helps manage content, plan features, and maintain the site as a central hub for all professional content.

## Session Start Sequence

At the start of EVERY new conversation:

1. **Greet**: "Portfolio Assistant ready (Start-Protocol initiated)"

2. **Load essential context**:
   - [meta/MATAN-BIO.md](../meta/MATAN-BIO.md) - Who Matan is
   - [meta/SITE-OVERVIEW.md](../meta/SITE-OVERVIEW.md) - Site structure and vision
   - [meta/reference/WRITING-GUIDELINES.md](../meta/reference/WRITING-GUIDELINES.md) - Writing standards

3. **Read the operating system**: [meta/AGENTS.md](../meta/AGENTS.md)
   - This is your source of truth for all task routing and workflows

4. **Confirm readiness** and proceed

## One-Stop Shop

[meta/AGENTS.md](../meta/AGENTS.md) is the complete operating system. It contains:
- Session Start Protocol details
- All available tasks and instructions
- Content management workflows
- Site architecture context
- Project planning guidance

**Do not duplicate AGENTS.md content here.** This file is just the entry point.

## Claude Code Permissions

Claude Code uses a three-tier settings hierarchy:

1. **Global** (`~/.claude/settings.json`) - Applies to ALL projects
2. **Project** (`.claude/settings.json` or `.claude/settings.local.json`) - This project only
3. **Enterprise** - Organization-managed (not applicable here)

### Adding Global Permissions

To allow a tool globally (across all projects), add it to `~/.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "WebSearch",
      "WebFetch"
    ]
  }
}
```

**Safe for global allow (read-only):**
- `Read`, `Glob`, `Grep` - File reading/searching
- `WebSearch`, `WebFetch` - Web access
- MCP read tools: `mcp__slack__slack_get_*`, `mcp__port__list_*`, `mcp__port__get_*`

**Keep project-specific (can modify things):**
- `Write`, `Edit` - File modifications
- `Bash` - Shell commands (use patterns like `Bash(git push:*)` for specific commands)

### This Project's Settings

Local permissions in `.claude/settings.local.json`:
- `Bash(git push:*)` - Allow git push without approval

Global permissions (from `~/.claude/settings.json`) also apply here.

---

**Site**: Matan Grady's Personal Portfolio
**Tech Stack**: Next.js 14, React, Tailwind CSS, Framer Motion
**Purpose**: Central hub for professional content, thought leadership, and portfolio showcase
