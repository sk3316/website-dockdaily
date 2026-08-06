import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export default function TermsPage() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Terms"
        title="Simple terms for a simple productivity experience."
        description="Use DockDaily for personal productivity. By using the app, you agree to our privacy and support terms."
      />

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Use of the app
          </h2>
          <p className="mt-3">
            DockDaily is provided as a personal productivity tool. You may use
            it to organize your own tasks, habits, and routines. You may not use
            the service for unlawful purposes.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Account and sync
          </h2>
          <p className="mt-3">
            If you create an account, you are responsible for keeping your login
            information secure. We may disable accounts that violate our terms
            or engage in abusive behavior.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            No warranties
          </h2>
          <p className="mt-3">
            We build DockDaily to be helpful, but the app is provided &quot;as is&quot;.
            We are not liable for data loss, missed reminders, or any indirect
            damage.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
          <p className="mt-3">
            For support, questions, or requests, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-foreground)] underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
