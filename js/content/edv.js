window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  id: 'edv', name: 'EDV', full: 'Informationsverarbeitung & Büroanwendungen', icon: '💻', color: '#16a34a',
  desc: 'Hardware, Datenschutz, Excel und Geschäftsbrief: Wissen, das Du jeden Tag im Büro brauchst – und in der Prüfung anwenden musst.',
  topics: [
    /* ------------------------------------------------------------------ */
    {
      id: 'edv-hardware', title: 'Hardware, Software & EVA-Prinzip', minutes: 15,
      summary: 'Wie ein Computer arbeitet, Speicher, Betriebssystem, Peripherie.',
      lesson: `
<h2>Das EVA-Prinzip</h2>
<p>Jede Datenverarbeitung folgt dem Prinzip <b>E</b>ingabe – <b>V</b>erarbeitung – <b>A</b>usgabe. Zusätzlich werden Daten <b>gespeichert</b>.</p>
<table><tr><th>Eingabe</th><th>Verarbeitung</th><th>Ausgabe</th></tr>
<tr><td>Tastatur, Maus, Scanner, Mikrofon, Webcam</td><td>Prozessor (CPU), Arbeitsspeicher (RAM)</td><td>Monitor, Drucker, Lautsprecher</td></tr></table>
<p>Geräte, die sowohl ein- als auch ausgeben, sind z.B. Touchscreen, Multifunktionsgerät (Drucker + Scanner), USB-Stick.</p>

<h2>Wichtige Hardware</h2>
<ul><li><b>CPU (Prozessor):</b> „Gehirn“, führt Befehle aus (Takt in GHz, mehrere Kerne).</li>
<li><b>Arbeitsspeicher (RAM):</b> <b>flüchtiger</b> Speicher – Inhalt geht beim Ausschalten verloren. Je mehr RAM, desto mehr Programme gleichzeitig.</li>
<li><b>Massenspeicher:</b> speichert dauerhaft. <b>HDD</b> (Festplatte, mechanisch, günstig, langsamer) und <b>SSD</b> (Flash, schnell, stoßfest).</li>
<li><b>Mainboard:</b> verbindet alle Komponenten.</li>
<li><b>Grafikkarte, Netzteil, Netzwerkkarte</b>.</li></ul>

<h2>Software</h2>
<table><tr><th>Systemsoftware</th><th>Anwendungssoftware</th></tr>
<tr><td>Betriebssystem (Windows, macOS, Linux), Treiber</td><td>Textverarbeitung (Word), Tabellenkalkulation (Excel), E-Mail-Programm, Browser, Warenwirtschaft</td></tr></table>
<p>Das <b>Betriebssystem</b> verwaltet Hardware und Programme und stellt die Benutzeroberfläche bereit. <b>Treiber</b> erlauben dem Betriebssystem, Geräte (z.B. Drucker) anzusteuern.</p>

<h2>Speichereinheiten</h2>
<p>1 Byte = 8 Bit. Im Alltag gilt meist 1 KB = 1.000 Byte, 1 MB = 1.000 KB, 1 GB = 1.000 MB, 1 TB = 1.000 GB (binär: 1.024). In Aufgaben steht die Annahme meist dabei.</p>
<div class="box merke"><b class="t">Merke</b>RAM = flüchtig · SSD/HDD = dauerhaft · Betriebssystem = Systemsoftware · Word/Excel = Anwendungssoftware.</div>`,
      exercises: [
        { type: 'mc', q: 'Wofür steht das <b>EVA-Prinzip</b>?',
          options: ['Eingabe – Verarbeitung – Ausgabe', 'Entwicklung – Verwaltung – Anwendung', 'Erfassen – Verteilen – Archivieren', 'Eingabe – Verschlüsselung – Anzeige'], correct: 0,
          explain: 'Daten werden eingegeben, vom Prozessor verarbeitet und ausgegeben (und dazwischen gespeichert).' },
        { type: 'mc', q: 'Welche der folgenden Geräte sind <b>Eingabegeräte</b>?',
          options: ['Tastatur', 'Scanner', 'Drucker', 'Monitor', 'Maus'], correct: [0, 1, 4],
          explain: 'Drucker und Monitor sind Ausgabegeräte.' },
        { type: 'mc', q: 'Was passiert mit dem Inhalt des <b>Arbeitsspeichers (RAM)</b>, wenn der Computer ausgeschaltet wird?',
          options: ['Er geht verloren (flüchtiger Speicher)', 'Er bleibt dauerhaft erhalten', 'Er wird automatisch auf die SSD kopiert', 'Er wird gelöscht und neu formatiert'], correct: 0,
          explain: 'Deshalb unbedingt speichern, bevor der PC aus oder abgestürzt ist!' },
        { type: 'mc', q: 'Zu welcher Kategorie gehört das <b>Betriebssystem</b> (z.B. Windows)?',
          options: ['Systemsoftware', 'Anwendungssoftware', 'Hardware', 'Peripheriegerät'], correct: 0,
          explain: 'Anwendungssoftware erledigt konkrete Aufgaben des Nutzers (Word, Excel). Systemsoftware verwaltet den Rechner.' },
        { type: 'calc', unit: 'Medien', dec: 0, answer: 4, tol: 0.01,
          q: 'Eine Datensicherung umfasst <b>480 GB</b>. Du hast externe Festplatten mit je <b>128 GB</b>. Wie viele brauchst Du mindestens?', hint: 'Teile 480 durch 128 und runde auf eine ganze Zahl auf.',
          explain: '480 ÷ 128 = 3,75 → es müssen <b>4</b> Medien sein (man kann keine 0,75 Festplatte kaufen).' },
        { type: 'mc', q: 'Welchen Vorteil hat eine <b>SSD</b> gegenüber einer klassischen HDD?',
          options: ['Schneller Zugriff und unempfindlich gegen Erschütterungen', 'Sie ist in der Regel günstiger pro GB', 'Sie braucht ein Betriebssystem, die HDD nicht', 'Sie speichert Daten nur flüchtig'], correct: 0,
          explain: 'SSDs haben keine beweglichen Teile. Pro GB sind HDDs meist günstiger.' },
        { type: 'scenario',
          intro: 'Eine neue Kollegin, Frau Kaya, wird Sachbearbeiterin in der Buchhaltung. Sie arbeitet mit Excel-Tabellen mit vielen tausend Zeilen und hat oft mehrere Programme gleichzeitig offen. Du sollst ihren Arbeitsplatz-PC auswählen.',
          steps: [
            { q: 'Welche Speicherart sollte der Hauptspeicher des PCs sein, damit Programme schnell starten?',
              options: [{ t: 'SSD als Systemlaufwerk', ok: true, fb: 'Genau: Betriebssystem und Programme starten von einer SSD deutlich schneller.' },
                { t: 'Nur eine große HDD', ok: false, fb: 'Eine HDD ist spürbar langsamer – für Tabellen mit vielen Daten unpraktisch.' },
                { t: 'Nur ein USB-Stick', ok: false, fb: 'Ein USB-Stick ist als Systemlaufwerk ungeeignet und leicht zu verlieren.' }] },
            { q: 'Frau Kaya klagt: „Wenn ich mehrere Programme öffne, wird alles langsam.“ Was ist die wahrscheinlichste Hardware-Ursache?',
              options: [{ t: 'Zu wenig Arbeitsspeicher (RAM)', ok: true, fb: 'Richtig: Ist der RAM voll, lagert das System Daten auf die langsame Festplatte aus.' },
                { t: 'Der Monitor ist zu klein', ok: false, fb: 'Die Monitorgröße beeinflusst die Rechengeschwindigkeit nicht.' },
                { t: 'Die Tastatur ist defekt', ok: false, fb: 'Die Tastatur ist ein Eingabegerät und hat darauf keinen Einfluss.' }] }
          ],
          explain: 'Schnell starten = SSD. Viele Programme gleichzeitig = genug RAM.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'edv-datenschutz', title: 'Datenschutz & Datensicherheit', minutes: 25,
      summary: 'DSGVO, personenbezogene Daten, Schutzziele, Backup, Phishing.',
      lesson: `
<h2>Datenschutz ≠ Datensicherheit</h2>
<table><tr><th>Datenschutz</th><th>Datensicherheit</th></tr>
<tr><td>Schutz <b>personenbezogener Daten</b> und der Persönlichkeitsrechte von Menschen</td><td>Schutz <b>aller Daten</b> vor Verlust, Manipulation und unbefugtem Zugriff (technisch/organisatorisch)</td></tr>
<tr><td>Rechtsgrundlagen: <b>DSGVO</b>, Bundesdatenschutzgesetz (BDSG)</td><td>Maßnahmen: Passwörter, Backup, Firewall, Verschlüsselung</td></tr></table>

<h2>Personenbezogene Daten</h2>
<p>Alle Informationen, die sich auf eine <b>identifizierte oder identifizierbare Person</b> beziehen: Name, Adresse, E-Mail, Telefonnummer, Geburtsdatum, Kontonummer, <b>IP-Adresse</b>, Kfz-Kennzeichen, Fotos. <i>Besonders sensibel</i> sind Gesundheitsdaten, Religion, Gewerkschaftszugehörigkeit u.a.</p>
<p>Nicht personenbezogen: z.B. Unternehmensumsatz, vollständig anonymisierte Statistiken.</p>

<h2>Grundsätze der Datenverarbeitung (Art. 5 DSGVO)</h2>
<ul><li><b>Rechtmäßigkeit</b> (z.B. Einwilligung, Vertrag, gesetzliche Pflicht, berechtigtes Interesse)</li>
<li><b>Zweckbindung</b> – nur für den vorher festgelegten Zweck</li>
<li><b>Datenminimierung</b> – nur so viel wie nötig</li>
<li><b>Richtigkeit</b> – Daten aktuell halten</li>
<li><b>Speicherbegrenzung</b> – löschen, wenn nicht mehr erforderlich</li>
<li><b>Integrität und Vertraulichkeit</b> – technisch absichern</li></ul>

<h2>Rechte der Betroffenen</h2>
<p>Auskunft · Berichtigung · Löschung („Recht auf Vergessenwerden“) · Einschränkung der Verarbeitung · Datenübertragbarkeit · Widerspruch.</p>
<ul><li><b>Datenschutzbeauftragter:</b> Pflicht, wenn in der Regel mindestens <b>20 Personen</b> ständig mit automatisierter Datenverarbeitung beschäftigt sind.</li>
<li><b>Datenpanne:</b> Meldung an die Aufsichtsbehörde <b>binnen 72 Stunden</b>.</li>
<li><b>Bußgeld:</b> bis zu <b>20 Mio. €</b> oder <b>4 %</b> des weltweiten Jahresumsatzes (je nachdem, was höher ist).</li></ul>

<h2>Datensicherheit – Schutzziele</h2>
<table><tr><th>Vertraulichkeit</th><th>Integrität</th><th>Verfügbarkeit</th></tr>
<tr><td>Nur Befugte haben Zugriff (Passwörter, Rechtevergabe, Verschlüsselung)</td><td>Daten sind unverändert und korrekt (Prüfsummen, Rechtebeschränkung)</td><td>Daten und Systeme sind nutzbar (Backup, USV, Redundanz)</td></tr></table>

<h2>Maßnahmen im Büroalltag</h2>
<ul><li>Sichere Passwörter (lang, nicht wiederverwendet), Passwortmanager, <b>Zwei-Faktor-Authentifizierung</b></li>
<li>Bildschirm sperren beim Verlassen (<code>Windows + L</code>), <b>Clean-Desk-Policy</b></li>
<li>Updates einspielen, Virenschutz, Firewall</li>
<li><b>Backup – 3-2-1-Regel:</b> 3 Kopien, auf 2 verschiedenen Medien, 1 davon an einem anderen Ort (extern/Cloud)</li>
<li><b>Phishing</b> erkennen: Zeitdruck, ungewöhnlicher Absender, Links mit falscher Domain, Anhänge von Unbekannten</li></ul>
<p><b>Backup-Arten:</b> Vollsicherung (alles), differenziell (Änderungen seit der letzten Vollsicherung), inkrementell (Änderungen seit der letzten Sicherung – egal welcher Art).</p>`,
      exercises: [
        { type: 'mc', q: 'Was beschreibt den Unterschied zwischen <b>Datenschutz</b> und <b>Datensicherheit</b> am besten?',
          options: ['Datenschutz schützt personenbezogene Daten und Persönlichkeitsrechte, Datensicherheit schützt Daten technisch vor Verlust und Missbrauch.', 'Datenschutz betrifft nur Computer, Datensicherheit nur Papier.', 'Beides bedeutet dasselbe.', 'Datenschutz regelt das Backup, Datensicherheit das Urheberrecht.'], correct: 0,
          explain: 'Datenschutz: Schutz der Person. Datensicherheit: Schutz der Daten.' },
        { type: 'mc', q: 'Welche der folgenden Angaben sind <b>personenbezogene Daten</b>?',
          options: ['E-Mail-Adresse einer Kundin', 'IP-Adresse eines Website-Besuchers', 'Jahresumsatz der Firma Meier GmbH', 'Kfz-Kennzeichen eines Mitarbeiters', 'Vollständig anonymisierte Umfrageergebnisse'], correct: [0, 1, 3],
          explain: 'Alles, was eine Person identifizierbar macht, ist personenbezogen. Firmenumsatz und anonymisierte Daten nicht.' },
        { type: 'mc', q: 'Welches <b>Schutzziel</b> wird durch eine regelmäßige Datensicherung (Backup) vor allem gesichert?',
          options: ['Verfügbarkeit', 'Vertraulichkeit', 'Zweckbindung', 'Barrierefreiheit'], correct: 0,
          explain: 'Backups stellen sicher, dass Daten nach einem Ausfall wieder verfügbar sind.' },
        { type: 'mc', q: 'Was besagt die <b>3-2-1-Backup-Regel</b>?',
          options: ['3 Kopien der Daten, auf 2 verschiedenen Medien, davon 1 an einem anderen Ort', '3 Backups pro Tag, 2 Mitarbeiter, 1 Passwort', '3 Passwörter, 2 Faktoren, 1 Firewall', 'Alle 3 Tage ein Backup auf 2 Servern im selben Raum'], correct: 0,
          explain: 'Die externe Kopie schützt z.B. vor Brand, Diebstahl oder Ransomware.' },
        { type: 'mc', q: 'Wie schnell muss eine <b>Datenschutzverletzung</b> (Datenpanne) in der Regel der Aufsichtsbehörde gemeldet werden?',
          options: ['Innerhalb von 72 Stunden', 'Innerhalb von 24 Stunden', 'Innerhalb von 4 Wochen', 'Nur auf Nachfrage'], correct: 0,
          explain: 'Die Meldepflicht besteht, es sei denn, die Verletzung führt voraussichtlich nicht zu einem Risiko für die Betroffenen.' },
        { type: 'calc', unit: '€', dec: 0, answer: 24000000,
          q: 'Ein Unternehmen hat 600 Mio. € Jahresumsatz. Das maximale DSGVO-Bußgeld beträgt <b>20 Mio. € oder 4 % des Umsatzes</b> (der höhere Wert). Wie hoch ist das maximale Bußgeld?', hint: '4 % von 600 Mio. berechnen und mit 20 Mio. vergleichen.',
          explain: '4 % von 600 Mio. = 24 Mio. €. Das ist mehr als 20 Mio. € → <b>24 Mio. €</b>.' },
        { type: 'order', q: 'Du entdeckst, dass versehentlich eine E-Mail mit Kundenadressen an einen falschen Empfänger ging. Bringe die Reaktion in eine sinnvolle Reihenfolge.',
          items: ['Vorfall sofort intern melden (Vorgesetzte/Datenschutzbeauftragte)', 'Schaden begrenzen (z.B. Empfänger bitten, die Mail zu löschen)', 'Vorfall und Maßnahmen dokumentieren', 'Meldung an die Aufsichtsbehörde (binnen 72 Stunden)', 'Betroffene informieren, wenn ein hohes Risiko besteht'],
          explain: 'Erst melden und begrenzen, dann dokumentieren und die Behörde informieren.' },
        { type: 'scenario',
          intro: 'Es ist 8:15 Uhr. Du erhältst eine E-Mail: „Ihre Bank – Ihr Konto wird in 24 Stunden gesperrt! Bestätigen Sie jetzt Ihre Daten: www.bank-sicherheit-24.xyz/login“. Im Anhang liegt eine Datei „Rechnung.exe“.',
          steps: [
            { q: 'Woran erkennst Du am deutlichsten, dass es sich um <b>Phishing</b> handeln dürfte?',
              options: [{ t: 'Zeitdruck, unseriöse Domain und eine ausführbare Datei als „Rechnung“', ok: true, fb: 'Genau – das sind klassische Phishing-Merkmale.' },
                { t: 'Die Mail ist in Deutsch geschrieben', ok: false, fb: 'Phishing-Mails sind heute meist fehlerfrei auf Deutsch.' },
                { t: 'Die Mail kam am Morgen', ok: false, fb: 'Die Uhrzeit sagt nichts über die Echtheit aus.' }] },
            { q: 'Was tust Du?',
              options: [{ t: 'Nichts anklicken, Mail der IT / dem Sicherheitsverantwortlichen melden und löschen.', ok: true, fb: 'Richtig. So können auch Kolleginnen und Kollegen gewarnt werden.' },
                { t: 'Auf den Link klicken, um die Seite zu prüfen.', ok: false, fb: 'Schon der Klick kann gefährlich sein. Niemals Links aus verdächtigen Mails öffnen.' },
                { t: 'Die Anlage öffnen, der Virenscanner schützt ja.', ok: false, fb: 'Ausführbare Dateien (.exe) aus unbekannten Quellen niemals öffnen.' }] }
          ],
          explain: 'Im Zweifel: nicht klicken, nicht öffnen, melden.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'edv-excel', title: 'Tabellenkalkulation (Excel)', minutes: 30,
      summary: 'Formeln, Funktionen, absolute und relative Bezüge, WENN, SUMMEWENN.',
      lesson: `
<h2>Grundlagen</h2>
<p>Eine Tabelle besteht aus <b>Zellen</b>, adressiert durch Spalte + Zeile (z.B. <code>B3</code>). Formeln beginnen immer mit <code>=</code>. In deutschem Excel trennt man Argumente mit einem <b>Semikolon</b>.</p>

<h2>Wichtige Funktionen</h2>
<table><tr><th>Funktion</th><th>Wirkung</th></tr>
<tr><td><code>=SUMME(B2:B5)</code></td><td>addiert den Bereich</td></tr>
<tr><td><code>=MITTELWERT(B2:B5)</code></td><td>Durchschnitt</td></tr>
<tr><td><code>=MIN(...)</code> / <code>=MAX(...)</code></td><td>kleinster / größter Wert</td></tr>
<tr><td><code>=ANZAHL(...)</code></td><td>zählt Zellen mit Zahlen</td></tr>
<tr><td><code>=WENN(Bedingung;Dann;Sonst)</code></td><td>Entscheidung, z.B. <code>=WENN(B2&gt;=5000;B2*0,05;0)</code></td></tr>
<tr><td><code>=ZÄHLENWENN(Bereich;Kriterium)</code></td><td>zählt Zellen, die das Kriterium erfüllen</td></tr>
<tr><td><code>=SUMMEWENN(Suchbereich;Kriterium;Summenbereich)</code></td><td>addiert nur passende Zeilen</td></tr>
<tr><td><code>=SVERWEIS(Suchwert;Matrix;Spalte;0)</code></td><td>sucht in der ersten Spalte, liefert Wert aus Spalte <i>n</i> (0 = genau). Neuere Excel-Versionen: <code>XVERWEIS</code>.</td></tr>
<tr><td><code>=RUNDEN(Zahl;Stellen)</code></td><td>rundet kaufmännisch</td></tr></table>

<h2>Relative und absolute Bezüge</h2>
<ul><li><b>Relativ</b> (<code>A2</code>): ändert sich beim Kopieren mit. Formel in C2 <code>=A2*B2</code>, nach unten kopiert → C3 <code>=A3*B3</code>.</li>
<li><b>Absolut</b> (<code>$F$1</code>): bleibt beim Kopieren fest. <code>=A2*$F$1</code> → in C3: <code>=A3*$F$1</code>. Tastenkürzel: <code>F4</code> im Bearbeitungsmodus.</li>
<li><b>Gemischt</b> (<code>$A2</code> oder <code>A$2</code>): nur Spalte bzw. Zeile fest.</li></ul>
<div class="box beispiel"><b class="t">Beispiel – Bruttopreis</b>Netto steht in B2, der Steuersatz in D1 (0,19). Brutto: <code>=B2*(1+$D$1)</code>. Der Steuersatz muss absolut sein, weil er beim Runterkopieren nicht „wandern“ darf.</div>

<h2>Typische Fehlerwerte</h2>
<table><tr><td><code>#DIV/0!</code></td><td>Division durch 0 (oder leere Zelle)</td></tr>
<tr><td><code>#BEZUG!</code></td><td>Bezug existiert nicht mehr (Zeile/Spalte gelöscht)</td></tr>
<tr><td><code>#NV</code></td><td>Wert nicht gefunden (z.B. SVERWEIS)</td></tr>
<tr><td><code>#WERT!</code></td><td>falscher Datentyp (z.B. Text statt Zahl)</td></tr>
<tr><td><code>#NAME?</code></td><td>unbekannter Funktionsname / Tippfehler</td></tr>
<tr><td><code>####</code></td><td>Spalte zu schmal</td></tr></table>`,
      exercises: [
        { type: 'calc', unit: '', dec: 0, answer: 25, tol: 0.01,
          q: 'Gegeben ist die Tabelle:<table><tr><th></th><th>A</th><th>B</th></tr><tr><th>1</th><td>Produkt</td><td>Menge</td></tr><tr><th>2</th><td>Stift</td><td>10</td></tr><tr><th>3</th><td>Block</td><td>5</td></tr><tr><th>4</th><td>Stift</td><td>7</td></tr><tr><th>5</th><td>Heft</td><td>3</td></tr></table>Welches Ergebnis liefert <code>=SUMME(B2:B5)</code>?',
          explain: '10 + 5 + 7 + 3 = <b>25</b>.' },
        { type: 'calc', unit: '', dec: 0, answer: 17, tol: 0.01,
          q: 'Gleiche Tabelle (A2:A5 = Stift, Block, Stift, Heft; B2:B5 = 10, 5, 7, 3). Was liefert <code>=SUMMEWENN(A2:A5;"Stift";B2:B5)</code>?',
          explain: 'Es werden nur die Zeilen mit „Stift“ addiert: 10 + 7 = <b>17</b>.' },
        { type: 'calc', unit: '', dec: 0, answer: 2, tol: 0.01,
          q: 'Gleiche Tabelle. Was liefert <code>=ZÄHLENWENN(A2:A5;"Stift")</code>?',
          explain: 'Das Wort „Stift“ kommt in 2 Zellen vor → <b>2</b>.' },
        { type: 'calc', unit: '', dec: 2, answer: 6.25,
          q: 'Gleiche Tabelle. Was liefert <code>=MITTELWERT(B2:B5)</code>?',
          explain: '(10 + 5 + 7 + 3) ÷ 4 = 25 ÷ 4 = <b>6,25</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 310,
          q: 'In Zelle B2 steht der Monatsumsatz eines Mitarbeiters: <b>6.200 €</b>. Die Formel in C2 lautet <code>=WENN(B2&gt;=5000;B2*0,05;0)</code>. Welchen Bonus zeigt C2?',
          explain: 'Die Bedingung (6.200 ≥ 5.000) ist wahr → B2 × 0,05 = <b>310 €</b>.' },
        { type: 'mc', q: 'In C2 steht <code>=A2*B2</code>. Du kopierst die Zelle nach <b>C3</b>. Wie lautet die Formel dort?',
          options: ['=A3*B3', '=A2*B2', '=A3*B2', '=$A$2*$B$2'], correct: 0,
          explain: 'Relative Bezüge wandern mit: eine Zeile tiefer → aus 2 wird 3.' },
        { type: 'mc', q: 'In C2 steht <code>=B2*$F$1</code>. Du kopierst die Formel nach <b>C3</b>. Wie lautet sie dort?',
          options: ['=B3*$F$1', '=B3*$F$2', '=B2*$F$1', '=B3*F2'], correct: 0,
          explain: 'B2 ist relativ (→ B3), $F$1 ist absolut und bleibt unverändert.' },
        { type: 'mc', q: 'Du siehst in einer Zelle den Fehlerwert <code>#DIV/0!</code>. Was ist die Ursache?',
          options: ['Division durch 0 oder durch eine leere Zelle', 'Die Spalte ist zu schmal', 'Eine Zeile wurde gelöscht', 'Die Funktion ist falsch geschrieben'], correct: 0,
          explain: '####: Spalte zu schmal · #BEZUG!: gelöschter Bezug · #NAME?: Tippfehler im Funktionsnamen.' },
        { type: 'mc', q: 'Welche Formel berechnet den Bruttopreis, wenn der Nettopreis in B2 und der Steuersatz (0,19) in <b>D1</b> steht und die Formel <b>nach unten kopiert</b> werden soll?',
          options: ['=B2*(1+$D$1)', '=B2*(1+D1)', '=B2*1,19*D1', '=SUMME(B2;D1)'], correct: 0,
          explain: 'Beim Kopieren nach unten würde D1 sonst zu D2, D3 … „wandern“. Mit $D$1 bleibt der Satz fest.' },
        { type: 'scenario',
          intro: 'Du sollst für die Vertriebsleiterin eine kleine Auswertung erstellen: In Spalte B stehen die Umsätze von 20 Außendienstmitarbeitern. Sie möchte wissen, wer das Quartalsziel von 12.000 € erreicht hat.',
          steps: [
            { q: 'Welche Funktion setzt Du in Spalte C ein, um „Ziel erreicht“ oder „Ziel verfehlt“ anzuzeigen?',
              options: [{ t: '=WENN(B2>=12000;"Ziel erreicht";"Ziel verfehlt")', ok: true, fb: 'Perfekt: Bedingung, Dann-Wert, Sonst-Wert.' },
                { t: '=SUMME(B2;12000)', ok: false, fb: 'SUMME addiert nur, sie trifft keine Entscheidung.' },
                { t: '=SVERWEIS(B2;12000;1)', ok: false, fb: 'SVERWEIS sucht Werte in einer Tabelle – hier brauchst Du eine Entscheidung.' }] },
            { q: 'Wie zählst Du anschließend, wie viele Mitarbeiter das Ziel erreicht haben?',
              options: [{ t: '=ZÄHLENWENN(C2:C21;"Ziel erreicht")', ok: true, fb: 'Genau: zählt alle Zellen, die den Text enthalten.' },
                { t: '=ANZAHL(C2:C21)', ok: false, fb: 'ANZAHL zählt nur Zellen mit Zahlen – Text wird nicht gezählt.' },
                { t: '=MAX(C2:C21)', ok: false, fb: 'MAX liefert den größten Zahlenwert, nicht die Anzahl von Treffern.' }] }
          ],
          explain: 'WENN trifft Entscheidungen, ZÄHLENWENN/SUMMEWENN werten nach Kriterien aus.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'edv-brief', title: 'Geschäftsbrief nach DIN 5008', minutes: 15,
      summary: 'Aufbau und Gestaltungsregeln für professionelle Geschäftsbriefe.',
      lesson: `
<h2>Warum DIN 5008?</h2>
<p>Die <b>DIN 5008</b> legt Schreib- und Gestaltungsregeln für Schriftstücke in der Textverarbeitung fest. Einheitliche Briefe wirken professionell und sind leichter lesbar. Als Büromanager/in bist Du für korrekte Schreibweisen zuständig.</p>

<h2>Aufbau eines Geschäftsbriefs (von oben nach unten)</h2>
<ol><li><b>Briefkopf</b> mit Firmenname, Logo, Kontaktdaten</li>
<li><b>Anschriftfeld</b> (ggf. mit Rücksendeangabe, Versandart wie „Einschreiben“)</li>
<li><b>Informationsblock</b> (rechts daneben): Zeichen, Nachricht vom, Ansprechpartner, Telefon, E-Mail, <b>Datum</b></li>
<li><b>Betreff</b></li>
<li><b>Anrede</b></li>
<li><b>Brieftext</b></li>
<li><b>Grußformel</b></li>
<li><b>Unterschrift</b> (handschriftlich + maschinenschriftlicher Name)</li>
<li><b>Anlagenvermerk</b> / Verteilervermerk</li></ol>

<h2>Wichtige Regeln</h2>
<ul><li><b>Betreff:</b> Das Wort „Betreff“ wird <b>nicht</b> geschrieben, am Ende steht <b>kein Punkt</b>; er wird oft fett hervorgehoben.</li>
<li><b>Anrede:</b> „Sehr geehrte Frau Meier,“ – endet mit <b>Komma</b>; der Brieftext beginnt danach <b>klein</b> (außer Namen und Substantive).</li>
<li><b>Grußformel:</b> „Mit freundlichen Grüßen“ – <b>ohne</b> Komma/Satzzeichen am Ende.</li>
<li><b>Datum:</b> z.B. <code>14.10.2026</code> (oder 2026-10-14).</li>
<li><b>Hervorhebung:</b> sparsam; mit Fettdruck statt Unterstreichen oder Großbuchstaben.</li>
<li>Telefonnummern in Gruppen gegliedert, Beträge mit Tausenderpunkt: <code>1.250,00 €</code>.</li></ul>
<div class="box merke"><b class="t">Merke</b>Anrede mit Komma → kleiner Textbeginn · Grußformel ohne Satzzeichen · Betreff ohne das Wort „Betreff“ und ohne Punkt.</div>`,
      exercises: [
        { type: 'order', q: 'Bringe die Bestandteile eines Geschäftsbriefs in die richtige Reihenfolge (von oben nach unten).',
          items: ['Anschriftfeld', 'Informationsblock mit Datum', 'Betreff', 'Anrede', 'Brieftext', 'Grußformel', 'Unterschrift', 'Anlagenvermerk'],
          explain: 'Merke: Adresse → Info/Datum → Betreff → Anrede → Text → Gruß → Unterschrift → Anlagen.' },
        { type: 'mc', q: 'Wie wird der <b>Betreff</b> nach DIN 5008 gestaltet?',
          options: ['Ohne das Wort „Betreff“ und ohne Schlusspunkt', 'Mit dem Wort „Betreff:“ davor', 'Mit Schlusspunkt am Ende', 'Immer in Großbuchstaben'], correct: 0,
          explain: 'Das Wort „Betreff“ ist veraltet. Hervorhebung bevorzugt durch Fettdruck.' },
        { type: 'mc', q: 'Welche <b>Grußformel</b> ist nach DIN 5008 korrekt geschrieben?',
          options: ['Mit freundlichen Grüßen', 'Mit freundlichen Grüßen,', 'Mit freundlichen Grüssen.', 'mit freundlichen Grüßen!'], correct: 0,
          explain: 'Die Grußformel steht ohne abschließendes Satzzeichen.' },
        { type: 'mc', q: 'Nach der Anrede „Sehr geehrte Frau Berg,“ beginnt der Brieftext …',
          options: ['klein (außer Namen und Substantive)', 'immer groß', 'mit einem Gedankenstrich', 'mit einem Doppelpunkt'], correct: 0,
          explain: 'Nach dem Komma geht es im Satz weiter, daher kleiner Anfangsbuchstabe.' },
        { type: 'mc', q: 'Welche Fehler enthält dieser Briefausschnitt? (mehrere möglich)<br><i>„Betreff: Ihre Bestellung vom 10.10.2026.<br>Sehr geehrte Frau Berg,<br>Wir bedanken uns … Mit freundlichen Grüßen,“</i>',
          options: ['„Betreff:“ steht vor dem Betreff', 'Der Betreff endet mit einem Punkt', 'Nach der Anrede beginnt der Text groß („Wir“)', 'Die Grußformel endet mit einem Komma', 'Das Datum ist falsch formatiert'], correct: [0, 1, 2, 3],
          explain: 'Das Datum (10.10.2026) ist korrekt. Die anderen vier Punkte sind DIN-5008-Fehler.' },
        { type: 'mc', q: 'Wo steht das <b>Datum</b> in einem Geschäftsbrief nach DIN 5008 üblicherweise?',
          options: ['Im Informationsblock rechts neben dem Anschriftfeld', 'Unten neben der Unterschrift', 'Direkt über der Anrede', 'In der Fußzeile'], correct: 0,
          explain: 'Der Informationsblock enthält Zeichen, Ansprechpartner, Kontaktdaten und das Datum.' }
      ]
    }
  ]
});
