# Sitemap

```
/                                   Startseite (Hauptnavigation)
│
├── /dialog                         Bürgerdialog (Zustandsautomat, eine Route)
│     ├── Willkommen
│     ├── Umfrage-Schritte (aus dem Admin-Fragenkatalog, dynamisch)
│     ├── Danke / ehrlicher Zwischenstand
│     ├── Themenwahl (12 Kacheln)
│     └── Themeninhalte  → weiter zu /abschluss
│   /dialog?direkt=umfrage          Direkteinstieg ohne Willkommens-Screen
│                                    (Hauptnav-Kachel "Umfragen")
│
├── /zwei-minuten                   MDP in 2 Minuten (Präsentationsmodus,
│                                    Titelfolie + 8 Karten)  → /abschluss
│
├── /themen                         Themen entdecken (frei explorierbar)
│     └── verlinkt → /was-bedeutet-das
│
├── /was-bedeutet-das               "Was bedeutet das für mich?"
│                                    (Persona-Auswahl → passende Themen)
│
├── /konzepte/schichtmodell         Infrastruktur-Schichtmodell
├── /konzepte/wohnungsbau           Staatlicher Wohnungsbau
├── /konzepte/industrie             Staatliche Industrie
├── /konzepte/vertrauen             Vertrauen & Transparenz
│                                    (verlinkt von Themenkarten + Startseiten-Footer)
│
├── /abschluss                      QR-Code-Abschluss (auch direkt über
│                                    Hauptnav-Kachel "QR-Code / Website"
│                                    erreichbar)
│
└── /admin                          PIN-Gate (kein Link im Bürgermodus
      /admin/start                  außer kleinem Footer-Link)
      /admin/umfragen               Fragenkatalog verwalten
      /admin/themen                 Inhalte & Quellenstatus verwalten
      /admin/ergebnisse             Aggregierte Ergebnisse + Export
      /admin/qr                     QR-Ziel-URL verwalten
```

Technisch: `HashRouter` (funktioniert offline und als "Zum Home-
Bildschirm hinzufügen"-App ohne Server-Routing-Konfiguration).
