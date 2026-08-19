import { useState } from "react";
import { Shell } from "../../components/layout/Shell";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useAdminGuard } from "../../lib/useAdminGuard";
import { loadQuestions, resetQuestions, saveQuestions } from "../../lib/adminContent";
import type { SurveyQuestion } from "../../data/types";
import { useNavigate } from "react-router-dom";

export function AdminSurveys() {
  useAdminGuard();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<SurveyQuestion[]>(() =>
    [...loadQuestions()].sort((a, b) => a.order - b.order)
  );
  const [savedAt, setSavedAt] = useState<string | null>(null);

  function update(id: string, patch: Partial<SurveyQuestion>) {
    setQuestions((qs) => qs.map((q) => (q.id === id ? { ...q, ...patch } : q)));
  }

  function move(id: string, dir: -1 | 1) {
    setQuestions((qs) => {
      const sorted = [...qs].sort((a, b) => a.order - b.order);
      const idx = sorted.findIndex((q) => q.id === id);
      const swapIdx = idx + dir;
      if (swapIdx < 0 || swapIdx >= sorted.length) return qs;
      const next = sorted.map((q) => ({ ...q }));
      const aOrder = next[idx].order;
      next[idx].order = next[swapIdx].order;
      next[swapIdx].order = aOrder;
      return next;
    });
  }

  function updateOption(qId: string, optId: string, label: string) {
    setQuestions((qs) =>
      qs.map((q) =>
        q.id === qId
          ? { ...q, options: q.options?.map((o) => (o.id === optId ? { ...o, label } : o)) }
          : q
      )
    );
  }

  function persist() {
    saveQuestions(questions);
    setSavedAt(new Date().toLocaleTimeString("de-DE"));
  }

  function reset() {
    resetQuestions();
    setQuestions([...loadQuestions()].sort((a, b) => a.order - b.order));
    setSavedAt(null);
  }

  const sorted = [...questions].sort((a, b) => a.order - b.order);

  return (
    <Shell onBack={() => navigate("/admin/start")}>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-mdp-navy-950">Umfragen</h1>
          <div className="flex gap-3">
            <Button variant="ghost" size="md" onClick={reset}>
              Auf Standard zurücksetzen
            </Button>
            <Button size="md" onClick={persist}>
              Speichern
            </Button>
          </div>
        </div>
        {savedAt && <p className="mt-2 text-sm text-mdp-positive">Gespeichert um {savedAt} Uhr.</p>}

        <div className="mt-6 space-y-4">
          {sorted.map((q, i) => (
            <Card key={q.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-2">
                  <button
                    disabled={i === 0}
                    onClick={() => move(q.id, -1)}
                    className="h-9 w-9 rounded-lg border border-mdp-slate-200 text-mdp-slate-500 disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    disabled={i === sorted.length - 1}
                    onClick={() => move(q.id, 1)}
                    className="h-9 w-9 rounded-lg border border-mdp-slate-200 text-mdp-slate-500 disabled:opacity-30"
                  >
                    ↓
                  </button>
                </div>
                <label className="ml-auto flex items-center gap-2 text-sm font-medium text-mdp-slate-600">
                  <input
                    type="checkbox"
                    checked={q.active}
                    onChange={(e) => update(q.id, { active: e.target.checked })}
                    className="h-5 w-5"
                  />
                  Aktiv
                </label>
              </div>

              <textarea
                value={q.prompt}
                onChange={(e) => update(q.id, { prompt: e.target.value })}
                rows={2}
                className="mt-3 w-full rounded-xl border border-mdp-slate-200 px-4 py-3 text-lg font-semibold text-mdp-navy-950 focus:border-mdp-navy-500 focus:outline-none"
              />

              <span className="mt-1 inline-block rounded-full bg-mdp-slate-100 px-2.5 py-0.5 text-xs font-medium text-mdp-slate-500">
                Typ: {q.type}
              </span>

              {q.options && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {q.options.map((o) => (
                    <input
                      key={o.id}
                      value={o.label}
                      onChange={(e) => updateOption(q.id, o.id, e.target.value)}
                      className="rounded-lg border border-mdp-slate-200 px-3 py-2 text-sm focus:border-mdp-navy-500 focus:outline-none"
                    />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  );
}
