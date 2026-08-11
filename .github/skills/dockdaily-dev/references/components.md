# Components

Reusable UI lives in `src/components/`. Match the existing style of `WaitlistForm`, `SiteHeader`, `SiteFooter`, and `SectionHeading`.

## Anatomy

```tsx
// filepath: src/components/PhoneMockup.tsx
import { cn } from "@/lib/cn";

interface PhoneMockupProps {
  className?: string;
  alt?: string;
}

export function PhoneMockup({
  className,
  alt = "App preview",
}: PhoneMockupProps) {
  return (
    <figure className={cn("relative mx-auto w-full max-w-sm", className)}>
      {/* ... */}
    </figure>
  );
}
```

## Rules

1. **PascalCase** file and export name.
2. **Export a named function** (not default) — most existing components use named exports.
3. **Props interface** named `<Component>Props`, placed above the component.
4. **Class merging**: always pass through `cn(...)` so consumers can override styles.
5. **Accessibility**: include `alt` for images, `aria-label` for icon-only buttons, semantic HTML.
6. **No client-only deps in server components** — add `"use client"` only when needed (forms, state, effects, browser APIs).

## Client Component Example

```tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function Toggle({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
      className={cn(
        "rounded-md px-3 py-1",
        on ? "bg-black text-white" : "bg-neutral-200",
      )}
    >
      {label}
    </button>
  );
}
```

## Composition Tips

- Use existing primitives (`SectionHeading`, `PhoneMockup`) instead of re-implementing layout.
- Keep components focused — split when a component grows past ~150 lines.
- Co-locate small helpers in the same file; extract to `lib/` only when reused across 2+ files.
