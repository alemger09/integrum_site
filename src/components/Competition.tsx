import { Trophy, Flag, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { COMPETITION_STAGES } from "../data/content";

export function Competition() {
  return (
    <section
      id="competition"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-2)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>The Race</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-[clamp(40px,5.5vw,78px)] leading-[0.95] tracking-wide">
            HOW IT
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-bright)] bg-clip-text text-transparent">
              WORKS
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full gap-8 rounded-2xl border border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary-deep)]/15 via-[var(--color-surface)]/60 to-[var(--color-surface)]/60 p-9 lg:col-span-2 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  <Flag className="h-3.5 w-3.5" />
                  The vehicle
                </div>
                <div className="mt-3 font-display text-[28px] leading-tight tracking-wide">
                  A miniature F1 car. Real engineering challenges.
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-text-dim)]">
                  The car body is just 152mm long — slightly larger than a
                  smartphone. It must be CNC-machined to exact tolerances,
                  weigh at minimum 48g, incorporate front and rear wings, and
                  use a CO₂ cartridge propulsion system. Every millimetre is a
                  design decision.
                </p>
                <div className="mt-7 flex items-baseline gap-3">
                  <span className="font-display text-[56px] leading-none tracking-wide text-[var(--color-primary)]">
                    80
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                    km/h top speed
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg)]/50 p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[64px] leading-none tracking-wide text-[var(--color-primary-bright)]">
                    0.916
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                    s — world record (20m)
                  </span>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  Set by Australian team Infinitude in 2016. The number every
                  team in every country races to beat. That benchmark drives
                  every design decision Integrum makes.
                </p>
              </div>
            </div>
          </Reveal>

          {COMPETITION_STAGES.map((s, i) => (
            <Reveal key={s.step} delay={0.1 + i * 0.08}>
              <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  {s.step}
                </div>
                <div className="mt-3 font-display text-[26px] tracking-wide">
                  {s.title}
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-[var(--color-primary)]/40 bg-gradient-to-br from-[var(--color-primary-deep)]/25 via-[var(--color-surface-2)]/60 to-[var(--color-surface)]/60 p-8 transition-all duration-300 hover:border-[var(--color-primary)] lg:col-span-2">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1a0833]">
                    <Trophy className="h-3.5 w-3.5" />
                    The Goal
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    <Globe2 className="h-3.5 w-3.5" />
                    Stage 03 — World Finals
                  </div>
                  <div className="mt-3 font-display text-[34px] leading-tight tracking-wide">
                    Held at a Formula 1 Grand Prix venue.
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-text-dim)]">
                    Teams from 65+ countries compete. The 2026 World Finals
                    take place at Aramco's venue in Saudi Arabia. This is where
                    Integrum is headed.
                  </p>
                </div>
                <div className="grid shrink-0 grid-cols-2 gap-3 text-center lg:grid-cols-1">
                  <div className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg)]/40 px-6 py-4">
                    <div className="font-display text-[40px] leading-none text-[var(--color-primary-bright)]">
                      65+
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">
                      Countries
                    </div>
                  </div>
                  <div className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg)]/40 px-6 py-4">
                    <div className="font-display text-[40px] leading-none text-[var(--color-primary-bright)]">
                      2026
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">
                      KSA · Aramco
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
