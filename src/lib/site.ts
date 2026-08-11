/**
 * Centralized site configuration. Keep copy and links in one place so
 * marketing pages stay consistent and easy to update.
 */
export const siteConfig = {
  name: "DockDaily",
  tagline: "Master your day, one calm habit at a time",
  description:
    "DockDaily is a calm, focused personal growth app. Plan your day, track habits, keep streaks, and get gentle AI suggestions — all synced across devices.",
  url: "https://dockdaily.app",
  ogImage: "/og.svg",
  twitter: "@dockdaily",
  appStoreUrl: "#",
  playStoreUrl: "#",
  developer: "Shitanshu",
  email: "contacttoshitu26@gmail.com",
  supportEmail: "contacttoshitu26@gmail.com",
  // UPI Fundraiser details
  upiId: "shituleo26@okicici",
  upiName: "Shitanshu",
  social: {
    twitter: "https://twitter.com/dockdaily",
    github: "https://github.com/dockdaily",
    instagram: "https://instagram.com/dockdaily",
  },
  nav: [
    { label: "Features", href: "/features" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Feedback", href: "/feedback" },
    { label: "Support Developer", href: "/support" },
    { label: "About", href: "/about" },
  ],
  footer: {
    product: [
      { label: "Features", href: "/features" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Feedback", href: "/feedback" },
      { label: "Download", href: "/download" },
    ],
    company: [
      { label: "Support Developer", href: "/support" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
