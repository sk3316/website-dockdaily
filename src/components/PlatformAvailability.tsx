"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Smartphone, Apple, Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export function PlatformAvailability() {
  const [iosEmail, setIosEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleIosNotify(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!iosEmail || !/^\S+@\S+\.\S+$/.test(iosEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: iosEmail, source: "ios-waitlist" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setMessage(data?.error || "Could not save email. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the iOS notify list! We'll email you as soon as TestFlight opens.");
      setIosEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <section id="availability" className="container-page py-16 scroll-mt-24">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 shadow-sm">
        <div className="text-center max-w-2xl mx-auto">
          <span className="pill">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-500)]" />
            Platform Availability
          </span>
          <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
            Where to get DockDaily
          </h2>
          <p className="mt-3 text-[var(--color-muted)] text-base">
            We are currently focused on delivering the best Android experience first, with an iOS version in active development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Android Card (Live Beta) */}
          <div className="surface-card relative flex flex-col justify-between p-6 sm:p-8 border-2 border-[var(--color-brand-500)]/30 bg-[var(--color-surface-muted)]">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live in Beta
              </span>
            </div>

            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--color-foreground)]">
                Android (Google Play Store)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                Currently available via Closed Beta testing. Join our beta list to receive an instant Google Play testing download link.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-[var(--color-muted)]">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Supports Android 8.0 and above
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Local-first storage & fast performance
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-border)]">
              <a
                href="#download"
                className="btn btn-brand w-full h-11 justify-center rounded-full text-sm font-medium"
              >
                Join Android Beta List
              </a>
            </div>
          </div>

          {/* iOS Card (In Development) */}
          <div className="surface-card flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <Apple className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-subtle)] border border-[var(--color-border)]">
                  In Development
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[var(--color-foreground)]">
                iOS (Apple App Store)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                We are building the native iOS experience. Enter your email below to get notified when TestFlight beta opens.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-border)]">
              {status === "success" ? (
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 p-2">
                  <Check className="h-4 w-4" />
                  <span>{message}</span>
                </div>
              ) : (
                <form onSubmit={handleIosNotify} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="you@icloud.com"
                      value={iosEmail}
                      onChange={(e) => setIosEmail(e.target.value)}
                      required
                      className="h-11 flex-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] px-4 text-xs text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn btn-ghost h-11 shrink-0 rounded-full px-4 text-xs font-medium border border-[var(--color-border-strong)]"
                    >
                      {status === "submitting" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Bell className="h-3.5 w-3.5 mr-1" /> Notify Me
                        </>
                      )}
                    </button>
                  </div>
                  {message && status === "error" && (
                    <p className="text-[11px] text-[var(--color-danger)] px-2">
                      {message}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
