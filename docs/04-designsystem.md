# Designsystem

## Farbpalette

Abgeleitet aus dem Original-Logo (Gold/Blau/Weiß), Gold bewusst sparsam
als Akzent statt als Flächenfarbe eingesetzt (siehe Vorgabe "keine
übermäßige Verwendung von Gold").

| Token | Hex | Verwendung |
|---|---|---|
| `mdp-navy-950` | `#08152B` | Präsentationsmodus-Hintergrund, Abschluss-Screen |
| `mdp-navy-900` | `#0B1F3A` | Primärfarbe: Buttons, Kopfzeilen, Logo-Rahmen |
| `mdp-navy-500` | `#2E5AA0` | Fokus-Ringe, sekundäre Akzente |
| `mdp-navy-100` / `-50` | `#DFE7F3` / `#F1F4F9` | helle Flächen (Icon-Hintergründe, aktive Zustände) |
| `mdp-gold-500` | `#C2A03F` | Akzent: Tagline, aktive Fortschrittsanzeige, Präsentations-CTA |
| `mdp-gold-100` | `#F5EED9` | Hinweis-/Disclaimer-Flächen |
| `mdp-ink` | `#10131A` | Fließtext |
| `mdp-slate-500` | `#64748B` | Sekundärtext |
| `mdp-slate-200/100` | `#E2E8F0` / `#EEF1F5` | Rahmen, neutrale Flächen |
| `mdp-bg` | `#F6F7F9` | Seitenhintergrund (Bürgermodus) |
| `mdp-positive` | `#1E6B4F` | "Aus Parteiprogramm bestätigt" |
| `mdp-caution` | `#9A5A12` | "Prüfauftrag" |

Kontrast ist durchgehend hoch genug für Außenlichteinsatz geprüft:
dunkler Text auf hellem Grund bzw. Weiß auf Navy — keine mittelgrauen
Text-auf-Grau-Kombinationen im Fließtext.

## Typografie

Systemschrift (`-apple-system` / SF Pro auf iPadOS) statt Web-Font:

- schnell (kein Nachladen, kein Font-Flackern)
- **offline-sicher** — kritisch, da die App ohne Internet funktionieren
  muss
- wirkt nativ auf iPadOS

Skalen: Zurückhaltend, wenige Größenstufen, durchgehend `font-bold` für
Überschriften. Präsentationsmodus nutzt bewusst sehr große Schriftgrade
(bis 6xl) für Lesbarkeit auf Distanz beim Straßengespräch.

## Bausteine (siehe `app/src/components/ui`)

- **Button** — 5 Varianten (primary/secondary/outline-light/ghost/gold),
  Mindesthöhe 52–64px für zuverlässige Touch-Treffer.
- **Card** — abgerundete Fläche, dezenter Schatten statt harter Kanten.
- **ScaleInput** — 0–10-Skala als 11 gleich große Touch-Kacheln statt
  Schieberegler (präziser für Finger-Bedienung, keine Fehlbedienung).
- **SelectGrid** — Mehrfach-/Einzelauswahl als große Kacheln mit
  sichtbarem Checkbox-/Radio-Zustand.
- **TopicTileGrid** — die 12 Themenkacheln, Icon + Label, min. 132px
  hoch.
- **SourceBadge** — Quellenkennzeichnung (nur im Admin-Bereich
  sichtbar): ✓ aus Parteiprogramm / ⚠ Prüfauftrag / ○ noch nicht
  festgelegt.
- **FlowDiagram** — vertikaler Kreislauf-Pfeil für Wohnungsfonds und
  Staatliche Industrie.

## Gestaltungsprinzipien

- **Große Touchflächen:** kein interaktives Element unter ~52px Höhe.
- **Keine langen Textblöcke:** Positionen als ein bis zwei Sätze/Zitate,
  Vertiefung nur auf explizitem Wunsch (verlinkte Konzeptseiten).
- **Keine übertriebenen Animationen:** nur kurze `transition-colors`,
  kein Parallax, kein 3D.
- **Landscape-first:** Layouts sind für breite Bildschirme (Grids,
  nebeneinander liegende Karten) gedacht, funktionieren aber auch im
  Hochformat (Tailwind-Breakpoints).
- **Bürgermodus zeigt keine internen Zustände** (Quellen-Badges,
  Prüfaufträge, Rohdaten) — das bleibt Redaktionswissen im Admin-Bereich.
