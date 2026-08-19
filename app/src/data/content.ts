// Inhaltliche Grundlage: siehe /docs/05-content-mapping.md
//
// Quelle: "MDP – Gesamtwerk V1.4 – Inhaltliches Parteiprogramm" (313
// Seiten, inkl. Original-Logo), eingespielt am 19.08.2026. Jede
// "programm"-Position unten zitiert Kapitel und Seite dieses Dokuments.
//
// Zwei Punkte aus der ursprünglichen Aufgabenstellung ließen sich beim
// Abgleich NICHT im Dokument bestätigen und wurden korrigiert bzw.
// abgestuft (Details in docs/05-content-mapping.md):
// 1. Die Vertrauensabstimmung zum Parteivorsitz findet laut Anlage B
//    "alle vier Jahre" statt — nicht jährlich, wie ursprünglich
//    angenommen.
// 2. Das detaillierte Schichtmodell (feste Uhrzeiten, Kategorie
//    A/B-Aufteilung) ist im Dokument nicht enthalten — bestätigt ist
//    nur die allgemeine Maßnahme "Mehrschichtbetrieb bei geeigneten
//    Baustellen" (Kap. XIV). Die konkrete Zeiteinteilung bleibt daher
//    als Prüfauftrag/Illustration gekennzeichnet.
//
// Themen, zu denen die PDF keine eindeutige Position lieferte, gibt es
// nach Auswertung nicht mehr — alle 12 Themen sind jetzt belegt.

import type {
  PersonaOption,
  SourcedText,
  Topic,
  TwoMinuteCard,
} from "./types";

const programm = (text: string, quelle: string): SourcedText => ({
  text,
  status: "programm",
  note: `Quelle: MDP-Gesamtwerk V1.4, ${quelle}.`,
});

const pruefauftrag = (text: string, note: string): SourcedText => ({
  text,
  status: "pruefauftrag",
  note,
});

export const topics: Topic[] = [
  {
    id: "wirtschaft",
    label: "Wirtschaft",
    icon: "🏭",
    shortClaim: programm(
      "Deutschland soll wieder stärker auf Investitionen, Produktion und Innovation setzen.",
      "Kap. II „Wirtschaft, Mittelstand und Standort Deutschland“, Seite 9"
    ),
    positions: [
      programm(
        "Deutschland soll wieder stärker auf Investitionen, Produktion und Innovation setzen. Besonders belastend sind langsame Genehmigungen, hohe Standortkosten, Fachkräftemangel und die Fragmentierung digitaler Verwaltungsverfahren.",
        "Kap. II, Seite 9"
      ),
      programm(
        "Fast-Track-Genehmigungen für strategische Industrie- und Infrastrukturvorhaben, ein One-Stop-Portal für Unternehmensgründungen und zusammengeführte Förderprogramme mit Erfolgskennzahlen.",
        "Kap. II, Maßnahmenprogramm, Seite 10"
      ),
    ],
  },
  {
    id: "wohnen",
    label: "Wohnen",
    icon: "🏠",
    shortClaim: programm(
      "Der Staat soll bei besonders knappem Wohnraum zusätzlich selbst bauen — dauerhaft im öffentlichen Bestand.",
      "Kap. VII „Wohnraum, Hochhausprogramm und staatlicher Wohnungsfonds“, Seite 39"
    ),
    positions: [
      programm(
        "Die MDP hält private Bautätigkeit für unverzichtbar, will aber bei besonders knappem Wohnraum zusätzlich selbst bauen. Die staatlichen Wohnungen sollen dauerhaft im öffentlichen Bestand bleiben und zu moderaten Mieten vermietet werden.",
        "Kap. VII, Seite 39"
      ),
      programm(
        "Start in besonders angespannten Großstadtregionen wie Köln, Duisburg, Düsseldorf und Berlin. Mieteinnahmen werden für Instandhaltung und neue Projekte verwendet (siehe „Staatlicher Wohnungsbau“).",
        "Kap. VII, Leitlinien, Seite 39"
      ),
    ],
  },
  {
    id: "energie",
    label: "Energie",
    icon: "⚡",
    shortClaim: programm(
      "Bezahlbare Energie braucht Erzeugung, Netze, Speicher und verlässliche Beschaffung.",
      "Kap. IX „Energie, Netze und Versorgungssicherheit“, Seite 51"
    ),
    positions: [
      programm(
        "Bezahlbare Energie benötigt Erzeugung, Netze, Speicher und verlässliche Beschaffung. Die MDP will erneuerbare Energien ausbauen, aber Technologieentscheidungen anhand von Kosten, Versorgungssicherheit und Systemnutzen treffen.",
        "Kap. IX, Seite 51"
      ),
    ],
  },
  {
    id: "infrastruktur",
    label: "Infrastruktur",
    icon: "🛣️",
    shortClaim: programm(
      "Die Infrastruktur-Offensive soll zuerst die bestehende Substanz sichern und danach zusätzliche Kapazität schaffen.",
      "Kap. XIV „Straßen, Brücken, Wasser und Telekommunikation“, Seite 81"
    ),
    positions: [
      programm(
        "Die Infrastruktur-Offensive soll zuerst die bestehende Substanz sichern und danach zusätzliche Kapazität schaffen — u. a. über ein öffentliches Brückenregister und eine Sanierungsampel.",
        "Kap. XIV, Seite 81"
      ),
      programm(
        "Mehrschichtbetrieb bei geeigneten Baustellen, um Planungssicherheit und Resilienz zu erhöhen (siehe „Infrastruktur-Schichtmodell“).",
        "Kap. XIV, Maßnahmenprogramm A3, Seite 82"
      ),
    ],
  },
  {
    id: "sicherheit",
    label: "Sicherheit",
    icon: "👮",
    shortClaim: programm(
      "Polizei und Zoll sollen modern ausgestattet, personell handlungsfähig und sichtbar präsent sein.",
      "Kap. XXIII „Polizei, Zoll und innere Sicherheit“, Seite 135"
    ),
    positions: [
      programm(
        "Polizei und Zoll sollen modern ausgestattet, personell handlungsfähig und sichtbar präsent sein. Die MDP verbindet eine hohe Einsatzfähigkeit mit Bodycams, Datenschutz und rechtsstaatlicher Kontrolle.",
        "Kap. XXIII, Seite 135"
      ),
    ],
  },
  {
    id: "bildung",
    label: "Bildung",
    icon: "🎓",
    shortClaim: programm(
      "Grundkompetenzen mit praktischer und digitaler Bildung verbinden — Länder bleiben zuständig, ein bundesweiter Rahmen erleichtert Mindestziele.",
      "Kap. XVIII „Schule und Bildung“, Seite 105"
    ),
    positions: [
      programm(
        "Die MDP will Grundkompetenzen mit praktischer und digitaler Bildung verbinden. Die Länder bleiben für Bildung zuständig; ein bundesweit abgestimmter Rahmen soll gemeinsame Mindestziele erleichtern.",
        "Kap. XVIII, Seite 105"
      ),
      programm(
        "Schwerpunkte: Deutsch und Mathematik, Englisch und weitere Partnersprachen, Politik/Recht/Wirtschaft, Informatik sowie Handwerk und praktische Kompetenz.",
        "Kap. XVIII, Leitlinien, Seite 105"
      ),
    ],
  },
  {
    id: "mobilitaet",
    label: "Mobilität",
    icon: "🚗",
    shortClaim: programm(
      "Weder ausschließliche Verbrenner- noch ausschließliche Elektrostrategie — Bürger sollen aus verfügbaren Technologien wählen können.",
      "Kap. XI „Mobilität und Wahlfreiheit der Antriebstechnologie“, Seite 63"
    ),
    positions: [
      programm(
        "Die MDP steht weder für eine ausschließliche Verbrenner- noch für eine ausschließliche Elektrostrategie. Bürger und Unternehmen sollen aus verfügbaren Technologien wählen können, sofern rechtliche und technische Anforderungen erfüllt werden.",
        "Kap. XI, Seite 63"
      ),
      programm(
        "Verbrenner, Elektro, Hybrid, Wasserstoff und synthetische Kraftstoffe werden parallel erforscht; Tank- und Ladeinfrastruktur wird bedarfsgerecht ausgebaut.",
        "Kap. XI, Leitlinien, Seite 63"
      ),
    ],
  },
  {
    id: "finanzen",
    label: "Finanzen",
    icon: "💶",
    shortClaim: programm(
      "Keine gleichzeitigen Versprechen von massiven Steuersenkungen und unbegrenzt steigenden Ausgaben.",
      "Kap. III „Staatsfinanzen und Schuldenabbau“, Seite 15"
    ),
    positions: [
      programm(
        "Die MDP will nicht versprechen, gleichzeitig Steuern massiv zu senken und alle Ausgaben unbegrenzt zu erhöhen. Investitionen sollen priorisiert, laufende Ausgaben kontrolliert und öffentliche Vermögenswerte wirtschaftlich bewertet werden.",
        "Kap. III, Seite 15"
      ),
      programm(
        "Ein jährlicher Schulden- und Vermögensbericht sowie eine Tilgungsstrategie für steigende strukturelle Einnahmen sollen Schuldenabbau und den Aufbau öffentlicher Vermögenswerte sichtbar machen.",
        "Kap. III, Leitlinien & Maßnahmenprogramm, Seite 15"
      ),
    ],
  },
  {
    id: "umwelt",
    label: "Umwelt",
    icon: "🌱",
    shortClaim: programm(
      "Umweltpolitik stärker mit technischen Lösungen verbinden — neue Wohnquartiere als Reallabore.",
      "Kap. X „Umwelt, Luftqualität und innovative Stadttechnik“, Seite 57"
    ),
    positions: [
      programm(
        "Die MDP will Umweltpolitik stärker mit technischen Lösungen verbinden. Neue Wohnquartiere sollen als Reallabore dienen, in denen Begrünung, Solarenergie, Sensorik und Luftreinigung auf ihre tatsächliche Wirkung geprüft werden.",
        "Kap. X, Seite 57"
      ),
      programm(
        "Messbare Luftqualitätsziele statt bloßer Symbolpolitik; Fassadenbegrünung, Moossysteme und Luftfilter nur nach nachgewiesener Wirkung.",
        "Kap. X, Leitlinien, Seite 57"
      ),
    ],
  },
  {
    id: "aussenpolitik",
    label: "Außenpolitik",
    icon: "🌍",
    shortClaim: programm(
      "Enge Beziehungen zu einer breiten Zahl internationaler Partner pflegen, diplomatische Dialogkanäle offenhalten.",
      "Kap. XXVIII „Außenpolitik und Partnerschaften“, Seite 165"
    ),
    positions: [
      programm(
        "Deutschland soll enge Beziehungen zu Österreich, Schweiz, Polen, den Niederlanden, Frankreich, Dänemark, den USA, China, Japan, Brasilien und — unter Wahrung deutscher und europäischer Interessen — Russland pflegen.",
        "Kap. XXVIII, Seite 165"
      ),
      programm(
        "Innerhalb von EU und NATO verlässlich bleiben; bei Ukraine/Russland setzt die MDP auf Diplomatie, Deeskalation und eine langfristige europäische Sicherheitsordnung.",
        "Kap. XXIX–XXX, Seite 171–177"
      ),
    ],
  },
  {
    id: "landwirtschaft",
    label: "Landwirtschaft",
    icon: "🌾",
    shortClaim: programm(
      "Agrarpolitik aus der Praxis entwickeln — Bauern, Viehhalter, Obst- und Gemüsebauern, Winzer und Wissenschaft regelmäßig beteiligen.",
      "Kap. XXI „Landwirtschaft und Ernährung“, Seite 123"
    ),
    positions: [
      programm(
        "Die MDP will Agrarpolitik aus der Praxis entwickeln. Bauern, Viehhalter, Obst- und Gemüsebauern, Winzer, Wissenschaft und Lebensmittelwirtschaft sollen regelmäßig beteiligt werden.",
        "Kap. XXI, Seite 123"
      ),
      programm(
        "Schwerpunkte: Bürokratie reduzieren, Planungssicherheit schaffen, regionale Wertschöpfung stärken sowie Technik, Digitalisierung und Nachwuchsförderung ausbauen.",
        "Kap. XXI, Leitlinien, Seite 123"
      ),
    ],
  },
  {
    id: "technologie",
    label: "Technologie",
    icon: "🤖",
    shortClaim: programm(
      "Ostdeutschland als Standort für Zukunftsindustrien: Wasserstoff, Batterien, KI, Robotik.",
      "Kap. XXXII „Forschung, Zukunftsindustrien und Ostdeutschland“, Seite 189"
    ),
    positions: [
      programm(
        "Ostdeutschland soll stärker als Standort für Zukunftsindustrien entwickelt werden. Wasserstoff, Batterien, KI, Robotik, Energie- und Produktionstechnik können mit vorhandenen Industrieflächen und Forschungseinrichtungen verbunden werden.",
        "Kap. XXXII, Seite 189"
      ),
      programm(
        "KI als Assistenz statt unkontrollierter Entscheidungsautomatik; Produktivitätsgewinne durch Automatisierung sollen in Weiterbildung und öffentliche Dienstleistungen überführt werden.",
        "Kap. V & XVI, Seite 27 und 93"
      ),
    ],
  },
];

export const twoMinuteCards: TwoMinuteCard[] = [
  {
    id: "wirtschaft",
    title: "Wirtschaft",
    relatedTopic: "wirtschaft",
    claim: programm(
      "Deutschland soll wieder stärker auf Investitionen, Produktion und Innovation setzen.",
      "Kap. II, Seite 9"
    ),
  },
  {
    id: "wohnen",
    title: "Wohnen",
    relatedTopic: "wohnen",
    claim: programm(
      "Bei besonders knapptem Wohnraum baut der Staat zusätzlich selbst — dauerhaft im öffentlichen Bestand, zu moderaten Mieten.",
      "Kap. VII, Seite 39"
    ),
  },
  {
    id: "infrastruktur",
    title: "Infrastruktur",
    relatedTopic: "infrastruktur",
    claim: programm(
      "Die Infrastruktur-Offensive soll zuerst die bestehende Substanz sichern und danach zusätzliche Kapazität schaffen.",
      "Kap. XIV, Seite 81"
    ),
  },
  {
    id: "energie",
    title: "Energie",
    relatedTopic: "energie",
    claim: programm(
      "Bezahlbare Energie braucht Erzeugung, Netze, Speicher und verlässliche Beschaffung — technologieoffen.",
      "Kap. IX, Seite 51"
    ),
  },
  {
    id: "sicherheit",
    title: "Sicherheit",
    relatedTopic: "sicherheit",
    claim: programm(
      "Polizei und Zoll modern ausgestattet, personell handlungsfähig und sichtbar präsent — mit rechtsstaatlicher Kontrolle.",
      "Kap. XXIII, Seite 135"
    ),
  },
  {
    id: "mobilitaet",
    title: "Mobilität",
    relatedTopic: "mobilitaet",
    claim: programm(
      "Weder ausschließliche Verbrenner- noch ausschließliche Elektrostrategie — die Wahl bleibt bei Bürgern und Unternehmen.",
      "Kap. XI, Seite 63"
    ),
  },
  {
    id: "bildung",
    title: "Bildung",
    relatedTopic: "bildung",
    claim: programm(
      "Grundkompetenzen mit praktischer und digitaler Bildung verbinden, mit bundesweit abgestimmten Mindestzielen.",
      "Kap. XVIII, Seite 105"
    ),
  },
  {
    id: "staatsfinanzen",
    title: "Staatsfinanzen",
    relatedTopic: "finanzen",
    claim: programm(
      "Keine gleichzeitigen Versprechen von massiven Steuersenkungen und unbegrenzt steigenden Ausgaben.",
      "Kap. III, Seite 15"
    ),
  },
];

export const personaOptions: PersonaOption[] = [
  {
    id: "miete",
    label: "Ich wohne zur Miete.",
    relatedTopics: ["wohnen"],
    intro: programm("Relevante MDP-Position zum Wohnungsmarkt:", "Kap. VII, Seite 39"),
  },
  {
    id: "industrie",
    label: "Ich arbeite in der Industrie.",
    relatedTopics: ["wirtschaft"],
    intro: programm(
      "Relevante wirtschafts- und industriepolitische Position:",
      "Kap. II & IV, Seite 9 und 21"
    ),
  },
  {
    id: "verbrenner",
    label: "Ich fahre einen Verbrenner.",
    relatedTopics: ["mobilitaet"],
    intro: programm("Relevante Mobilitätsposition:", "Kap. XI, Seite 63"),
  },
  {
    id: "sicherheit-sorge",
    label: "Ich mache mir Sorgen um Sicherheit.",
    relatedTopics: ["sicherheit"],
    intro: programm("Relevante Sicherheitsposition:", "Kap. XXIII, Seite 135"),
  },
  {
    id: "energiekosten",
    label: "Mich belasten hohe Energiekosten.",
    relatedTopics: ["energie"],
    intro: programm("Relevante Energieposition:", "Kap. IX, Seite 51"),
  },
  {
    id: "steuerlast",
    label: "Ich sorge mich um Staatsschulden & Steuerlast.",
    relatedTopics: ["finanzen"],
    intro: programm("Relevante Position zu Staatsfinanzen:", "Kap. III, Seite 15"),
  },
  {
    id: "landwirtschaft-persona",
    label: "Ich arbeite in der Landwirtschaft.",
    relatedTopics: ["landwirtschaft"],
    intro: programm("Relevante Position zur Landwirtschaft:", "Kap. XXI, Seite 123"),
  },
];

// --- Infrastruktur-Schichtmodell -------------------------------------
//
// Bestätigt ist im Programm nur die allgemeine Maßnahme
// "Mehrschichtbetrieb bei geeigneten Baustellen" (Kap. XIV, Seite 82).
// Die konkrete Zeiteinteilung und die Zwei-Kategorien-Aufteilung unten
// sind eine Illustration dieser Maßnahme, KEIN wörtliches Zitat aus
// dem Programm — deshalb weiterhin als Prüfauftrag gekennzeichnet.

export const shiftModel = {
  intro: programm(
    "Mehrschichtbetrieb bei geeigneten Baustellen, um Planungssicherheit und Resilienz zu erhöhen.",
    "Kap. XIV, Maßnahme A3, Seite 82"
  ),
  illustrationNote: pruefauftrag(
    "Die konkrete Zeiteinteilung und Kategorie-Aufteilung unten ist eine Illustration der Maßnahme, kein wörtliches Programm-Zitat.",
    "Im Programm nur als allgemeine Maßnahme belegt, ohne konkrete Uhrzeiten oder Kategorien — Konkretisierung ist Prüfauftrag an die Partei."
  ),
  categoryA: {
    title: "Beispiel Kategorie A — 3-Schicht-System",
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
    title: "Beispiel Kategorie B — 2-Schicht-System",
    shifts: ["08:00–16:00", "12:00–20:00"],
    examples: ["Staatliche Wohnblocks", "Lärmsensible Bereiche"],
  },
  disclaimer:
    "Hinweis: Die App macht keine Aussage darüber, um wie viel Prozent ein konkretes Projekt dadurch schneller fertig wird. Das hängt vom Einzelfall ab.",
};

// --- Staatlicher Wohnungsbau -------------------------------------------

export const housingFund = {
  intro: programm(
    "Start in besonders angespannten Großstadtregionen; Mieteinnahmen werden für Instandhaltung und neue Projekte verwendet.",
    "Kap. VII, Leitlinien, Seite 39"
  ),
  steps: [
    "Staatlicher Wohnungsfonds",
    "Bau großer Mehrfamilienhäuser / Hochhäuser",
    "Vermietung zu moderaten Mieten",
    "Mieteinnahmen",
    "Instandhaltung + Rücklagen",
    "Reinvestition in neuen Wohnraum",
  ],
  features: [
    { icon: "☀️", label: "Photovoltaik auf geeigneten Dächern" },
    { icon: "🌿", label: "Fassadenbegrünung" },
    { icon: "🪴", label: "Moossysteme (dort, wo Wirkung nachweisbar ist)" },
    { icon: "🏗️", label: "Standardisierte Hochhaus- & Quartiersplanung" },
    { icon: "🏘️", label: "Mischung aus Familien-, Einzel- & barrierefreien Wohnungen" },
    { icon: "🌬️", label: "Luftqualitätsmessung im Quartier" },
  ],
  featuresSource:
    "Quelle: Kap. VII (Maßnahme A3, Seite 40) und Kap. X (Seite 57–58) des MDP-Gesamtwerks V1.4.",
  disclaimer:
    "Konzeptdarstellung auf Basis der Programm-Leitlinien. Keine Zusage zu Umsetzungszeiträumen, Mietpreisen oder Stückzahlen.",
};

// --- Staatliche Industrie ------------------------------------------------

export const stateIndustry = {
  intro: programm(
    "Die industrielle Basis wird nicht als Selbstzweck geschützt, sondern als Grundlage für Wertschöpfung, Arbeitsplätze, Exportfähigkeit und strategische Resilienz erhalten.",
    "Kap. IV „Industriepolitik und deutsche Schlüsselindustrien“, Seite 21"
  ),
  steps: [
    "Staatliche Beteiligung / Förderung",
    "Produktionskapazitäten & Forschungsanlagen",
    "Arbeitsplätze + Wertschöpfung",
    "Produkte / Dienstleistungen",
    "Einnahmen / Exporterlöse",
    "Reinvestition in neue Kapazitäten",
  ],
  sectors: [
    "Automobilindustrie & Zulieferer",
    "Maschinenbau, Chemie, Bahn, Schiffbau, Luftfahrt",
    "Zukunftsindustrien (Wasserstoff, Batterien, KI, Robotik)",
    "Bauindustrie & Wohnungsbaukomponenten",
    "Energie",
    "Verteidigungsindustrie & strategische Technologien",
  ],
  sectorsSource: "Quelle: Kap. IV (Seite 21) und Kap. XXVII (Seite 159) des MDP-Gesamtwerks V1.4.",
  defenseNote: programm(
    "Staatliche Beteiligungen an der Verteidigungsindustrie nur bei klarer strategischer Begründung; kritische Technologien und geistiges Eigentum werden geschützt, Exporte nur nach Recht und Genehmigung.",
    "Kap. XXVII, Seite 159–160"
  ),
  disclaimer:
    "Diese Darstellung erklärt politische Ziele und industrielle Kapazitäten auf hoher Ebene. Die App zeigt keine operativen Anleitungen und keine technischen Details zu Waffensystemen.",
};

// --- Vertrauen & Transparenz --------------------------------------------
//
// Quelle: Anlage B „Parteivorsitz – Wahl, Zufriedenheit und Abwahl“,
// Seite 214–220. Die Arbeitsblatt-Titel benennen die Bausteine des
// Verfahrens; die ausformulierten Absätze im Dokument sind an dieser
// Stelle noch generischer Platzhaltertext ohne weitere Verfahrensdetails
// (z. B. keine Aussage zur Geheimheit der Abstimmung) — das ist unten
// entsprechend gekennzeichnet.

export const partyTrust = {
  vote: programm(
    "Der Parteivorsitz ist langfristig angelegt. Alle vier Jahre wird eine Zufriedenheitsstimme durchgeführt. Sprechen sich mehr als 50,1 % der abgegebenen Stimmen unzufrieden aus, folgt eine Neuwahl. Auch der Parteirat kann einen entsprechenden Antrag stellen.",
    "Anlage B, Arbeitsblätter 1–5, Seite 214–218"
  ),
  proceduralNote: pruefauftrag(
    "Details wie die Geheimheit der Abstimmung, das genaue Quorum und der exakte Ablauf nach Überschreiten der 50,1-%-Schwelle sind im Dokument bislang nur als Arbeitsblatt-Titel benannt, nicht weiter ausformuliert.",
    "Anlage B enthält an dieser Stelle noch generischen Platzhaltertext statt ausformulierter Verfahrensregeln — vor Veröffentlichung mit der Partei zu klären."
  ),
  separationNote: programm(
    "Die Zufriedenheitsstimme zum Parteivorsitz ersetzt nicht die gesetzlich zwingend erforderliche Wahl des Gesamtvorstands. Beides wird ausdrücklich als getrenntes Verfahren behandelt.",
    "Anlage B, Arbeitsblatt 6, Seite 219"
  ),
};
