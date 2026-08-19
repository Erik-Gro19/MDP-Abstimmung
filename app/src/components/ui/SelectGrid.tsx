interface Option {
  id: string;
  label: string;
}

interface SelectGridProps {
  options: Option[];
  selected: string[];
  onToggle: (id: string) => void;
  multi?: boolean;
}

export function SelectGrid({
  options,
  selected,
  onToggle,
  multi = true,
}: SelectGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {options.map((opt) => {
        const isSelected = selected.includes(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            role={multi ? "checkbox" : "radio"}
            aria-checked={isSelected}
            onClick={() => onToggle(opt.id)}
            className={`flex min-h-[64px] items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500 ${
              isSelected
                ? "border-mdp-navy-900 bg-mdp-navy-900 text-white"
                : "border-mdp-slate-200 bg-white text-mdp-navy-900 hover:border-mdp-navy-400"
            }`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 text-sm ${
                multi ? "rounded-md" : "rounded-full"
              } ${
                isSelected
                  ? "border-white bg-white text-mdp-navy-900"
                  : "border-mdp-slate-300"
              }`}
            >
              {isSelected ? "✓" : ""}
            </span>
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
