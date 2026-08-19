# Informationsarchitektur

## Leitprinzip

Die App hat zwei getrennte Zonen mit unterschiedlichem Publikum:

- **Bürgermodus** (Standard, alles ab der Startseite sichtbar) — für die
  Person auf der Straße. Keine Anmeldung, keine internen Begriffe wie
  "Prüfauftrag", keine Admin-Funktionen sichtbar oder erreichbar.
- **Admin-Modus** (`/admin`, PIN-geschützt) — für die MDP-Redaktion.
  Nur über einen unauffälligen Link am unteren Rand der Startseite
  erreichbar, taucht in keiner Bürger-Navigation auf.

## Inhaltsebenen

```
Ebene 1 — Einstieg           Startseite (5 Hauptkacheln)
Ebene 2 — Modus               Bürgerdialog · 2-Minuten-Modus · Themen ·
                               Umfragen · QR/Website
Ebene 3 — Interaktion         Umfrage-Schritte · Themenkacheln ·
                               Personas ("Was bedeutet das für mich?")
Ebene 4 — Inhalt              Einzelne MDP-Position (immer mit
                               Quellenstatus im Admin-Kontext)
Ebene 5 — Konzepte            Schichtmodell · Wohnungsfonds ·
                               Staatliche Industrie · Vertrauen
                               (aus Ebene 4 heraus verlinkt)
Ebene 6 — Abschluss           QR-Code-Screen (immer erreichbar, jeder
                               Pfad endet hier)
```

## Datenmodell (vereinfacht)

- **Topic** — 12 feste Themen (Wohnen, Wirtschaft, Energie, …), je mit
  Kurzaussage + einer oder mehreren Positionen. Jede Position trägt
  einen Quellenstatus (`programm` / `pruefauftrag`) und optional
  `hasContent: false` für "noch nicht festgelegt".
- **SurveyQuestion** — admin-verwaltbarer Fragenkatalog (Typ: Skala /
  Einzelauswahl / Mehrfachauswahl / Freitext), mit Aktiv-Flag und
  Reihenfolge.
- **DialogResponse** — eine abgeschlossene Umfrage-Session: zufällige,
  nicht-personenbezogene `sessionId`, Zeitstempel, Antworten, gewählte
  Themen. Bewusst **kein** Feld für Name/Kontakt/Gerät-ID.
- **TwoMinuteCard** — die 6–8 Kernaussagen für den Präsentationsmodus.
- **PersonaOption** — Zuordnung "Lebenssituation → betroffene Themen"
  für "Was bedeutet das für mich?".

Siehe `app/src/data/types.ts` für die exakten TypeScript-Typen.

## Navigationsprinzipien

- Jede Bürger-Seite hat **einen** klaren "Zurück"-Weg (oben links) und
  das MDP-Logo in der Mitte führt immer zur Startseite.
- Der Bürgerdialog ist ein **linearer Trichter** (kein Verzweigen in
  Untermenüs), damit ein Gespräch nie in einer Sackgasse endet.
- "Themen entdecken", "MDP in 2 Minuten" und "Was bedeutet das für
  mich?" sind dagegen **frei explorierbar** — für Situationen, in denen
  der Bürger gezielt nach einem Thema fragt, ohne die volle Umfrage zu
  durchlaufen.
