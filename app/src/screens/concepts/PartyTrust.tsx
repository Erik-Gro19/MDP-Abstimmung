import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { Card } from "../../components/ui/Card";
import { partyTrust } from "../../data/content";

export function PartyTrust() {
  const navigate = useNavigate();

  return (
    <Shell onBack={() => navigate(-1)}>
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950 sm:text-4xl">
          Vertrauen &amp; Transparenz
        </h1>
        <p className="mt-2 text-lg text-mdp-slate-500">
          Innerparteiliche Demokratie bei der MDP
        </p>

        <Card className="mt-8 p-7">
          <h2 className="text-xl font-bold text-mdp-navy-950">
            Jährliche geheime Vertrauensabstimmung
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-mdp-slate-700">
            {partyTrust.vote.text}
          </p>
        </Card>

        <div className="mt-6 rounded-2xl border-2 border-mdp-navy-100 bg-mdp-navy-50 px-6 py-5">
          <p className="text-base font-semibold text-mdp-navy-900">{partyTrust.separationNote}</p>
        </div>
      </div>
    </Shell>
  );
}
