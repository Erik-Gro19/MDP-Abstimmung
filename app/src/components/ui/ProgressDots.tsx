export function ProgressDots({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Schritt ${step} von ${total}`}>
      {Array.from({ length: total }, (_, i) => i + 1).map((i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all ${
            i === step
              ? "w-8 bg-mdp-navy-900"
              : i < step
                ? "w-2 bg-mdp-navy-400"
                : "w-2 bg-mdp-slate-200"
          }`}
        />
      ))}
    </div>
  );
}
