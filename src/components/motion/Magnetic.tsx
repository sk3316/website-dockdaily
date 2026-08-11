"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Strength of the pull in pixels. Higher = more drift. */
  strength?: number;
}

/**
 * Subtle magnetic hover: the child drifts toward the pointer while hovered.
 * Great for primary CTAs.
 */
export function Magnetic({ children, className, strength = 8 }: MagneticProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      whileHover={{ x: strength * 0.4, y: -strength * 0.6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
