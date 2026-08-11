import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Magnetic } from "@/components/motion/Magnetic";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    detail: "We reply within 12 hours, every day.",
  },
  {
    icon: Phone,
    label: "Response",
    value: "Within 12 hours",
    detail: "We read every message — no bots, no autoresponders.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Remote-first",
    detail: "Built and supported from India.",
  },
];

export default function ContactPage() {
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
              <span className="eyebrow">Contact</span>
            </Reveal>
            <KineticHeading
              text="Reach out — we read every message."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Help, feedback, or a feature request — share your email to join
                the Android closed beta and we&apos;ll send the download link
                when testing begins.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.25}
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
            <div className="surface-card relative p-8">
              <div className="space-y-5">
                {contactMethods.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-foreground)]">
                        {m.label}
                      </p>
                      <p className="text-sm text-[var(--color-foreground)]">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Numbered — Reach us
      ------------------------------------------------------------------ */}
      <NumberedSection
        index="01"
        eyebrow="The basics"
        title="Three ways to reach us, in plain English."
        description={
          <>
            Whether you want support, want to share a habit idea, or are curious
            about team-friendly workflows, we read every message. Pick the
            channel that fits.
          </>
        }
        media={
          <div className="surface-dark p-8 sm:p-10">
            <span className="eyebrow" style={{ color: "#d9ccac" }}>
              ✦ We respond in
            </span>
            <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
              Under 12 hours, every day.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
              No ticket queue, no &quot;your call is important to us&quot;. Just
              a real reply from a real person.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              {["12 hr", "Daily", "1:1"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-center font-mono text-[#f0efec]/80"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <NumberedSection
        index="02"
        eyebrow="Join the list"
        title="Get the download link the moment testing opens."
        description={
          <>
            DockDaily is currently available through Android closed beta. Share
            your email to join the testing list and we&apos;ll send the download
            link the moment the program starts.
          </>
        }
      >
        <div className="surface-card p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
            Join the list
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            Get notified as soon as DockDaily launches, and receive updates on
            new features.
          </p>
          <div className="mt-5">
            <WaitlistForm source="contact" buttonLabel="Notify me" />
          </div>
        </div>
      </NumberedSection>

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
              ✦ Prefer email?
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Write to us directly.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#f0efec]/75 sm:text-lg">
              Anything urgent? Mail us and we&apos;ll get back to you the same
              day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn btn-primary"
                >
                  Email {siteConfig.email}
                </a>
              </Magnetic>
              <Link
                href="/support"
                className="btn btn-ghost"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#f0efec",
                }}
              >
                Support the developer
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
