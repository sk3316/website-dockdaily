"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface KineticHeadingProps {
  text: string;
  className?: string;
  /** Word-level stagger delay in seconds. */
  stagger?: number;
  /** Per-word animation duration in seconds. */
  duration?: number;
  /** Animate on mount or only on scroll. */
  triggerOnView?: boolean;
}

/**
 * Motion.so-inspired "kinetic" heading: each word animates in from below with
 * a small mask, creating a confident, cinematic reveal.
 */
export function KineticHeading({
  text,
  className,
  stagger = 0.06,
  duration = 0.8,
  triggerOnView = false,
}: KineticHeadingProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : stagger },
    },
  };

  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: reduce ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion.h2;
  const motionProps = triggerOnView
    ? {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, amount: 0.4 },
      }
    : {
        initial: "hidden" as const,
        animate: "show" as const,
      };

  return (
    <MotionTag
      className={className}
      variants={container}
      {...motionProps}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="block">
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden align-baseline"
            style={{ marginRight: "0.25em" }}
          >
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionTag>
  );
}
