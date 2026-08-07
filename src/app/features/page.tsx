import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Settings2,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneMockup } from "@/components/PhoneMockup";

const features = [
  {
    icon: CalendarDays,
    title: "Daily planning in one screen",
    description:
      "Focus on the day ahead with a single calm view that combines tasks, habits, and reminders.",
  },
  {
    icon: Trophy,
    title: "Flexible streaks",
    description:
      "Keep momentum with streaks that understand life. Missing one day doesn't mean starting over.",
  },
  {
    icon: Sparkles,
    title: "AI-powered suggestions",
    description:
      "Get thoughtful, unobtrusive prompts like the best time to move or when to unplug.",
  },
  {
    icon: Clock3,
    title: "Smart reminders",
    description:
      "Set reminders that arrive when you're ready, not when you are interrupted.",
  },
  {
    icon: Settings2,
    title: "Custom routines",
    description:
      "Create habits and tasks that adapt to your style — morning rituals, work sprints, rest habits.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-center gap-8">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to build a steady, calm routine."
            description="DockDaily combines daily planning, habit tracking, and thoughtful reminders into one focused app experience."
          ></SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="surface-card p-6">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "var(--color-brand-50)",
                    color: "var(--color-brand-600)",
                  }}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-ghost">
              Talk to the team
            </Link>
            <Link href="/how-it-works" className="btn btn-brand">
              How it works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
