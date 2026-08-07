"use client";

import { useState, type FormEvent } from "react";
import { Star, Check, Loader2, Send, Mail, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ReviewSection() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!reviewText.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your feedback comments.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          rating,
          review: reviewText.trim(),
          role: role.trim() || "User",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error || "Could not send feedback. Please try again.",
        );
        return;
      }

      setStatus("success");

      // Reset form inputs
      setName("");
      setEmail("");
      setRole("");
      setRating(5);
      setReviewText("");
    } catch {
      setStatus("error");
      setErrorMessage("Network issue. Please check your connection and try again.");
    }
  }

  return (
    <section id="reviews" className="container-page py-20 scroll-mt-24">
      <SectionHeading
        align="center"
        eyebrow="Share Feedback"
        title="We'd love to hear your thoughts."
        description="Have suggestions, feedback, or a quick review? Submit below to send it directly to our inbox."
      />

      <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-lg">
        {/* Subdued Header Banner */}
        <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] px-6 py-3.5 text-xs text-[var(--color-muted)] sm:px-8">
          <div className="flex items-center gap-2 font-medium">
            <Mail className="h-4 w-4 text-[var(--color-brand-500)]" />
            <span>Direct Feedback Channel</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold text-[var(--color-foreground)] shadow-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Encrypted & Private</span>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
                Feedback Sent!
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                Thank you for your feedback. Your message was sent directly to our team inbox.
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-subtle)]">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Delivered securely • We review every response</span>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="btn btn-ghost mt-4 text-xs font-medium"
              >
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Rating Selector */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = (hoverRating ?? rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            active
                              ? "fill-amber-400 text-amber-400"
                              : "text-[var(--color-border-strong)]"
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="ml-3 text-sm font-semibold text-[var(--color-foreground)]">
                    {hoverRating ?? rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="review-name" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                    Name <span className="text-[var(--color-danger)]">*</span>
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] px-3.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="review-email" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                    Email <span className="text-[var(--color-danger)]">*</span>
                  </label>
                  <input
                    id="review-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] px-3.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none"
                  />
                </div>
              </div>

              {/* Role/Title */}
              <div>
                <label htmlFor="review-role" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                  Role / Occupation (Optional)
                </label>
                <input
                  id="review-role"
                  type="text"
                  placeholder="e.g. Designer, Developer, Student"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-11 w-full rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] px-3.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none"
                />
              </div>

              {/* Review / Feedback Text Area */}
              <div>
                <label htmlFor="review-text" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                  Your Feedback / Review <span className="text-[var(--color-danger)]">*</span>
                </label>
                <textarea
                  id="review-text"
                  rows={4}
                  placeholder="Tell us what you think about DockDaily or what features you'd like to see..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] p-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-brand-500)] focus:outline-none"
                />
              </div>

              {/* Error Message Display */}
              {errorMessage && (
                <p className="text-xs font-medium text-[var(--color-danger)]">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-brand h-12 w-full rounded-full px-8 text-sm font-medium sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Feedback <Send className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
