import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page py-20 text-center">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-subtle)]">
          404
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          The page you’re looking for doesn’t exist yet. Return to the homepage
          and explore the app.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn btn-brand">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
