import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_STATS } from "../data/content";

function SpeedLines() {
  const lines = Array.from({ length: 14 }, (_, i) => ({
    top: 12 + Math.random() * 76,
    width: 55 + Math.random() * 200,
    delay: Math.random() * 3,
    dur: 1.8 + Math.random() * 2,
    id: i,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((l) => (
        <span
          key={l.id}
          className="speed-line"
          style={{
            top: `${l.top}%`,
            width: `${l.width}px`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 lg:pt-32">
      <div className="aurora" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 self-start rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-primary)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            STEM Racing Team · Almaty 2025
          </div>

          <h1 className="font-display text-[clamp(64px,9vw,128px)] leading-[0.9] tracking-[0.01em]">
            BUILT TO{" "}
            <span className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-bright)] to-[var(--color-primary-deep)] bg-clip-text text-transparent">
              WIN.
            </span>
            <br />
            DRIVEN TO
            <br />
            INSPIRE.
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-text-dim)]">
            Team Integrum from Almaty, Kazakhstan — designing, engineering, and
            racing miniature Formula 1 cars. Where science meets speed and
            students become engineers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#team"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary-deep)] to-[var(--color-primary-bright)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_8px_32px_-8px_rgba(124,58,237,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Meet the team
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              What is STEM Racing?
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-0 border-t border-[var(--color-border)] pt-7">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`pr-5 ${i < HERO_STATS.length - 1 ? "border-r border-[var(--color-border)]" : ""} ${i > 0 ? "pl-5" : ""}`}
              >
                <div className="font-display text-[40px] leading-none tracking-wide">
                  {s.value}
                  <span className="text-[var(--color-primary)]">{s.suffix}</span>
                </div>
                <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-bg-2)] to-[var(--color-surface)]/80 lg:min-h-[560px]"
        >
          <SpeedLines />

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center font-display text-[200px] leading-none tracking-[0.12em] text-[rgba(199,179,255,0.05)] lg:text-[260px]">
            STEM
          </div>

          <div className="relative z-[1] flex flex-col items-center px-8 py-12">
            <div className="rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-bg)]/40 p-8 shadow-[0_0_80px_-20px_rgba(199,179,255,0.35)] backdrop-blur-sm">
              <img
                src="/assets/logo.png"
                alt="Integrum"
                className="mx-auto h-40 w-40 rounded-2xl object-cover shimmer lg:h-48 lg:w-48"
                width={192}
                height={192}
              />
            </div>
            <p className="mt-8 max-w-[260px] text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[var(--color-text-mute)]">
              Almaty · Kazakhstan · STEM Racing
            </p>
          </div>

          <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary-deep)] to-transparent" />

          <div className="absolute left-5 top-5 flex flex-col gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">
            <span>// integrum.team</span>
            <span className="text-[var(--color-primary)]">● season active</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
