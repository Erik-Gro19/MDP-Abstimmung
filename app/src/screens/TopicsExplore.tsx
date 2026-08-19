import { useState } from "react";
import { Shell } from "../components/layout/Shell";
import { TopicTileGrid } from "../components/TopicTileGrid";
import { TopicContentCard } from "../components/TopicContentCard";
import { loadTopics } from "../lib/adminContent";
import type { TopicId } from "../data/types";
import { useNavigate } from "react-router-dom";

export function TopicsExplore() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<TopicId[]>([]);
  const topics = loadTopics();

  function toggle(id: TopicId) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
  }

  const selectedTopics = topics.filter((t) => selected.includes(t.id));

  return (
    <Shell onBack={() => navigate("/")}>
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">Themen entdecken</h1>
        <p className="mt-2 text-lg text-mdp-slate-500">
          Wähle ein oder mehrere Themen, um die MDP-Positionen dazu zu sehen.
        </p>
        <button
          onClick={() => navigate("/was-bedeutet-das")}
          className="mt-4 inline-flex min-h-[44px] items-center rounded-xl bg-mdp-navy-50 px-4 text-base font-semibold text-mdp-navy-700 hover:bg-mdp-navy-100"
        >
          🎯 Was bedeutet das für mich? — nach Lebenssituation filtern
        </button>

        <div className="mt-8">
          <TopicTileGrid selected={selected} onToggle={toggle} />
        </div>

        {selectedTopics.length > 0 && (
          <div className="mt-10 space-y-5">
            {selectedTopics.map((t) => (
              <TopicContentCard key={t.id} topic={t} />
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}
