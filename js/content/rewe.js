window.CONTENT = window.CONTENT || [];

/* Kontenplan (angelehnt an den Industriekontenrahmen). Im Unterricht können
   Nummern und Bezeichnungen leicht abweichen – nimm im Zweifel Deinen Kontenplan. */
window.ACCOUNTS = [
  { id: 'gebaeude', nr: '0300', name: 'Betriebsgebäude', grp: 'Anlagevermögen' },
  { id: 'maschinen', nr: '0700', name: 'Maschinen', grp: 'Anlagevermögen' },
  { id: 'fuhrpark', nr: '0840', name: 'Fuhrpark', grp: 'Anlagevermögen' },
  { id: 'bga', nr: '0870', name: 'Büromöbel / BGA', grp: 'Anlagevermögen' },
  { id: 'waren', nr: '2280', name: 'Waren', grp: 'Umlaufvermögen' },
  { id: 'ford', nr: '2400', name: 'Forderungen aus Lieferungen und Leistungen', grp: 'Umlaufvermögen' },
  { id: 'vorst', nr: '2600', name: 'Vorsteuer', grp: 'Umlaufvermögen' },
  { id: 'bank', nr: '2800', name: 'Bank', grp: 'Umlaufvermögen' },
  { id: 'kasse', nr: '2880', name: 'Kasse', grp: 'Umlaufvermögen' },
  { id: 'ek', nr: '3000', name: 'Eigenkapital', grp: 'Eigenkapital' },
  { id: 'darlehen', nr: '4250', name: 'Langfristige Bankverbindlichkeiten (Darlehen)', grp: 'Fremdkapital' },
  { id: 'verb', nr: '4400', name: 'Verbindlichkeiten aus Lieferungen und Leistungen', grp: 'Fremdkapital' },
  { id: 'ust', nr: '4800', name: 'Umsatzsteuer', grp: 'Fremdkapital' },
  { id: 'umsatz', nr: '5100', name: 'Umsatzerlöse für Waren', grp: 'Erträge' },
  { id: 'awaren', nr: '6080', name: 'Aufwendungen für Waren', grp: 'Aufwendungen' },
  { id: 'miete', nr: '6700', name: 'Mieten, Pachten', grp: 'Aufwendungen' },
  { id: 'buero', nr: '6800', name: 'Büromaterial', grp: 'Aufwendungen' },
  { id: 'vers', nr: '6900', name: 'Versicherungsbeiträge', grp: 'Aufwendungen' },
  { id: 'zins', nr: '7510', name: 'Zinsaufwendungen', grp: 'Aufwendungen' }
];

window.CONTENT.push({
  id: 'rewe', name: 'REWE', full: 'Rechnungswesen', icon: '🧮', color: '#0ea5e9',
  desc: 'Von der Inventur bis zur Kalkulation: Du lernst, wie Geschäftsfälle erfasst werden – und buchst und rechnest selbst.',
  topics: [
    /* ------------------------------------------------------------------ */
    {
      id: 'rewe-bilanz', modul: ['KBM.08.01', 'KBM.08.02'], title: 'Inventur, Inventar & Bilanz', minutes: 20,
      summary: 'Vermögen und Schulden erfassen, Reinvermögen berechnen, die Bilanz lesen.',
      lesson: `
<h2>Warum Buchführung?</h2>
<p>Jeder Kaufmann ist nach <b>Handelsgesetzbuch (HGB)</b> zur Buchführung verpflichtet. Sie dient der <b>Dokumentation</b> aller Geschäftsfälle, der <b>Information</b> (Wie steht es um das Unternehmen?), der <b>Rechenschaft</b> gegenüber Finanzamt, Banken und Gesellschaftern und als <b>Beweismittel</b>.</p>

<h2>Inventur – die Bestandsaufnahme</h2>
<p>Die <b>Inventur</b> ist die mengen- und wertmäßige Erfassung aller Vermögensteile und Schulden zu einem bestimmten Stichtag (mindestens einmal im Jahr, § 240 HGB). Das Ergebnis ist das <b>Inventar</b>.</p>
<ul><li><b>Körperliche Inventur:</b> Zählen, Messen, Wiegen (Waren, Maschinen, Kasse)</li>
<li><b>Buchinventur:</b> anhand von Belegen und Konten (Forderungen, Bankguthaben, Schulden)</li></ul>

<h2>Das Inventar</h2>
<table><tr><th>Teil</th><th>Inhalt</th></tr>
<tr><td><b>A Vermögen</b></td><td>I. Anlagevermögen (dauerhaft im Betrieb: Gebäude, Maschinen, Fuhrpark)<br>II. Umlaufvermögen (wird umgesetzt: Waren, Forderungen, Bank, Kasse)</td></tr>
<tr><td><b>B Schulden</b></td><td>langfristig (z.B. Darlehen), kurzfristig (z.B. Verbindlichkeiten aus Lieferungen)</td></tr>
<tr><td><b>C Reinvermögen</b></td><td>= Vermögen − Schulden (das <b>Eigenkapital</b>)</td></tr></table>
<div class="box merke"><b class="t">Merke</b>Die Posten werden nach der <b>Liquidität</b> geordnet: Beim Vermögen steht das am schwersten in Geld umwandelbare Gut oben (Gebäude), das flüssigste unten (Kasse). Bei den Schulden steht die längste Laufzeit oben.</div>

<h2>Die Bilanz</h2>
<p>Die <b>Bilanz</b> stellt Vermögen und Kapital in <b>Kontoform</b> gegenüber – kurz und ohne Mengenangaben.</p>
<table><tr><th>Aktiva (Mittelverwendung)</th><th>Passiva (Mittelherkunft)</th></tr>
<tr><td>Anlagevermögen<br>Umlaufvermögen</td><td>Eigenkapital<br>Fremdkapital (Schulden)</td></tr>
<tr><td><b>Summe Aktiva</b></td><td><b>Summe Passiva</b> (immer gleich hoch!)</td></tr></table>
<div class="box beispiel"><b class="t">Beispiel</b>Vermögen 273.500 € (Aktiva), Schulden 161.500 € → Eigenkapital = 273.500 € − 161.500 € = <b>112.000 €</b>. Passiva: 112.000 € EK + 161.500 € FK = 273.500 € = Bilanzsumme.</div>
<p>Aktiva zeigt: <i>Wo ist das Geld investiert?</i> (Mittelverwendung). Passiva zeigt: <i>Woher kommt das Geld?</i> (Mittelherkunft).</p>

<h2>Aufbewahrungsfristen</h2>
<table><tr><th>Unterlagen</th><th>Frist</th></tr>
<tr><td>Bücher, Inventare, Jahresabschlüsse, Bilanzen</td><td><b>10 Jahre</b></td></tr>
<tr><td>Buchungsbelege (z.B. Rechnungen, Kontoauszüge)</td><td><b>8 Jahre</b> (seit 2025; früher 10 Jahre)</td></tr>
<tr><td>Handels- und Geschäftsbriefe</td><td><b>6 Jahre</b></td></tr></table>
<p>Die Frist beginnt mit dem Ende des Kalenderjahres, in dem das Dokument entstanden ist.</p>
<div class="box achtung"><b class="t">Achtung</b>Ältere Lehrbücher nennen für Buchungsbelege noch 10 Jahre. Gilt seit 1.1.2025 nicht mehr – in der Prüfung kommt es auf den Stand der Aufgabe an.</div>`,
      exercises: [
        { type: 'mc', q: 'Was versteht man unter einer <b>Inventur</b>?',
          options: ['Die mengen- und wertmäßige Bestandsaufnahme aller Vermögensteile und Schulden', 'Die Gegenüberstellung von Aufwendungen und Erträgen', 'Die jährliche Steuererklärung', 'Die Aufstellung der Bilanz'], correct: 0,
          explain: 'Inventur = Tätigkeit des Erfassens. Das Ergebnis der Inventur ist das <b>Inventar</b>.' },
        { type: 'order', q: 'Ordne die Posten wie im Inventar/in der Bilanz: <b>Anlagevermögen zuerst</b>, dann das Umlaufvermögen vom am schwersten zum am leichtesten in Geld umwandelbaren Posten.',
          items: ['Betriebsgebäude', 'Fuhrpark', 'Waren', 'Forderungen aus Lieferungen und Leistungen', 'Bankguthaben', 'Kasse'],
          explain: 'Sortierung nach Liquidität: Anlagevermögen (Gebäude, Fuhrpark) → Waren → Forderungen → Bank → Kasse.' },
        { type: 'calc', unit: '€', dec: 2, answer: 112000,
          q: 'Zum Stichtag ergibt die Inventur: Betriebsgebäude 200.000 €, Fuhrpark 35.000 €, Waren 18.000 €, Forderungen 7.500 €, Bankguthaben 12.300 €, Kasse 700 €. Schulden: Darlehen 150.000 €, Verbindlichkeiten aus Lieferungen 11.500 €.<br><b>Wie hoch ist das Reinvermögen (Eigenkapital)?</b>',
          hint: 'Erst Vermögen addieren, dann Schulden addieren, dann Vermögen − Schulden.',
          explain: 'Vermögen: 273.500 €. Schulden: 161.500 €. Reinvermögen = 273.500 € − 161.500 € = <b>112.000 €</b>.' },
        { type: 'mc', q: 'Was zeigt die <b>Aktivseite</b> der Bilanz?',
          options: ['Die Mittelverwendung – wie das Kapital im Unternehmen angelegt ist', 'Die Mittelherkunft – woher das Kapital stammt', 'Die Höhe des Gewinns', 'Nur die Schulden des Unternehmens'], correct: 0,
          explain: 'Aktiva = Vermögen = Mittelverwendung. Passiva = Eigen- und Fremdkapital = Mittelherkunft.' },
        { type: 'mc', q: 'Welche Posten gehören zum <b>Umlaufvermögen</b>?',
          options: ['Waren', 'Forderungen aus Lieferungen und Leistungen', 'Fuhrpark', 'Bankguthaben', 'Betriebsgebäude'], correct: [0, 1, 3],
          explain: 'Umlaufvermögen dient dem laufenden Umsatz (Waren, Forderungen, Geld). Gebäude und Fuhrpark sind Anlagevermögen – sie bleiben dauerhaft im Betrieb.' },
        { type: 'calc', unit: '%', dec: 1, answer: 25, tol: 0.1,
          q: 'Die Bilanzsumme eines Unternehmens beträgt 200.000 €, das Eigenkapital 50.000 €. Wie hoch ist die <b>Eigenkapitalquote</b> (Eigenkapital ÷ Bilanzsumme)?',
          explain: '50.000 ÷ 200.000 = 0,25 = <b>25 %</b>. Je höher die Quote, desto unabhängiger ist das Unternehmen von Gläubigern.' },
        { type: 'mc', q: 'Wie lange müssen <b>Buchungsbelege</b> (z.B. Eingangsrechnungen) nach aktuellem Recht aufbewahrt werden?',
          options: ['6 Jahre', '8 Jahre', '10 Jahre', '3 Jahre'], correct: 1,
          explain: 'Seit 2025 gilt für Buchungsbelege eine Frist von 8 Jahren. Bücher, Inventare und Bilanzen: 10 Jahre.' },
        { type: 'mc', q: 'Wie lange müssen <b>Handels- und Geschäftsbriefe</b> (z.B. Angebote, Bestellungen, Mails mit Geschäftsinhalt) aufbewahrt werden?',
          options: ['6 Jahre', '8 Jahre', '10 Jahre', '1 Jahr'], correct: 0,
          explain: 'Empfangene und abgesandte Handels- und Geschäftsbriefe: 6 Jahre (§ 257 HGB).' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'rewe-buchen', modul: ['KBM.08.02'], title: 'Buchen auf Bestandskonten', minutes: 25,
      summary: 'Soll und Haben, Buchungssätze und die vier Arten von Geschäftsfällen.',
      lesson: `
<h2>Von der Bilanz zum Konto</h2>
<p>Würde man bei jedem Geschäftsfall eine neue Bilanz aufstellen, wäre das viel zu aufwendig. Deshalb wird die Bilanz in <b>Konten</b> aufgelöst. Jede Bilanzposition bekommt ein eigenes Konto mit zwei Seiten: <b>Soll</b> (links) und <b>Haben</b> (rechts).</p>
<div class="box merke"><b class="t">Die Grundregel</b>
<table><tr><th></th><th>Anfangsbestand</th><th>Zugang (Mehrung)</th><th>Abgang (Minderung)</th></tr>
<tr><td><b>Aktivkonto</b></td><td>Soll</td><td>Soll</td><td>Haben</td></tr>
<tr><td><b>Passivkonto</b></td><td>Haben</td><td>Haben</td><td>Soll</td></tr></table>
Aktivkonten verhalten sich wie die Aktivseite der Bilanz (links = Soll), Passivkonten wie die Passivseite (rechts = Haben).</div>

<h2>Der Buchungssatz</h2>
<p>Jeder Geschäftsfall wird als Buchungssatz erfasst: <b>Soll-Konto an Haben-Konto</b>. Die Summe der Soll-Beträge ist immer gleich der Summe der Haben-Beträge (doppelte Buchführung).</p>
<div class="box beispiel"><b class="t">Beispiel</b>Ein Kunde überweist 2.000 € für eine offene Rechnung.<br>Bank (Aktivkonto, Zugang → Soll) an Forderungen (Aktivkonto, Abgang → Haben)<br><code>Bank 2.000 € an Forderungen aus LuL 2.000 €</code></div>

<h4>Vorgehen in 4 Schritten</h4>
<ol><li>Welche Konten sind betroffen?</li><li>Aktiv- oder Passivkonto?</li><li>Mehrung oder Minderung?</li><li>Soll oder Haben (siehe Grundregel)?</li></ol>

<h2>Die vier Arten von Geschäftsfällen</h2>
<table><tr><th>Art</th><th>Wirkung</th><th>Beispiel</th></tr>
<tr><td><b>Aktivtausch</b></td><td>Aktiv + / Aktiv −, Bilanzsumme gleich</td><td>Barabhebung von der Bank</td></tr>
<tr><td><b>Passivtausch</b></td><td>Passiv + / Passiv −, Bilanzsumme gleich</td><td>Verbindlichkeit wird in Darlehen umgewandelt</td></tr>
<tr><td><b>Aktiv-Passiv-Mehrung</b> (Bilanzverlängerung)</td><td>Aktiv + / Passiv +</td><td>Kauf einer Maschine auf Ziel</td></tr>
<tr><td><b>Aktiv-Passiv-Minderung</b> (Bilanzverkürzung)</td><td>Aktiv − / Passiv −</td><td>Banküberweisung an den Lieferanten</td></tr></table>
<div class="box achtung"><b class="t">Hinweis</b>In dieser Lektion rechnen wir noch ohne Umsatzsteuer. Wie die USt mitgebucht wird, lernst Du im nächsten Thema.</div>

<h2>Saldieren</h2>
<p>Am Ende des Jahres wird jedes Konto abgeschlossen: Die größere Seite bestimmt die Summe, der Unterschied ist der <b>Saldo</b> (= Schlussbestand), der auf der kleineren Seite eingetragen wird.</p>`,
      exercises: [
        { type: 'booking', accounts: ['bank', 'kasse', 'ford', 'verb', 'maschinen', 'darlehen'],
          q: 'Ein Kunde überweist <b>2.000 €</b> zum Ausgleich einer offenen Rechnung auf unser Bankkonto. <b>Wie lautet der Buchungssatz?</b>',
          answer: { soll: [['bank', 2000]], haben: [['ford', 2000]] },
          explain: 'Bank nimmt zu (Aktiv, Mehrung → Soll). Forderungen nehmen ab (Aktiv, Minderung → Haben). Das ist ein <b>Aktivtausch</b>.' },
        { type: 'booking', accounts: ['bank', 'kasse', 'ford', 'verb', 'maschinen', 'darlehen'],
          q: 'Wir kaufen eine Maschine für <b>8.000 €</b> (ohne USt) auf Ziel. Buche den Kauf.',
          answer: { soll: [['maschinen', 8000]], haben: [['verb', 8000]] },
          explain: 'Maschinen (Aktiv, Mehrung → Soll) an Verbindlichkeiten (Passiv, Mehrung → Haben). Die Bilanz wird länger: <b>Aktiv-Passiv-Mehrung</b>.' },
        { type: 'booking', accounts: ['bank', 'kasse', 'ford', 'verb', 'maschinen', 'darlehen'],
          q: 'Wir heben <b>500 €</b> vom Bankkonto ab und legen sie in die Kasse.',
          answer: { soll: [['kasse', 500]], haben: [['bank', 500]] },
          explain: 'Kasse nimmt zu (Soll), Bank nimmt ab (Haben). <b>Aktivtausch</b>.' },
        { type: 'booking', accounts: ['bank', 'kasse', 'ford', 'verb', 'maschinen', 'darlehen'],
          q: 'Wir überweisen eine Lieferantenrechnung über <b>3.000 €</b> per Bank.',
          answer: { soll: [['verb', 3000]], haben: [['bank', 3000]] },
          explain: 'Verbindlichkeiten nehmen ab (Passiv, Minderung → Soll). Bank nimmt ab (Aktiv, Minderung → Haben). <b>Aktiv-Passiv-Minderung</b> (Bilanzverkürzung).' },
        { type: 'booking', accounts: ['bank', 'kasse', 'ford', 'verb', 'maschinen', 'darlehen'],
          q: 'Eine überfällige Lieferantenschuld von <b>10.000 €</b> wird mit Zustimmung der Bank in ein langfristiges Darlehen umgewandelt.',
          answer: { soll: [['verb', 10000]], haben: [['darlehen', 10000]] },
          explain: 'Verbindlichkeiten nehmen ab (Soll), Darlehen nimmt zu (Haben). Beides Passivkonten → <b>Passivtausch</b>.' },
        { type: 'mc', q: 'Wir nehmen ein Bankdarlehen über 20.000 € auf; der Betrag wird auf unserem Bankkonto gutgeschrieben. Um welche Art von Geschäftsfall handelt es sich?',
          options: ['Aktivtausch', 'Passivtausch', 'Aktiv-Passiv-Mehrung (Bilanzverlängerung)', 'Aktiv-Passiv-Minderung (Bilanzverkürzung)'], correct: 2,
          explain: 'Bank (Aktiv) steigt, Darlehen (Passiv) steigt → beide Seiten der Bilanz werden größer.' },
        { type: 'mc', q: 'Auf welcher Seite steht der <b>Anfangsbestand</b> eines <b>Passivkontos</b>?',
          options: ['Soll', 'Haben', 'Je nach Höhe auf beiden Seiten', 'Er wird nicht gebucht'], correct: 1,
          explain: 'Passivkonten spiegeln die Passivseite der Bilanz (rechts) → Anfangsbestand und Zugänge stehen im Haben.' },
        { type: 'calc', unit: '€', dec: 2, answer: 9000,
          q: 'Das Konto <b>Bank</b> (Aktivkonto) hat einen Anfangsbestand von 12.000 € im Soll. Im Soll kommen Zugänge von 5.000 € dazu, im Haben stehen Abgänge von 8.000 €.<br><b>Wie hoch ist der Schlussbestand (Saldo)?</b>',
          explain: 'Soll gesamt: 12.000 + 5.000 = 17.000 €. Haben: 8.000 €. Saldo = 17.000 − 8.000 = <b>9.000 €</b> (steht im Haben, damit beide Seiten gleich sind).' },
        { type: 'scenario',
          intro: 'Du arbeitest in der Buchhaltung der Möbelhaus Lindner GmbH. Auf Deinem Schreibtisch liegt der Kontoauszug des Tages. Du musst zwei Geschäftsfälle richtig einordnen.',
          steps: [
            { q: 'Auf dem Kontoauszug steht: „Überweisung Fa. Bergmann – Rechnung 4711 – 1.500 €“ (Eingang). Was ist das für ein Vorgang?',
              options: [{ t: 'Ein Kunde zahlt eine offene Forderung – Bank an Forderungen.', ok: true, fb: 'Genau: Geld kommt rein (Bank Soll), die Forderung ist erledigt (Forderungen Haben).' },
                { t: 'Wir zahlen eine Verbindlichkeit – Verbindlichkeiten an Bank.', ok: false, fb: 'Das wäre ein Geldausgang. Hier kommt Geld herein.' },
                { t: 'Wir nehmen ein Darlehen auf – Bank an Darlehen.', ok: false, fb: 'Es steht eine Rechnungsnummer dabei – ein Kunde bezahlt, kein Darlehen.' }] },
            { q: 'Außerdem überweisen wir 900 € an die Lieferantin Fa. Weber für eine offene Rechnung. Welche Wirkung hat das auf die Bilanzsumme?',
              options: [{ t: 'Sie sinkt (Bilanzverkürzung), weil Bank und Verbindlichkeiten abnehmen.', ok: true, fb: 'Richtig: Verbindlichkeiten an Bank = Aktiv-Passiv-Minderung.' },
                { t: 'Sie bleibt gleich, es ist ein Aktivtausch.', ok: false, fb: 'Hier ändert sich auch ein Passivkonto (Verbindlichkeiten) – ein reiner Aktivtausch ist es nicht.' },
                { t: 'Sie steigt, weil neue Schulden entstehen.', ok: false, fb: 'Es entstehen keine neuen Schulden, sondern bestehende werden getilgt.' }] }
          ],
          explain: 'Immer zuerst fragen: Welche Konten sind betroffen, und nehmen sie zu oder ab?' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'rewe-ust', modul: ['KBM.08.04'], title: 'Umsatzsteuer: Vorsteuer, Zahllast & Buchen', minutes: 25,
      summary: 'Brutto/Netto rechnen, Ein- und Ausgangsrechnungen buchen, Zahllast ermitteln.',
      lesson: `
<h2>Das Prinzip der Umsatzsteuer</h2>
<p>Die Umsatzsteuer (USt, „Mehrwertsteuer“) ist eine <b>Verbrauchsteuer</b>: Wirtschaftlich zahlt sie der Endverbraucher. Unternehmen führen sie nur durch. Der Regelsteuersatz beträgt <b>19 %</b>, der ermäßigte Satz <b>7 %</b> (z.B. Lebensmittel, Bücher).</p>
<div class="box merke"><b class="t">Rechenwege (bei 19 %)</b>
Netto × 1,19 = Brutto &nbsp;·&nbsp; Brutto ÷ 1,19 = Netto &nbsp;·&nbsp; Netto × 0,19 = USt<br>
(bei 7 %: Faktor 1,07)</div>

<h2>Vorsteuer und Umsatzsteuer</h2>
<ul><li><b>Vorsteuer:</b> die USt, die wir beim <b>Einkauf</b> an Lieferanten zahlen. Sie holen wir uns vom Finanzamt zurück → <b>Forderung</b> gegenüber dem Finanzamt (Aktivkonto <i>Vorsteuer</i>).</li>
<li><b>Umsatzsteuer:</b> die USt, die wir beim <b>Verkauf</b> von Kunden einnehmen. Wir müssen sie ans Finanzamt abführen → <b>Verbindlichkeit</b> (Passivkonto <i>Umsatzsteuer</i>).</li></ul>
<p><b>Zahllast = Umsatzsteuer − Vorsteuer.</b> Ist die Vorsteuer größer, bekommt das Unternehmen einen Erstattungsanspruch. Die Voranmeldung erfolgt meist monatlich oder vierteljährlich bis zum 10. des Folgemonats.</p>

<h2>Buchungssätze</h2>
<div class="box beispiel"><b class="t">Eingangsrechnung (Wareneinkauf auf Ziel, netto 1.000 €)</b>
Aufwendungen für Waren 1.000 € + Vorsteuer 190 € <b>an</b> Verbindlichkeiten aus LuL 1.190 €</div>
<div class="box beispiel"><b class="t">Ausgangsrechnung (Warenverkauf auf Ziel, netto 2.000 €)</b>
Forderungen aus LuL 2.380 € <b>an</b> Umsatzerlöse 2.000 € + Umsatzsteuer 380 €</div>
<div class="box beispiel"><b class="t">Zahllast überweisen (USt 18.600 €, Vorsteuer 12.450 €)</b>
Umsatzsteuer 18.600 € <b>an</b> Vorsteuer 12.450 € + Bank 6.150 €</div>
<div class="box achtung"><b class="t">Merkhilfe</b>Beim Einkauf steht die Vorsteuer im <b>Soll</b> (Aktivkonto, Zugang). Beim Verkauf steht die Umsatzsteuer im <b>Haben</b> (Passivkonto, Zugang). Die Buchung der Bruttobeträge auf Forderungen/Verbindlichkeiten ist dann der „Ausgleich“.</div>`,
      exercises: [
        { type: 'calc', unit: '€', dec: 2, answer: 1011.5,
          q: 'Eine Ware kostet netto <b>850,00 €</b>. Wie hoch ist der Bruttopreis bei 19 % USt?', hint: '850 × 1,19',
          explain: '850 € × 1,19 = <b>1.011,50 €</b> (USt = 161,50 €).' },
        { type: 'calc', unit: '€', dec: 2, answer: 2000,
          q: 'Der Rechnungsbetrag (brutto) beträgt <b>2.380,00 €</b> bei 19 % USt. Wie hoch ist der Nettobetrag?', hint: 'Brutto durch 1,19 teilen – nicht 19 % abziehen!',
          explain: '2.380 € ÷ 1,19 = <b>2.000 €</b>. Die USt beträgt 380 €.' },
        { type: 'calc', unit: '€', dec: 2, answer: 95,
          q: 'In einer Eingangsrechnung über <b>595,00 € brutto</b> (19 % USt): Wie hoch ist der Vorsteuerbetrag?',
          explain: 'Netto = 595 ÷ 1,19 = 500 €. Vorsteuer = 500 × 0,19 = <b>95 €</b>. (Alternativ: 595 − 500.)' },
        { type: 'calc', unit: '€', dec: 2, answer: 6150,
          q: 'Im Monat beträgt die Umsatzsteuer aus Verkäufen 18.600 €, die Vorsteuer aus Einkäufen 12.450 €. Wie hoch ist die <b>Zahllast</b>?',
          explain: 'Zahllast = USt − Vorsteuer = 18.600 − 12.450 = <b>6.150 €</b>.' },
        { type: 'booking', accounts: ['awaren', 'vorst', 'verb', 'ford', 'umsatz', 'ust', 'bank', 'kasse'],
          q: 'Eingangsrechnung: Wir kaufen Waren für <b>1.000 € netto</b> zuzüglich 19 % USt <b>auf Ziel</b> (Rechnungsbetrag 1.190 €).',
          answer: { soll: [['awaren', 1000], ['vorst', 190]], haben: [['verb', 1190]] },
          explain: 'Aufwendungen für Waren 1.000 € und Vorsteuer 190 € im Soll, der Bruttobetrag als Verbindlichkeit im Haben.' },
        { type: 'booking', accounts: ['awaren', 'vorst', 'verb', 'ford', 'umsatz', 'ust', 'bank', 'kasse'],
          q: 'Ausgangsrechnung: Wir verkaufen Waren für <b>2.000 € netto</b> zuzüglich 19 % USt <b>auf Ziel</b> (Rechnungsbetrag 2.380 €).',
          answer: { soll: [['ford', 2380]], haben: [['umsatz', 2000], ['ust', 380]] },
          explain: 'Der Kunde schuldet uns brutto 2.380 € (Forderung, Soll). Davon sind 2.000 € Umsatzerlöse und 380 € Umsatzsteuer (Haben).' },
        { type: 'booking', accounts: ['buero', 'vorst', 'kasse', 'bank', 'verb', 'ust'],
          q: 'Wir kaufen Büromaterial für <b>100 € netto</b> zuzüglich 19 % USt und bezahlen <b>bar</b> (119 €).',
          answer: { soll: [['buero', 100], ['vorst', 19]], haben: [['kasse', 119]] },
          explain: 'Büromaterial (Aufwand) 100 € + Vorsteuer 19 € im Soll an Kasse 119 € im Haben.' },
        { type: 'booking', accounts: ['ust', 'vorst', 'bank', 'verb', 'ford', 'kasse'],
          q: 'Die Umsatzsteuer beträgt im Monat 18.600 €, die Vorsteuer 12.450 €. Wir überweisen die Zahllast ans Finanzamt. Buche in <b>einem zusammengesetzten Buchungssatz</b>.',
          answer: { soll: [['ust', 18600]], haben: [['vorst', 12450], ['bank', 6150]] },
          explain: 'Das Konto Umsatzsteuer (Passiv) wird aufgelöst (Soll 18.600 €). Dagegen stehen die Vorsteuer (12.450 €) und die Überweisung (6.150 €) im Haben.' },
        { type: 'mc', q: 'Wie ist die <b>Vorsteuer</b> für den Käufer rechtlich einzuordnen?',
          options: ['Forderung gegenüber dem Finanzamt', 'Verbindlichkeit gegenüber dem Finanzamt', 'Aufwand, der den Gewinn mindert', 'Ertrag des Unternehmens'], correct: 0,
          explain: 'Die gezahlte Vorsteuer wird vom Finanzamt erstattet (verrechnet) → Forderung, daher Aktivkonto. Sie ist kein Aufwand.' },
        { type: 'mc', q: 'Welche Aussage zur <b>Umsatzsteuer</b> ist richtig?',
          options: ['Sie ist für Unternehmen ein durchlaufender Posten; wirtschaftlich trägt sie der Endverbraucher.', 'Sie mindert immer den Gewinn des Unternehmens.', 'Sie wird auf dem Konto „Vorsteuer“ gebucht.', 'Sie beträgt für alle Waren 7 %.'], correct: 0,
          explain: 'Das Unternehmen führt die USt nur für das Finanzamt ab. Der Regelsatz ist 19 %, 7 % gilt nur für bestimmte Waren/Leistungen.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'rewe-kalk', modul: ['KBM.01.04', 'KBM.05.02'], title: 'Rabatt, Skonto & Kalkulation', minutes: 25,
      summary: 'Vom Listenpreis zum Einstandspreis und weiter bis zum Verkaufspreis.',
      lesson: `
<h2>Rabatt und Skonto – nicht verwechseln</h2>
<table><tr><th>Rabatt</th><th>Skonto</th></tr>
<tr><td>Preisnachlass aus einem Grund wie Menge, Treue, Sonderaktion, Mangel</td><td>Preisnachlass für <b>schnelle Zahlung</b> innerhalb einer Frist (z.B. „2 % Skonto bei Zahlung in 10 Tagen“)</td></tr>
<tr><td>Wird gleich auf der Rechnung abgezogen</td><td>Wird nur abgezogen, wenn rechtzeitig gezahlt wird</td></tr></table>
<p>Der Skonto lohnt sich fast immer: Wer 2 % für 20 Tage früheres Zahlen spart, erzielt umgerechnet rund 36 % Jahreszins.</p>

<h2>Bezugskalkulation (Einkauf)</h2>
<table><tr><td>Listeneinkaufspreis</td><td></td></tr>
<tr><td>− Liefererrabatt (in %)</td><td></td></tr>
<tr><td><b>= Zieleinkaufspreis</b></td><td></td></tr>
<tr><td>− Liefererskonto (in %)</td><td></td></tr>
<tr><td><b>= Bareinkaufspreis</b></td><td></td></tr>
<tr><td>+ Bezugskosten (Fracht, Verpackung …)</td><td></td></tr>
<tr><td><b>= Einstandspreis (Bezugspreis)</b></td><td></td></tr></table>
<p>Rabatt und Skonto werden jeweils vom <b>Ergebnis der Zeile davor</b> berechnet, nicht vom Listenpreis.</p>
<div class="box beispiel"><b class="t">Beispiel</b>Listenpreis 500 €, 10 % Rabatt (−50 €) = 450 €; 2 % Skonto (−9 €) = 441 €; + 25 € Fracht = <b>466 € Einstandspreis</b>.</div>

<h2>Verkaufskalkulation (vereinfacht)</h2>
<table><tr><td>Einstandspreis</td></tr>
<tr><td>+ Handlungskosten (Zuschlag in % auf den Einstandspreis)</td></tr>
<tr><td><b>= Selbstkostenpreis</b></td></tr>
<tr><td>+ Gewinn (Zuschlag in % auf die Selbstkosten)</td></tr>
<tr><td><b>= Nettoverkaufspreis</b></td></tr>
<tr><td>+ Umsatzsteuer (19 %)</td></tr>
<tr><td><b>= Bruttoverkaufspreis</b></td></tr></table>
<div class="box achtung"><b class="t">Hinweis</b>In vollständigen Kalkulationen kommen noch Kundenskonto und Kundenrabatt dazu. Diese werden <b>„im Hundert“</b> gerechnet (Basis = Verkaufspreis, nicht Selbstkosten). Dein Lehrer zeigt Dir sicher das Schema aus Deinem Buch – hier üben wir die Grundlogik.</div>`,
      exercises: [
        { type: 'calc', unit: '€', dec: 2, answer: 1800,
          q: 'Listenpreis <b>2.400 €</b>, der Lieferant gewährt <b>25 % Rabatt</b>. Wie hoch ist der Zieleinkaufspreis?',
          explain: '25 % von 2.400 = 600 €. 2.400 − 600 = <b>1.800 €</b> (oder 2.400 × 0,75).' },
        { type: 'calc', unit: '€', dec: 2, answer: 2332.4,
          q: 'Rechnungsbetrag <b>2.380 €</b>, Zahlungsbedingung: „Innerhalb von 10 Tagen 2 % Skonto“. Du zahlst rechtzeitig. Wie viel überweist Du?',
          explain: 'Skonto: 2 % von 2.380 = 47,60 €. Überweisung: 2.380 − 47,60 = <b>2.332,40 €</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 466,
          q: 'Listenpreis <b>500 €</b>, Lieferantenrabatt <b>10 %</b>, Lieferantenskonto <b>2 %</b>, Bezugskosten <b>25 €</b>. Wie hoch ist der <b>Einstandspreis</b>?', hint: 'Rechne Schritt für Schritt: Rabatt, dann Skonto vom neuen Wert, dann Bezugskosten addieren.',
          explain: '500 − 10 % = 450. 450 − 2 % (9 €) = 441. 441 + 25 = <b>466 €</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 605.8,
          q: 'Der Einstandspreis beträgt <b>466 €</b>, die Handlungskosten betragen <b>30 %</b> auf den Einstandspreis. Wie hoch sind die <b>Selbstkosten</b>?',
          explain: '30 % von 466 = 139,80 €. 466 + 139,80 = <b>605,80 €</b> (oder 466 × 1,30).' },
        { type: 'calc', unit: '€', dec: 2, answer: 726.96,
          q: 'Die Selbstkosten betragen <b>605,80 €</b>, der Gewinnzuschlag beträgt <b>20 %</b>. Wie hoch ist der <b>Nettoverkaufspreis</b>?',
          explain: '605,80 × 1,20 = <b>726,96 €</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 865.08,
          q: 'Der Nettoverkaufspreis beträgt <b>726,96 €</b>. Welchen <b>Bruttopreis</b> (19 % USt) sieht der Kunde im Katalog?',
          explain: '726,96 × 1,19 = 865,0824 ≈ <b>865,08 €</b>.' },
        { type: 'mc', q: 'Was ist der Unterschied zwischen <b>Rabatt</b> und <b>Skonto</b>?',
          options: ['Skonto gibt es nur bei Zahlung innerhalb einer Frist; Rabatt wird unabhängig vom Zahlungszeitpunkt gewährt.', 'Rabatt gibt es nur bei Barzahlung.', 'Skonto wird immer vom Listenpreis berechnet.', 'Rabatt und Skonto sind dasselbe.'], correct: 0,
          explain: 'Skonto = Belohnung für schnelle Zahlung. Rabatt = Preisnachlass aus anderen Gründen (Menge, Treue, Aktion).' },
        { type: 'order', q: 'Bringe die Schritte der <b>Bezugskalkulation</b> in die richtige Reihenfolge.',
          items: ['Listeneinkaufspreis', '− Liefererrabatt = Zieleinkaufspreis', '− Liefererskonto = Bareinkaufspreis', '+ Bezugskosten = Einstandspreis'],
          explain: 'Immer von oben nach unten rechnen: Rabatt → Skonto → Bezugskosten.' },
        { type: 'mc', q: 'Der Lieferant bietet „2 % Skonto bei Zahlung innerhalb von 10 Tagen, sonst 30 Tage netto“. Wie handelst Du am sinnvollsten?',
          options: ['Innerhalb von 10 Tagen zahlen und Skonto nutzen, sofern die Liquidität es erlaubt.', 'Immer am letzten Tag (30 Tage) zahlen.', 'Skonto ignorieren, er ist unbedeutend.', 'Die Hälfte sofort, den Rest nach 30 Tagen.'], correct: 0,
          explain: '2 % für nur 20 Tage früheres Zahlen entsprechen rechnerisch über 36 % Jahreszins – teurer als jeder Kontokredit.' }
      ]
    }
  ]
});
