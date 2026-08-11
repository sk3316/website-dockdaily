import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Settings2,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Magnetic } from "@/components/motion/Magnetic";

const features = [
  {
    index: "01",
    icon: CalendarDays,
    title: "Daily planning in one screen",
    description:
      "Focus on the day ahead with a single calm view that combines tasks, habits, and reminders.",
  },
  {
    index: "02",
    icon: Trophy,
    title: "Flexible streaks",
    description:
      "Keep momentum with streaks that understand life. Missing one day doesn't mean starting over.",
  },
  {
    index: "03",
    icon: Sparkles,
    title: "AI-powered suggestions",
    description:
      "Get thoughtful, unobtrusive prompts like the best time to move or when to unplug.",
  },
  {
    index: "04",
    icon: Clock3,
    title: "Smart reminders",
    description:
      "Set reminders that arrive when you're ready, not when you are interrupted.",
  },
  {
    index: "05",
    icon: Settings2,
    title: "Custom routines",
    description:
      "Create habits and tasks that adapt to your style — morning rituals, work sprints, rest habits.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          Hero
      ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="flex flex-col items-start gap-6">
            <Reveal amount={0.1}>
              <span className="eyebrow">Features</span>
            </Reveal>

            <KineticHeading
              text="Everything you need to build a steady, calm routine."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />

            <Reveal delay={0.4}>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                DockDaily combines daily planning, habit tracking, and
                thoughtful reminders into one focused app experience — no
                clutter, no chore.
              </p>
            </Reveal>

            <Reveal delay={0.55} className="flex flex-wrap gap-3">
              <Magnetic strength={6}>
                <Link href="/download" className="btn btn-brand">
                  Join the beta list
                </Link>
              </Magnetic>
              <Link href="/how-it-works" className="btn btn-ghost">
                How it works <ArrowRight className="h-4 w-4" />
              </Link>
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
            <div className="relative mx-auto w-fit rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <PhoneMockup />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Feature grid — numbered
      ------------------------------------------------------------------ */}
      <section className="container-page py-20 sm:py-24">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">01</span>
            <span className="eyebrow">What you get</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Five calm tools, in one focused app.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            No bloated feature lists, no “pro” paywall. Every tool below is
            available from day one.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {features.map((feature, i) => (
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
                  {feature.index}
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
          Numbered story
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="02"
        eyebrow="Designed for life"
        title="Features that bend, not break."
        description={
          <>
            Real days don’t go in straight lines. DockDaily&apos;s streaks flex
            when you need rest, AI nudges arrive when you want them, and
            reminders respect quiet hours. The product behaves like a calm
            teammate — not a strict manager.
          </>
        }
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Quiet hours
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Notifications that know when not to arrive.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              Set a window and DockDaily will wait. Nudges queue up and surface
              in a single, gentle summary when you&apos;re back.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              {["07:00", "21:00", "Daily recap", "Auto-pause"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 font-mono text-[#f0efec]/80"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ------------------------------------------------------------------
          Final CTA
      ------------------------------------------------------------------ */}
      <section className="container-page py-20">
        <Reveal>
          <div
            className="surface-dark p-10 text-center sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #0d0f14 0%, #1c2540 60%, #2a55d4 100%)",
            }}
          >
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ The next step
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Try the calmest productivity app of 2026.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#f0efec]/75 sm:text-lg">
              Join the Android closed beta and see what a quiet, focused app
              actually feels like.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <Link href="/download" className="btn btn-primary">
                  Join the beta list
                </Link>
              </Magnetic>
              <Link
                href="/contact"
                className="btn btn-ghost"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#f0efec",
                }}
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
