// Gemeinsame Typen für Inhalte und Umfragen.
// `verified` markiert, ob eine Position 1:1 aus dem MDP-Parteiprogramm
// belegt ist. Ist die PDF-Quelle nicht eindeutig, bleibt der Eintrag
// `verified: false` und trägt einen "Prüfauftrag"-Hinweis — es wird
// nichts erfunden, siehe /docs/05-content-mapping.md.

export type SourceStatus = "programm" | "pruefauftrag";

export interface SourcedText {
  text: string;
  status: SourceStatus;
  note?: string;
  /** false = es existiert (noch) keine ausgearbeitete Position — kein Platzhaltertext, sondern ein ehrlicher Leerzustand. */
  hasContent?: boolean;
}

export type TopicId =
  | "wohnen"
  | "wirtschaft"
  | "energie"
  | "infrastruktur"
  | "sicherheit"
  | "bildung"
  | "mobilitaet"
  | "finanzen"
  | "umwelt"
  | "aussenpolitik"
  | "landwirtschaft"
  | "technologie";

export interface Topic {
  id: TopicId;
  label: string;
  icon: string; // Emoji-Symbol für die Kachel
  shortClaim: SourcedText;
  positions: SourcedText[];
}

export interface TwoMinuteCard {
  id: string;
  title: string;
  claim: SourcedText;
  relatedTopic: TopicId;
}

export interface PersonaOption {
  id: string;
  label: string;
  relatedTopics: TopicId[];
  intro: SourcedText;
}

// --- Umfrage-Engine (Admin-verwaltbar) -------------------------------

export type QuestionType = "scale" | "single" | "multi" | "text";

export interface AnswerOption {
  id: string;
  label: string;
}

export interface SurveyQuestion {
  id: string;
  type: QuestionType;
  active: boolean;
  order: number;
  prompt: string;
  helper?: string;
  scaleMin?: number;
  scaleMax?: number;
  scaleMinLabel?: string;
  scaleMaxLabel?: string;
  options?: AnswerOption[];
  allowOther?: boolean;
  optionalFollowUp?: {
    prompt: string;
    placeholder?: string;
  };
}

// Antwort eines einzelnen Dialogs — bewusst ohne jedes Feld für
// personenbezogene Daten (kein Name, keine Kontaktdaten, keine ID,
// die auf eine Person zurückführbar wäre).
export interface DialogResponse {
  sessionId: string; // zufällige, nicht-personenbezogene Sitzungskennung
  timestamp: string;
  answers: Record<string, unknown>;
  selectedTopics: TopicId[];
}
