import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow="Privacy"
        title="Your privacy matters. DockDaily is local-first and ad-free."
        description="We collect only what we need for sync and improvements, and you can always export or delete your data."
      />

      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-[var(--color-subtle)]">
        Last updated: July 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            1. Introduction
          </h2>
          <p className="mt-3">
            DockDaily (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the
            App&rdquo;) is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and protect your data.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            2. What Data We Collect
          </h2>
          <p className="mt-3">
            When you use DockDaily, we collect only what&rsquo;s necessary to
            make the app work:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Google Account Information
              </span>
              {" — "}your name, email, and profile photo (used for sign-in via
              OAuth).
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Tasks and Habits
              </span>
              {" — "}titles, descriptions, completion status, dates, streaks,
              and logs.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                App Preferences
              </span>
              {" — "}theme selection and notification settings (stored locally
              on your device).
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                AI Suggestion Data
              </span>
              {" — "}when you use the AI suggestion or chat features, your habit
              and task titles are sent to the Groq LLaMA 3 API to generate
              personalized suggestions and responses.
            </li>
          </ul>
          <p className="mt-3 font-medium text-[var(--color-foreground)]">
            We do not collect:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Location data</li>
            <li>Contact lists</li>
            <li>Browsing history</li>
            <li>Biometric data</li>
            <li>Any data unrelated to your tasks and habits</li>
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            3. How Your Data Is Stored
          </h2>
          <p className="mt-3">Your data lives in two places:</p>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-foreground)]">
            Local Storage (On Your Device)
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Tasks, habits, and logs are stored in a local SQLite database.
            </li>
            <li>
              App preferences are stored in your device&rsquo;s secure keychain.
            </li>
            <li>
              The app works fully offline — no internet required to use your
              data.
            </li>
          </ul>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-foreground)]">
            Cloud Storage (When Signed In)
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              When you sign in with Google, your data is synced to Supabase, a
              PostgreSQL database hosted on AWS.
            </li>
            <li>All data is encrypted in transit via HTTPS.</li>
            <li>
              All data is encrypted at rest using Supabase&rsquo;s built-in
              encryption.
            </li>
            <li>
              Your data is secured with Row Level Security (RLS) — only you can
              access your own data.
            </li>
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            4. AI Features
          </h2>
          <p className="mt-3">
            When you use the AI habit suggestion or chat features:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Your habit and task titles are sent to the Groq LLaMA 3 API.
            </li>
            <li>
              This request is routed through a secure server-side proxy
              (Supabase Edge Function) — your API key is never exposed in the
              app.
            </li>
            <li>
              Groq may process your prompts to provide AI responses according to
              its terms of service.
            </li>
            <li>
              No personally identifiable information beyond habit/task titles is
              sent.
            </li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-[var(--color-foreground)]">
              Using AI is optional
            </span>
            {" — "}you are never required to use these features.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            5. How We Use Your Data
          </h2>
          <p className="mt-3 font-medium text-[var(--color-foreground)]">
            Your data is used only to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Display your tasks, habits, and progress in the app.</li>
            <li>Sync your data across your devices when signed in.</li>
            <li>Generate AI suggestions when you explicitly request them.</li>
            <li>Improve app stability and performance.</li>
          </ul>
          <p className="mt-3 font-medium text-[var(--color-foreground)]">
            We do not:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Sell your data.</li>
            <li>
              Share your data with third parties (except service providers
              listed below).
            </li>
            <li>Use your data for advertising or marketing.</li>
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            6. Third-Party Services
          </h2>
          <p className="mt-3">
            We use the following third-party services, each with their own
            privacy policy:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Google
              </span>{" "}
              — OAuth sign-in only.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Groq
              </span>{" "}
              — AI inference using LLaMA 3 models for habit suggestions and
              in-app chat.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Supabase
              </span>{" "}
              — cloud database, authentication, and secure server-side proxy for
              AI requests.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                AWS
              </span>{" "}
              — infrastructure hosting (Supabase runs on AWS).
            </li>
          </ul>
          <p className="mt-3">
            You should review their privacy policies for details on how they
            handle data.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            7. Your Rights and Controls
          </h2>
          <p className="mt-3">You have full control over your data:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Export
              </span>
              {" — "}download all your tasks, habits, and logs as JSON at any
              time from the app&rsquo;s Profile screen.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Sign out
              </span>
              {" — "}remove your session from any device.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Delete account
              </span>
              {" — "}permanently delete your account and all associated data
              from Supabase (this action cannot be undone).
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Clear app data
              </span>
              {" — "}delete local data without affecting your cloud account.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, open the app and navigate to{" "}
            <span className="font-semibold text-[var(--color-foreground)]">
              Profile → Privacy & Data
            </span>
            .
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            8. Data Retention
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                While you use the app
              </span>
              {" — "}your data persists indefinitely until you manually delete
              it.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                After account deletion
              </span>
              {" — "}all data is permanently removed from Supabase within 24
              hours.
            </li>
            <li>
              <span className="font-semibold text-[var(--color-foreground)]">
                Backup copies
              </span>
              {" — "}Supabase maintains automated backups, but these are deleted
              after 7 days following account deletion.
            </li>
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            9. Children&rsquo;s Privacy
          </h2>
          <p className="mt-3">
            DockDaily is suitable for children above 3 years old when used with
            parental guidance. We do not knowingly collect personal data from
            children without appropriate parental or guardian consent. If we
            become aware that a child&rsquo;s personal data has been collected
            without such consent, we will delete it immediately.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            10. Changes to This Privacy Policy
          </h2>
          <p className="mt-3">
            We may update this policy from time to time. We will notify you of
            any changes by posting the new policy here and updating the
            &ldquo;Last updated&rdquo; date. Your continued use of the app
            constitutes acceptance of the updated policy.
          </p>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            11. Contact Us
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-foreground)] underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="mt-4 italic text-[var(--color-subtle)]">
            DockDaily is built with care for your privacy. We believe you should
            know exactly what happens with your data.
          </p>
        </div>
      </div>
    </section>
  );
}
