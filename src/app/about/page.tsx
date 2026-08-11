import { HeartHandshake, Sparkles, Umbrella } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { KineticHeading } from "@/components/motion/KineticHeading";

const pillars = [
  {
    index: "01",
    icon: Sparkles,
    title: "Gentle intention",
    description:
      "DockDaily is built to support small, meaningful daily habits without overloading your attention.",
  },
  {
    index: "02",
    icon: HeartHandshake,
    title: "Trustworthy defaults",
    description:
      "Privacy, local-first sync, and no ads are all default choices, not premium add-ons.",
  },
  {
    index: "03",
    icon: Umbrella,
    title: "Built to last",
    description:
      "A calm, sustainable practice beats fast productivity. We design for life, not bursts.",
  },
];

const values = [
  {
    index: "04",
    title: "Calm over urgency",
    description:
      "No streak guilt, no urgency theater. Missed a day? The app still works.",
  },
  {
    index: "05",
    title: "Local over cloud",
    description:
      "Your data lives on your device first. Sync is opt-in, and you can leave any time.",
  },
  {
    index: "06",
    title: "Craft over feature creep",
    description:
      "Every screen is a quiet composition. Numbers are loud when they need to be, and silent when they don’t.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ------------------------------------------------------------------
          Hero
      ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Reveal amount={0.1}>
              <span className="eyebrow">About</span>
            </Reveal>
            <KineticHeading
              text="Steady progress, not more noise."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                We believe daily habits should feel calm, achievable, and worth
                keeping. The app is intentionally simple so your attention stays
                where it matters.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Three pillars (01–03)
      ------------------------------------------------------------------ */}
      <section className="container-page py-20 sm:py-24">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">01</span>
            <span className="eyebrow">Our pillars</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Three quiet rules behind every screen.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              y={24}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--color-brand-50)",
                    color: "var(--color-brand-600)",
                  }}
                >
                  <pillar.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-[var(--color-subtle)]">
                  {pillar.index}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Story — NumberedSection
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="02"
        eyebrow="Our story"
        title="From a personal experiment to a quiet app."
        description={
          <>
            DockDaily started as a personal experiment: how to keep a little
            more of what mattered each day without letting the tool become the
            thing. From there we built a focused set of features that feel
            supportive instead of pushy.
          </>
        }
      />

      <NumberedSection
        index="03"
        eyebrow="Why we built it"
        title="A goal for the next decade, not the next quarter."
        description={
          <>
            Our goal is to make habit building approachable for anyone, whether
            you want a few gentle reminders, a simple daily plan, or a private
            view of progress over time.
          </>
        }
        reverse
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ The promise
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Quiet by default. Yours, always.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              DockDaily will never show ads, sell your data, or lock core
              features behind a paywall. We&apos;d rather grow slowly with the
              people who actually use the app.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              {[
                "No ads",
                "Local-first",
                "Open roadmap",
                "Quiet by default",
              ].map((label) => (
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
          Values (04–06)
      ------------------------------------------------------------------ */}
      <section className="container-page py-20 sm:py-24">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">04</span>
            <span className="eyebrow">What we believe</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Three small principles, written large.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.index}
              delay={i * 0.08}
              y={24}
              className="surface-card p-6 sm:p-8"
            >
              <span className="heading-number text-4xl text-[var(--color-brand-500)] sm:text-5xl">
                {v.index}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {v.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

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
              ✦ One more thing
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              A calm experience, designed for life.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              We made choices like quiet notifications, private sync, and
              minimal labels so you can use DockDaily as a daily companion
              instead of a daily chore.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
