# SEO & Metadata

The site uses Next.js 16's Metadata API. Source of truth for app identity is `@/lib/site` (`siteConfig`).

## Per-Page Metadata

```tsx
// filepath: src/app/features/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description: "Habits, tasks, streaks, and AI suggestions — all in one app.",
  openGraph: {
    title: `Features — ${siteConfig.name}`,
    description: "...",
    url: `${siteConfig.url}/features`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og/features.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Features — ${siteConfig.name}`,
    description: "...",
    images: ["/og/features.png"],
  },
};
```

## JSON-LD Structured Data

Add a `SoftwareApplication` schema on the home page and `Organization` site-wide:

```tsx
// inside page.tsx or layout.tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: siteConfig.url,
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    {/* ...rest of page */}
  </>
);
```

## Sitemap

`src/app/sitemap.ts` (create if missing):

```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/how-it-works",
    "/about",
    "/contact",
    "/support",
    "/privacy",
    "/terms",
  ];
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
```

## Robots

`src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```

## Checklist for a New Public Page

- [ ] Unique `title` and `description`
- [ ] `openGraph` with image at 1200x630
- [ ] `twitter` card
- [ ] Added to `sitemap.ts`
- [ ] Not blocked by `robots.ts`
- [ ] Uses `siteConfig` (no hardcoded names/URLs)
