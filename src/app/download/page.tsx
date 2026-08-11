import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { Magnetic } from "@/components/motion/Magnetic";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "Download — DockDaily",
  description:
    "Join the DockDaily Android beta and get early access to calm habit planning.",
};

export default function DownloadPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Reveal amount={0.1}>
              <span className="eyebrow">Download</span>
            </Reveal>
            <KineticHeading
              text="Get early access to DockDaily for Android."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Join the closed beta list and receive the download link as soon
                as Android testing opens. This is the calmest way to try
                DockDaily.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <NumberedSection
          index="01"
          eyebrow="Early access"
          title="Get the app before public launch."
          description={
            <>
              The beta is small, thoughtful, and invite-only. Join now to shape
              the product from the start and discover the calmest habit tracker
              experience.
            </>
          }
          reverse
          media={
            <div className="surface-dark p-8 sm:p-10">
              <span className="eyebrow" style={{ color: "#d9ccac" }}>
                ✦ Beta benefits
              </span>
              <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
                A quiet, private preview.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
                Be among the first to try the app, share your input, and help
                steer the feature set before we open it more widely.
              </p>
            </div>
          }
        />
      </section>

      <section className="container-page py-20">
        <Reveal amount={0.2}>
          <div className="flex items-baseline gap-5">
            <span className="heading-number">02</span>
            <span className="eyebrow">How it works</span>
          </div>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Sign up, receive a link, and start your calm habit flow.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            No app store waiting, no survey walls. Just your email and the
            download link when testing begins.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              label: "Sign up",
              detail: "Share your email to join the Android closed beta.",
            },
            {
              label: "Wait for an invite",
              detail: "We’ll email your download link before public launch.",
            },
            {
              label: "Try DockDaily",
              detail: "Install the app and start your calm, daily planning.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.08}
              y={24}
              className="surface-card p-6 sm:p-8"
            >
              <span className="heading-number text-4xl text-[var(--color-brand-500)] sm:text-5xl">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="eyebrow">Join the beta</span>
                <h2 className="heading-display mt-4 max-w-2xl text-3xl sm:text-5xl">
                  Get the download link the moment testing opens.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  Share your email and we&apos;ll send you a private beta link
                  first — no waitlist stress, no spam.
                </p>
              </div>
              <div className="max-w-xl">
                <WaitlistForm
                  source="download"
                  buttonLabel="Join the beta list"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

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
              ✦ Keep it calm
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              DockDaily is built for habits that last.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#f0efec]/75 sm:text-lg">
              The beta program is small and thoughtful. Join now to help shape
              the app without the noise.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <Link href="/feedback" className="btn btn-primary">
                  Share feedback
                </Link>
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
