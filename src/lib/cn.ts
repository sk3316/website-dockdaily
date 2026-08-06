import clsx, { type ClassValue } from "clsx";

/**
 * Tiny class name composer used across the DockDaily marketing site.
 * Centralized so we can swap to a Tailwind merge helper later if needed.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
