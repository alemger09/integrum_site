import { TICKER_ITEMS } from "../data/content";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-gradient-to-r from-[var(--color-primary-deep)] via-[var(--color-primary-bright)] to-[var(--color-primary-deep)] py-3">
      <div className="marquee-mask">
        <div className="ticker-track flex whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-9 px-9 font-mono text-[10px] uppercase tracking-[0.25em] text-[#1a0833]"
            >
              {item}
              <span className="text-[#1a0833]/40">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
