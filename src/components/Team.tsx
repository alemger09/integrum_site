import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { TEAM } from "../data/content";

export function Team() {
  return (
    <section
      id="team"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <SectionLabel>Our Team</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(40px,5.5vw,78px)] leading-[0.95] tracking-wide">
                THE PEOPLE
                <br />
                BEHIND{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-bright)] bg-clip-text text-transparent">
                  INTEGRUM
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-[300px] text-[13.5px] leading-relaxed text-[var(--color-text-dim)]">
              Five students, one mission: engineer a world-class STEM Racing
              car and represent Almaty with speed, precision, and purpose.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={0.1 + (i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-2)]/70">
                <div className="absolute left-0 top-0 h-0 w-[3px] bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-deep)] transition-all duration-300 group-hover:h-full" />

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] transition-colors group-hover:border-[var(--color-primary)]">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover object-[center_top]"
                    />
                  </div>
                  <div>
                    <div className="font-display text-[22px] tracking-wide">
                      {m.name}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-primary)]">
                      {m.role}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  {m.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-dim)] transition-colors group-hover:border-[var(--color-primary)]/40 group-hover:text-[var(--color-text)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
