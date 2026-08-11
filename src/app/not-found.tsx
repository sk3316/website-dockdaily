import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { Magnetic } from "@/components/motion/Magnetic";

export default function NotFound() {
  return (
    <section className="container-page relative overflow-hidden py-20">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 py-12 text-center">
        <Reveal amount={0.1}>
          <span className="pill">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-danger)" }}
            />
            Lost the path
          </span>
        </Reveal>

        <Reveal delay={0.05} y={16}>
          <span className="heading-number text-7xl sm:text-8xl">404</span>
        </Reveal>

        <KineticHeading
          text="That page is somewhere else."
          className="heading-display mx-auto max-w-xl text-3xl sm:text-5xl"
          triggerOnView={false}
        />

        <Reveal delay={0.4}>
          <p className="max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist yet. Return to
            the homepage and explore the app.
          </p>
        </Reveal>

        <Reveal delay={0.55} className="mt-2">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={6}>
              <Link href="/" className="btn btn-brand">
                Go home
              </Link>
            </Magnetic>
            <Link href="/download" className="btn btn-ghost">
              Join the beta list
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
