import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Magnetic } from "@/components/motion/Magnetic";

const steps = [
  {
    index: "01",
    icon: Layers,
    label: "Start small",
    title: "Add one plan and one habit.",
    description:
      "A smaller window makes the app feel useful fast. Start with the next right thing.",
  },
  {
    index: "02",
    icon: Sparkles,
    label: "Track gently",
    title: "Check things off with ease.",
    description:
      "See progress without pressure. The interface is built for calm daily use.",
  },
  {
    index: "03",
    icon: Rocket,
    label: "Reflect weekly",
    title: "Learn what works best.",
    description:
      "Simple stats show your streaks, wins, and the habits that matter most.",
  },
];

const numberedBlocks = [
  {
    index: "04",
    title: "Plan the day, in under a minute.",
    description:
      "Pick a few tasks, choose the habits you want to keep, and you’re set. The interface is designed for fast morning planning without overwhelm.",
  },
  {
    index: "05",
    title: "Live the day, with gentle nudges.",
    description:
      "Reminders arrive when you want them — never during a meeting, never during dinner. Quiet hours, weekend mode, and per-habit pause are all first-class.",
  },
  {
    index: "06",
    title: "Reflect on the week, on Sunday.",
    description:
      "A small recap surfaces what stuck, what to drop, and where to focus next. The goal is steady improvement, not infinite intensity.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          Hero
      ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="flex flex-col items-center gap-6 text-center">
            <Reveal amount={0.1}>
              <span className="eyebrow">How it works</span>
            </Reveal>

            <KineticHeading
              text="One calm workflow to plan, do, and reflect."
              className="heading-display mx-auto max-w-3xl text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />

            <Reveal delay={0.4}>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                DockDaily is designed for people who want progress without the
                noise. A single daily screen, simple streaks, and weekly
                clarity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Three step cards (01–03)
      ------------------------------------------------------------------ */}
      <section className="container-page py-20 sm:py-24">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">01</span>
            <span className="eyebrow">The basics</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Three steps. That&apos;s the whole loop.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Plan in the morning, do during the day, reflect on Sunday. No
            30-minute onboarding. No re-learning the app.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.index}
              delay={i * 0.08}
              y={24}
              className="surface-card relative overflow-hidden p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--color-brand-50)",
                    color: "var(--color-brand-600)",
                  }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="heading-number text-3xl text-[var(--color-brand-500)] sm:text-4xl">
                  {s.index}
                </span>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[var(--color-subtle)]">
                {s.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Numbered deep-dive (04–06)
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="04"
        eyebrow="A closer look"
        title="Plan the day, in under a minute."
        description={numberedBlocks[0].description}
      />
      <NumberedSection
        index="05"
        eyebrow="A closer look"
        title="Live the day, with gentle nudges."
        description={numberedBlocks[1].description}
        reverse
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Quiet hours
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Notifications that know when to stay silent.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              Set a window and DockDaily will wait. Nudges queue up and surface
              in a single, gentle summary when you&apos;re back.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              {["07:00 — 09:00", "20:00 — 21:00", "Weekend", "Auto-pause"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 font-mono text-[#f0efec]/80"
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>
        }
      />
      <NumberedSection
        index="06"
        eyebrow="A closer look"
        title="Reflect on the week, on Sunday."
        description={numberedBlocks[2].description}
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
            <div className="mx-auto inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-[#d9ccac]">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Built for calm consistency
            </div>
            <h2 className="heading-display mx-auto mt-6 max-w-2xl text-3xl sm:text-5xl">
              No more guilt-driven task lists.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              DockDaily helps you keep a clear plan and only the most important
              habits, so you can grow steadily without overcommitting.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <Link href="/download" className="btn btn-primary">
                  Join the beta list
                </Link>
              </Magnetic>
              <Link
                href="/features"
                className="btn btn-ghost"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#f0efec",
                }}
              >
                Explore features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
