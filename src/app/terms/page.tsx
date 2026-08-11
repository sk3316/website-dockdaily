import { Reveal } from "@/components/motion/Reveal";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { siteConfig } from "@/lib/site";

type Section = {
  index: string;
  title: string;
  body: string;
};

const sections: Section[] = [
  {
    index: "01",
    title: "Use of the app",
    body: "DockDaily is provided as a personal productivity tool. You may use it to organize your own tasks, habits, and routines. You may not use the service for unlawful purposes.",
  },
  {
    index: "02",
    title: "Account and sync",
    body: "If you create an account, you are responsible for keeping your login information secure. We may disable accounts that violate our terms or engage in abusive behavior.",
  },
  {
    index: "03",
    title: "No warranties",
    body: 'We build DockDaily to be helpful, but the app is provided "as is". We are not liable for data loss, missed reminders, or any indirect damage.',
  },
  {
    index: "04",
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Material changes will be reflected here with an updated date, and continued use of the app indicates acceptance of the new terms.",
  },
];

export default function TermsPage() {
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
              <span className="eyebrow">Terms</span>
            </Reveal>
            <KineticHeading
              text="Simple terms for a calm app."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Use DockDaily for personal productivity. By using the app, you
                agree to our privacy and support terms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Terms sections — numbered
      ------------------------------------------------------------------ */}
      <section className="container-page pb-12">
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
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Contact line
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
              ✦ Contact
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Questions? One email.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              For support, questions, or requests, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
