import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useAdminGuard } from "../../lib/useAdminGuard";
import { MIN_SAMPLE_SIZE, clearResponses, loadResponses } from "../../lib/storage";
import { defaultSurveyQuestions } from "../../data/surveyQuestions";

export function AdminResults() {
  useAdminGuard();
  const navigate = useNavigate();
  const responses = loadResponses();
  const sampleSize = responses.length;
  const enoughData = sampleSize >= MIN_SAMPLE_SIZE;

  const satisfactionValues = responses
    .map((r) => r.answers["zufriedenheit"])
    .filter((v): v is number => typeof v === "number");
  const avgSatisfaction =
    satisfactionValues.length > 0
      ? satisfactionValues.reduce((a, b) => a + b, 0) / satisfactionValues.length
      : null;

  const topicCounts = new Map<string, number>();
  for (const r of responses) {
    const themen = r.answers["themen"];
    if (Array.isArray(themen)) {
      for (const t of themen) topicCounts.set(t, (topicCounts.get(t) ?? 0) + 1);
    }
  }
  const topicOptions = defaultSurveyQuestions.find((q) => q.id === "themen")?.options ?? [];
  const rankedTopics = [...topicCounts.entries()].sort((a, b) => b[1] - a[1]);

  function exportJson() {
    const blob = new Blob([JSON.stringify(responses, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mdp-buergerdialog-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleClear() {
    if (confirm(`Wirklich alle ${sampleSize} lokal gespeicherten Antworten löschen?`)) {
      clearResponses();
      window.location.reload();
    }
  }

  return (
    <Shell onBack={() => navigate("/admin/start")}>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-mdp-navy-950">Ergebnisse</h1>
          <div className="flex gap-3">
            <Button variant="ghost" size="md" onClick={handleClear} disabled={sampleSize === 0}>
              Alle löschen
            </Button>
            <Button size="md" onClick={exportJson} disabled={sampleSize === 0}>
              Exportieren (JSON)
            </Button>
          </div>
        </div>

        <p className="mt-2 text-lg text-mdp-slate-500">
          {sampleSize} Antworten auf diesem Gerät gespeichert.
        </p>
        {!enoughData && sampleSize > 0 && (
          <p className="mt-1 text-sm text-mdp-caution">
            Unter {MIN_SAMPLE_SIZE} Antworten — Trends werden bewusst nicht als aussagekräftig
            dargestellt.
          </p>
        )}

        {sampleSize === 0 ? (
          <Card className="mt-6 p-8 text-center text-mdp-slate-400">
            Noch keine Antworten auf diesem Gerät.
          </Card>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-mdp-slate-400">
                Zufriedenheit (Ø, 0–10)
              </h2>
              <p className="mt-2 text-4xl font-bold text-mdp-navy-950">
                {avgSatisfaction !== null ? avgSatisfaction.toFixed(1) : "–"}
              </p>
              {!enoughData && (
                <p className="mt-1 text-xs text-mdp-slate-400">Geringe Stichprobe — kein Trend.</p>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-mdp-slate-400">
                Meistgenannte Themen
              </h2>
              {rankedTopics.length === 0 ? (
                <p className="mt-2 text-mdp-slate-400">Keine Angaben.</p>
              ) : (
                <ul className="mt-3 space-y-1.5">
                  {rankedTopics.slice(0, 6).map(([id, count]) => (
                    <li key={id} className="flex items-center justify-between text-base">
                      <span className="text-mdp-slate-700">
                        {topicOptions.find((o) => o.id === id)?.label ?? id}
                      </span>
                      <span className="font-semibold text-mdp-navy-900">{count}</span>
                    </li>
                  ))}
                </ul>
              )}
              {!enoughData && (
                <p className="mt-2 text-xs text-mdp-slate-400">Geringe Stichprobe — kein Trend.</p>
              )}
            </Card>
          </div>
        )}

        <p className="mt-8 text-xs text-mdp-slate-400">
          Alle Antworten sind anonym (keine Namen, keine Kontaktdaten). Export enthält nur
          Umfrageantworten und eine zufällige, nicht-personenbezogene Sitzungskennung.
        </p>
      </div>
    </Shell>
  );
}
