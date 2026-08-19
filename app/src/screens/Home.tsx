import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { OnlineStatus } from "../components/OnlineStatus";

interface NavTile {
  title: string;
  subtitle: string;
  icon: string;
  to: string;
  variant?: "primary" | "default";
}

const tiles: NavTile[] = [
  {
    title: "Bürgerdialog starten",
    subtitle: "Neutrale Umfrage, dann passende MDP-Positionen zeigen",
    icon: "💬",
    to: "/dialog",
    variant: "primary",
  },
  {
    title: "MDP in 2 Minuten",
    subtitle: "Kompakter Präsentationsmodus für die Straßenansprache",
    icon: "⏱",
    to: "/zwei-minuten",
  },
  {
    title: "Themen entdecken",
    subtitle: "Alle MDP-Positionen nach Themen durchstöbern",
    icon: "🗂",
    to: "/themen",
  },
  {
    title: "Umfragen",
    subtitle: "Direkt zur Bürgerumfrage, ohne Themenpräsentation",
    icon: "📊",
    to: "/dialog?direkt=umfrage",
  },
  {
    title: "QR-Code / Website",
    subtitle: "Direkt zum Abschlussbildschirm mit QR-Code",
    icon: "🔗",
    to: "/abschluss",
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-svh flex-col bg-mdp-bg">
      <header className="flex items-center justify-between px-6 pt-8 sm:px-12">
        <div className="w-20" />
        <OnlineStatus />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-8 sm:px-12">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-mdp-gold-500 bg-mdp-navy-900">
            <span className="text-2xl font-bold text-mdp-gold-400">MDP</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-mdp-navy-950 sm:text-5xl">
            Moderne Demokratische Partei
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-mdp-gold-600">
            <span>Ordnung</span>
            <span className="text-mdp-slate-300">·</span>
            <span>Zukunft</span>
            <span className="text-mdp-slate-300">·</span>
            <span>Freiheit</span>
          </div>
          <p className="mt-4 max-w-xl text-lg text-mdp-slate-500">
            Bürgerdialog-System für persönliche Gespräche
          </p>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {tiles.map((tile) => (
            <button
              key={tile.title}
              onClick={() => navigate(tile.to)}
              className={`group flex min-h-[140px] items-center gap-5 rounded-3xl border-2 p-6 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mdp-navy-500 ${
                tile.variant === "primary"
                  ? "col-span-1 border-mdp-navy-900 bg-mdp-navy-900 text-white hover:bg-mdp-navy-800 sm:col-span-2"
                  : "border-mdp-slate-200 bg-white text-mdp-navy-950 hover:border-mdp-navy-400 hover:shadow-md"
              }`}
            >
              <span
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl ${
                  tile.variant === "primary" ? "bg-white/10" : "bg-mdp-navy-50"
                }`}
              >
                {tile.icon}
              </span>
              <span>
                <span className="block text-xl font-bold sm:text-2xl">{tile.title}</span>
                <span
                  className={`mt-1 block text-sm sm:text-base ${
                    tile.variant === "primary" ? "text-mdp-navy-100" : "text-mdp-slate-500"
                  }`}
                >
                  {tile.subtitle}
                </span>
              </span>
            </button>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-between px-6 pb-6 sm:px-12">
        <button
          onClick={() => navigate("/admin")}
          className="rounded-lg px-2 py-1 text-xs text-mdp-slate-300 hover:text-mdp-slate-500"
          aria-label="Admin-Zugang"
        >
          ⚙ Admin
        </button>
        <button
          onClick={() => navigate("/konzepte/vertrauen")}
          className="rounded-lg px-2 py-1 text-xs text-mdp-slate-400 hover:text-mdp-slate-600"
        >
          Vertrauen &amp; Transparenz in der MDP
        </button>
        <div className="flex items-center gap-2">
          <Logo variant="wordmark" className="scale-75 opacity-60" />
        </div>
      </footer>
    </div>
  );
}
