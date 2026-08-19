import { useNavigate } from "react-router-dom";
import { Shell } from "../../components/layout/Shell";
import { useAdminGuard } from "../../lib/useAdminGuard";

const links = [
  { to: "/admin/umfragen", icon: "📝", title: "Umfragen", desc: "Fragen bearbeiten, aktivieren, Reihenfolge ändern" },
  { to: "/admin/themen", icon: "🗂", title: "Inhalte & Themen", desc: "MDP-Positionen prüfen und aktualisieren" },
  { to: "/admin/ergebnisse", icon: "📊", title: "Ergebnisse", desc: "Aggregierte Antworten ansehen & exportieren" },
  { to: "/admin/qr", icon: "🔗", title: "QR-Code-Ziel", desc: "Verlinkte Website verwalten" },
];

export function AdminDashboard() {
  useAdminGuard();
  const navigate = useNavigate();

  return (
    <Shell
      onBack={() => {
        sessionStorage.removeItem("mdp-admin-unlocked");
        navigate("/");
      }}
      backLabel="Abmelden"
    >
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-mdp-navy-950">Admin-Bereich</h1>
        <p className="mt-2 text-lg text-mdp-slate-500">
          Nicht Teil des Bürgermodus — nur für die MDP-Redaktion sichtbar.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => navigate(l.to)}
              className="flex min-h-[120px] flex-col items-start gap-2 rounded-3xl border-2 border-mdp-slate-200 bg-white p-6 text-left hover:border-mdp-navy-400 hover:shadow-md"
            >
              <span className="text-3xl">{l.icon}</span>
              <span className="text-xl font-bold text-mdp-navy-950">{l.title}</span>
              <span className="text-sm text-mdp-slate-500">{l.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </Shell>
  );
}
