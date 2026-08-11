"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * Small, motion.so-style scroll cue: a softly bouncing chevron with a label.
 * Used inside the hero to invite the user to keep scrolling.
 */
export function ScrollCue({ label = "Scroll" }: { label?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]"
    >
      <span>{label}</span>
      <motion.span
        aria-hidden
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-flex"
      >
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.span>
    </motion.div>
  );
}
