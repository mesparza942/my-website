# CLAUDE.md — Portfolio Website

This file gives Claude Code the context needed to assist effectively with this project.

## What This Project Is

Personal portfolio website for Marcelo Esparza (Full-stack JavaScript Engineer, based in Quito, Ecuador). It is a Next.js app that acts as an interactive résumé — visitors can browse or search across work experience, skills, projects, courses, exercises, and education.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Next.js production build → .next/
npm run start     # Serve the production build
npm test          # Run Vitest test suite
npm run lint      # ESLint check
```

## Architecture

### Framework
Next.js 16 App Router (`src/app/`). Single page — no additional routes needed yet.

### Layout
Two-column layout at `xl` breakpoint, single column on mobile:
- **Left** (`xl:w-1/5`): `SideBar` (profile card) + floating "Let's Talk" button
- **Right** (remainder): `Content` (search bar + results or default summary)

### Search Flow
1. `SearchBar` holds a controlled input → debounced 500 ms via `useDebounce`
2. Debounced term passed to `SearchResults`
3. `SearchResults` renders one `Search<Category>` component per data type
4. Each `Search<Category>` calls `useSearch` with its JSON data and search keys
5. `useSearch` builds a Fuse.js index, returns scored matches, and fires a GA4 event
6. If `searchTerm` is empty, `ExperienceSummary` renders instead

### Server vs Client Components
Components that use React hooks or browser APIs have `"use client"` at the top (`Content`, `ThemeToggle`, `SearchBar`, all `Search*.tsx`). Everything else is a Server Component by default.

### Dark Mode
Tailwind `darkMode: "class"` — `ThemeToggle` adds/removes `dark` class on `document.body` using `useLocalStorage` from usehooks-ts.

### Data Layer
All content is in `src/data/*.json`. Imported at build time — no runtime API calls. The `ISearchTags` interface (`{ tags: string[] }`) is the common contract that makes all types searchable with the same `useSearch` hook.

### Font Awesome + SSR
Font Awesome auto-CSS is disabled in `layout.tsx` (`config.autoAddCss = false`) and the styles are imported manually from `@fortawesome/fontawesome-svg-core/styles.css`. This prevents hydration mismatches.

## Key Files

| Path | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — fonts, GA4 scripts, Font Awesome CSS |
| `src/app/page.tsx` | Main page — sidebar + content columns |
| `src/app/globals.css` | Tailwind directives + global CSS |
| `next.config.ts` | Next.js configuration |
| `vitest.config.ts` | Vitest config (standalone, uses @vitejs/plugin-react) |
| `src/components/Content.tsx` | Orchestrates search state and result rendering |
| `src/components/SearchResults.tsx` | Renders all Search* components for a given term |
| `src/utils/useSearch.ts` | Generic Fuse.js hook used by every Search* component |
| `src/utils/types.ts` | All TypeScript interfaces |
| `src/utils/eventTracking.ts` | GA4 helpers — call these for any new trackable event |
| `src/data/` | JSON content — edit here to update site content |
| `tailwind.config.js` | Custom color (`greenFav: #00b000`), animations, dark mode config |
| `public/` | Static assets — company logos, profile photo, CV PDF |

## Conventions

- **Components**: PascalCase `.tsx` files inside `src/components/`
- **Utilities / hooks**: camelCase `.ts` files inside `src/utils/`
- **Tests**: co-located with the component, named `<Component>.test.tsx`
- **Styling**: Tailwind utility classes only — no CSS modules, no inline styles
- **Path alias**: `@/` maps to `src/` (configured in `tsconfig.json`)
- **No comments** unless the reason is non-obvious
- **No new abstractions** unless three or more callsites justify it

## Adding a New Content Category

1. Add a JSON file to `src/data/`
2. Define a TypeScript interface in `src/utils/types.ts` (must extend `ISearchTags`)
3. Create a `Search<Category>.tsx` component that calls `useSearch` — add `"use client"` at the top
4. Register it in `SearchResults.tsx`

## Adding API Routes (for future AI features)

Create `src/app/api/<route>/route.ts` — this runs on the server, safe for API keys:
```ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // call Claude API or other external services here
  return NextResponse.json({ result: '...' })
}
```

## Styling Notes

- Brand green: `#00b000` — use `text-greenFav` / `bg-greenFav` (defined in `tailwind.config.js`)
- Dark background: `#0D1117` (GitHub-dark style)
- Loading skeleton uses the custom `loading` animation from Tailwind config
- Typing animation on `WelcomeAnimated` uses `animate-typing` — do not change its fixed width logic without checking mobile breakpoints

## Testing Notes

- Config: `vitest.config.ts` (separate from Next.js build config)
- Test environment: jsdom
- Setup file: `src/setupTests.ts`
- Only `.test.tsx` files are picked up
- Use React Testing Library — no enzyme, no direct DOM manipulation
- Do not mock JSON data imports; use the real files

## What NOT to Do

- Do not add a routing library — Next.js App Router handles routing
- Do not introduce a state management library — local state + props is sufficient
- Do not add CSS files or styled-components — Tailwind only
- Do not call external APIs directly from client components — use `src/app/api/` routes to keep keys secure
