window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  id: 'wiso', name: 'WISO', full: 'Wirtschafts- und Sozialkunde', icon: '⚖️', color: '#7c3aed',
  desc: 'Deine Rechte und Pflichten im Beruf, Sozialversicherung und Verträge – prüfungsrelevantes Wissen, das Du auch privat jeden Tag brauchst.',
  topics: [
    /* ------------------------------------------------------------------ */
    {
      id: 'wiso-ausbildung', modul: ['KBM.01.03'], title: 'Ausbildung, Umschulung & Berufsbildungsgesetz', minutes: 20,
      summary: 'Rechte und Pflichten, Probezeit, Kündigung, Urlaub.',
      lesson: `
<h2>Rechtsgrundlagen</h2>
<p>Die Berufsausbildung ist im <b>Berufsbildungsgesetz (BBiG)</b> geregelt. Für Umschülerinnen und Umschüler gelten die Vorschriften zur Umschulung (§§ 58 ff. BBiG), die sich eng an die Ausbildung anlehnen. Die Ausbildung folgt der <b>Ausbildungsordnung</b> (Betrieb) und dem <b>Rahmenlehrplan</b> (Berufsschule) – das nennt man das <b>duale System</b>.</p>
<p>Für Dich als Büromanagement-Umschüler ist die <b>Industrie- und Handelskammer (IHK)</b> die zuständige Stelle: Sie überwacht die Ausbildung, führt das Verzeichnis der Ausbildungsverhältnisse und nimmt die Prüfungen ab. Büromanagement hat eine <b>gestreckte Abschlussprüfung</b> (Teil 1 und Teil 2). Die genauen Termine und Bereiche nennt Dir Dein Bildungsträger bzw. die IHK.</p>

<h2>Der Ausbildungsvertrag</h2>
<p>Vor Beginn muss der Vertrag <b>schriftlich</b> niedergelegt werden (Ausbildender unterschreibt, Auszubildende/r unterschreibt). Pflichtangaben: Art/Ziel der Ausbildung, Beginn und Dauer, Ausbildungsstätte, Probezeit, Vergütung, Urlaub, Arbeitszeit, Kündigungsvoraussetzungen u.a.</p>

<h2>Pflichten</h2>
<table><tr><th>Ausbildender (Betrieb)</th><th>Auszubildende/r</th></tr>
<tr><td>Ausbildungsziel vermitteln (Ausbildungsplan)<br>Ausbilder/in stellen<br>Ausbildungsmittel kostenlos stellen<br>Freistellung für Berufsschule und Prüfungen<br>Vergütung zahlen<br>nur ausbildungsbezogene Tätigkeiten übertragen<br>Zeugnis ausstellen</td>
<td>Lernpflicht („Bemühen, das Ausbildungsziel zu erreichen“)<br>Weisungen befolgen<br>Berufsschule und Prüfungen besuchen<br>Berichtsheft führen<br>Betriebsordnung beachten<br>Betriebsgeheimnisse wahren<br>Sorgfalt bei Arbeitsmitteln</td></tr></table>

<h2>Probezeit und Kündigung</h2>
<ul><li><b>Probezeit:</b> mindestens 1, höchstens <b>4 Monate</b>.</li>
<li><b>In der Probezeit:</b> beide Seiten können jederzeit <b>ohne Frist und ohne Angabe von Gründen</b> kündigen (schriftlich).</li>
<li><b>Nach der Probezeit:</b>
<ul><li>Der Betrieb nur <b>aus wichtigem Grund</b> (außerordentlich, fristlos). Die Kündigung muss <b>innerhalb von 2 Wochen</b> ab Kenntnis des Grundes erfolgen.</li>
<li>Der/die Auszubildende kann mit <b>4 Wochen Frist</b> kündigen, wenn die Berufsausbildung aufgegeben oder in einem anderen Beruf fortgesetzt werden soll.</li></ul></li>
<li>Jede Kündigung braucht die <b>Schriftform</b> und (nach der Probezeit) die Angabe der Gründe.</li></ul>

<h2>Vergütung, Arbeitszeit, Urlaub</h2>
<p>Die Vergütung muss <b>angemessen</b> sein und mindestens jährlich steigen (es gilt eine gesetzliche Mindestausbildungsvergütung). Erwachsene Auszubildende dürfen regelmäßig 8 Stunden täglich arbeiten (Arbeitszeitgesetz); der Berufsschulbesuch wird angerechnet.</p>
<p>Gesetzlicher Mindesturlaub (Bundesurlaubsgesetz): <b>24 Werktage</b> (Montag bis Samstag zählt) = bei einer 5-Tage-Woche <b>20 Arbeitstage</b>. Für Jugendliche unter 18 gilt das Jugendarbeitsschutzgesetz (30/27/25 Werktage je nach Alter).</p>
<div class="box merke"><b class="t">Merke</b>Probezeit 1–4 Monate · Kündigung in der Probezeit: jederzeit, ohne Gründe · danach: Betrieb nur fristlos aus wichtigem Grund (2-Wochen-Frist), Azubi mit 4 Wochen bei Berufswechsel/-aufgabe.</div>`,
      exercises: [
        { type: 'mc', q: 'Wie lange darf die <b>Probezeit</b> in einem Ausbildungsverhältnis höchstens dauern?',
          options: ['2 Monate', '3 Monate', '4 Monate', '6 Monate'], correct: 2,
          explain: 'Die Probezeit muss mindestens 1 Monat und darf höchstens 4 Monate betragen (§ 20 BBiG).' },
        { type: 'mc', q: 'Welche Regelung gilt für eine <b>Kündigung innerhalb der Probezeit</b>?',
          options: ['Jederzeit ohne Frist und ohne Angabe von Gründen (schriftlich)', 'Mit 4 Wochen Frist zum Monatsende', 'Nur aus wichtigem Grund', 'Nur mit Zustimmung der IHK'], correct: 0,
          explain: 'In der Probezeit können beide Seiten jederzeit ohne Frist und ohne Gründe kündigen (§ 22 Abs. 1 BBiG).' },
        { type: 'mc', q: 'Welche der folgenden Aufgaben sind <b>Pflichten des Auszubildenden</b>?',
          options: ['Berichtsheft führen', 'Weisungen des Ausbilders befolgen', 'Dem Betrieb die Ausbildungsmittel selbst bezahlen', 'Über Betriebsgeheimnisse Stillschweigen bewahren', 'Dem Betrieb ein Zeugnis ausstellen'], correct: [0, 1, 3],
          explain: 'Ausbildungsmittel stellt der Betrieb kostenlos. Das Zeugnis stellt der Ausbildende aus – es ist seine Pflicht.' },
        { type: 'mc', q: 'Nach der Probezeit möchte ein Betrieb einem Auszubildenden kündigen, weil dieser einmal 10 Minuten zu spät kam. Wie ist die Rechtslage?',
          options: ['Das ist in der Regel kein wichtiger Grund – die Kündigung wäre unwirksam.', 'Der Betrieb kann jederzeit mit 4 Wochen Frist kündigen.', 'Die Kündigung ist mündlich ausreichend.', 'Nach 2 Wochen verfällt der Vertrag automatisch.'], correct: 0,
          explain: 'Nach der Probezeit kann der Betrieb nur aus wichtigem Grund kündigen. Einmaliges kleines Zuspätkommen reicht dafür nicht.' },
        { type: 'mc', q: 'Innerhalb welcher Frist muss eine <b>außerordentliche (fristlose) Kündigung</b> ausgesprochen werden, nachdem der Kündigungsberechtigte vom Grund erfahren hat?',
          options: ['3 Tage', '2 Wochen', '4 Wochen', '3 Monate'], correct: 1,
          explain: 'Die Kündigung aus wichtigem Grund ist nur innerhalb von 2 Wochen ab Kenntnis der Tatsachen zulässig (§ 22 Abs. 4 BBiG).' },
        { type: 'calc', unit: 'Arbeitstage', dec: 0, answer: 20, tol: 0.01,
          q: 'Der gesetzliche Mindesturlaub beträgt <b>24 Werktage</b> (Mo–Sa). Wie viele <b>Arbeitstage</b> sind das bei einer <b>5-Tage-Woche</b> (Mo–Fr)?', hint: '24 Werktage ÷ 6 Tage pro Woche = Wochen.',
          explain: '24 Werktage ÷ 6 = 4 Wochen. 4 Wochen × 5 Arbeitstage = <b>20 Arbeitstage</b>.' },
        { type: 'mc', q: 'Wer ist als <b>zuständige Stelle</b> für Dein Berufsbild Büromanagement (Industrie und Handel) für Überwachung und Prüfung zuständig?',
          options: ['Die Industrie- und Handelskammer (IHK)', 'Das Arbeitsamt', 'Die Berufsschule', 'Das Finanzamt'], correct: 0,
          explain: 'Die IHK ist die zuständige Stelle: Sie berät, überwacht, trägt den Vertrag ein und nimmt die Prüfungen ab.' },
        { type: 'scenario',
          intro: 'Du machst Deine Umschulung bei der Weber Bürobedarf GmbH. In der dritten Woche bittet Dich Dein Abteilungsleiter, ab sofort jeden Tag um 9 Uhr Kaffee für das Team zu kochen, das Auto des Chefs zu waschen und private Päckchen zur Post zu bringen.',
          steps: [
            { q: 'Wie ist die Lage rechtlich einzuordnen?',
              options: [{ t: 'Das sind ausbildungsfremde Tätigkeiten. Dir dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen.', ok: true, fb: 'Richtig, so steht es in § 14 Abs. 2 BBiG. Ab und zu Kaffee kochen im Team ist unproblematisch, ein fester Kaffeedienst und Privatarbeiten sind es nicht.' },
                { t: 'Als Auszubildender musst Du alles tun, was der Chef verlangt.', ok: false, fb: 'Das ist falsch. Das Weisungsrecht gilt nur im Rahmen des Ausbildungszwecks.' },
                { t: 'Das darf nur ein Betriebsrat entscheiden.', ok: false, fb: 'Der Betriebsrat hat hier kein Letztentscheidungsrecht.' }] },
            { q: 'Was ist der sinnvollste erste Schritt?',
              options: [{ t: 'Ruhig das Gespräch mit dem Ausbilder bzw. Abteilungsleiter suchen und auf den Ausbildungsplan hinweisen. Bei Bedarf Ausbildungsberater der IHK einbeziehen.', ok: true, fb: 'Gut: erst klären, dann eskalieren. Die IHK-Ausbildungsberatung ist eine kostenlose Anlaufstelle.' },
                { t: 'Sofort fristlos kündigen.', ok: false, fb: 'Zu drastisch – erst muss das Gespräch gesucht werden.' },
                { t: 'Nichts sagen und die Aufgaben dauerhaft erledigen.', ok: false, fb: 'Dann bleibt das Problem bestehen und Du verlierst Lernzeit für die Prüfung.' }] }
          ],
          explain: 'Die Aufgaben müssen dem Ausbildungszweck dienen und den körperlichen Kräften angemessen sein (§ 14 BBiG).' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'wiso-sozial', modul: ['KBM.10.04'], title: 'Sozialversicherung & Gehaltsabrechnung', minutes: 25,
      summary: 'Die fünf Zweige, Beiträge, Brutto–Netto.',
      lesson: `
<h2>Die fünf Zweige der gesetzlichen Sozialversicherung</h2>
<table><tr><th>Zweig</th><th>Absichert gegen</th><th>Träger</th><th>Beiträge zahlen</th></tr>
<tr><td><b>Krankenversicherung (KV)</b></td><td>Krankheit, Mutterschaft</td><td>Krankenkassen</td><td>AN und AG je hälftig</td></tr>
<tr><td><b>Pflegeversicherung (PV)</b></td><td>Pflegebedürftigkeit</td><td>Pflegekassen (bei der KK)</td><td>AN und AG je hälftig (AN-Zuschlag für Kinderlose)</td></tr>
<tr><td><b>Rentenversicherung (RV)</b></td><td>Alter, Erwerbsminderung, Tod (Hinterbliebene)</td><td>Deutsche Rentenversicherung</td><td>AN und AG je hälftig</td></tr>
<tr><td><b>Arbeitslosenversicherung (AV)</b></td><td>Arbeitslosigkeit, Weiterbildung, Kurzarbeit</td><td>Bundesagentur für Arbeit</td><td>AN und AG je hälftig</td></tr>
<tr><td><b>Unfallversicherung (UV)</b></td><td>Arbeitsunfälle, Wegeunfälle, Berufskrankheiten</td><td>Berufsgenossenschaften / Unfallkassen</td><td><b>Nur der Arbeitgeber</b></td></tr></table>
<div class="box merke"><b class="t">Merke</b>Die UV zahlt allein der Arbeitgeber. Alle anderen Zweige: der Beitrag wird <b>hälftig</b> geteilt (Zusatzbeitrag der KV seit 2019 ebenfalls hälftig). Der Gesamtsozialversicherungsbeitrag wird vom Arbeitgeber an die <b>Krankenkasse als Einzugsstelle</b> gemeldet und überwiesen.</div>

<h2>Prinzipien</h2>
<ul><li><b>Solidaritätsprinzip:</b> Beiträge nach Einkommen, Leistungen nach Bedarf (bes. KV).</li>
<li><b>Äquivalenzprinzip:</b> Rentenhöhe hängt von den gezahlten Beiträgen ab.</li>
<li><b>Umlageverfahren (Generationenvertrag):</b> Heutige Beitragszahler finanzieren die heutigen Renten.</li>
<li><b>Beitragsbemessungsgrenze:</b> Nur Einkommen bis zu einer Grenze wird verbeitragt.</li></ul>
<p>Als Umschüler bist Du in der Regel in der Sozialversicherung pflichtversichert, Beiträge richten sich nach Deiner Situation (Bildungsträger/Kostenträger). Frag im Zweifel bei Deinem Träger.</p>

<h2>Von Brutto zu Netto</h2>
<table><tr><td><b>Bruttoverdienst</b></td></tr>
<tr><td>− Lohnsteuer, Solidaritätszuschlag, ggf. Kirchensteuer (<b>Steuerabzüge</b>)</td></tr>
<tr><td>− Arbeitnehmeranteile zur Sozialversicherung (KV, PV, RV, AV)</td></tr>
<tr><td><b>= Nettoverdienst</b></td></tr></table>
<div class="box beispiel"><b class="t">Beispiel (Beitragssätze in der Aufgabe gegeben)</b>Brutto 3.000 €. Arbeitnehmeranteile: KV 8,3 %, PV 1,8 %, RV 9,3 %, AV 1,3 % = 20,7 % → 621 €.</div>
<div class="box achtung"><b class="t">Achtung</b>Beitragssätze ändern sich. In der Prüfung stehen sie normalerweise in der Aufgabe – lerne die <i>Logik</i>, nicht die Zahlen auswendig.</div>`,
      exercises: [
        { type: 'mc', q: 'Welche Sozialversicherungen gibt es in Deutschland? (alle <b>fünf Zweige</b>)',
          options: ['Kranken-, Pflege-, Renten-, Arbeitslosen-, Unfallversicherung', 'Kranken-, Haftpflicht-, Renten-, Arbeitslosen-, Unfallversicherung', 'Kranken-, Pflege-, Lebens-, Arbeitslosen-, Rechtsschutzversicherung', 'Renten-, Berufsunfähigkeits-, Hausrat-, Kranken-, Pflegeversicherung'], correct: 0,
          explain: 'Haftpflicht-, Lebens-, Hausrat- und Rechtsschutzversicherung sind private Versicherungen.' },
        { type: 'mc', q: 'Wer trägt die Beiträge zur gesetzlichen <b>Unfallversicherung</b>?',
          options: ['Allein der Arbeitgeber', 'Arbeitgeber und Arbeitnehmer je zur Hälfte', 'Allein der Arbeitnehmer', 'Der Staat'], correct: 0,
          explain: 'Die UV wird ausschließlich vom Arbeitgeber über die Berufsgenossenschaft finanziert.' },
        { type: 'mc', q: 'Auf dem Weg zur Berufsschule rutscht ein Auszubildender aus und bricht sich den Arm. Welcher Versicherungszweig ist zuständig?',
          options: ['Die gesetzliche Unfallversicherung (Wegeunfall)', 'Die Rentenversicherung', 'Die Arbeitslosenversicherung', 'Keine – privates Risiko'], correct: 0,
          explain: 'Wegeunfälle auf dem direkten Weg zur Arbeit/Schule/Ausbildung sind über die gesetzliche UV abgesichert.' },
        { type: 'mc', q: 'Ordne zu: Welcher Zweig zahlt <b>Arbeitslosengeld</b>?',
          options: ['Arbeitslosenversicherung (Bundesagentur für Arbeit)', 'Krankenversicherung', 'Rentenversicherung', 'Pflegeversicherung'], correct: 0,
          explain: 'Träger der Arbeitslosenversicherung ist die Bundesagentur für Arbeit.' },
        { type: 'calc', unit: '€', dec: 2, answer: 621,
          q: 'Brutto <b>3.000 €</b>. Arbeitnehmeranteile zur Sozialversicherung: KV 8,3 %, PV 1,8 %, RV 9,3 %, AV 1,3 %. Wie hoch ist die <b>Summe der Arbeitnehmerbeiträge</b>?', hint: 'Prozentsätze addieren, dann vom Brutto nehmen.',
          explain: '8,3 + 1,8 + 9,3 + 1,3 = 20,7 %. 3.000 × 0,207 = <b>621 €</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 1752,
          q: 'Bruttoverdienst <b>2.500 €</b>, Lohnsteuer <b>230 €</b>, Sozialversicherungsbeiträge des Arbeitnehmers <b>518 €</b> (keine Kirchensteuer, kein Soli). Wie hoch ist das <b>Nettogehalt</b>?',
          explain: '2.500 − 230 − 518 = <b>1.752 €</b>.' },
        { type: 'calc', unit: '€', dec: 2, answer: 232.5,
          q: 'Der Gesamtbeitrag zur Rentenversicherung beträgt 18,6 %. Bei einem Brutto von <b>2.500 €</b> zahlen Arbeitnehmer und Arbeitgeber jeweils die Hälfte. Wie viel zahlt der <b>Arbeitnehmer</b>?',
          explain: '18,6 % ÷ 2 = 9,3 %. 2.500 × 0,093 = <b>232,50 €</b>.' },
        { type: 'mc', q: 'Was bedeutet der Begriff <b>Umlageverfahren</b> in der gesetzlichen Rentenversicherung?',
          options: ['Die aktuellen Beiträge der Erwerbstätigen finanzieren die aktuell ausgezahlten Renten.', 'Jeder spart sein Geld in einem eigenen Konto an.', 'Der Staat zahlt alle Renten aus Steuermitteln.', 'Die Arbeitgeber zahlen die Renten alleine.'], correct: 0,
          explain: 'Man nennt das auch Generationenvertrag. Das Gegenteil wäre das Kapitaldeckungsverfahren (Ansparen).' },
        { type: 'mc', q: 'Wer meldet den Gesamtsozialversicherungsbeitrag und führt ihn ab?',
          options: ['Der Arbeitgeber – an die zuständige Krankenkasse (Einzugsstelle)', 'Der Arbeitnehmer selbst an das Finanzamt', 'Die Berufsschule', 'Die IHK'], correct: 0,
          explain: 'Der Arbeitgeber behält den Arbeitnehmeranteil ein, ergänzt seinen Anteil und überweist beides an die Krankenkasse als Einzugsstelle.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'wiso-vertrag', modul: ['KBM.02.01', 'KBM.02.02', 'KBM.05.03'], title: 'Rechtsgeschäfte & Kaufvertrag', minutes: 30,
      summary: 'Geschäftsfähigkeit, Vertragsschluss, Mängel, Lieferungs- und Zahlungsverzug.',
      lesson: `
<h2>Rechts- und Geschäftsfähigkeit</h2>
<ul><li><b>Rechtsfähigkeit</b> = Fähigkeit, Träger von Rechten und Pflichten zu sein. Natürliche Personen: ab Geburt. Juristische Personen (z.B. GmbH, AG): ab Eintragung ins Handelsregister.</li>
<li><b>Geschäftsfähigkeit</b> = Fähigkeit, wirksame Rechtsgeschäfte abzuschließen:
<table><tr><th>Alter</th><th>Stufe</th></tr><tr><td>unter 7 Jahren</td><td>geschäftsunfähig – Willenserklärungen nichtig</td></tr>
<tr><td>7 bis 17 Jahre</td><td>beschränkt geschäftsfähig – Zustimmung der Eltern nötig (Ausnahme: Taschengeldparagraf, § 110 BGB, und rechtlich nur vorteilhafte Geschäfte)</td></tr>
<tr><td>ab 18 Jahren</td><td>voll geschäftsfähig</td></tr></table></li></ul>

<h2>Willenserklärung und Vertrag</h2>
<p>Ein <b>Vertrag</b> kommt durch zwei übereinstimmende Willenserklärungen zustande: <b>Antrag + Annahme</b>. Beim <b>Kaufvertrag</b> (zweiseitig verpflichtend):</p>
<table><tr><th>Verkäufer</th><th>Käufer</th></tr><tr><td>Ware mangelfrei übergeben und Eigentum verschaffen</td><td>Ware abnehmen und Kaufpreis zahlen</td></tr></table>
<p><b>Verpflichtungsgeschäft</b> (Vertrag) und <b>Erfüllungsgeschäft</b> (Übergabe/Übereignung bzw. Zahlung) sind getrennt.</p>
<p><b>Form:</b> Grundsätzlich <b>formfrei</b>. Ausnahmen: Schriftform (z.B. Ausbildungsvertrag, Bürgschaft), notarielle Beurkundung (z.B. Grundstückskauf).</p>
<p><b>Nichtig</b> sind Geschäfte bei Geschäftsunfähigkeit, Verstoß gegen Gesetz/Formvorschrift oder gegen die guten Sitten. <b>Anfechtbar</b> bei Irrtum (unverzüglich), arglistiger Täuschung oder Drohung (innerhalb 1 Jahres).</p>

<h2>Störungen des Kaufvertrags</h2>
<h3>1. Mangelhafte Lieferung (Sachmangel)</h3>
<p>Die Verjährungsfrist für Mängelrechte beträgt bei neuen Sachen <b>2 Jahre</b>. Reihenfolge der Rechte beim Käufer:</p>
<ol><li><b>Nacherfüllung</b> (Reparatur oder Ersatzlieferung) – <i>zuerst</i></li>
<li>Bei Fehlschlag/Verweigerung: <b>Rücktritt</b> oder <b>Minderung</b> (Preisnachlass), ggf. <b>Schadensersatz</b></li></ol>
<p>Beim Verbrauchsgüterkauf (Unternehmer an Verbraucher) wird in den ersten <b>12 Monaten</b> vermutet, dass der Mangel schon bei Übergabe vorlag (Beweislastumkehr).</p>

<h3>2. Lieferungsverzug</h3>
<p>Der Verkäufer liefert nicht rechtzeitig. Voraussetzungen: Fälligkeit + <b>Mahnung</b> (außer bei kalendermäßig bestimmtem Termin) + Verschulden. Rechte: auf Lieferung bestehen, Schadensersatz, nach angemessener Nachfrist Rücktritt.</p>

<h3>3. Zahlungsverzug</h3>
<p>Der Käufer zahlt nicht rechtzeitig. Verzug tritt ein bei kalendermäßig bestimmtem Zahlungstermin oder nach Mahnung – spätestens <b>30 Tage nach Fälligkeit und Rechnungszugang</b> automatisch. <b>Verzugszinsen</b>: bei Verbrauchern 5 Prozentpunkte, bei Geschäften zwischen Unternehmern 9 Prozentpunkte über dem Basiszinssatz.</p>
<div class="box beispiel"><b class="t">Zinsformel (Tageszinsen)</b> Zinsen = Kapital × Zinssatz in % × Tage ÷ (100 × 360). Beispiel: 5.000 € × 9 % × 30 Tage ÷ 36.000 = <b>37,50 €</b>.</div>
<p><b>Ablauf:</b> Rechnung → Zahlungsziel → Zahlungserinnerung → 1. Mahnung → 2. Mahnung → gerichtlicher Mahnbescheid → Vollstreckungsbescheid → Zwangsvollstreckung.</p>
<div class="box merke"><b class="t">Merke</b>Mangel → <b>Nacherfüllung zuerst</b>. Regelmäßige Verjährung: <b>3 Jahre</b> (ab Ende des Jahres der Entstehung des Anspruchs).</div>`,
      exercises: [
        { type: 'mc', q: 'Ein <b>16-jähriger</b> kauft ohne Wissen seiner Eltern ein Smartphone für 900 € auf Raten. Wie ist der Vertrag zu beurteilen?',
          options: ['Schwebend unwirksam – er wird nur mit Genehmigung der Eltern wirksam', 'Voll wirksam, da er schon 16 ist', 'Nichtig, da er geschäftsunfähig ist', 'Wirksam, weil er die Raten aus dem Taschengeld bezahlen könnte'], correct: 0,
          explain: 'Ab 7 bis 17 beschränkt geschäftsfähig: Verträge sind ohne Einwilligung schwebend unwirksam. Der Taschengeldparagraf gilt nur, wenn der Preis sofort aus dem Taschengeld voll bezahlt wird – nicht bei Ratenkauf.' },
        { type: 'mc', q: 'Wann kommt ein <b>Kaufvertrag</b> zustande?',
          options: ['Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme', 'Erst wenn die Ware bezahlt ist', 'Erst durch die schriftliche Auftragsbestätigung', 'Nur durch notarielle Beurkundung'], correct: 0,
          explain: 'Der Kaufvertrag ist grundsätzlich formfrei. Zahlung und Übergabe sind die Erfüllung, nicht der Vertragsschluss.' },
        { type: 'mc', q: 'Was sind die <b>Hauptpflichten des Verkäufers</b> beim Kaufvertrag?',
          options: ['Mangelfreie Übergabe der Ware und Eigentumsverschaffung', 'Abnahme der Ware', 'Zahlung des Kaufpreises', 'Prüfung der Bonität des Käufers'], correct: 0,
          explain: 'Käufer: Abnahme der Ware und Zahlung des Kaufpreises.' },
        { type: 'mc', q: 'Ein neuer Bürostuhl hat einen Mangel. Welches Recht muss der Käufer in der Regel <b>zuerst</b> geltend machen?',
          options: ['Nacherfüllung (Reparatur oder Ersatzlieferung)', 'Rücktritt vom Vertrag', 'Minderung des Kaufpreises', 'Schadensersatz'], correct: 0,
          explain: 'Der Verkäufer hat grundsätzlich ein Recht auf „zweite Chance“. Erst bei Fehlschlag folgen Rücktritt, Minderung, Schadensersatz.' },
        { type: 'mc', q: 'Wie lange beträgt die <b>gesetzliche Verjährungsfrist für Sachmängel</b> bei neu gekauften Sachen?',
          options: ['6 Monate', '1 Jahr', '2 Jahre', '10 Jahre'], correct: 2,
          explain: 'Neue Sachen: 2 Jahre (§ 438 BGB). Bei Bauwerken 5 Jahre.' },
        { type: 'calc', unit: '€', dec: 2, answer: 37.5,
          q: 'Ein Kunde (Unternehmen) zahlt eine Rechnung über <b>5.000 €</b> erst <b>30 Tage</b> nach Fälligkeit. Als Verzugszins gelten hier <b>9 %</b> p.a. Wie hoch sind die Verzugszinsen?', hint: 'Zinsen = Kapital × Prozent × Tage ÷ 36.000',
          explain: '5.000 × 9 × 30 ÷ 36.000 = <b>37,50 €</b>.' },
        { type: 'order', q: 'Bringe den typischen Ablauf bei einem <b>säumigen Zahler</b> in die richtige Reihenfolge.',
          items: ['Rechnung mit Zahlungsziel', 'Zahlungserinnerung', '1. Mahnung', '2. Mahnung mit Fristsetzung', 'Gerichtlicher Mahnbescheid', 'Vollstreckungsbescheid'],
          explain: 'Erst freundliche Erinnerung, dann Mahnungen, erst danach gerichtliche Schritte.' },
        { type: 'mc', q: 'Ein Kunde zahlt nicht, obwohl das Zahlungsziel („zahlbar bis 31.03.“) kalendermäßig bestimmt war. Wann gerät er in <b>Zahlungsverzug</b>?',
          options: ['Am 01.04., auch ohne Mahnung', 'Erst nach der 2. Mahnung', 'Nach 6 Monaten', 'Erst, wenn das Gericht entschieden hat'], correct: 0,
          explain: 'Bei kalendermäßig bestimmtem Zahlungstermin ist keine Mahnung nötig (§ 286 Abs. 2 BGB).' },
        { type: 'scenario',
          intro: 'Du arbeitest im Einkauf der Hartmann Immobilien GmbH. Letzte Woche wurden 10 Schreibtische bestellt. Heute sind sie da – aber zwei sind an der Tischplatte stark zerkratzt.',
          steps: [
            { q: 'Was ist Dein erster Schritt?',
              options: [{ t: 'Die Mängel sofort dokumentieren (Fotos) und dem Lieferanten schriftlich anzeigen, mit Aufforderung zur Nacherfüllung.', ok: true, fb: 'Richtig. Im Handel gilt für Kaufleute sogar die unverzügliche Rügeobliegenheit (§ 377 HGB) – sonst gilt die Ware als genehmigt.' },
                { t: 'Die ganze Lieferung zurückschicken und vom Kaufvertrag zurücktreten.', ok: false, fb: 'Zu früh: Erst Nacherfüllung verlangen. Außerdem sind nur 2 von 10 Tischen betroffen.' },
                { t: 'Die Tische behalten und den Preis um 50 % kürzen.', ok: false, fb: 'Minderung ist nur nach gescheiterter Nacherfüllung möglich – und nicht in dieser Höhe einfach festzulegen.' }] },
            { q: 'Der Lieferant bietet an, die zwei Tischplatten auszutauschen. Welches Recht nimmst Du wahr?',
              options: [{ t: 'Nacherfüllung (Ersatzlieferung)', ok: true, fb: 'Genau, das ist das primäre Recht des Käufers.' },
                { t: 'Schadensersatz statt Leistung sofort', ok: false, fb: 'Das ginge erst nach fruchtloser Frist für die Nacherfüllung.' }] }
          ],
          explain: 'Merke die Kette: Mängelrüge → Nacherfüllung → (bei Fehlschlag) Rücktritt/Minderung/Schadensersatz.' }
      ]
    }
  ]
});
