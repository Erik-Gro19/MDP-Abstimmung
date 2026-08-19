import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { ProgressDots } from "../../components/ui/ProgressDots";
import { ScaleInput } from "../../components/ui/ScaleInput";
import { SelectGrid } from "../../components/ui/SelectGrid";
import { TopicTileGrid } from "../../components/TopicTileGrid";
import { TopicContentCard } from "../../components/TopicContentCard";
import type { TopicId } from "../../data/types";
import { loadQuestions, loadTopics } from "../../lib/adminContent";
import { MIN_SAMPLE_SIZE, loadResponses, newSessionId, saveResponse } from "../../lib/storage";
import { useNavigate } from "react-router-dom";

type Phase = "welcome" | "survey" | "thanks" | "topics" | "content";

export function DialogFlow() {
  const [params] = useSearchParams();
  const skipWelcome = params.get("direkt") === "umfrage";
  const navigate = useNavigate();

  const questions = useMemo(
    () => loadQuestions().filter((q) => q.active).sort((a, b) => a.order - b.order),
    []
  );

  const [phase, setPhase] = useState<Phase>(skipWelcome ? "survey" : "welcome");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [followUp, setFollowUp] = useState("");
  const [otherText, setOtherText] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<TopicId[]>([]);
  const [sessionId] = useState(newSessionId);

  const totalSteps = questions.length;
  const currentQ = questions[qIndex];

  function goToNextQuestion() {
    setFollowUp("");
    setOtherText("");
    if (qIndex + 1 < questions.length) {
      setQIndex((i) => i + 1);
    } else {
      finishSurvey();
    }
  }

  function goToPrevQuestion() {
    if (qIndex === 0) {
      if (skipWelcome) {
        navigate("/");
      } else {
        setPhase("welcome");
      }
      return;
    }
    setQIndex((i) => i - 1);
  }

  function finishSurvey() {
    setPhase("thanks");
  }

  function toggleTopic(id: TopicId) {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  function finishTopics() {
    setPhase("content");
  }

  function selectedTopicObjects() {
    return loadTopics().filter((t) => selectedTopics.includes(t.id));
  }

  // --- Welcome -----------------------------------------------------
  if (phase === "welcome") {
    return (
      <Shell>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <span className="mb-6 text-5xl">💬</span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-mdp-navy-950 sm:text-5xl">
            Willkommen zum MDP-Bürgerdialog
          </h1>
          <p className="mt-5 max-w-xl text-xl text-mdp-slate-500">
            Wir möchten verstehen, was Menschen in Deutschland bewegt.
          </p>
          <p className="mt-3 max-w-md text-sm text-mdp-slate-400">
            Keine Registrierung. Keine personenbezogenen Daten.
          </p>
          <Button className="mt-10 px-16" onClick={() => setPhase("survey")}>
            Starten
          </Button>
        </div>
      </Shell>
    );
  }

  // --- Survey --------------------------------------------------------
  if (phase === "survey" && currentQ) {
    const stepNumber = qIndex + 1;

    const scaleValue = (answers[currentQ.id] as number | undefined) ?? null;
    const multiValue = (answers[`${currentQ.id}`] as string[] | undefined) ?? [];
    const singleValue = (answers[currentQ.id] as string | undefined) ?? "";

    const canContinue =
      currentQ.type === "scale"
        ? scaleValue !== null
        : currentQ.type === "multi"
          ? multiValue.length > 0 || otherText.trim().length > 0
          : currentQ.type === "single"
            ? singleValue.length > 0
            : true;

    return (
      <Shell onBack={goToPrevQuestion} backLabel="Zurück">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
          <div className="mb-8 flex items-center justify-between">
            <ProgressDots step={stepNumber} total={totalSteps} />
            <span className="text-sm font-medium text-mdp-slate-400">
              {stepNumber} / {totalSteps}
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-snug text-mdp-navy-950 sm:text-4xl">
            {currentQ.prompt}
          </h2>
          {currentQ.helper && (
            <p className="mt-2 text-lg text-mdp-slate-500">{currentQ.helper}</p>
          )}

          <div className="mt-10 flex-1">
            {currentQ.type === "scale" && (
              <ScaleInput
                min={currentQ.scaleMin ?? 0}
                max={currentQ.scaleMax ?? 10}
                minLabel={currentQ.scaleMinLabel}
                maxLabel={currentQ.scaleMaxLabel}
                value={scaleValue}
                onChange={(v) => setAnswers((a) => ({ ...a, [currentQ.id]: v }))}
              />
            )}

            {currentQ.type === "multi" && currentQ.options && (
              <>
                <SelectGrid
                  multi
                  options={currentQ.options}
                  selected={multiValue}
                  onToggle={(id) =>
                    setAnswers((a) => {
                      const cur = (a[currentQ.id] as string[] | undefined) ?? [];
                      const next = cur.includes(id)
                        ? cur.filter((x) => x !== id)
                        : [...cur, id];
                      return { ...a, [currentQ.id]: next };
                    })
                  }
                />
                {currentQ.allowOther && (
                  <div className="mt-4">
                    <input
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                      placeholder="Sonstiges …"
                      className="min-h-[56px] w-full rounded-2xl border-2 border-mdp-slate-200 px-5 text-lg focus:border-mdp-navy-500 focus:outline-none"
                    />
                  </div>
                )}
              </>
            )}

            {currentQ.type === "single" && currentQ.options && (
              <>
                <SelectGrid
                  multi={false}
                  options={currentQ.options}
                  selected={singleValue ? [singleValue] : []}
                  onToggle={(id) =>
                    setAnswers((a) => ({ ...a, [currentQ.id]: id }))
                  }
                />
                {currentQ.allowOther && (
                  <div className="mt-4">
                    <input
                      value={otherText}
                      onChange={(e) => {
                        setOtherText(e.target.value);
                        setAnswers((a) => ({ ...a, [currentQ.id]: "other" }));
                      }}
                      placeholder="Sonstiges …"
                      className="min-h-[56px] w-full rounded-2xl border-2 border-mdp-slate-200 px-5 text-lg focus:border-mdp-navy-500 focus:outline-none"
                    />
                  </div>
                )}
                {currentQ.optionalFollowUp && singleValue && (
                  <div className="mt-8">
                    <label className="mb-2 block text-base font-semibold text-mdp-navy-950">
                      {currentQ.optionalFollowUp.prompt}
                    </label>
                    <textarea
                      value={followUp}
                      onChange={(e) => setFollowUp(e.target.value)}
                      placeholder={currentQ.optionalFollowUp.placeholder}
                      rows={3}
                      className="w-full rounded-2xl border-2 border-mdp-slate-200 px-5 py-4 text-lg focus:border-mdp-navy-500 focus:outline-none"
                    />
                  </div>
                )}
              </>
            )}

            {currentQ.type === "text" && (
              <textarea
                value={singleValue}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, [currentQ.id]: e.target.value }))
                }
                rows={4}
                className="w-full rounded-2xl border-2 border-mdp-slate-200 px-5 py-4 text-lg focus:border-mdp-navy-500 focus:outline-none"
              />
            )}
          </div>

          <div className="mt-10 flex justify-end">
            <Button
              disabled={!canContinue}
              onClick={() => {
                if (currentQ.allowOther && otherText.trim()) {
                  setAnswers((a) => ({ ...a, [`${currentQ.id}__sonstiges`]: otherText.trim() }));
                }
                if (currentQ.optionalFollowUp && followUp.trim()) {
                  setAnswers((a) => ({ ...a, [`${currentQ.id}__begruendung`]: followUp.trim() }));
                }
                goToNextQuestion();
              }}
              className="px-14"
            >
              Weiter
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  // --- Thanks / Ergebnis ---------------------------------------------
  if (phase === "thanks") {
    const allResponses = loadResponses();
    const sampleSize = allResponses.length;
    const satisfactionValues = allResponses
      .map((r) => r.answers["zufriedenheit"])
      .filter((v): v is number => typeof v === "number");
    const avgSatisfaction =
      satisfactionValues.length > 0
        ? (satisfactionValues.reduce((a, b) => a + b, 0) / satisfactionValues.length).toFixed(1)
        : null;

    function backToLastQuestion() {
      setQIndex(Math.max(questions.length - 1, 0));
      setPhase("survey");
    }

    return (
      <Shell onBack={backToLastQuestion}>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <span className="mb-6 text-5xl">🙏</span>
          <h1 className="text-4xl font-bold text-mdp-navy-950">Danke für deine Antworten.</h1>
          <p className="mt-4 max-w-lg text-lg text-mdp-slate-500">
            Deine Antworten helfen uns dabei, besser zu verstehen, welche Themen Menschen
            beschäftigen.
          </p>

          {sampleSize >= MIN_SAMPLE_SIZE && avgSatisfaction !== null ? (
            <Card className="mt-8 max-w-md p-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-mdp-slate-400">
                Zwischenstand auf diesem Gerät ({sampleSize} Antworten)
              </p>
              <p className="mt-2 text-lg text-mdp-navy-950">
                Durchschnittliche Zufriedenheit: <strong>{avgSatisfaction} / 10</strong>
              </p>
              <p className="mt-3 text-xs text-mdp-slate-400">
                Kein bundesweites oder repräsentatives Ergebnis — nur Antworten von diesem iPad.
              </p>
            </Card>
          ) : (
            <p className="mt-6 text-sm text-mdp-slate-400">
              Ergebnisse werden erst ab einer ausreichenden Stichprobengröße angezeigt.
            </p>
          )}

          <Button className="mt-10 px-16" onClick={() => setPhase("topics")}>
            Weiter
          </Button>
        </div>
      </Shell>
    );
  }

  // --- Topic picker ----------------------------------------------------
  if (phase === "topics") {
    return (
      <Shell onBack={() => setPhase("thanks")}>
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col">
          <h2 className="text-center text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
            Welche Themen möchtest du über die MDP kennenlernen?
          </h2>
          <p className="mt-2 text-center text-lg text-mdp-slate-500">
            Mehrfachauswahl möglich.
          </p>
          <div className="mt-10">
            <TopicTileGrid selected={selectedTopics} onToggle={toggleTopic} />
          </div>
          <div className="mt-10 flex justify-end">
            <Button disabled={selectedTopics.length === 0} onClick={finishTopics} className="px-14">
              Weiter
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  // --- Topic content -----------------------------------------------------
  return (
    <Shell onBack={() => setPhase("topics")}>
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col">
        <h2 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
          MDP-Positionen zu deinen Themen
        </h2>
        <div className="mt-8 space-y-5">
          {selectedTopicObjects().map((t) => (
            <TopicContentCard key={t.id} topic={t} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Button
            onClick={() => {
              saveResponse({
                sessionId,
                timestamp: new Date().toISOString(),
                answers,
                selectedTopics,
              });
              navigate("/abschluss");
            }}
            className="px-14"
          >
            Zum Abschluss
          </Button>
        </div>
      </div>
    </Shell>
  );
}
