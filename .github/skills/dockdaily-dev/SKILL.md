---
name: dockdaily-dev
description: "DockDaily website development skill. Use when: creating new pages, components, or API routes; adding SEO/meta tags; generating Open Graph or JSON-LD structured data; building waitlist/contact/review endpoints; adding scroll-reveal animations, kinetic headings, numbered story sections, or motion.so-style polish; ensuring TypeScript and Tailwind conventions match the project. Covers Next.js 16 App Router, React 19, Tailwind v4, Framer Motion 11, EmailJS, and shadcn-style patterns."
argument-hint: "What do you want to build? (page, component, API route, SEO metadata, etc.)"
user-invocable: true
---

# DockDaily Website Development

## When to Use

Load this skill when working on the DockDaily marketing/site codebase (`website-dockdaily`).

Common triggers:

- Add a new page under `src/app/<route>/page.tsx`
- Create a new reusable component in `src/components/`
- Add an API route under `src/app/api/<name>/route.ts`
- Add or update SEO metadata, Open Graph, JSON-LD, robots, sitemap
- Wire a new form (waitlist, contact, review, support)
- Apply consistent styling, layout, and content patterns

## Project Snapshot

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`), Geist fonts via `next/font/google`
- **Icons**: `lucide-react`
- **Utilities**: `clsx` via `@/lib/cn`
- **Site config**: `@/lib/site` (single source of truth for name, tagline, URL, socials)
- **Email**: EmailJS via `@emailjs/nodejs` (server-side only)
- **Analytics**: `@vercel/analytics/next` mounted in `src/app/layout.tsx`
- **Layout chrome**: `SiteHeader` + `SiteFooter` wrap every page via the root layout

## Conventions

| Concern       | Convention                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Page files    | `src/app/<route>/page.tsx`, default export `Page`, server component unless interactivity is needed |
| API routes    | `src/app/api/<name>/route.ts`, named exports for HTTP verbs, `NextResponse.json`                   |
| Components    | `src/components/<Name>.tsx`, PascalCase, default export for primary, named for helpers             |
| Class merging | Import `cn` from `@/lib/cn` (wraps `clsx`)                                                         |
| Site text     | Read from `siteConfig` in `@/lib/site`; do not hardcode names/URLs in pages                        |
| Forms         | Use `WaitlistForm` pattern: controlled state, async submit, `ok`/`error` response shape            |
| Env vars      | Read in route handlers; never expose secrets to the client                                         |
| Types         | Prefer inference; add explicit types for API request bodies                                        |
| Styling       | Tailwind v4 utility classes; respect the existing `globals.css` design tokens                      |

## Workflow

1. **Identify the primitive** — page, component, API route, or metadata.
2. **Read the relevant reference** below before generating code.
3. **Reuse existing patterns** — match the style of `WaitlistForm`, `SiteHeader`, and the existing API routes.
4. **Validate** — run `npm run lint` and `npm run build` after non-trivial changes.

## References

- [Page patterns](./references/pages.md) — App Router page templates, metadata, layout
- [Components](./references/components.md) — Component anatomy, props, and composition
- [API routes](./references/api-routes.md) — Route handlers, validation, error responses, EmailJS
- [SEO & metadata](./references/seo.md) — Metadata, Open Graph, JSON-LD, robots, sitemap
- [Motion patterns](./references/motion.md) — Reveal, KineticHeading, NumberedSection, scroll cues

## Assets

- [Page template](./assets/page.tsx) — Starter `page.tsx` for a new route
- [API route template](./assets/route.ts) — Starter `route.ts` with validation and error handling
- [Component template](./assets/component.tsx) — Starter component with `cn` and props

## Quick Commands

```bash
npm run dev        # Start dev server
npm run lint       # ESLint
npm run build      # Production build (catches type errors)
```
