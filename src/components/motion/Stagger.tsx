"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Per-child delay in seconds. */
  stagger?: number;
  /** Per-child duration in seconds. */
  duration?: number;
  /** Animate on mount or on scroll. */
  triggerOnView?: boolean;
  amount?: number;
}

/**
 * Wraps a group of children with a staggered fade-up animation. Use it as a
 * parent of any list of sibling elements (e.g. feature cards).
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  duration = 0.6,
  triggerOnView = true,
  amount = 0.2,
}: StaggerProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : stagger },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      {...(triggerOnView
        ? {
            whileInView: "show",
            viewport: { once: true, amount },
          }
        : { animate: "show" })}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={item} className="contents-host">
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item} className="contents-host">
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
