import { Reveal } from "@/components/motion/Reveal";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { siteConfig } from "@/lib/site";

type Section = {
  index: string;
  title: string;
  body: string[];
};

const sections: Section[] = [
  {
    index: "01",
    title: "Introduction",
    body: [
      "DockDaily is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your data — and what we deliberately do not collect.",
    ],
  },
  {
    index: "02",
    title: "What data we collect",
    body: [
      "When you use DockDaily, we collect only what is necessary to make the app work:",
      "• Your Google account basics (name, email, profile photo) for OAuth sign-in.",
      "• Tasks, habits, completion state, dates, streaks, and logs.",
      "• App preferences like theme and notification settings, stored locally on your device.",
      "• Habit and task titles sent to the Groq LLaMA 3 API when you explicitly request an AI suggestion.",
      "",
      "We do not collect: location data, contact lists, browsing history, biometric data, or anything unrelated to your tasks and habits.",
    ],
  },
  {
    index: "03",
    title: "How your data is stored",
    body: [
      "Your data lives in two places. Locally: tasks, habits, and logs in a SQLite database on your device; preferences in the secure keychain. The app works fully offline.",
      "When signed in: data syncs to Supabase (PostgreSQL on AWS), encrypted in transit and at rest, and protected by Row Level Security so only you can read your own rows.",
    ],
  },
  {
    index: "04",
    title: "AI features",
    body: [
      "When you use AI habit suggestions or chat, your habit and task titles are sent to the Groq LLaMA 3 API through a secure server-side proxy. Your API key is never exposed in the app. No personally identifiable information beyond habit/task titles is sent, and AI features are entirely optional.",
    ],
  },
  {
    index: "05",
    title: "How we use your data",
    body: [
      "Your data is used only to: display your tasks, habits, and progress; sync across devices when signed in; generate AI suggestions when you request them; and improve app stability.",
      "We do not sell your data, share it with third parties (except service providers listed below), or use it for advertising.",
    ],
  },
  {
    index: "06",
    title: "Your rights",
    body: [
      "You can export your data as JSON in one tap, or delete your account and all associated data at any time. Email " +
        siteConfig.email +
        " to request a manual export or deletion.",
    ],
  },
  {
    index: "07",
    title: "Changes to this policy",
    body: [
      "We will post any material changes to this page and bump the date below. Continued use of DockDaily after a change indicates acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
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
              <span className="eyebrow">Privacy</span>
            </Reveal>
            <KineticHeading
              text="Your privacy matters."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                DockDaily is local-first and ad-free. We collect only what we
                need for sync and improvements, and you can always export or
                delete your data.
              </p>
            </Reveal>
            <Reveal delay={0.55}>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-subtle)]">
                Last updated · July 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Policy sections — numbered
      ------------------------------------------------------------------ */}
      <section className="container-page pb-20">
        <div className="grid gap-5">
          {sections.map((s, i) => (
            <Reveal
              key={s.index}
              delay={i * 0.05}
              y={20}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex items-baseline gap-5">
                <span className="heading-number text-3xl text-[var(--color-brand-500)] sm:text-4xl">
                  {s.index}
                </span>
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {s.title}
                </h2>
              </div>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.body.map((line, j) => (
                  <p key={j} className={line.startsWith("•") ? "pl-1" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Final CTA
      ------------------------------------------------------------------ */}
      <section className="container-page pb-20">
        <Reveal>
          <div
            className="surface-dark p-10 text-center sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #0d0f14 0%, #1c2540 60%, #2a55d4 100%)",
            }}
          >
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Questions?
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              We&apos;re one email away.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              If anything in this policy is unclear, write to us and we&apos;ll
              explain in plain English.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary mt-8 inline-flex"
            >
              Email {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
