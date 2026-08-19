import type { SourcedText } from "../../data/types";

// Zeigt die Quellenlage einer Position an. Bewusst NUR im Admin-/
// Redaktionskontext sichtbar (siehe Verwendung) — im Bürgermodus soll
// die App nicht durch interne Kennzeichnungen wirken, als sei sie
// unfertig; die inhaltliche Sorgfalt passiert vor dem Einsatz im Admin.
export function SourceBadge({ source }: { source: SourcedText }) {
  if (source.hasContent === false) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full bg-mdp-slate-100 px-3 py-1 text-xs font-semibold text-mdp-slate-500"
        title={source.note}
      >
        ○ Noch nicht festgelegt
      </span>
    );
  }
  if (source.status === "programm") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-mdp-positive/10 px-3 py-1 text-xs font-semibold text-mdp-positive">
        ✓ Aus Parteiprogramm
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-mdp-caution/10 px-3 py-1 text-xs font-semibold text-mdp-caution"
      title={source.note}
    >
      ⚠ Prüfauftrag
    </span>
  );
}
