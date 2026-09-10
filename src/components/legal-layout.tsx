import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SocialLinks } from "@/components/social-links";
import { BOOKING, PHONE, PHONE_DISPLAY } from "@/lib/site";
import logoAsset from "@/assets/logo.png.asset.json";

export const BUSINESS_NAME = "Kisses and Paws Board and Care";
export const BUSINESS_ADDRESS = "5760 SW 8th Street, Suite 300, West Miami, FL 33144";
export const BUSINESS_EMAIL = "kissesandpawsboardandcare@gmail.com";
export const LAST_UPDATED = "September 10, 2026";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt={`${BUSINESS_NAME} logo`}
              width={822}
              height={661}
              className="h-16 w-auto"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose">
              Board &amp; Care
            </p>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={BOOKING}
              className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-crimson sm:px-5"
            >
              Book Now
            </a>
            <a
              href={`tel:${PHONE}`}
              aria-label={`Call ${BUSINESS_NAME} at ${PHONE_DISPLAY}`}
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-crimson sm:inline-flex"
            >
              <span className="size-2 rounded-full bg-rose" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="font-semibold text-primary hover:text-crimson">
            Home
          </Link>
          <span className="mx-2 text-ash">/</span>
          <span className="font-semibold text-foreground">{title}</span>
        </nav>

        <h1 className="font-display text-4xl leading-tight">{title}</h1>
        <p className="mt-2 text-sm text-ash">
          {BUSINESS_NAME} · Last updated {LAST_UPDATED}
        </p>

        <div className="legal mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ash sm:flex-row">
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-semibold hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/sms-terms" className="font-semibold hover:text-primary">
              SMS Terms
            </Link>
          </div>
          <SocialLinks />
          <p className="text-center sm:text-right">
            © 2026 · {BUSINESS_NAME} · West Miami, Florida
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-4">
      <h2 className="mb-2 font-display text-xl text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
