import Link from "next/link";
import {
  Bell,
  CalendarCheck,
  CircleCheck,
  Cloud,
  Flame,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ReviewSection } from "@/components/ReviewSection";
import { PlatformAvailability } from "@/components/PlatformAvailability";

const featureHighlights = [
  {
    icon: CalendarCheck,
    title: "Plan your day in minutes",
    description:
      "A calm, opinionated daily view so you can focus on what matters and skip the busywork.",
  },
  {
    icon: Flame,
    title: "Streaks that feel kind",
    description:
      "Visualize progress without pressure. Build momentum with gentle, real-world friendly streaks.",
  },
  {
    icon: TrendingUp,
    title: "Weekly insights",
    description:
      "See your patterns at a glance. Understand what works, drop what doesn't, and improve steadily.",
  },
  {
    icon: Sparkles,
    title: "Gentle AI suggestions",
    description:
      "Tiny, contextual nudges that respect your attention — never spammy, always opt-in.",
  },
  {
    icon: Bell,
    title: "Reminders that respect you",
    description:
      "Smart notifications timed to your routine, with quiet hours and graceful dismissal.",
  },
  {
    icon: Cloud,
    title: "Local-first, cloud-optional",
    description:
      "Your data lives on your device first. Sign in only if you want seamless cross-device sync.",
  },
];

const trustPoints = [
  "No ads. Ever.",
  "Your data, your rules. Export or delete anytime.",
  "Privacy by design — local-first with Supabase sync you control.",
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          Hero
      ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--color-success)" }}
              />
              Now in private beta
            </span>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
              Master your day,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-brand-500), var(--color-accent-500))",
                }}
              >
                one calm habit at a time.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              DockDaily is a calm, focused personal growth app. Plan your day,
              keep kind streaks, and get gentle AI nudges — all synced privately
              across your devices.
            </p>

            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <Link href="#download" className="btn btn-primary">
                Join the Android closed beta
              </Link>
            </div>

            <div className="mt-2 w-full max-w-xl">
              <p className="mb-2 text-xs uppercase tracking-wider text-[var(--color-subtle)]">
                Or join the closed Android beta list
              </p>
              <WaitlistForm source="home-hero" />
            </div>

            <ul className="mt-2 grid gap-1.5 text-sm text-[var(--color-muted)] sm:grid-cols-1">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CircleCheck
                    className="h-4 w-4"
                    style={{ color: "var(--color-success)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2.5rem] blur-2xl"
              aria-hidden
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 40%, rgba(58,110,240,0.25), transparent 70%)",
              }}
            />
            <div className="relative">
              <PhoneMockup />
              <div className="absolute -left-6 top-12 hidden sm:block">
                <div className="surface-card flex items-center gap-2 px-3 py-2 text-xs">
                  <Flame
                    className="h-3.5 w-3.5"
                    style={{ color: "var(--color-accent-500)" }}
                  />
                  12-day streak
                </div>
              </div>
              <div className="absolute -right-4 bottom-16 hidden sm:block">
                <div className="surface-card flex items-center gap-2 px-3 py-2 text-xs">
                  <Sparkles
                    className="h-3.5 w-3.5"
                    style={{ color: "var(--color-brand-500)" }}
                  />
                  AI: try a 25-min walk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Logo strip / social proof
      ------------------------------------------------------------------ */}
      <section className="container-page py-8">
        <p className="text-center text-xs uppercase tracking-wider text-[var(--color-subtle)]">
          Trusted by people who want to feel a little better every day
        </p>
        <div className="mt-4 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4">
          {["Calm", "Focused", "Private", "Local-first"].map((word) => (
            <div
              key={word}
              className="text-center text-sm font-medium tracking-wide text-[var(--color-muted)]"
            >
              {word}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Feature highlights
      ------------------------------------------------------------------ */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Why DockDaily"
          title="A productivity app that doesn't yell at you."
          description="Most tools are loud. DockDaily is calm, opinionated, and designed to fade into the background so your day can take center stage."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="surface-card p-6 transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "var(--color-brand-50)",
                  color: "var(--color-brand-600)",
                }}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Showcase / product story
      ------------------------------------------------------------------ */}
      <section className="container-page py-12">
        <div className="grid items-center gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Inside the app</span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              One screen for everything that matters today.
            </h2>
            <p className="mt-3 max-w-md text-[var(--color-muted)]">
              Open DockDaily and see your plan, your habits, and a kind nudge
              from the assistant. No clutter, no urgency theater — just the day,
              ready for you.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
              <li className="flex items-center gap-2">
                <CircleCheck
                  className="h-4 w-4"
                  style={{ color: "var(--color-success)" }}
                />
                Quick daily planning in under a minute
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck
                  className="h-4 w-4"
                  style={{ color: "var(--color-success)" }}
                />
                Habit streaks that flex with real life
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck
                  className="h-4 w-4"
                  style={{ color: "var(--color-success)" }}
                />
                Weekly insights that surface real patterns
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/features" className="btn btn-ghost">
                See all features
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost">
                How it works
              </Link>
            </div>
          </div>
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          How it works (3 steps)
      ------------------------------------------------------------------ */}
      <section className="container-page py-20">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Three small steps. Then it's just your day."
          description="No 30-minute onboarding flow. No heavy setup. You should feel useful in your first session."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Plan your day",
              copy: "Add a few tasks and pick the habits you want to keep. That's it — no clutter, no overwhelm.",
            },
            {
              step: "02",
              title: "Live your day",
              copy: "Check things off as you go. Smart reminders respect your routine and quiet hours.",
            },
            {
              step: "03",
              title: "Reflect weekly",
              copy: "Sunday insights show what stuck. Streaks flex so a missed day isn't a setback.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="surface-card relative overflow-hidden p-6"
            >
              <span className="absolute right-4 top-4 text-xs font-semibold text-[var(--color-subtle)]">
                {s.step}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Trust & privacy
      ------------------------------------------------------------------ */}
      <section className="container-page py-16">
        <div className="grid items-center gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Privacy first</span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Your data is yours. Always.
            </h2>
            <p className="mt-3 max-w-md text-[var(--color-muted)]">
              DockDaily is local-first. Tasks, habits, and streaks live on your
              device. Sign in with Google only if you want seamless sync, and
              export or delete everything at any time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/privacy" className="btn btn-ghost">
                Read our privacy stance
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Why we built this
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "No ads, no trackers, no third-party data sales",
              "Encrypted sync via Supabase with row-level security",
              "Export your data as JSON in one tap",
              "One-tap account deletion — no retention tricks",
            ].map((line) => (
              <li
                key={line}
                className="surface-card flex items-start gap-3 p-4"
              >
                <CircleCheck
                  className="mt-0.5 h-4 w-4"
                  style={{ color: "var(--color-success)" }}
                />
                <span className="text-[var(--color-foreground)]">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Platform Availability (Android Live, iOS Coming Soon)
      ------------------------------------------------------------------ */}
      <PlatformAvailability />

      {/* ------------------------------------------------------------------
          Community Feedback
      ------------------------------------------------------------------ */}
      <ReviewSection />

      {/* ------------------------------------------------------------------
          Support Developer Callout
      ------------------------------------------------------------------ */}
      <section className="container-page py-12">
        <div className="surface-card flex flex-col items-center justify-between gap-6 p-8 text-center sm:flex-row sm:text-left rounded-3xl border border-[var(--color-border-strong)]">
          <div>
            <span className="pill text-xs font-semibold">☕ Support Independent Dev</span>
            <h3 className="text-xl font-bold mt-2 text-[var(--color-foreground)]">
              Enjoying DockDaily? Buy Shitanshu a coffee!
            </h3>
            <p className="text-xs text-[var(--color-muted)] mt-1 max-w-lg">
              Support ad-free, local-first software. Direct UPI contributions fuel ongoing feature development and server costs.
            </p>
          </div>
          <Link href="/support" className="btn btn-brand rounded-full px-6 py-3 text-sm font-medium shrink-0">
            Buy a Coffee ☕
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Final CTA / download
      ------------------------------------------------------------------ */}
      <section id="download" className="container-page py-20 scroll-mt-24">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, #1c2540 0%, #162c66 60%, #2a55d4 100%)",
            color: "#fff",
          }}
        >
          <h2 className="heading-display mx-auto max-w-2xl text-3xl sm:text-4xl">
            Start your day with a little more calm.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Join the Android closed beta list to receive the download link when
            testing opens and the app is available for your device.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm
              source="home-final-cta"
              buttonLabel="Join the beta list"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* A tiny inline glyph so we don't pull another icon library. */
