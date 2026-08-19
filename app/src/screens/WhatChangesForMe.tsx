import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shell } from "../components/layout/Shell";
import { TopicContentCard } from "../components/TopicContentCard";
import { personaOptions } from "../data/content";
import { loadTopics } from "../lib/adminContent";

export function WhatChangesForMe() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const topics = loadTopics();
  const persona = personaOptions.find((p) => p.id === selectedId) ?? null;
  const relatedTopics = persona
    ? topics.filter((t) => persona.relatedTopics.includes(t.id))
    : [];

  return (
    <Shell onBack={() => navigate("/")}>
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
          Was bedeutet das für mich?
        </h1>
        <p className="mt-2 text-lg text-mdp-slate-500">
          Wähle aus, was am besten zu dir passt.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {personaOptions.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`min-h-[64px] rounded-2xl border-2 px-6 py-4 text-left text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500 ${
                selectedId === p.id
                  ? "border-mdp-navy-900 bg-mdp-navy-900 text-white"
                  : "border-mdp-slate-200 bg-white text-mdp-navy-950 hover:border-mdp-navy-400"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {persona && (
          <div className="mt-10">
            <p className="mb-4 text-lg font-semibold text-mdp-navy-950">{persona.intro.text}</p>
            <div className="space-y-5">
              {relatedTopics.map((t) => (
                <TopicContentCard key={t.id} topic={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}
