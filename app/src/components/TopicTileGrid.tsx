import { loadTopics } from "../lib/adminContent";
import type { TopicId } from "../data/types";

interface TopicTileGridProps {
  selected: TopicId[];
  onToggle: (id: TopicId) => void;
}

export function TopicTileGrid({ selected, onToggle }: TopicTileGridProps) {
  const topics = loadTopics();
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {topics.map((topic) => {
        const isSelected = selected.includes(topic.id);
        return (
          <button
            key={topic.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(topic.id)}
            className={`flex min-h-[132px] flex-col items-center justify-center gap-2 rounded-3xl border-2 p-5 text-center transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500 ${
              isSelected
                ? "border-mdp-navy-900 bg-mdp-navy-900 text-white"
                : "border-mdp-slate-200 bg-white text-mdp-navy-950 hover:border-mdp-navy-400"
            }`}
          >
            <span className="text-4xl">{topic.icon}</span>
            <span className="text-lg font-bold">{topic.label}</span>
          </button>
        );
      })}
    </div>
  );
}
