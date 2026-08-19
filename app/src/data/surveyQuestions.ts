// Default-Fragenkatalog für den Bürgerdialog.
// Alle Formulierungen bewusst neutral gehalten (siehe /docs/05-content-mapping.md):
// keine suggestiven Fragen, keine wertenden Antwortoptionen.
// Im Admin-Bereich editierbar (Prototyp: Overlay in localStorage).

import type { SurveyQuestion } from "./types";

const topicOptions = [
  "Wohnkosten",
  "Energiepreise",
  "Steuern und Abgaben",
  "Einkommen und Löhne",
  "Wirtschaft und Arbeitsplätze",
  "Migration und Integration",
  "Sicherheit",
  "Infrastruktur",
  "Bildung",
  "Gesundheit",
  "Rente",
  "Bürokratie",
  "Umwelt",
  "Mobilität",
].map((label) => ({ id: label.toLowerCase().replace(/\s+/g, "-"), label }));

export const defaultSurveyQuestions: SurveyQuestion[] = [
  {
    id: "zufriedenheit",
    type: "scale",
    active: true,
    order: 1,
    prompt:
      "Wie zufrieden bist du aktuell mit der politischen Entwicklung in Deutschland?",
    scaleMin: 0,
    scaleMax: 10,
    scaleMinLabel: "überhaupt nicht zufrieden",
    scaleMaxLabel: "sehr zufrieden",
  },
  {
    id: "themen",
    type: "multi",
    active: true,
    order: 2,
    prompt: "Welche Themen beschäftigen dich derzeit am meisten?",
    helper: "Mehrfachauswahl möglich.",
    options: topicOptions,
    allowOther: true,
  },
  {
    id: "prioritaet",
    type: "single",
    active: true,
    order: 3,
    prompt:
      "Welches Problem sollte die Politik deiner Meinung nach zuerst lösen?",
    helper: "Nur eine Antwort.",
    options: topicOptions,
    allowOther: true,
    optionalFollowUp: {
      prompt: "Warum ist dieses Thema für dich besonders wichtig?",
      placeholder: "Optional — deine Antwort in eigenen Worten …",
    },
  },
  {
    id: "vertrauen-regierung",
    type: "scale",
    active: true,
    order: 4,
    prompt: "Wie groß ist dein Vertrauen in die Bundesregierung?",
    scaleMin: 0,
    scaleMax: 10,
    scaleMinLabel: "sehr gering",
    scaleMaxLabel: "sehr groß",
  },
  {
    id: "vertrauen-bundestag",
    type: "scale",
    active: true,
    order: 5,
    prompt: "Wie groß ist dein Vertrauen in den Bundestag?",
    scaleMin: 0,
    scaleMax: 10,
    scaleMinLabel: "sehr gering",
    scaleMaxLabel: "sehr groß",
  },
  {
    id: "vertrauen-justiz",
    type: "scale",
    active: true,
    order: 6,
    prompt: "Wie groß ist dein Vertrauen in Polizei und Justiz?",
    scaleMin: 0,
    scaleMax: 10,
    scaleMinLabel: "sehr gering",
    scaleMaxLabel: "sehr groß",
  },
];
