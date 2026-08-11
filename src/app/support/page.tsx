import Link from "next/link";
import { SupportDeveloper } from "@/components/SupportDeveloper";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Magnetic } from "@/components/motion/Magnetic";

export default function SupportPage() {
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
              <span className="pill">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-accent-500)" }}
                />
                Support the project
              </span>
            </Reveal>
            <KineticHeading
              text="Help us keep DockDaily calm & independent."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                DockDaily is built by a solo developer who believes software
                should be quiet, local-first, and respectful of your attention.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Numbered — Why support
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="01"
        eyebrow="Why support"
        title="Solo-built, ad-free, forever."
        description={
          <>
            DockDaily is built and supported by a single developer. There are no
            ads, no trackers, and no premium lock-ins. Your support keeps it
            that way.
          </>
        }
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ Where the money goes
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Servers, time, and slow growth.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              Every contribution funds Supabase hosting, Vercel deployment, and
              the long, quiet hours it takes to ship a calm app.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              {["Hosting", "Tools", "Domain", "Time"].map((label) => (
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
          SupportDeveloper embed
      ------------------------------------------------------------------ */}
      <section className="container-page py-12">
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
            <SupportDeveloper />
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------
          Numbered — What you get
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="02"
        eyebrow="What you get"
        title="A real thank-you, not a paywall."
        description={
          <>
            No locked features. No premium tier. Just a quiet, personal
            thank-you from the developer — and the knowledge that DockDaily will
            keep being DockDaily.
          </>
        }
        reverse
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
              ✦ One more thing
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Thanks for keeping it calm.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              If you can&apos;t contribute financially, sharing the app with a
              friend is just as valuable.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <Link href="/download" className="btn btn-primary">
                  Try DockDaily
                </Link>
              </Magnetic>
              <Link
                href="/about"
                className="btn btn-ghost"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#f0efec",
                }}
              >
                Read our story
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
