import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-12">
        <Logo />
        <div className="text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--color-text-mute)]">
          STEM Racing Team · Season 2025–2026
          <br />
          Almaty, Kazakhstan
        </div>
        <div className="text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--color-text-mute)] lg:text-right">
          📍 Almaty, KZ
          <br />
          Endorsed by Formula 1®
        </div>
      </div>
    </footer>
  );
}
