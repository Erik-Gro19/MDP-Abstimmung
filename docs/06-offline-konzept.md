# Offline-Konzept

## Grundsatz

Die App muss auf der Straße auch ohne oder mit schlechtem Internet
vollständig nutzbar sein — inklusive Präsentation, Umfragen und
Themeninhalte.

## Umsetzung im Prototyp

- **Alle Inhalte sind Teil des App-Bundles** (`app/src/data/*.ts`) —
  keine Server-Anfrage nötig, um Themenpositionen, 2-Minuten-Karten,
  Konzeptseiten oder den Standard-Fragenkatalog zu laden.
- **`HashRouter`** statt Server-seitigem Routing — funktioniert offline
  und wenn die App "Zum Home-Bildschirm hinzufügen" installiert wird.
- **Umfrageantworten werden ausschließlich lokal** (`localStorage` im
  Browser des iPads) zwischengespeichert (`app/src/lib/storage.ts`),
  bis sie im Admin-Bereich exportiert werden. Es findet keine
  automatische Übertragung an einen Server statt — dieser Prototyp hat
  bewusst **kein Backend**.
- **Admin-Änderungen** (Fragenkatalog, Themeninhalte, QR-Ziel) liegen
  ebenfalls nur lokal auf dem jeweiligen Gerät (`localStorage`-Overlay,
  `app/src/lib/adminContent.ts`).
- Ein kleines **Online/Offline-Badge** oben rechts zeigt jederzeit den
  Verbindungsstatus — reine Information, kein Blocker.

## Was das für den produktiven Einsatz bedeutet

- **Ein Gerät, ein Datenstand.** Ohne Backend hat jedes iPad seinen
  eigenen lokalen Antworten- und Inhalte-Stand. Für den Einsatz mit
  mehreren iPads gleichzeitig braucht es vor dem Rollout:
  - einen Sync-Mechanismus, der **nur bei bestehender Verbindung**
    anonyme Umfrageantworten hochlädt (nie personenbezogene Daten,
    siehe Datenschutzkonzept),
    und
  - eine zentrale Content-Pflege, damit alle Geräte denselben
    Fragenkatalog/Themenstand zeigen (heute: manuell pro Gerät im
    Admin-Bereich pflegen oder App-Update ausrollen).
- **App-Installation als PWA/Home-Bildschirm-App empfohlen**, damit das
  Bundle (JS/CSS/Bilder) nach dem ersten Laden auch ganz ohne Netz
  startet. Für einen echten Produktivbetrieb zusätzlich einen
  Service-Worker mit Cache-Strategie ergänzen (im Prototyp noch nicht
  enthalten).
- **Kein Datenverlust-Risiko durch Offline-Nutzung**, da nichts auf
  eine Serververbindung angewiesen ist, um zu funktionieren — nur der
  spätere Export/Sync braucht Netz.

## Explizit nicht offline-abhängig

Der QR-Code selbst wird lokal aus der hinterlegten Ziel-URL erzeugt
(keine Netzwerkanfrage nötig) — nur das **Scannen und Öffnen** der Website
braucht anschließend eine Verbindung, aber das passiert auf dem
Smartphone der Bürgerin/des Bürgers, nicht auf dem iPad.
