type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({ children, align = "left", className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--color-primary)] ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="h-px w-6 bg-[var(--color-primary)]" />
      {children}
    </div>
  );
}
