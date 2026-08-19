# Status & offene Punkte

Dieses Dokument fasst zusammen, was in dieser Arbeitsumgebung tatsächlich
zur Verfügung stand, was daraus gebaut wurde, und was vor einem
produktiven Einsatz zwingend noch erledigt werden muss.

## Was in dieser Session tatsächlich verfügbar war

Die Aufgabenstellung kündigt zwei Dateien an ("ich stelle dir zusätzlich
1. PDF, 2. Logo zur Verfügung"). In der eigentlichen Bearbeitungsumgebung
kamen davon an:

- **Logo:** nur als Bild-Vorschau innerhalb der Aufgabenstellung selbst
  sichtbar, **nicht** als Datei auf der Festplatte nutzbar.
- **Parteiprogramm-PDF:** **nicht** angekommen — es existiert keine PDF-
  Datei in diesem Arbeitsbereich.

Beides wurde geprüft (Dateisystem durchsucht, Git-Historie geprüft) — es
ist wirklich nichts vorhanden.

## Wie damit umgegangen wurde

Anstatt die App deswegen zu blockieren, wurde nach den beiden expliziten
Vorgaben aus der Aufgabenstellung selbst gearbeitet:

1. **"Kein neues Logo entwerfen."** → Es gibt aktuell nur einen reinen
   Text-Platzhalter (MDP-Schriftzug in den Marken-Farben), **keinen**
   Nachbau des Kreisemblems mit Säulen-Piktogramm. Ein Nachbau des
   Emblems ohne Originaldatei wäre selbst ein "neues Logo entwerfen"
   gewesen. Siehe `app/src/components/Logo.tsx` für die genaue
   Begründung und die Anleitung, wie die echte Datei eingesetzt wird.
2. **"Wenn die PDF eine Position nicht eindeutig enthält, erfinde keine
   Position. Kennzeichne sie als Prüfauftrag."** → Die Aufgabenstellung
   selbst enthält bereits wörtliche Zitate aus dem Programm (z. B. die
   8 Kernaussagen für "MDP in 2 Minuten", das Schichtmodell, den
   Wohnungsfonds-Kreislauf, die Vertrauensabstimmungs-Regeln). Diese
   Zitate wurden 1:1 übernommen — nichts wurde umformuliert oder
   erfunden. Da ich sie nicht gegen die Original-PDF gegenspiegeln
   konnte, sind sie im Code als **"Prüfauftrag"** markiert (Badge im
   Admin-Bereich → Inhalte & Themen), nicht als final bestätigt. Themen,
   zu denen die Aufgabenstellung überhaupt keinen Text lieferte (Umwelt,
   Außenpolitik, Landwirtschaft), zeigen ehrlich "Noch nicht
   festgelegt" statt erfundener Inhalte.

Siehe `docs/05-content-mapping.md` für die vollständige Quellen-Tabelle.

## Vor einem echten Einsatz zwingend zu tun

1. **Logo-Originaldatei einsetzen.** SVG oder PNG (transparent, ≥512px)
   bereitstellen und gemäß Anleitung in `Logo.tsx` einbinden.
2. **Parteiprogramm-PDF einspielen und jede "Prüfauftrag"-Position im
   Admin-Bereich (Inhalte & Themen) gegenlesen**, entweder bestätigen
   oder korrigieren. Die vier offenen Themen (Umwelt, Außenpolitik,
   Landwirtschaft, und die Trennung von "Bildung" / "Technologie")
   ausformulieren.
3. **Rechtliche Prüfung** von Datenschutz, Rechtsgrundlage,
   Speicherfristen und Vorgaben für politische Parteien (siehe
   `docs/07-datenschutzkonzept.md`) — ausdrücklich noch offen.
4. **Admin-Authentifizierung ersetzen.** Der aktuelle PIN-Schutz
   (`AdminGate.tsx`) ist ein reiner Demo-Mechanismus, keine echte
   Zugriffskontrolle.
5. **Backend/Sync für Mehrgeräte-Betrieb**, falls mehrere iPads
   gleichzeitig im Einsatz sein sollen (siehe `docs/06-offline-konzept.md`
   — der Prototyp speichert bewusst nur lokal pro Gerät).
6. **Native iPadOS-Verpackung entscheiden**: Diese Session hat den
   klickbaren Prototyp als iPad-optimierte Web-App (React/Vite)
   gebaut, testbar direkt im Safari-Browser oder "Zum Home-Bildschirm
   hinzufügen". Für eine echte App-Store-App müsste dieselbe Logik in
   SwiftUI portiert oder mit einem WebView-Wrapper (z. B. Capacitor)
   verpackt werden — das war in dieser Umgebung nicht sinnvoll
   ausführ- und testbar (kein Xcode/iOS-Simulator verfügbar), eine
   Web-App ließ sich dagegen tatsächlich bauen und im Browser
   durchklicken.
