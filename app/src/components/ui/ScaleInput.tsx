interface ScaleInputProps {
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
  value: number | null;
  onChange: (value: number) => void;
}

export function ScaleInput({
  min,
  max,
  minLabel,
  maxLabel,
  value,
  onChange,
}: ScaleInputProps) {
  const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="w-full">
      <div className="grid grid-cols-11 gap-2 sm:gap-3">
        {values.map((v) => {
          const selected = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onChange(v)}
              aria-pressed={selected}
              className={`aspect-square min-h-[56px] rounded-2xl text-xl font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500 ${
                selected
                  ? "bg-mdp-navy-900 text-white"
                  : "bg-white text-mdp-navy-900 border-2 border-mdp-slate-200 hover:border-mdp-navy-400"
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between text-sm font-medium text-mdp-slate-500">
        <span>{min} = {minLabel}</span>
        <span>{max} = {maxLabel}</span>
      </div>
    </div>
  );
}
