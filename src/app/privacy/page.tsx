import { SectionHeading } from "@/components/SectionHeading";

export default function PrivacyPage() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Privacy"
        title="Your privacy matters. DockDaily is local-first and ad-free."
        description="We collect only what we need for sync and improvements, and you can always export or delete your data."
      />

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            What we collect
          </h2>
          <p className="mt-3">
            By default, DockDaily stores your tasks, habits, progress, and
            preferences locally on your device. We don’t collect personal data
            unless you explicitly sign in for cloud sync.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">Cloud sync</h2>
          <p className="mt-3">
            If you enable sync, we store your data securely in Supabase. Only
            you can access this data, and we never sell it or use it for
            advertising.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            No ads, no trackers
          </h2>
          <p className="mt-3">
            DockDaily is built without advertising and without third-party
            trackers. Your usage is not used to target you with promotions.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">Data control</h2>
          <p className="mt-3">
            You can export or delete all of your data at any time. If you sign
            in, your account data is yours and can be removed on request.
          </p>
        </div>
      </div>
    </section>
  );
}
