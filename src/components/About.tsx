import { BarChart3, Cog, DraftingCompass, Gauge } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ABOUT_CARDS } from "../data/content";

const ABOUT_ICONS = {
  engineering: Cog,
  design: DraftingCompass,
  enterprise: BarChart3,
  racing: Gauge,
} as const;

export function About() {
  return (
    <section
      id="about"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-2)] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <Reveal>
            <SectionLabel>What is STEM Racing</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(44px,5.5vw,84px)] leading-[0.95] tracking-wide">
              ENGINEERING
              <br />
              MEETS THE
              <br />
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-bright)] bg-clip-text text-transparent">
                TRACK
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--color-text-dim)]">
              <p>
                <strong className="font-medium text-[var(--color-text)]">
                  STEM Racing
                </strong>{" "}
                (formerly F1 in Schools) is the world's largest STEM competition
                for students aged 9–19, endorsed by Formula 1® and active in
                over{" "}
                <strong className="font-medium text-[var(--color-text)]">
                  65 countries
                </strong>
                .
              </p>
              <p>
                Teams of 3–6 students design, manufacture, and race a{" "}
                <strong className="font-medium text-[var(--color-text)]">
                  miniature CO₂-powered F1 car
                </strong>{" "}
                on a 20-metre track — applying real engineering principles used
                by professional motorsport teams.
              </p>
              <p>
                But it's more than speed. Teams are judged on their{" "}
                <strong className="font-medium text-[var(--color-text)]">
                  engineering portfolio, project management, branding, verbal
                  presentation,
                </strong>{" "}
                and pit display — a complete simulation of bringing a product
                from concept to competition.
              </p>
              <p>
                Winners advance from regional → national →{" "}
                <strong className="font-medium text-[var(--color-text)]">
                  World Finals
                </strong>
                , held annually at a Formula One Grand Prix venue.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2">
          {ABOUT_CARDS.map((c, i) => {
            const Icon = ABOUT_ICONS[c.icon];
            return (
            <Reveal key={c.title} delay={0.1 + i * 0.08}>
              <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-2)]/70">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="font-display text-[22px] tracking-wide">
                  {c.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-dim)]">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
