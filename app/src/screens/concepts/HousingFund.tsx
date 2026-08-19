import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { FlowDiagram } from "../../components/FlowDiagram";
import { housingFund } from "../../data/content";

export function HousingFund() {
  const navigate = useNavigate();

  return (
    <Shell onBack={() => navigate(-1)}>
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
          Staatlicher Wohnungsbau
        </h1>

        <div className="mt-8 max-w-xl">
          <FlowDiagram steps={housingFund.steps} />
        </div>

        <h2 className="mt-10 text-lg font-bold text-mdp-navy-950">Vorgesehene Bauelemente</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {housingFund.features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm"
            >
              <span className="text-3xl">{f.icon}</span>
              <span className="text-sm font-medium text-mdp-slate-700">{f.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-2xl bg-mdp-gold-100 px-5 py-4 text-sm text-mdp-gold-700">
          ℹ️ {housingFund.disclaimer}
        </p>
      </div>
    </Shell>
  );
}
