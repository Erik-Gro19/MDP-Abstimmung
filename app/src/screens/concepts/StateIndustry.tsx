import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { FlowDiagram } from "../../components/FlowDiagram";
import { stateIndustry } from "../../data/content";

export function StateIndustry() {
  const navigate = useNavigate();

  return (
    <Shell onBack={() => navigate(-1)}>
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">Staatliche Industrie</h1>
        <p className="mt-3 text-lg text-mdp-slate-600">{stateIndustry.intro.text}</p>

        <div className="mt-8 max-w-xl">
          <FlowDiagram steps={stateIndustry.steps} />
        </div>

        <h2 className="mt-10 text-lg font-bold text-mdp-navy-950">Mögliche Bereiche</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stateIndustry.sectors.map((s) => (
            <li
              key={s}
              className="rounded-full bg-mdp-navy-50 px-4 py-2 text-sm font-medium text-mdp-navy-800"
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-mdp-slate-400">{stateIndustry.sectorsSource}</p>

        <h2 className="mt-10 text-lg font-bold text-mdp-navy-950">Verteidigungsindustrie</h2>
        <p className="mt-3 text-base leading-relaxed text-mdp-slate-700">
          {stateIndustry.defenseNote.text}
        </p>

        <p className="mt-8 rounded-2xl bg-mdp-gold-100 px-5 py-4 text-sm text-mdp-gold-700">
          ℹ️ {stateIndustry.disclaimer}
        </p>
      </div>
    </Shell>
  );
}
