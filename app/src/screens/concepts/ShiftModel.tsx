import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { Card } from "../../components/ui/Card";
import { shiftModel } from "../../data/content";

export function ShiftModel() {
  const navigate = useNavigate();

  return (
    <Shell onBack={() => navigate(-1)}>
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
          Infrastruktur-Schichtmodell
        </h1>
        <p className="mt-3 text-lg text-mdp-slate-600">{shiftModel.intro.text}</p>
        <p className="mt-4 rounded-2xl border border-mdp-slate-200 bg-mdp-slate-100 px-5 py-4 text-sm text-mdp-slate-600">
          ⚠ {shiftModel.illustrationNote.text}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="p-7">
            <h2 className="text-xl font-bold text-mdp-navy-950">{shiftModel.categoryA.title}</h2>
            <div className="mt-5 space-y-2">
              {shiftModel.categoryA.shifts.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-mdp-navy-50 px-4 py-3 font-mono text-lg font-semibold text-mdp-navy-800"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mdp-navy-900 text-sm text-white">
                    {i + 1}
                  </span>
                  {s} Uhr
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-mdp-slate-400">
              Für
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {shiftModel.categoryA.examples.map((e) => (
                <li
                  key={e}
                  className="rounded-full bg-mdp-slate-100 px-3 py-1 text-sm font-medium text-mdp-slate-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-7">
            <h2 className="text-xl font-bold text-mdp-navy-950">{shiftModel.categoryB.title}</h2>
            <div className="mt-5 space-y-2">
              {shiftModel.categoryB.shifts.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-mdp-navy-50 px-4 py-3 font-mono text-lg font-semibold text-mdp-navy-800"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mdp-navy-900 text-sm text-white">
                    {i + 1}
                  </span>
                  {s} Uhr
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-mdp-slate-400">
              Für
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {shiftModel.categoryB.examples.map((e) => (
                <li
                  key={e}
                  className="rounded-full bg-mdp-slate-100 px-3 py-1 text-sm font-medium text-mdp-slate-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <p className="mt-8 rounded-2xl bg-mdp-gold-100 px-5 py-4 text-sm text-mdp-gold-700">
          ℹ️ {shiftModel.disclaimer}
        </p>
      </div>
    </Shell>
  );
}
