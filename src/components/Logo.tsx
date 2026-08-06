import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Simple wordmark for DockDaily. Uses a gradient dot + clean type to feel calm
 * and slightly premium without leaning on imagery.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="DockDaily home"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden
        className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand-500) 0%, var(--color-accent-500) 100%)",
          boxShadow:
            "0 1px 2px rgba(42, 85, 212, 0.25), 0 6px 18px rgba(58, 110, 240, 0.25)",
        }}
      >
        <span className="block h-2.5 w-2.5 rounded-full bg-white/90" />
      </span>
      <span className="text-[1.05rem]">DockDaily</span>
    </Link>
  );
}
