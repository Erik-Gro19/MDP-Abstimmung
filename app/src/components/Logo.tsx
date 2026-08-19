// ACHTUNG — Logo-Platzhalter, siehe /docs/00-status-und-offene-punkte.md
//
// Die Original-Logodatei (Kreisemblem mit Säulen-Piktogramm, Gold/Blau)
// stand in dieser Arbeitsumgebung nicht als Bilddatei zur Verfügung,
// sondern war nur als Vorschau in der Aufgabenstellung sichtbar. Diese
// Komponente wurde deshalb NICHT als Nachbau des Emblems gestaltet
// (das wäre ein "neues Logo entwerfen" und ausdrücklich untersagt),
// sondern zeigt bis zur Übergabe der echten Datei nur den reinen
// Schriftzug in den Marken-Farben.
//
// So integrierst du das echte Logo:
// 1. Original-Datei (SVG bevorzugt, sonst PNG mit transparentem
//    Hintergrund, min. 512×512px) unter `src/assets/mdp-logo.svg`
//    (bzw. .png) ablegen.
// 2. In dieser Datei den Platzhalter-Block unten durch
//    `<img src={mdpLogo} alt="MDP – Moderne Demokratische Partei" .../>`
//    ersetzen (Import: `import mdpLogo from "../assets/mdp-logo.svg"`).
// 3. Kein Bestandteil des Emblems (Farben, Formen, Symbolik) verändern.

interface LogoProps {
  variant?: "full" | "mark" | "wordmark";
  tone?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "full", tone = "dark", className = "" }: LogoProps) {
  const ink = tone === "dark" ? "text-mdp-navy-900" : "text-white";
  const sub = tone === "dark" ? "text-mdp-slate-500" : "text-mdp-navy-100";

  if (variant === "mark") {
    return (
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-mdp-gold-500 bg-mdp-navy-900 font-semibold text-mdp-gold-400 ${className}`}
        aria-label="MDP Emblem (Platzhalter)"
        title="Logo-Platzhalter – Originaldatei noch einzufügen"
      >
        MDP
      </div>
    );
  }

  return (
    <div className={`select-none ${className}`}>
      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-bold tracking-tight ${ink}`}>MDP</span>
        {variant === "full" && (
          <span className={`hidden text-sm font-medium uppercase tracking-[0.18em] sm:inline ${sub}`}>
            Moderne Demokratische Partei
          </span>
        )}
      </div>
      {variant === "full" && (
        <div className="mt-0.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-mdp-gold-500">
          <span>Ordnung</span>
          <span className="text-mdp-slate-300">·</span>
          <span>Zukunft</span>
          <span className="text-mdp-slate-300">·</span>
          <span>Freiheit</span>
        </div>
      )}
    </div>
  );
}
