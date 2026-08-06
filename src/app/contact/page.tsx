import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WaitlistForm } from "@/components/WaitlistForm";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Reach out if you need help, feedback, or a feature request."
            description="We love hearing what helps you stay consistent. Use the form to share your email and get the Android closed beta download link once testing begins."
          />
          <div className="space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
            <p>
              Whether you want support, want to share a habit idea, or are
              curious about team-friendly workflows, we read every message.
            </p>
            <p>
              DockDaily is currently available through Android closed beta.
              Share your email to join the testing list and get the download
              link when the program starts.
            </p>
          </div>
        </div>

        <div className="surface-card p-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-foreground)]">
                  Email
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {siteConfig.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-foreground)]">
                  Response
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Within 12 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-foreground)]">
                  Office
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Remote-first, based in India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-[var(--color-subtle)]">
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
        </div>
      </div>
    </section>
  );
}
