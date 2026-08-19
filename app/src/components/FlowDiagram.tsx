export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div className="flex w-full items-center gap-4 rounded-2xl border-2 border-mdp-navy-100 bg-white px-6 py-4 shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mdp-navy-900 text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="text-lg font-semibold text-mdp-navy-950">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <span className="my-1 text-2xl leading-none text-mdp-gold-500" aria-hidden>
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
