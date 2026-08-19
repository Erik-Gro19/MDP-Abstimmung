# Status & offene Punkte

Dieses Dokument fasst zusammen, welche Quellen zur Verfügung standen,
wie sie eingearbeitet wurden, und was vor einem produktiven Einsatz
noch zu tun ist.

## Update: Logo und Parteiprogramm sind eingespielt

Ursprünglich standen weder das Original-Logo noch die Parteiprogramm-
PDF als Dateien zur Verfügung — nur eine Bild-Vorschau bzw. Zitate in
der Aufgabenstellung selbst (siehe Git-Historie dieses Dokuments für
den ursprünglichen Stand). Beide Dateien (`MDP.png` und
`MDP_Gesamtwerk_V1_4_..._313_Seiten_mit_OriginalLogo.pdf`) wurden
nachträglich in den Projekt-Ordner hochgeladen und sind jetzt
eingearbeitet:

- **Logo:** `app/src/assets/mdp-logo.png` (aus der Originaldatei
  verkleinert, keine Änderung an Farben/Formen/Symbolik) wird jetzt
  überall in der App als echtes Bild angezeigt (`Logo.tsx`), inklusive
  Favicon und Apple-Touch-Icon.
- **Parteiprogramm:** Das 313-seitige "MDP – Gesamtwerk V1.4" wurde
  vollständig ausgewertet (Kapitelstruktur, Zielbilder, Leitlinien,
  Maßnahmenprogramme, Anlage B zum Parteivorsitz). Alle 12 Themen in
  `app/src/data/content.ts` sind jetzt mit Kapitel- und Seitenangabe
  als `status: "programm"` belegt — siehe
  [`05-content-mapping.md`](05-content-mapping.md) für die vollständige
  Quellen-Tabelle.

### Wichtige Korrekturen gegenüber der ursprünglichen Aufgabenstellung

Der Abgleich mit dem echten Dokument deckte zwei Abweichungen von den
Annahmen in der ursprünglichen Aufgabenstellung auf — beide wurden
korrigiert, nichts wurde stillschweigend übernommen:

1. **Turnus der Vertrauensabstimmung.** Die Aufgabenstellung ging von
   einer *jährlichen* Abstimmung aus. Das Programm (Anlage B,
   Arbeitsblatt 2, Seite 215) nennt tatsächlich eine
   **"Zufriedenheitsstimme alle vier Jahre"**. Die App wurde
   entsprechend korrigiert. Die Schwelle "mehr als 50,1 %
   Unzufriedenheit" (statt "mehr als 50 %") ist dagegen wortgleich
   bestätigt.
2. **Infrastruktur-Schichtmodell.** Das Programm bestätigt nur die
   allgemeine Maßnahme *"Mehrschichtbetrieb bei geeigneten
   Baustellen"* (Kap. XIV, Seite 82) — ohne konkrete Uhrzeiten und ohne
   die Zwei-Kategorien-Aufteilung (Autobahnen/Brücken vs.
   Wohnblocks/lärmsensible Bereiche) aus der ursprünglichen
   Aufgabenstellung. Die App zeigt die konkrete Zeiteinteilung
   weiterhin als **Illustration dieser Maßnahme**, kennzeichnet sie
   aber deutlich als noch nicht im Programm ausformuliert
   (`/konzepte/schichtmodell`).

Zusätzlich enthielt Anlage B zum Parteivorsitz an mehreren Stellen nur
generischen Platzhaltertext statt ausformulierter Verfahrensregeln
(z. B. keine Aussage zur Geheimheit der Abstimmung). Das ist in der App
als offener Punkt markiert (`/konzepte/vertrauen`).

### Themen, die vorher als "noch nicht festgelegt" galten

Umwelt, Außenpolitik und Landwirtschaft hatten in der ursprünglichen
Aufgabenstellung keine Textgrundlage und wurden deshalb ehrlich leer
gelassen. Das Parteiprogramm enthält zu allen dreien eigene, klar
konturierte Kapitel (X, XXI, XXVIII–XXX) — die App zeigt jetzt für alle
12 Themenkacheln echte, seitengenaue Positionen.

## Vor einem echten Einsatz weiterhin zu tun

1. **Prüfpunkte aus dem Programm selbst auflösen** (nicht durch mich zu
   entscheiden): Geheimheit der Vertrauensabstimmung, genaues Quorum,
   konkrete Uhrzeiten/Kategorien im Schichtmodell — siehe die
   "Prüfauftrag"-Badges im Admin-Bereich → Inhalte & Themen.
2. **Rechtliche Prüfung** von Datenschutz, Rechtsgrundlage,
   Speicherfristen und Vorgaben für politische Parteien (siehe
   `docs/07-datenschutzkonzept.md`) — weiterhin offen.
3. **Admin-Authentifizierung ersetzen.** Der aktuelle PIN-Schutz
   (`AdminGate.tsx`) ist ein reiner Demo-Mechanismus.
4. **Backend/Sync für Mehrgeräte-Betrieb**, falls mehrere iPads
   gleichzeitig im Einsatz sein sollen (siehe
   `docs/06-offline-konzept.md`).
5. **Native iPadOS-Verpackung entscheiden.** Der klickbare Prototyp ist
   eine iPad-optimierte Web-App (React/Vite), testbar direkt im Safari-
   Browser oder per "Zum Home-Bildschirm hinzufügen". Für eine echte
   App-Store-App müsste dieselbe Logik in SwiftUI portiert oder mit
   einem WebView-Wrapper verpackt werden.
