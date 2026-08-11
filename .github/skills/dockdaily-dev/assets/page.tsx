// filepath: src/app/<route>/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Page Title",
  description: `Short description for SEO — what this page is about, in ~155 characters.`,
  openGraph: {
    title: `Page Title — ${siteConfig.name}`,
    description: "Short description for SEO.",
    url: `${siteConfig.url}/<route>`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og/<route>.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function PageNamePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeading
        eyebrow="Eyebrow"
        title="Clear, benefit-driven title"
        description="One or two sentences explaining the value of this page."
      />

      {/* Add your content here */}
    </main>
  );
}
