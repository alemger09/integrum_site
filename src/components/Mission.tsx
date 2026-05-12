import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { PILLARS } from "../data/content";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden py-24 text-center lg:py-32"
    >
      <div className="aurora" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[180px] tracking-[20px] text-[rgba(199,179,255,0.025)]"
        aria-hidden
      >
        INTEGRUM
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel align="center">Our Mission</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-[920px] font-display text-[clamp(32px,5vw,68px)] leading-[1.05] tracking-wide">
            To prove that{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-bright)] bg-clip-text text-transparent">
              Kazakhstan
            </span>
            <br />
            belongs on the world stage
            <br />
            of engineering.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-relaxed text-[var(--color-text-dim)]">
            We are Team Integrum — students from Almaty who believe that
            world-class engineering talent exists everywhere. Our mission is to
            compete at the highest level, represent our country with pride, and
            inspire the next generation of Kazakh engineers and scientists.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={0.1 + i * 0.1}>
              <div className="group h-full bg-[var(--color-surface)]/60 p-9 text-left transition-colors hover:bg-[var(--color-surface-2)]/70">
                <div className="font-display text-[64px] leading-none tracking-wide text-[var(--color-primary)]/25 transition-colors group-hover:text-[var(--color-primary)]/50">
                  {p.n}
                </div>
                <div className="mt-3 font-display text-[26px] tracking-wide">
                  {p.title}
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
