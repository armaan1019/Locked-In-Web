type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:border-[var(--locked-in-blue)]/30">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--locked-in-blue)]/10 text-[var(--locked-in-blue)]">
        <span className="text-lg">✓</span>
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-400">{description}</p>
    </div>
  );
}