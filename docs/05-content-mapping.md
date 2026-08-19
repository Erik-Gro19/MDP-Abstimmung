# Content-Mapping: Woher kommt welcher Text?

Siehe auch `docs/00-status-und-offene-punkte.md` für den Kontext und
die Korrekturen gegenüber der ursprünglichen Aufgabenstellung.

## Quelle

**"MDP – Gesamtwerk V1.4 – Inhaltliches Parteiprogramm"**, 313 Seiten,
34 Kapitel (I–XXXIV) + Anlagen A–C. Vollständig ausgewertet: Kapitel-
Zielbilder, Politische Leitlinien und Maßnahmenprogramme wurden für
alle 34 Kapitel extrahiert und den 12 App-Themen zugeordnet.

## Grundregel im Code

`app/src/data/content.ts` markiert jede politische Aussage mit einem
Quellenstatus (`SourcedText`):

- `status: "programm"` — mit Kapitel- und Seitenangabe im Original-
  Parteiprogramm belegt (Feld `note`, z. B. "Quelle: MDP-Gesamtwerk
  V1.4, Kap. VII, Seite 39").
- `status: "pruefauftrag"` — im Programm nur als generischer
  Platzhalter oder als allgemeine Maßnahme ohne die konkrete
  Ausformulierung vorhanden; die Partei muss das vor Veröffentlichung
  konkretisieren.

Alle 12 Themenkacheln sind mittlerweile `status: "programm"` mit
Seitenangabe belegt.

## Themen → Kapitel

| App-Thema | Kapitel | Seite |
|---|---|---|
| Wirtschaft | II. Wirtschaft, Mittelstand und Standort Deutschland | 9 |
| Wohnen | VII. Wohnraum, Hochhausprogramm und staatlicher Wohnungsfonds | 39 |
| Energie | IX. Energie, Netze und Versorgungssicherheit | 51 |
| Infrastruktur | XIV. Straßen, Brücken, Wasser und Telekommunikation | 81 |
| Sicherheit | XXIII. Polizei, Zoll und innere Sicherheit | 135 |
| Bildung | XVIII. Schule und Bildung | 105 |
| Mobilität | XI. Mobilität und Wahlfreiheit der Antriebstechnologie | 63 |
| Finanzen | III. Staatsfinanzen und Schuldenabbau | 15 |
| Umwelt | X. Umwelt, Luftqualität und innovative Stadttechnik | 57 |
| Außenpolitik | XXVIII. Außenpolitik und Partnerschaften (+ XXIX, XXX) | 165–177 |
| Landwirtschaft | XXI. Landwirtschaft und Ernährung | 123 |
| Technologie | XXXII. Forschung, Zukunftsindustrien und Ostdeutschland (+ V, XVI) | 189 |

## Konzeptseiten → Kapitel

| Konzept | Kapitel | Status |
|---|---|---|
| Staatlicher Wohnungsbau | VII (Leitlinien, Seite 39) + X (Fassadenbegrünung/Moossysteme, Seite 57) | programm |
| Staatliche Industrie | IV. Industriepolitik (Seite 21) + XXVII. Verteidigungsindustrie (Seite 159) | programm |
| Infrastruktur-Schichtmodell | XIV, Maßnahme A3, Seite 82 — nur allgemeine Maßnahme bestätigt | **teilweise**: Grundmaßnahme programm, konkrete Uhrzeiten/Kategorien weiterhin Illustration/Prüfauftrag |
| Vertrauen & Transparenz | Anlage B "Parteivorsitz – Wahl, Zufriedenheit und Abwahl", Seite 214–220 | **teilweise**: Kernfakten (4-Jahres-Turnus, 50,1-%-Schwelle, Trennung von der Vorstandswahl) programm; Verfahrensdetails (Geheimheit, Quorum) im Dokument selbst noch nicht ausformuliert |

## Korrekturen gegenüber der ursprünglichen Aufgabenstellung

Die ursprüngliche Aufgabenstellung enthielt bereits Zitate, die wie
Programmtexte wirkten. Der Abgleich mit der echten PDF bestätigte die
meisten davon inhaltlich, deckte aber zwei konkrete Abweichungen auf:

1. **Vertrauensabstimmung:** "jährlich" → tatsächlich **"alle vier
   Jahre"** (Anlage B, Arbeitsblatt 2, Seite 215). Die Schwelle "mehr
   als 50 %" wurde zu **"mehr als 50,1 %"** präzisiert (Arbeitsblatt 3,
   Seite 216).
2. **Schichtmodell:** Die konkreten Uhrzeiten (08:00–16:00 etc.) und
   die Zwei-Kategorien-Aufteilung sind **nicht** im Programm enthalten.
   Bestätigt ist nur die allgemeine Maßnahme "Mehrschichtbetrieb bei
   geeigneten Baustellen" (Kap. XIV, Seite 82). Die App zeigt die
   konkrete Aufteilung weiterhin, aber klar als Illustration
   gekennzeichnet, nicht als Zitat.

Nicht bestätigt werden konnte außerdem, dass die Vertrauensabstimmung
**geheim** ist — dieser Begriff kommt im Dokument an der betreffenden
Stelle nicht vor. Die App behauptet das deshalb nicht mehr.

## Wie die Redaktion verbleibende Prüfaufträge schließt

1. Admin-Bereich → **Inhalte & Themen** öffnen.
2. Bei den zwei verbleibenden Prüfaufträgen (Schichtmodell-Details,
   Vertrauensabstimmungs-Verfahrensdetails) mit der Partei klären, ob
   und wie sie im nächsten Programm-Update konkretisiert werden.
3. Nach Klärung: Text im entsprechenden Datenmodul (`content.ts`)
   aktualisieren und Status auf `"programm"` mit neuer Seitenangabe
   heben.
