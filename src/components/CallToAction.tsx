import { ArrowUpRight, Mail } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
      <div className="aurora" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[clamp(220px,30vw,420px)] leading-none text-[rgba(199,179,255,0.05)]"
        aria-hidden
      >
        →
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <h2 className="font-display text-[clamp(52px,8vw,108px)] leading-[0.92] tracking-wide">
          FOLLOW
          <br />
          <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-bright)] to-[var(--color-primary-deep)] bg-clip-text text-transparent">
            THE RACE
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-dim)]">
          Stay updated on Team Integrum's journey from Almaty to the World
          Finals.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:integrum.racing@gmail.com"
            className="btn-glow group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary-deep)] to-[var(--color-primary-bright)] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_8px_32px_-8px_rgba(124,58,237,0.7)] transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://www.instagram.com/integrum.racing?igsh=MW10eTZwcG9ycGh1Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            @integrum.racing
          </a>
        </div>
      </div>
    </section>
  );
}
