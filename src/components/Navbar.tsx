import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../data/content";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(10,6,18,0.78)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://www.instagram.com/integrum.racing?igsh=MW10eTZwcG9ycGh1Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            Instagram
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-mute)]">
            Almaty · KZ
          </span>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-[var(--color-border-strong)] p-2 text-[var(--color-primary)] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-2)] lg:hidden">
          <nav className="flex flex-col gap-3 px-6 py-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/integrum.racing?igsh=MW10eTZwcG9ycGh1Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-primary)]/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-primary)]"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
