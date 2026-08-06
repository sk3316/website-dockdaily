import { cn } from "@/lib/cn";

/**
 * Section heading block used across marketing pages. Keeps typography
 * consistent (eyebrow + display title + supporting copy).
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";
  return (
    <div className={cn("flex max-w-2xl flex-col gap-3", alignment, className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="heading-display text-3xl sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
