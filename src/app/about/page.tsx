import { HeartHandshake, Sparkles, Umbrella } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    icon: Sparkles,
    title: "Gentle intention",
    description:
      "DockDaily is built to support small, meaningful daily habits without overloading your attention.",
  },
  {
    icon: HeartHandshake,
    title: "Trustworthy defaults",
    description:
      "Privacy, local-first sync, and no ads are all default choices, not premium add-ons.",
  },
  {
    icon: Umbrella,
    title: "Built to last",
    description:
      "A calm, sustainable practice beats fast productivity. We design for life, not bursts.",
  },
];

export default function AboutPage() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-8">
          <SectionHeading
            eyebrow="About"
            title="DockDaily is for people who want steady progress, not more noise."
            description="We believe daily habits should feel calm, achievable, and worth keeping. The app is intentionally simple so your attention stays where it matters."
          />
          <div className="space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
            <p>
              DockDaily started as a personal experiment: how to keep a little
              more of what mattered each day without letting the tool become the
              thing. From there we built a focused set of features that feel
              supportive instead of pushy.
            </p>
            <p>
              Our goal is to make habit building approachable for anyone,
              whether you want a few gentle reminders, a simple daily plan, or a
              private view of progress over time.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="surface-card p-6">
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-3xl"
                style={{
                  background: "var(--color-brand-50)",
                  color: "var(--color-brand-600)",
                }}
              >
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          A calm experience
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          We made choices like quiet notifications, private sync, and minimal
          labels so you can use DockDaily as a daily companion instead of a
          daily chore.
        </p>
      </div>
    </section>
  );
}
