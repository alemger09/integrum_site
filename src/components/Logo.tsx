type Props = {
  className?: string;
  withText?: boolean;
};

export function Logo({ className = "", withText = true }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/logo.png"
        alt="Integrum"
        className="h-8 w-8 rounded-md object-cover shimmer"
      />
      {withText && (
        <span className="font-display text-[22px] tracking-[0.18em] text-[var(--color-text)]">
          INTEG<span className="text-[var(--color-primary)]">R</span>UM
        </span>
      )}
    </div>
  );
}
