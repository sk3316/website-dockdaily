# Page Patterns

Use these patterns when creating a new route under `src/app/<route>/page.tsx`.

## Minimal Page (Server Component)

```tsx
// filepath: src/app/about/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} and what we are building.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeading
        eyebrow="About"
        title={`What is ${siteConfig.name}?`}
        description="A short, clear explanation of the product."
      />
      {/* content */}
    </main>
  );
}
```

## Rules

1. **Default export** named `Page` or `<Route>Page` (e.g. `AboutPage`).
2. **Server component by default** — only add `"use client"` when you need state, effects, or event handlers.
3. **Always export `metadata`** (or `generateMetadata`) for SEO. Never rely solely on the root layout.
4. **Use `siteConfig`** for the app name, tagline, description, and URL — do not hardcode.
5. **Layout**: Use a top-level `<main>` with `mx-auto max-w-* px-6 py-16` for consistent rhythm.
6. **Section headings**: Use `<SectionHeading>` with `eyebrow`, `title`, `description` props.

## Adding Open Graph

```tsx
export const metadata: Metadata = {
  title: "Features",
  description: "...",
  openGraph: {
    title: "Features — DockDaily",
    description: "...",
    url: "/features",
    siteName: siteConfig.name,
    images: [{ url: "/og/features.png", width: 1200, height: 630 }],
  },
};
```

See [seo.md](./seo.md) for full metadata, JSON-LD, and sitemap guidance.
