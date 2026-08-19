# Content-Mapping: Woher kommt welcher Text?

Siehe auch `docs/00-status-und-offene-punkte.md` für den Kontext, warum
die eigentliche Programm-PDF nicht ausgewertet werden konnte.

## Grundregel im Code

`app/src/data/content.ts` markiert **jede** politische Aussage mit einem
Quellenstatus (`SourcedText`):

- `status: "programm"` — wörtlich/inhaltlich aus einer verlässlichen
  Quelle bestätigt.
- `status: "pruefauftrag"` — Text vorhanden, aber (noch) nicht von mir
  gegen die Original-PDF verifiziert.
- `hasContent: false` — es liegt **keine** Position vor; die App zeigt
  ehrlich "Noch nicht festgelegt" statt eines erfundenen Satzes.

Aktuell sind **alle** befüllten Positionen als `pruefauftrag` markiert —
siehe Begründung unten.

## Herkunft im Einzelnen

| Bereich | Quelle | Status |
|---|---|---|
| 8 Kernaussagen "MDP in 2 Minuten" (Wirtschaft, Wohnen, Infrastruktur, Energie, Sicherheit, Mobilität, Bildung & Technologie, Staatsfinanzen) | wörtliche Zitate aus der Aufgabenstellung | Prüfauftrag |
| Infrastruktur-Schichtmodell (Kategorie A/B, Uhrzeiten, Beispielprojekte) | wörtlich aus der Aufgabenstellung | Prüfauftrag |
| Staatlicher Wohnungsfonds (Kreislauf-Schritte, Bauelemente) | wörtlich aus der Aufgabenstellung | Prüfauftrag |
| Staatliche Industrie (Kreislauf-Schritte, Branchen) | wörtlich aus der Aufgabenstellung | Prüfauftrag |
| Jährliche Vertrauensabstimmung (50-%-Regel, Trennung von der Vorstandswahl) | wörtlich aus der Aufgabenstellung | Prüfauftrag |
| Umwelt, Außenpolitik, Landwirtschaft | **keine Angabe** in der Aufgabenstellung | `hasContent: false` — "Noch nicht festgelegt" |
| Bildung *und* Technologie als getrennte Themenkacheln | Aufgabenstellung nennt nur den gemeinsamen Punkt "Bildung & Technologie" | Prüfauftrag, mit Hinweis auf nötige Trennung |
| Umfragefragen (Zufriedenheit, Themen, Priorität, Vertrauen) | Formulierungen aus der Aufgabenstellung, bereits als "so formulieren" vorgegeben und bewusst neutral | — (keine politische Aussage, sondern Fragetext) |

## Warum "Prüfauftrag" statt "programm"?

Die Aufgabenstellung enthält Formulierungen in Anführungszeichen, die
wie direkte Programm-Zitate wirken — aber ohne Zugriff auf die
tatsächliche PDF-Datei kann ich nicht bestätigen, dass sie wortgleich,
vollständig und aktuell aus dem echten Parteiprogramm stammen. Um nicht
fälschlich "amtlich geprüft" zu suggerieren, bleibt der Status
`pruefauftrag`, bis jemand mit Zugriff auf die echte PDF das im
Admin-Bereich (**Inhalte & Themen** → "Als geprüft markieren") bestätigt.

## Wie die Redaktion das schließt

1. Admin-Bereich → **Inhalte & Themen** öffnen.
2. Jede Position gegen die Original-PDF lesen.
3. Korrekt → "Als geprüft markieren" (setzt Status auf `programm`).
4. Falsch/unvollständig → Text direkt im Textfeld korrigieren, dann
   "Speichern".
5. Fehlende Themen (Umwelt, Außenpolitik, Landwirtschaft) → sobald eine
   Position aus der PDF feststeht, in `app/src/data/content.ts` (oder
   später direkt im Admin-Bereich) ergänzen.
