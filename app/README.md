# MDP-Bürgerdialog — App

Klickbarer Prototyp als React/TypeScript/Tailwind-Web-App, iPad-first
(Landscape, große Touchflächen, Systemschrift, funktioniert offline).
Konzepthintergrund: siehe [`/docs`](../docs).

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server, siehe ausgegebene URL
npm run build     # Typecheck + Produktions-Build nach dist/
npm run lint      # oxlint
npm run preview   # gebauten Build lokal ansehen
```

Am besten im Browser mit Querformat-Fenster (oder auf einem echten
iPad) testen — die App ist für Landscape optimiert.

## Struktur

```
src/
  data/            Inhalte & Typen (Themen, Umfragefragen, Konzepte)
  lib/             Storage (localStorage, keine PII), Admin-Overlay
  components/      Wiederverwendbare UI-Bausteine + Layout
  screens/         Alle Bildschirme, u. a. dialog/ und admin/
```

## Admin-Bereich (Prototyp)

Über den kleinen "⚙ Admin"-Link unten auf der Startseite erreichbar.
Demo-PIN: `1974` — **kein echter Zugriffsschutz**, vor Produktivbetrieb
durch echte Authentifizierung ersetzen (siehe
`../docs/00-status-und-offene-punkte.md`).

## Logo

`src/components/Logo.tsx` enthält aktuell nur einen Text-Platzhalter,
keinen Nachbau des Original-Emblems — Begründung und Einbau-Anleitung
direkt im Datei-Kommentar.
