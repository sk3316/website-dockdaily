# DockDaily Website Plan (Temporary)

## 1. What the app already does

Based on the current structure, DockDaily is a personal productivity app focused on:
- Daily tasks and habits
- Progress tracking and streaks
- Weekly stats and insights
- AI-assisted suggestions
- Reminders and notifications
- Local-first storage with cloud sync via Supabase
- Google sign-in and profile preferences

This makes the website a strong fit for a product-led growth experience rather than a simple landing page.

---

## 2. Website goal

Create a modern website for DockDaily that:
1. Explains the product clearly
2. Converts visitors into app users
3. Supports onboarding and trust
4. Shows the mobile app as the main product
5. Offers a future web dashboard experience for logged-in users

---

## 3. Recommended tech stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend / Data
- Supabase Auth
- Supabase Database
- Supabase Edge Functions

### Product / Growth
- Stripe for premium plans (future)
- PostHog or Google Analytics for product analytics
- Resend for email onboarding and support

### Deployment
- Vercel
- Cloudflare or Vercel DNS

### Why this stack
- Matches the current Supabase-first architecture
- Good for SEO and marketing pages
- Fast for modern UI and mobile-friendly experiences
- Easy to scale into a full SaaS-style product website

---

## 4. Suggested website structure

### A. Marketing pages
- Home
  - Hero section with app preview
  - Core value proposition
  - CTA: Download app / Start free
- Features
  - Habit tracking
  - Task management
  - Streaks and progress
  - AI suggestions
  - Reminders and sync
- How it works
  - 3-step onboarding flow
- Pricing (future)
  - Free plan
  - Pro plan
- About / Story
  - Mission and product philosophy
- Contact / Support
- Privacy / Terms

### B. Authenticated experience (future)
- Login / signup
- Dashboard overview
- Progress insights
- Settings
- Export / account management

---

## 5. Website pages and content direction

### Home page
Focus on:
- “Build better habits without friction”
- Clear screenshots or product mockups
- CTA buttons for app download and sign up
- Social proof and trust points

### Features page
Highlight the main app strengths:
- Quick daily planning
- Habit streaks
- Weekly insights
- AI recommendation engine
- Offline-first reliability

### Pricing page
Keep it simple at first:
- Free tier for individual use
- Pro tier for advanced insights, themes, or cloud extras

### About page
Tell the story of DockDaily as a calm, focused personal growth tool.

---

## 6. UI/UX direction

The website should feel:
- Clean and minimal
- Calm and motivating
- Mobile-first
- Professional but approachable
- Slightly premium and modern

Use:
- Soft gradients
- Rounded cards
- Strong typography
- Minimal animations
- Clear CTAs

---

## 7. Suggested architecture

### Frontend architecture
- Landing pages in Next.js
- Reusable component system with shadcn/ui
- SEO-optimized metadata and structured content

### Backend architecture
- Supabase handles auth and storage
- Edge functions can support AI suggestions and web sync actions
- Web app can reuse the same data model as the mobile app

### Data model alignment
The website should stay aligned with the existing app concepts:
- tasks
- habits
- habit_logs
- profiles
- preferences

This keeps the product ecosystem consistent across mobile and web.

---

## 8. MVP plan

### Phase 1: Website foundation
- Set up Next.js project
- Add Tailwind and design system
- Build home, features, about, and contact pages
- Add SEO metadata and responsive layout

### Phase 2: Conversion-focused experience
- Add app download CTAs
- Add waitlist or signup form
- Add pricing and trust sections
- Add analytics

### Phase 3: Authenticated web experience
- Add login/signup with Supabase
- Create a simple dashboard
- Show user progress and insights

### Phase 4: Growth and scaling
- Add premium features
- Add onboarding email flow
- Improve personalization and retention

---

## 9. Recommended launch priorities

1. Build the landing page first
2. Make the value proposition crystal clear
3. Add strong CTA flow to the mobile app
4. Add trust content like privacy and data handling
5. Later expand into a dashboard experience

---

## 10. Final recommendation

The best plan is to build a modern Next.js marketing website for DockDaily that connects tightly to the existing Supabase-based app ecosystem. The site should feel polished, calm, and conversion-focused, while leaving room to grow into a full web dashboard later.

If you want the next step, the best immediate move is:
- create the Next.js website
- build the landing page
- add feature sections and app CTA
- connect Supabase auth for future login/dashboard expansion
