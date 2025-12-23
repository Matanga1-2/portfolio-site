# Role Detail Pages

**Status**: Planning

## Context

The inspiration-site migration is complete with:
- Home page with About, Work timeline, Projects sections
- Content page with search, filtering, pagination
- Work section now shows nested positions per company with "promoted" badges

## Goal

Create dedicated pages for each role/company showing deeper case studies.

## Proposed Routes

```
/work/port          → Port roles detail
/work/lusha         → Lusha roles detail
/work/netbet        → NetBet roles detail
/work/idf           → IDF roles detail
```

## Page Structure

Each role detail page should include:
1. **Header**: Company name, logo (if available), total tenure
2. **Position timeline**: Visual progression through roles
3. **Case studies**: 2-3 deep dives per major role
   - Problem/context
   - Approach
   - Impact metrics
4. **Key projects**: Related items from Projects section
5. **Tech/skills**: Expanded from current tags

## Implementation Steps

1. Create `/work/:company` route in App.tsx
2. Create `RoleDetail.tsx` page component
3. Extract role data to shared `data/roles.ts` file
4. Update Work.tsx cards to link to detail pages
5. Design and implement case study sections
6. Add navigation between role pages

## Data Required

Need to expand current Work.tsx data with:
- Company logos/icons
- Extended descriptions for case studies
- Related project links
- Skills/tools used per role

## Design Notes

- Maintain terminal/code aesthetic
- Use same card/border styles as home page
- Add breadcrumb navigation: `~/work/port`
- Consider collapsible sections for mobile
