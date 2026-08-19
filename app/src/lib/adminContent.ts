// Admin-Overlay: erlaubt das Bearbeiten von Fragen/Themen/QR-Ziel im
// Prototyp, ohne die Default-Inhalte in /src/data zu verändern.
// Persistiert im Browser (localStorage) — reicht für den Demo-/
// Vorführbetrieb auf einem einzelnen iPad; für echten Produktivbetrieb
// mit mehreren Geräten braucht es später ein Backend (siehe /docs/06).

import { defaultSurveyQuestions } from "../data/surveyQuestions";
import { topics as defaultTopics } from "../data/content";
import type { SurveyQuestion, Topic } from "../data/types";

const QUESTIONS_KEY = "mdp-admin-questions-v1";
const QR_TARGET_KEY = "mdp-admin-qr-target-v1";
const TOPICS_KEY = "mdp-admin-topics-v1";

export const DEFAULT_QR_TARGET = "https://www.modern-demokratische-partei.de";

export function loadQuestions(): SurveyQuestion[] {
  try {
    const raw = localStorage.getItem(QUESTIONS_KEY);
    if (!raw) return defaultSurveyQuestions;
    const parsed = JSON.parse(raw) as SurveyQuestion[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultSurveyQuestions;
    return parsed;
  } catch {
    return defaultSurveyQuestions;
  }
}

export function saveQuestions(questions: SurveyQuestion[]): void {
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questions));
}

export function resetQuestions(): void {
  localStorage.removeItem(QUESTIONS_KEY);
}

export function loadQrTarget(): string {
  return localStorage.getItem(QR_TARGET_KEY) || DEFAULT_QR_TARGET;
}

export function saveQrTarget(url: string): void {
  localStorage.setItem(QR_TARGET_KEY, url);
}

export function resetQrTarget(): void {
  localStorage.removeItem(QR_TARGET_KEY);
}

export function loadTopics(): Topic[] {
  try {
    const raw = localStorage.getItem(TOPICS_KEY);
    if (!raw) return defaultTopics;
    const parsed = JSON.parse(raw) as Topic[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultTopics;
    return parsed;
  } catch {
    return defaultTopics;
  }
}

export function saveTopics(topics: Topic[]): void {
  localStorage.setItem(TOPICS_KEY, JSON.stringify(topics));
}

export function resetTopics(): void {
  localStorage.removeItem(TOPICS_KEY);
}
