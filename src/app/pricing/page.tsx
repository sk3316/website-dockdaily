import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description:
      "Core planning, habits, reminders, and weekly progress summaries.",
    perks: [
      "Daily planning screen",
      "Habit tracking",
      "Quiet reminders",
      "Weekly streak summary",
    ],
    cta: "Get started",
    recommended: false,
  },
  {
    name: "Pro",
    price: "$6.99/mo",
    description:
      "Everything in Free, plus advanced habits, themes, and premium insights.",
    perks: [
      "AI habit suggestions",
      "Custom themes",
      "Export your data",
      "Early access to web dashboard",
    ],
    cta: "Join early access",
    recommended: true,
  },
];

export default function PricingPage() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for a productivity app that stays grounded."
        description="Start with the free experience. Upgrade when you want AI suggestions, themes, and extra insights."
      ></SectionHeading>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`surface-card p-8 ${plan.recommended ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  {plan.name}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
              </div>
              {plan.recommended ? (
                <span className="pill">Recommended</span>
              ) : null}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              {plan.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-foreground)]">
              {plan.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[var(--color-brand-500)]" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#download"
              className={`btn mt-8 w-full ${plan.recommended ? "btn-primary" : "btn-ghost"}`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-6 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Keep your workflow private.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            Your core data stays local unless you choose cloud sync. Email
            support is included for every user.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/privacy" className="btn btn-sm btn-ghost">
            Privacy details
          </Link>
          <Link href="/contact" className="btn btn-sm btn-brand">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
