import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    icon: Layers,
    label: "Start small",
    title: "Add one plan and one habit.",
    description:
      "A smaller window makes the app feel useful fast. Start with the next right thing.",
  },
  {
    icon: Sparkles,
    label: "Track gently",
    title: "Check things off with ease.",
    description:
      "See progress without pressure. The interface is built for calm daily use.",
  },
  {
    icon: Rocket,
    label: "Reflect weekly",
    title: "Learn what works best.",
    description:
      "Simple stats show your streaks, wins, and the habits that matter most.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="How it works"
        title="One calm workflow to plan, do, and reflect."
        description="DockDaily is designed for people who want progress without the noise. A single daily screen, simple streaks, and weekly clarity."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {steps.map((step) => (
          <article key={step.label} className="surface-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
              <step.icon className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[var(--color-subtle)]">
              {step.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-10 text-center">
        <div className="mx-auto inline-flex rounded-full bg-[var(--color-brand-50)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-700)]">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Built for calm consistency
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          No more guilt-driven task lists.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          DockDaily helps you keep a clear plan and only the most important
          habits, so you can grow steadily without overcommitting.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/#download" className="btn btn-brand">
            Join the beta list
          </Link>
          <Link href="/features" className="btn btn-ghost">
            Explore features <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
