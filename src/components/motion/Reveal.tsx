"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Animation delay in seconds. */
  delay?: number;
  /** Vertical offset in pixels the element starts from. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Animate once or every time the element enters the viewport. */
  once?: boolean;
  /** Trigger as soon as any part is visible. */
  amount?: number;
}

/**
 * Motion.so-style scroll reveal: fades in and slides up when the element
 * enters the viewport. Respects `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  amount = 0.2,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
