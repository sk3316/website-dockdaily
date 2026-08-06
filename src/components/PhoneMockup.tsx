import { Check, Flame, Sparkles } from "lucide-react";

/**
 * Static, server-rendered phone mockup used across the marketing site.
 * No real app data — just an honest visual preview of the product feel.
 */
export function PhoneMockup({ className }: { className?: string }) {
  const today = new Date();
  const dateLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={`phone-frame mx-auto w-[280px] sm:w-[300px] ${className ?? ""}`}
    >
      <div className="phone-screen">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-[var(--color-subtle)]">
          <span>9:41</span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-subtle)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-subtle)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-subtle)]" />
          </span>
        </div>

        {/* Header */}
        <div className="px-5 pt-3">
          <p className="text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
            {dateLabel}
          </p>
          <h3 className="mt-0.5 text-lg font-semibold tracking-tight">Today</h3>
        </div>

        {/* Streak card */}
        <div className="mx-5 mt-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
                Current streak
              </p>
              <p className="mt-0.5 text-2xl font-bold tracking-tight">
                12 days
              </p>
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-400), var(--color-accent-600))",
                color: "#fff",
              }}
            >
              <Flame className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{
                  background:
                    i < 5 ? "var(--color-brand-500)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Tasks list */}
        <div className="px-5 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
            Today&apos;s plan
          </p>
          <ul className="mt-2 space-y-1.5">
            {[
              { label: "Morning walk", checked: true },
              { label: "Read 20 minutes", checked: true },
              { label: "Deep work block", checked: false },
              { label: "Drink 2L water", checked: false },
            ].map((task) => (
              <li
                key={task.label}
                className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2"
              >
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full border"
                  style={{
                    background: task.checked
                      ? "var(--color-brand-500)"
                      : "transparent",
                    borderColor: task.checked
                      ? "var(--color-brand-500)"
                      : "var(--color-border-strong)",
                    color: "#fff",
                  }}
                >
                  {task.checked ? <Check className="h-2.5 w-2.5" /> : null}
                </span>
                <span
                  className={`text-[12px] ${
                    task.checked
                      ? "text-[var(--color-subtle)] line-through"
                      : "text-[var(--color-foreground)]"
                  }`}
                >
                  {task.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI suggestion */}
        <div className="mx-5 mt-3 rounded-2xl border border-[var(--color-brand-100)] bg-[var(--color-brand-50)] p-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                background: "var(--color-brand-500)",
                color: "#fff",
              }}
            >
              <Sparkles className="h-3 w-3" />
            </span>
            <p className="text-[11px] font-semibold text-[var(--color-brand-700)]">
              Today&apos;s nudge
            </p>
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-[var(--color-brand-800)]">
            You walk best at 8am. Try a 25-min walk before your first call.
          </p>
        </div>

        {/* Tab bar */}
        <div className="mt-3 flex items-center justify-around border-t border-[var(--color-border)] py-2.5 text-[10px] text-[var(--color-subtle)]">
          <span className="font-semibold text-[var(--color-foreground)]">
            Today
          </span>
          <span>Habits</span>
          <span>Insights</span>
          <span>You</span>
        </div>
      </div>
    </div>
  );
}
