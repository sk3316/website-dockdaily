import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { NumberedSection } from "@/components/motion/NumberedSection";
import { Magnetic } from "@/components/motion/Magnetic";
import { ReviewSection } from "@/components/ReviewSection";

export const metadata = {
  title: "Feedback — DockDaily",
  description:
    "Share feedback with the DockDaily team. Help us shape a calmer, more useful habit app.",
};

export default function FeedbackPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Reveal amount={0.1}>
              <span className="eyebrow">Feedback</span>
            </Reveal>
            <KineticHeading
              text="Send feedback that helps DockDaily stay calm and useful."
              className="heading-display text-3xl sm:text-5xl lg:text-6xl"
              triggerOnView={false}
            />
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                We read every message. Tell us what feels good, what feels
                noisy, or what feature would make your daily routine easier.
              </p>
            </Reveal>
            <Reveal
              delay={0.55}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Magnetic strength={6}>
                <Link href="/download" className="btn btn-brand">
                  Join the beta list
                </Link>
              </Magnetic>
              <Link href="/support" className="btn btn-ghost">
                Support the developer
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <NumberedSection
          index="01"
          eyebrow="Why feedback"
          title="Your thoughts guide the next calm release."
          description={
            <>
              Every suggestion helps us decide what stays and what goes.
              Feedback from real people keeps DockDaily grounded, quiet, and
              more trustworthy.
            </>
          }
        />
      </section>

      <ReviewSection />

      <section className="container-page py-20">
        <NumberedSection
          index="02"
          eyebrow="Privacy first"
          title="Your feedback is private and handled with care."
          description={
            <>
              We don&apos;t sell your email or your ideas. Messages are reviewed
              by the developer, and we keep the process simple and transparent.
            </>
          }
          reverse
          media={
            <div className="surface-dark p-8 sm:p-10">
              <span className="eyebrow" style={{ color: "#d9ccac" }}>
                ✦ What to expect
              </span>
              <h3 className="heading-display mt-4 text-3xl text-[#f0efec] sm:text-4xl">
                A thoughtful, human response.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8c9297] sm:text-base">
                Most messages get a reply within 12 hours. If you ask for help,
                we follow up directly; if you share a feature idea, we keep you
                in the loop.
              </p>
            </div>
          }
        />
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
              ✦ Ready to send it?
            </span>
            <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
              Help us make DockDaily better for everyone.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#f0efec]/75 sm:text-lg">
              If you&apos;re here to share a bug, a wish, or a better workflow,
              this is the best place to reach us.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={6}>
                <Link href="/support" className="btn btn-primary">
                  Support the project
                </Link>
              </Magnetic>
              <Link
                href="/download"
                className="btn btn-ghost"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#f0efec",
                }}
              >
                Join the beta list
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
