# Motion Patterns

Motion.so-inspired scroll, reveal, and micro-interaction patterns. Built on **Framer Motion 11**.

## Primitives

All primitives live in `src/components/motion/`. They respect `prefers-reduced-motion` automatically.

| Component         | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `Reveal`          | Fade + slide up on viewport entry                            |
| `KineticHeading`  | Word-by-word mask reveal (hero treatment)                    |
| `NumberedSection` | Motion.so signature: massive index + headline + media column |
| `ScrollProgress`  | Fixed top progress bar that grows with scroll                |
| `ScrollCue`       | Bouncing chevron + "Scroll" label                            |
| `Magnetic`        | Subtle pointer-tracking hover for primary CTAs               |
| `Stagger`         | Staggered reveal of sibling children                         |

## Reveal

Default usage:

```tsx
<Reveal>
  <h2>Fades up when it enters the viewport</h2>
</Reveal>
```

With options:

```tsx
<Reveal delay={0.2} y={32} duration={0.8} amount={0.3}>
  <p>Custom offset, duration, and trigger threshold.</p>
</Reveal>
```

## Kinetic Heading

Use for hero titles. Splits the string on spaces and animates each word from below a mask.

```tsx
<KineticHeading
  text="Master your day, one calm habit at a time."
  className="heading-display text-5xl"
  triggerOnView={false} // animate on mount
/>
```

`triggerOnView: true` makes it animate when scrolled into view (good for in-page hero variants).

## Numbered Section

The signature motion.so block. Massive tabular number + eyebrow + display title + optional media.

```tsx
<NumberedSection
  index="01"
  eyebrow="The brief"
  title="One tap, one plan, zero friction."
  description={<p>Optional JSX copy.</p>}
  media={<PhoneMockup />} // optional
  reverse // flips media to the left
>
  {/* extra content below the description */}
</NumberedSection>
```

Numbering convention: use sequential 2-digit strings (`01`, `02`, `03`...) so all sections read like a continuous story.

## Scroll Progress

Mount **once in the root layout** so it spans every page. Do not add it to individual pages.

```tsx
// src/app/layout.tsx
<body>
  <ScrollProgress />
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</body>
```

The bar auto-hides for users with `prefers-reduced-motion: reduce`.

## Scroll Cue

Place at the bottom of the hero to invite further scrolling:

```tsx
<ScrollCue label="Scroll to explore" />
```

## Magnetic CTAs

Wrap a `<Link>` or `<button>` to give it a small hover drift toward the pointer.

```tsx
<Magnetic strength={6}>
  <Link href="#download" className="btn btn-primary">
    Join the beta
  </Link>
</Magnetic>
```

`strength` controls the maximum pixel offset. Keep it 4–8 for primary CTAs.

## Composition Rules

1. **Reveal everything in view.** Wrap each section's content in `Reveal` or `NumberedSection`. Avoid leaving static content above the fold.
2. **One motion per scroll position.** Don't stack two competing animations on the same element.
3. **Animate once.** Default `once: true` keeps the page calm on scroll-back.
4. **Stagger siblings.** For lists of cards, pass `delay={i * 0.05}` per index.
5. **Respect the dark CTA.** Use `surface-dark` (a built-in dark surface) sparingly — once per page — for the motion.so "storybook" moment.
