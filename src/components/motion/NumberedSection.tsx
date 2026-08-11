"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface NumberedSectionProps {
  index: string; // e.g. "01"
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** Optional slot to render content next to the heading (like a phone mockup). */
  media?: ReactNode;
  reverse?: boolean;
}

/**
 * Motion.so-style numbered step block. Massive index, bold serif-style display
 * title, soft entrance, and an optional media column.
 */
export function NumberedSection({
  index,
  eyebrow,
  title,
  description,
  children,
  className,
  media,
  reverse = false,
}: NumberedSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section className={`container-page py-20 sm:py-28 ${className ?? ""}`}>
      <div
        className={`grid items-center gap-10 lg:gap-16 ${
          media ? "lg:grid-cols-12" : ""
        }`}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${media ? "lg:col-span-7" : "lg:col-span-12"} ${
            reverse && media ? "lg:order-2" : ""
          }`}
        >
          <div className="flex items-baseline gap-5">
            <span className="heading-number">{index}</span>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          </div>
          <h2 className="heading-display mt-4 text-3xl sm:text-5xl">{title}</h2>
          {description ? (
            <div className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {description}
            </div>
          ) : null}
          {children ? <div className="mt-7">{children}</div> : null}
        </motion.div>

        {media ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: reduce ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${reverse ? "lg:order-1" : ""} lg:col-span-5`}
          >
            {media}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
