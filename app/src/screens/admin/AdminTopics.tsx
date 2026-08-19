import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { SourceBadge } from "../../components/ui/SourceBadge";
import { useAdminGuard } from "../../lib/useAdminGuard";
import { loadTopics, resetTopics, saveTopics } from "../../lib/adminContent";
import type { Topic } from "../../data/types";

export function AdminTopics() {
  useAdminGuard();
  const navigate = useNavigate();
  const [topics, setTopics] = useState<Topic[]>(() => loadTopics());
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const openCount = topics.filter((t) => t.positions.some((p) => p.status === "pruefauftrag")).length;

  function updatePositionText(topicId: string, index: number, text: string) {
    setTopics((ts) =>
      ts.map((t) =>
        t.id === topicId
          ? {
              ...t,
              positions: t.positions.map((p, i) => (i === index ? { ...p, text } : p)),
            }
          : t
      )
    );
  }

  function confirmPosition(topicId: string, index: number) {
    setTopics((ts) =>
      ts.map((t) =>
        t.id === topicId
          ? {
              ...t,
              positions: t.positions.map((p, i) =>
                i === index
                  ? { ...p, status: "programm", hasContent: true, note: undefined }
                  : p
              ),
            }
          : t
      )
    );
  }

  function persist() {
    saveTopics(topics);
    setSavedAt(new Date().toLocaleTimeString("de-DE"));
  }

  function reset() {
    resetTopics();
    setTopics(loadTopics());
    setSavedAt(null);
  }

  return (
    <Shell onBack={() => navigate("/admin/start")}>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-mdp-navy-950">Inhalte &amp; Themen</h1>
          <div className="flex gap-3">
            <Button variant="ghost" size="md" onClick={reset}>
              Zurücksetzen
            </Button>
            <Button size="md" onClick={persist}>
              Speichern
            </Button>
          </div>
        </div>
        <p className="mt-2 text-lg text-mdp-slate-500">
          {openCount > 0
            ? `${openCount} Thema/Themen mit offenem Prüfauftrag gegen das Original-Parteiprogramm.`
            : "Alle Themen sind als geprüft markiert."}
        </p>
        {savedAt && <p className="mt-2 text-sm text-mdp-positive">Gespeichert um {savedAt} Uhr.</p>}

        <div className="mt-6 space-y-4">
          {topics.map((topic) => (
            <Card key={topic.id} className="p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{topic.icon}</span>
                <h2 className="text-xl font-bold text-mdp-navy-950">{topic.label}</h2>
              </div>
              <div className="mt-4 space-y-3">
                {topic.positions.map((pos, i) => (
                  <div key={i} className="rounded-xl border border-mdp-slate-200 p-4">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <SourceBadge source={pos} />
                      {pos.status === "pruefauftrag" && pos.hasContent !== false && (
                        <button
                          onClick={() => confirmPosition(topic.id, i)}
                          className="text-xs font-semibold text-mdp-positive hover:underline"
                        >
                          Als geprüft markieren
                        </button>
                      )}
                    </div>
                    <textarea
                      value={pos.text}
                      onChange={(e) => updatePositionText(topic.id, i, e.target.value)}
                      rows={2}
                      className="w-full rounded-lg border border-mdp-slate-200 px-3 py-2 text-base focus:border-mdp-navy-500 focus:outline-none"
                    />
                    {pos.note && (
                      <p className="mt-1.5 text-xs text-mdp-slate-400">{pos.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  );
}
