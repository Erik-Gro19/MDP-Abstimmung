// Inhaltliche Grundlage: siehe /docs/05-content-mapping.md
//
// WICHTIG: In dieser Umgebung stand die eigentliche Parteiprogramm-PDF
// nicht als Datei zur Verfügung — nur die Aufgabenstellung, die selbst
// bereits wörtliche Zitate aus dem Programm enthält. Diese Zitate wurden
// 1:1 übernommen (nichts umformuliert, nichts erfunden) und als
// "pruefauftrag" markiert, weil ein direkter Abgleich mit der Original-
// PDF durch mich nicht möglich war. Vor produktivem Einsatz MUSS jede
// "pruefauftrag"-Position von der Partei gegen das Originaldokument
// bestätigt werden (siehe Admin-Bereich → Inhalte).
//
// Themen ohne jede Textgrundlage in der Aufgabenstellung (Umwelt,
// Außenpolitik, Landwirtschaft) sind bewusst als "noch nicht festgelegt"
// ausgewiesen statt mit erfundenen Positionen gefüllt zu werden.

import type {
  PersonaOption,
  SourcedText,
  Topic,
  TwoMinuteCard,
} from "./types";

const pruefauftrag = (text: string, note?: string): SourcedText => ({
  text,
  status: "pruefauftrag",
  note:
    note ??
    "Wortlaut aus der Aufgabenstellung übernommen – gegen Original-Parteiprogramm noch zu verifizieren.",
});

const offen = (): SourcedText => ({
  text: "Zu diesem Thema liegt aktuell noch keine ausgearbeitete Position vor.",
  status: "pruefauftrag",
  note: "Noch nicht festgelegt / Prüfauftrag – keine Position erfinden.",
  hasContent: false,
});

export const topics: Topic[] = [
  {
    id: "wirtschaft",
    label: "Wirtschaft",
    icon: "🏭",
    shortClaim: pruefauftrag(
      "Deutschland soll wieder ein attraktiver Standort für Industrie, Innovation und Investitionen werden."
    ),
    positions: [
      pruefauftrag(
        "Deutschland soll wieder ein attraktiver Standort für Industrie, Innovation und Investitionen werden."
      ),
      pruefauftrag(
        "Aufbau strategischer staatlicher Industriekapazitäten in ausgewählten Bereichen (siehe „Staatliche Industrie“)."
      ),
    ],
  },
  {
    id: "wohnen",
    label: "Wohnen",
    icon: "🏠",
    shortClaim: pruefauftrag(
      "Der Staat soll zusätzlich selbst Wohnraum schaffen und langfristig eigenes Wohnungsvermögen aufbauen."
    ),
    positions: [
      pruefauftrag(
        "Der Staat soll zusätzlich selbst Wohnraum schaffen und langfristig eigenes Wohnungsvermögen aufbauen."
      ),
      pruefauftrag(
        "Finanzierung über einen staatlichen Wohnungsfonds, der Mieteinnahmen in neuen Wohnraum reinvestiert (siehe „Staatlicher Wohnungsbau“)."
      ),
    ],
  },
  {
    id: "energie",
    label: "Energie",
    icon: "⚡",
    shortClaim: pruefauftrag(
      "Bezahlbare, sichere und technologisch offene Energieversorgung."
    ),
    positions: [
      pruefauftrag(
        "Bezahlbare, sichere und technologisch offene Energieversorgung."
      ),
    ],
  },
  {
    id: "infrastruktur",
    label: "Infrastruktur",
    icon: "🛣️",
    shortClaim: pruefauftrag(
      "Strategisch wichtige Infrastruktur soll schneller geplant und gebaut werden."
    ),
    positions: [
      pruefauftrag(
        "Strategisch wichtige Infrastruktur soll schneller geplant und gebaut werden."
      ),
      pruefauftrag(
        "Beschleunigung u. a. durch ein mehrschichtiges Bau-Schichtmodell (siehe „Infrastruktur-Schichtmodell“)."
      ),
    ],
  },
  {
    id: "sicherheit",
    label: "Sicherheit",
    icon: "👮",
    shortClaim: pruefauftrag(
      "Ein handlungsfähiger Staat, der Bürger schützt und rechtsstaatlich kontrolliert bleibt."
    ),
    positions: [
      pruefauftrag(
        "Ein handlungsfähiger Staat, der Bürger schützt und rechtsstaatlich kontrolliert bleibt."
      ),
    ],
  },
  {
    id: "bildung",
    label: "Bildung",
    icon: "🎓",
    shortClaim: pruefauftrag(
      "Deutschland soll Forschung, Bildung, KI, Robotik und Zukunftstechnologien stärker fördern.",
      "Im Programm als gemeinsamer Punkt „Bildung & Technologie“ genannt – Trennung nach Einzelthemen noch zu verifizieren."
    ),
    positions: [
      pruefauftrag(
        "Deutschland soll Forschung, Bildung, KI, Robotik und Zukunftstechnologien stärker fördern."
      ),
    ],
  },
  {
    id: "mobilitaet",
    label: "Mobilität",
    icon: "🚗",
    shortClaim: pruefauftrag(
      "Die Entscheidung über den Antrieb eines Fahrzeugs soll grundsätzlich beim Bürger bleiben."
    ),
    positions: [
      pruefauftrag(
        "Die Entscheidung über den Antrieb eines Fahrzeugs soll grundsätzlich beim Bürger bleiben."
      ),
    ],
  },
  {
    id: "finanzen",
    label: "Finanzen",
    icon: "💶",
    shortClaim: pruefauftrag(
      "Langfristig sollen Schulden reduziert und gleichzeitig staatliche Vermögenswerte aufgebaut werden."
    ),
    positions: [
      pruefauftrag(
        "Langfristig sollen Schulden reduziert und gleichzeitig staatliche Vermögenswerte aufgebaut werden."
      ),
    ],
  },
  {
    id: "umwelt",
    label: "Umwelt",
    icon: "🌱",
    shortClaim: offen(),
    positions: [offen()],
  },
  {
    id: "aussenpolitik",
    label: "Außenpolitik",
    icon: "🌍",
    shortClaim: offen(),
    positions: [offen()],
  },
  {
    id: "landwirtschaft",
    label: "Landwirtschaft",
    icon: "🌾",
    shortClaim: offen(),
    positions: [offen()],
  },
  {
    id: "technologie",
    label: "Technologie",
    icon: "🤖",
    shortClaim: pruefauftrag(
      "Deutschland soll Forschung, Bildung, KI, Robotik und Zukunftstechnologien stärker fördern.",
      "Im Programm als gemeinsamer Punkt „Bildung & Technologie“ genannt – Trennung nach Einzelthemen noch zu verifizieren."
    ),
    positions: [
      pruefauftrag(
        "Deutschland soll Forschung, Bildung, KI, Robotik und Zukunftstechnologien stärker fördern."
      ),
    ],
  },
];

export const twoMinuteCards: TwoMinuteCard[] = [
  {
    id: "wirtschaft",
    title: "Wirtschaft",
    relatedTopic: "wirtschaft",
    claim: pruefauftrag(
      "Deutschland soll wieder ein attraktiver Standort für Industrie, Innovation und Investitionen werden."
    ),
  },
  {
    id: "wohnen",
    title: "Wohnen",
    relatedTopic: "wohnen",
    claim: pruefauftrag(
      "Der Staat soll zusätzlich selbst Wohnraum schaffen und langfristig eigenes Wohnungsvermögen aufbauen."
    ),
  },
  {
    id: "infrastruktur",
    title: "Infrastruktur",
    relatedTopic: "infrastruktur",
    claim: pruefauftrag(
      "Strategisch wichtige Infrastruktur soll schneller geplant und gebaut werden."
    ),
  },
  {
    id: "energie",
    title: "Energie",
    relatedTopic: "energie",
    claim: pruefauftrag(
      "Bezahlbare, sichere und technologisch offene Energieversorgung."
    ),
  },
  {
    id: "sicherheit",
    title: "Sicherheit",
    relatedTopic: "sicherheit",
    claim: pruefauftrag(
      "Ein handlungsfähiger Staat, der Bürger schützt und rechtsstaatlich kontrolliert bleibt."
    ),
  },
  {
    id: "mobilitaet",
    title: "Mobilität",
    relatedTopic: "mobilitaet",
    claim: pruefauftrag(
      "Die Entscheidung über den Antrieb eines Fahrzeugs soll grundsätzlich beim Bürger bleiben."
    ),
  },
  {
    id: "bildung-technologie",
    title: "Bildung & Technologie",
    relatedTopic: "bildung",
    claim: pruefauftrag(
      "Deutschland soll Forschung, Bildung, KI, Robotik und Zukunftstechnologien stärker fördern."
    ),
  },
  {
    id: "staatsfinanzen",
    title: "Staatsfinanzen",
    relatedTopic: "finanzen",
    claim: pruefauftrag(
      "Langfristig sollen Schulden reduziert und gleichzeitig staatliche Vermögenswerte aufgebaut werden."
    ),
  },
];

export const personaOptions: PersonaOption[] = [
  {
    id: "miete",
    label: "Ich wohne zur Miete.",
    relatedTopics: ["wohnen"],
    intro: pruefauftrag(
      "Relevante MDP-Position zum Wohnungsmarkt:"
    ),
  },
  {
    id: "industrie",
    label: "Ich arbeite in der Industrie.",
    relatedTopics: ["wirtschaft"],
    intro: pruefauftrag(
      "Relevante wirtschafts- und industriepolitische Position:"
    ),
  },
  {
    id: "verbrenner",
    label: "Ich fahre einen Verbrenner.",
    relatedTopics: ["mobilitaet"],
    intro: pruefauftrag("Relevante Mobilitätsposition:"),
  },
  {
    id: "sicherheit-sorge",
    label: "Ich mache mir Sorgen um Sicherheit.",
    relatedTopics: ["sicherheit"],
    intro: pruefauftrag("Relevante Sicherheitsposition:"),
  },
  {
    id: "energiekosten",
    label: "Mich belasten hohe Energiekosten.",
    relatedTopics: ["energie"],
    intro: pruefauftrag("Relevante Energieposition:"),
  },
  {
    id: "steuerlast",
    label: "Ich sorge mich um Staatsschulden & Steuerlast.",
    relatedTopics: ["finanzen"],
    intro: pruefauftrag("Relevante Position zu Staatsfinanzen:"),
  },
];

// --- Infrastruktur-Schichtmodell -------------------------------------

export const shiftModel = {
  intro: pruefauftrag(
    "Zweistufiges Schichtmodell für schnelleren Bau strategisch wichtiger Infrastruktur."
  ),
  categoryA: {
    title: "Kategorie A — 3-Schicht-System",
    shifts: ["08:00–16:00", "16:00–00:00", "00:00–08:00"],
    examples: [
      "Autobahnen",
      "Tunnel",
      "Brücken",
      "Straßenausbau",
      "Solarparks",
      "Staatliche Industriewerke",
    ],
  },
  categoryB: {
    title: "Kategorie B — 2-Schicht-System",
    shifts: ["08:00–16:00", "12:00–20:00"],
    examples: ["Staatliche Wohnblocks", "Lärmsensible Bereiche"],
  },
  disclaimer:
    "Hinweis: Die App macht keine Aussage darüber, um wie viel Prozent ein konkretes Projekt dadurch schneller fertig wird. Das hängt vom Einzelfall ab.",
};

// --- Staatlicher Wohnungsbau -------------------------------------------

export const housingFund = {
  steps: [
    "Staatlicher Wohnungsfonds",
    "Bau großer Mehrfamilienhäuser / Wohnblocks",
    "Günstige Vermietung",
    "Mieteinnahmen",
    "Instandhaltung + Rücklagen",
    "Reinvestition in neuen Wohnraum",
  ],
  features: [
    { icon: "☀️", label: "Photovoltaik" },
    { icon: "🌿", label: "Begrünte Dächer" },
    { icon: "🪴", label: "Begrünte Fassaden / Moos- & Pflanzensysteme" },
    { icon: "🏗️", label: "Moderne Gebäudetechnik" },
    { icon: "🔋", label: "Energieeffizienz" },
    { icon: "🌬️", label: "Luftqualitätsmanagement" },
  ],
  disclaimer:
    "Konzeptdarstellung. Keine Zusage zu Umsetzungszeiträumen, Mietpreisen oder Stückzahlen.",
};

// --- Staatliche Industrie ------------------------------------------------

export const stateIndustry = {
  steps: [
    "Staatliche / strategische Industrie",
    "Produktionskapazitäten",
    "Arbeitsplätze + Wertschöpfung",
    "Produkte / Dienstleistungen",
    "Einnahmen / Rückflüsse",
    "Reinvestition",
  ],
  sectors: [
    "Moderne Bauindustrie",
    "Wohnungsbaukomponenten",
    "Energie",
    "Technologie",
    "Strategische Industrie",
    "Verteidigungs-/Sicherheitsindustrie",
  ],
  disclaimer:
    "Diese Darstellung erklärt politische Ziele und industrielle Kapazitäten auf hoher Ebene. Die App zeigt keine operativen Anleitungen und keine technischen Details zu Waffensystemen.",
};

// --- Vertrauen & Transparenz --------------------------------------------

export const partyTrust = {
  vote: pruefauftrag(
    "Jährliche geheime Vertrauensabstimmung des Parteivorsitzenden. Sprechen sich mehr als 50 % der abgegebenen gültigen Stimmen unzufrieden aus, erfolgt eine Neuwahl des Parteivorsitzenden. Der Parteivorsitzende kann jederzeit freiwillig zurücktreten."
  ),
  separationNote:
    "Wichtig: Die jährliche Vertrauensabstimmung ersetzt nicht die gesetzlich erforderliche Wahl des Gesamtvorstands. Beides sind getrennte Verfahren.",
};
