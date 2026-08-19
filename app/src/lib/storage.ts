// Lokale, anonyme Zwischenspeicherung von Umfrageantworten.
//
// Bewusst KEINE personenbezogenen Daten: es gibt kein Namensfeld, kein
// Kontaktfeld, keine Geräte- oder Personen-ID im DialogResponse-Typ.
// Die sessionId ist rein zufällig und dient nur dazu, mehrere Antworten
// eines Gesprächs zusammenzuhalten – sie ist nicht mit einer Person
// verknüpfbar und wird nirgends angezeigt.
//
// "Synchronisierung" ist in diesem Prototyp bewusst nicht implementiert
// (siehe /docs/06-offline-konzept.md) — Antworten bleiben lokal im
// Browser-Storage des iPads, bis sie im Admin-Bereich exportiert werden.

import type { DialogResponse } from "../data/types";

const KEY = "mdp-dialog-responses-v1";

function randomSessionId(): string {
  return crypto.randomUUID();
}

export function newSessionId(): string {
  return randomSessionId();
}

export function loadResponses(): DialogResponse[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DialogResponse[];
  } catch {
    return [];
  }
}

export function saveResponse(response: DialogResponse): void {
  const all = loadResponses();
  all.push(response);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function clearResponses(): void {
  localStorage.removeItem(KEY);
}

// Mindest-Stichprobengröße, bevor im Admin-Bereich aggregierte Ergebnisse
// als "Trend" dargestellt werden — verhindert, dass 2-3 Antworten als
// repräsentatives Ergebnis wirken.
export const MIN_SAMPLE_SIZE = 20;
