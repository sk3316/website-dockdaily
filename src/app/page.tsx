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
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ReviewSection } from "@/components/ReviewSection";
import { PlatformAvailability } from "@/components/PlatformAvailability";
import { ScrollCue } from "@/components/motion/ScrollCue";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { Magnetic } from "@/components/motion/Magnetic";

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

const storySteps = [
  {
    index: "01",
    title: "Plan your day",
    copy: "Add a few tasks and pick the habits you want to keep. That's it — no clutter, no overwhelm.",
  },
  {
    index: "02",
    title: "Live your day",
    copy: "Check things off as you go. Smart reminders respect your routine and quiet hours.",
  },
  {
    index: "03",
    title: "Reflect weekly",
    copy: "Sunday insights show what stuck. Streaks flex so a missed day isn't a setback.",
  },
];

const trustWords = [
  "Calm",
  "Focused",
  "Private",
  "Local-first",
  "No ads",
  "Yours",
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
        <div className="container-page relative grid items-center gap-8 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <Reveal delay={0.05} amount={0.1}>
              <span className="pill">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-success)" }}
                />
                Now in private beta
              </span>
            </Reveal>

            <div className="w-full">
              <KineticHeading
                text="Master your day, one calm habit at a time."
                className="heading-display text-3xl sm:text-5xl lg:text-6xl"
                triggerOnView={false}
              />
            </div>

            <Reveal delay={0.4}>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                DockDaily is a calm, focused personal growth app. Plan your day,
                keep kind streaks, and get gentle AI nudges — all synced
                privately across your devices.
              </p>
            </Reveal>

            <Reveal delay={0.55} className="w-full max-w-xl">
              <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <Magnetic className="w-full sm:w-auto" strength={6}>
                  <Link
                    href="/download"
                    className="btn btn-primary w-full sm:w-auto px-5 py-3"
                  >
                    Join the Android closed beta
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.7} className="w-full max-w-xl">
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-[var(--color-subtle)]">
                  Or join the closed Android beta list
                </p>
                <WaitlistForm source="home-hero" />
              </div>
            </Reveal>

            <Reveal delay={0.85}>
              <ul className="grid gap-1.5 text-sm text-[var(--color-muted)]">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CircleCheck
                      className="h-4 w-4 shrink-0"
                      style={{ color: "var(--color-success)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            y={40}
            duration={0.9}
            className="relative hidden sm:block"
          >
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
          </Reveal>
        </div>

        <div className="container-page relative flex justify-center pb-10 sm:pb-14">
          <ScrollCue label="Scroll to explore" />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Marquee — social proof
      ------------------------------------------------------------------ */}
      <section className="py-6">
        <div className="marquee">
          <div className="marquee-track">
            {[...trustWords, ...trustWords].map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-muted)]"
              >
                ✦ {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Numbered story — Motion.so pattern
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="01"
        eyebrow="The brief"
        title="One tap, one plan, zero friction."
        description={
          <>
            Open DockDaily and the day is already laid out. Add a few tasks,
            pick a few habits, and you&apos;re done. No 30-minute setup, no
            personality quiz — just a small, considered tool that gets out of
            the way.
          </>
        }
        media={<PhoneMockup />}
      >
        <ul className="grid gap-2 text-sm text-[var(--color-muted)]">
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
      </NumberedSection>

      <NumberedSection
        index="02"
        eyebrow="The craft"
        title="Designs that fade into the background."
        description={
          <>
            A calm interface with a real type system, soft neutrals, and a hint
            of motion — so the app feels premium without shouting for attention.
            The dashboard reads like a magazine, the controls feel like paper.
          </>
        }
        reverse
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Aesthetic system
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Monochrome, warm type, kinetic motion.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              Every screen is a quiet composition. Numbers, labels, and prompts
              are loud when they need to be — and silent when they don&apos;t.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              {[
                "#0D0F14",
                "#575860",
                "#D9CCAC",
                "#F0EFEC",
                "#8C9297",
                "#3A6EF0",
              ].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-white/10"
                    style={{ background: c }}
                  />
                  <span className="font-mono text-[10px] text-[#f0efec]/80">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <NumberedSection
        index="03"
        eyebrow="The payoff"
        title="Streaks you can actually keep."
        description={
          <>
            Miss a day? No streak guilt. Sundays surface a small recap so you
            notice what stuck — and what to drop. The whole app is built to
            reward consistency over intensity.
          </>
        }
        media={<PhoneMockup />}
      />

      {/* ------------------------------------------------------------------
          How it works (3 steps) — motion.so flavor
      ------------------------------------------------------------------ */}
      <section className="container-page py-20">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">04</span>
            <span className="eyebrow">How it works</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Three small steps. Then it&apos;s just your day.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            No 30-minute onboarding flow. No heavy setup. You should feel useful
            in your first session.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {storySteps.map((s) => (
            <Reveal
              key={s.index}
              delay={Number(s.index) * 0.05}
              className="surface-card relative overflow-hidden p-6 sm:p-8"
            >
              <span className="heading-number text-4xl text-[var(--color-brand-500)] sm:text-5xl">
                {s.index}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Feature highlights — numbered 05–10
      ------------------------------------------------------------------ */}
      <section className="container-page py-20 sm:py-24">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">05</span>
            <span className="eyebrow">Why DockDaily</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            A productivity app that doesn&apos;t yell at you.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Most tools are loud. DockDaily is calm, opinionated, and designed to
            fade into the background so your day can take center stage.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {featureHighlights.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.05}
              y={24}
              className="surface-card p-5 sm:p-6 transition-shadow hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl sm:h-10 sm:w-10"
                  style={{
                    background: "var(--color-brand-50)",
                    color: "var(--color-brand-600)",
                  }}
                >
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="font-mono text-xs text-[var(--color-subtle)]">
                  0{i + 6}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight sm:mt-5 sm:text-lg">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Trust & privacy
      ------------------------------------------------------------------ */}
      <section className="container-page py-16">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Privacy first</span>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                Your data is yours. Always.
              </h2>
              <p className="mt-3 max-w-md text-[var(--color-muted)]">
                DockDaily is local-first. Tasks, habits, and streaks live on
                your device. Sign in with Google only if you want seamless sync,
                and export or delete everything at any time.
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
              ].map((line, i) => (
                <Reveal
                  key={line}
                  delay={i * 0.06}
                  y={16}
                  className="surface-card flex items-start gap-3 p-4"
                >
                  <CircleCheck
                    className="mt-0.5 h-4 w-4"
                    style={{ color: "var(--color-success)" }}
                  />
                  <span className="text-[var(--color-foreground)]">{line}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------
          Platform Availability
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
        <Reveal>
          <div className="surface-card flex flex-col items-center justify-between gap-6 p-8 text-center sm:flex-row sm:text-left rounded-3xl border border-[var(--color-border-strong)]">
            <div>
              <span className="pill text-xs font-semibold">
                ☕ Support Independent Dev
              </span>
              <h3 className="text-xl font-bold mt-2 text-[var(--color-foreground)]">
                Enjoying DockDaily? Buy Shitanshu a coffee!
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 max-w-lg">
                Support ad-free, local-first software. Direct UPI contributions
                fuel ongoing feature development and server costs.
              </p>
            </div>
            <Magnetic strength={6}>
              <Link
                href="/support"
                className="btn btn-brand rounded-full px-6 py-3 text-sm font-medium shrink-0"
              >
                Buy a Coffee ☕
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------
          Final CTA / download
      ------------------------------------------------------------------ */}
      <section id="download" className="container-page py-20 scroll-mt-24">
        <Reveal>
          <div
            className="surface-dark p-10 text-center sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #0d0f14 0%, #1c2540 60%, #2a55d4 100%)",
            }}
          >
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Start tomorrow
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Start your day with a little more calm.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#f0efec]/75 sm:text-lg">
              Join the Android closed beta list to receive the download link
              when testing opens and the app is available for your device.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <WaitlistForm
                source="home-final-cta"
                buttonLabel="Join the beta list"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
