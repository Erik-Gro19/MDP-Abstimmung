import { useNavigate } from "react-router-dom";
import type { Topic } from "../data/types";
import { Card } from "./ui/Card";

const conceptLinks: Partial<Record<Topic["id"], { to: string; label: string }>> = {
  infrastruktur: { to: "/konzepte/schichtmodell", label: "Infrastruktur-Schichtmodell ansehen" },
  wohnen: { to: "/konzepte/wohnungsbau", label: "Staatlichen Wohnungsbau ansehen" },
  wirtschaft: { to: "/konzepte/industrie", label: "Staatliche Industrie ansehen" },
};

// Bürger-facing Darstellung einer Themenposition. Zeigt keine internen
// Redaktions-Badges (die gehören in den Admin-Bereich) — stattdessen
// einen ehrlichen, ruhigen Leerzustand, wenn zu einem Thema noch keine
// ausgearbeitete Position vorliegt.
export function TopicContentCard({ topic }: { topic: Topic }) {
  const navigate = useNavigate();
  const concept = conceptLinks[topic.id];

  return (
    <Card className="p-7 sm:p-8">
      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mdp-navy-50 text-3xl">
          {topic.icon}
        </span>
        <h3 className="text-2xl font-bold text-mdp-navy-950">{topic.label}</h3>
      </div>
      <div className="space-y-4">
        {topic.positions.map((pos, i) =>
          pos.hasContent === false ? (
            <p
              key={i}
              className="rounded-xl bg-mdp-slate-100 px-4 py-3 text-base italic text-mdp-slate-500"
            >
              {pos.text}
            </p>
          ) : (
            <p key={i} className="text-lg leading-relaxed text-mdp-slate-700">
              „{pos.text}“
            </p>
          )
        )}
      </div>
      {concept && (
        <button
          onClick={() => navigate(concept.to)}
          className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-mdp-navy-50 px-4 text-base font-semibold text-mdp-navy-700 hover:bg-mdp-navy-100"
        >
          {concept.label} →
        </button>
      )}
    </Card>
  );
}
