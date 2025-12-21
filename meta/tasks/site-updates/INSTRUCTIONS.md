# Task: Site Updates

> **Making changes to the portfolio site structure, components, or features**

---

## When to Use

Use this task when Matan wants to:
- Update existing components or pages
- Fix bugs or issues
- Add new sections to existing pages
- Modify styling or design
- Implement planned features

---

## Before Making Changes

### 1. Understand the Context
- Read [meta/SITE-OVERVIEW.md](../../meta/SITE-OVERVIEW.md) for architecture
- Check which components are affected
- Understand the current design patterns

### 2. Check for Related Plans
- Look in [projects/](../../projects/) for related initiatives
- Ensure changes align with the content hub vision

### 3. Branch Strategy
- Create feature branch from `main`
- Use descriptive branch names: `add-[feature]`, `fix-[issue]`, `update-[component]`

---

## Site Architecture Reference

### Key Directories
```
app/                 # Pages (Next.js App Router)
components/home/     # Homepage sections
components/shared/   # Reusable components
components/projects/ # Project-specific components
```

### Design Tokens (Tailwind)
- Navy primary: `bg-navy-primary` (#0a192f)
- Green accent: `green-500` (#10b981)
- Blue accent: `blue-500` (#3b82f6)
- Text: `text-white`, `text-gray-300`

### Component Patterns
- Client components: Start with `'use client'`
- Animations: Use Framer Motion
- Scroll effects: Use hooks from `app/hooks/`

---

## Process

### Step 1: Clarify Requirements
- What exactly needs to change?
- What's the expected outcome?
- Are there design references?

### Step 2: Identify Files
- List files that need modification
- Note any new files needed

### Step 3: Plan Changes
- Outline the code changes
- Consider edge cases
- Think about responsive design

### Step 4: Implement
- Make changes with proper TypeScript types
- Follow existing patterns
- Maintain consistent styling

### Step 5: Test
- Verify in development server
- Check responsive behavior
- Test all affected interactions

---

## Common Updates

### Adding a New Section to Homepage
1. Create component in `components/home/`
2. Import and add to `app/page.tsx`
3. Add section ID for navigation

### Adding a New Page
1. Create directory in `app/[page-name]/`
2. Add `page.tsx` with content
3. Update navigation if needed

### Updating Styling
1. Modify Tailwind classes
2. For new colors, update `tailwind.config.ts`
3. Keep consistent with design system

---

## Quality Checklist

Before committing:
- [ ] Code follows existing patterns
- [ ] TypeScript has no errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Accessibility considered

---

**Last Updated:** 2025-01-XX
