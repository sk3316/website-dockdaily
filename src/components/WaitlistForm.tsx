"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Lightweight waitlist/contact email capture. Submits to /api/waitlist
 * which we will wire up later — for now it falls back to a friendly
 * success state so the UI is fully functional during development.
 */
export function WaitlistForm({
  source = "home",
  buttonLabel = "Join the beta list",
  className,
}: {
  source?: string;
  buttonLabel?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
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
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setMessage(
          data?.error || "Could not submit your email. Please try again.",
        );
        return;
      }

      setStatus("success");
      setMessage(
        "You're on the Android closed beta list — we'll email you once the download link is ready.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn("surface-card flex flex-col gap-2 p-4", className)}
        role="status"
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
            style={{ background: "var(--color-success)", color: "#fff" }}
          >
            <Check className="h-4 w-4" />
          </span>
          <p className="text-sm font-medium text-[var(--color-foreground)]">
            {message}
          </p>
        </div>
        <p className="pl-11 text-xs leading-relaxed text-[var(--color-subtle)]">
          📬 If you don&apos;t see our email, check your{" "}
          <span className="font-semibold text-[var(--color-muted)]">Spam</span>{" "}
          or{" "}
          <span className="font-semibold text-[var(--color-muted)]">Junk</span>{" "}
          folder and mark it as{" "}
          <span className="font-semibold text-[var(--color-muted)]">
            Not Spam
          </span>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex w-full flex-col gap-2 sm:flex-row", className)}
      noValidate
    >
      <label className="sr-only" htmlFor={`email-${source}`}>
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@inbox.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") {
            setStatus("idle");
            setMessage(null);
          }
        }}
        className="h-14 flex-1 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-5 py-3 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none sm:h-11 sm:rounded-full sm:px-4 sm:py-0 sm:text-sm"
        required
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-brand h-14 w-full rounded-2xl text-base sm:h-11 sm:w-auto sm:rounded-full sm:text-sm"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            {buttonLabel} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {message ? (
        <p className="sm:basis-full text-xs text-[var(--color-danger)]">
          {message}
        </p>
      ) : null}
    </form>
  );
}
