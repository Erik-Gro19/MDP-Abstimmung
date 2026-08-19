# Datenschutzkonzept (High-Level)

**Wichtig:** Dies ist eine technische Zusammenfassung dessen, was die
App aktuell tut — **keine** juristische Prüfung. Vor produktivem
Einsatz muss ein:e Jurist:in Rechtsgrundlage, Speicherfristen,
technische/organisatorische Maßnahmen sowie mögliche Sonderregeln für
politische Parteien (u. a. besondere Kategorien personenbezogener
Daten nach Art. 9 DSGVO bei politischen Meinungen) verbindlich prüfen.

## Was die App technisch NICHT erhebt

Das Antwort-Datenmodell (`DialogResponse` in `app/src/data/types.ts`)
enthält **kein einziges Feld**, das eine Person identifizieren könnte:

- kein Name
- keine Telefonnummer, keine E-Mail
- keine Geräte-ID, keine IP-Speicherung
- kein Standort
- kein Foto

Es gibt nur: eine zufällig erzeugte, nicht-personenbezogene
`sessionId` (dient ausschließlich dazu, die Antworten *eines*
Gesprächs zusammenzuhalten, nicht um eine Person wiederzuerkennen),
einen Zeitstempel, die Umfrageantworten und die gewählten Themen.

## Wo Daten liegen

- Antworten: ausschließlich lokal im Browser-Storage des jeweiligen
  iPads (`localStorage`), bis manuell im Admin-Bereich exportiert.
- Kein automatischer Upload, kein externer Tracking-Dienst, keine
  Drittanbieter-Skripte in der App.
- Admin-Zugriff ist bewusst vom Bürgermodus getrennt (siehe
  Informationsarchitektur) — politische Meinungsdaten sind nie mit
  einem Namen oder Kontakt in derselben Struktur gespeichert, weil es
  dafür schlicht kein Feld gibt.

## Prinzipien, die die App durchsetzt

1. **Datenminimierung von Anfang an** — es wurde kein Feld für
   personenbezogene Daten *hinzugefügt*, das später "einfach leer
   bleiben" könnte. Es existiert im Datenmodell schlicht nicht.
2. **Trennung von Meinung und Identität** — selbst wenn später eine
   zentrale Speicherung eingeführt wird, verlangt das Datenmodell
   bewusst keine Verknüpfung zu einer Person.
3. **Transparenz im Gespräch** — Willkommens-Screen nennt ausdrücklich:
   keine Registrierung, keine personenbezogenen Daten.
4. **Freiwilligkeit am Ende** — der QR-Code führt nur weiter, wenn die
   Person das selbst möchte; kein Zwang, keine Vorbefüllung eines
   Kontaktformulars.

## Offene Punkte für die juristische Prüfung

- Rechtsgrundlage für die Verarbeitung der (anonymen) Umfrageantworten
  selbst (i. d. R. berechtigtes Interesse / Einwilligung durch aktive
  Teilnahme — final zu bewerten).
- Speicherfristen: Wie lange dürfen exportierte, aggregierte
  Antworten aufbewahrt werden, bevor sie gelöscht/anonymisiert werden
  müssen?
- Technische und organisatorische Maßnahmen (TOMs) für den
  Admin-Export (aktuell: Datei-Download vom Gerät — Zugriffsschutz
  danach liegt außerhalb der App).
- Sonderanforderungen für politische Parteien bezüglich
  Meinungsdaten, auch wenn diese nicht personenbezogen gespeichert
  werden (Risiko der Re-Identifizierung bei sehr kleinen
  Stichproben/Orten sollte mitgedacht werden).
- Verantwortlichkeit (Auftragsverarbeitung?), sobald ein Sync-Backend
  eingeführt wird (siehe `docs/06-offline-konzept.md`).
- Ersatz des Demo-PIN-Schutzes im Admin-Bereich durch eine geprüfte
  Zugriffskontrolle, inkl. Protokollierung von Änderungen an
  Inhalten/Fragenkatalog.

## Umsetzung im Ergebnis-Screen

Die App zeigt **nie** erfundene Umfrageergebnisse. Aggregierte Werte
(z. B. Durchschnitts-Zufriedenheit) werden erst ab einer
Mindeststichprobe (`MIN_SAMPLE_SIZE = 20` in `app/src/lib/storage.ts`)
überhaupt angezeigt, und immer mit dem Hinweis, dass es sich um lokale
Werte eines einzelnen Geräts handelt, nicht um ein repräsentatives
Ergebnis.
