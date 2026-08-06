import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

/**
 * Site-wide footer with product + company columns, brand, and legal note.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]/40">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-[var(--color-subtle)]">
              Built with care. Local-first, cloud-optional, always yours.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-subtle)]">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.footer.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-subtle)]">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-subtle)] md:flex-row md:items-center">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Questions?{" "}
            <a
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
