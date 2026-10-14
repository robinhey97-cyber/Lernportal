# Lernportal Büromanagement

Statische Lernwebsite für die Umschulung zum/zur Kaufmann/-frau für Büromanagement (IHK).
Fächer: REWE, WISO, EDV, Kundenbeziehungsprozesse.

**Starten:** `index.html` im Browser öffnen (oder per GitHub Pages veröffentlichen). Kein Server nötig.

## Funktionen
- Lektion → Übung → Themen-Test pro Thema
- Aufgabentypen: Multiple Choice, Rechenaufgaben, Buchungssätze, Reihenfolge, Praxisszenarien
- Tagesmix über alle Fächer (mit Fach-Schwerpunkt "heute in der Schule"), Fehler-Wiederholung
- Prüfungssimulation mit Zeitlimit und IHK-Notenschlüssel
- Fortschritt, XP und Lernserie werden lokal gespeichert (Sichern/Laden als JSON)

## Inhalte erweitern
Neue Themen/Aufgaben in `js/content/<fach>.js` ergänzen (Struktur siehe vorhandene Themen).
Aufgaben-IDs werden automatisch aus Thema und Position vergeben – neue Aufgaben deshalb am Ende anfügen.
