import { Play, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { TUTORIALS } from "../data/content";

export function Tutorials() {
  return (
    <section
      id="tutorials"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-2)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>Tutorials</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-[clamp(40px,5.5vw,78px)] leading-[0.95] tracking-wide">
            CAD LEARNING
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-bright)] bg-clip-text text-transparent">
              HUB
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {TUTORIALS.map((t, i) => (
            <Reveal key={t.label} delay={0.15 + i * 0.1}>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-surface-2)]/70"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/15 blur-3xl transition-all group-hover:bg-[var(--color-primary)]/25" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-primary)]">
                      {t.label}
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.05] tracking-wide">
                      {t.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-deep)] to-[var(--color-primary-bright)] text-white shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-transform group-hover:scale-110">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="relative mt-5 text-[13.5px] leading-relaxed text-[var(--color-text-dim)]">
                  {t.desc}
                </p>
                <div className="relative mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)] underline decoration-[var(--color-primary)]/50 underline-offset-4 transition-colors group-hover:text-[var(--color-primary)]">
                  Watch on YouTube
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
