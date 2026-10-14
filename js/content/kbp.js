window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  id: 'kbp', name: 'Kundenbeziehung', full: 'Kundenbeziehungsprozesse', icon: '🤝', color: '#f59e0b',
  desc: 'Kunden gewinnen, halten und Beschwerden souverän lösen – mit Fällen aus dem Büroalltag.',
  topics: [
    /* ------------------------------------------------------------------ */
    {
      id: 'kbp-kunde', modul: ['KBM.07.01'], title: 'Kundenorientierung & Kundenbindung', minutes: 20,
      summary: 'Bedürfnisse, Kundenzufriedenheit, Bindungsinstrumente, ABC-Analyse.',
      lesson: `
<h2>Bedürfnis – Bedarf – Nachfrage</h2>
<table><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td><b>Bedürfnis</b></td><td>Mangelempfinden mit Wunsch, es zu beseitigen</td><td>„Ich möchte besser arbeiten können.“</td></tr>
<tr><td><b>Bedarf</b></td><td>Bedürfnis, das mit Kaufkraft verbunden ist</td><td>„Ich brauche einen ergonomischen Bürostuhl und kann ihn bezahlen.“</td></tr>
<tr><td><b>Nachfrage</b></td><td>Bedarf, der am Markt auftritt</td><td>Bestellung des Stuhls</td></tr></table>
<p>Die <b>Maslowsche Bedürfnispyramide</b> (von unten nach oben): 1. Physiologische Bedürfnisse · 2. Sicherheit · 3. Soziale Bedürfnisse · 4. Wertschätzung · 5. Selbstverwirklichung. Wer unten nicht befriedigt ist, strebt zuerst dorthin.</p>

<h2>Kundenorientierung und Kundenzufriedenheit</h2>
<p>Kundenorientierung heißt: alle Prozesse im Unternehmen richten sich am Nutzen des Kunden aus. <b>Zufriedenheit</b> entsteht, wenn die <b>wahrgenommene Leistung ≥ der Erwartung</b> ist. Ist sie höher als erwartet, entsteht Begeisterung.</p>
<div class="box beispiel"><b class="t">Beispiel</b>Ein Kunde erwartet Lieferung in 3 Tagen. Sie kommt in 2 Tagen, mit persönlicher Nachricht → Erwartung übertroffen → begeisterter Kunde.</div>
<p>Neukunden zu gewinnen ist deutlich teurer als Stammkunden zu halten. Zufriedene Kunden kaufen wieder und empfehlen weiter.</p>

<h2>Instrumente der Kundenbindung</h2>
<ul><li>Kundenkarte / Bonusprogramm, Rabattstaffeln</li><li>Persönlicher Ansprechpartner, schneller Service</li><li>Newsletter, Geburtstagsgrüße, Kundenevents</li><li>Garantie, Reparatur- und Wartungsservice</li><li>Regelmäßiges Kundenfeedback (Umfragen)</li></ul>
<p><b>CRM</b> (Customer-Relationship-Management) = systematische Pflege der Kundenbeziehung, meist mit einer Software, in der alle Kontakte, Angebote und Beschwerden gespeichert sind.</p>

<h2>Kennzahlen und Analyse</h2>
<ul><li><b>Abwanderungsquote</b> = verlorene Kunden ÷ Kunden zu Beginn × 100</li>
<li><b>ABC-Analyse:</b> Kunden nach Umsatz sortieren. A-Kunden (wenige, hoher Umsatzanteil ca. 75–80 %), B-Kunden (mittel), C-Kunden (viele, kleiner Umsatzanteil). A-Kunden bekommen die intensivste Betreuung.</li></ul>`,
      exercises: [
        { type: 'order', q: 'Ordne die Stufen der <b>Maslowschen Bedürfnispyramide</b> von unten (Basis) nach oben.',
          items: ['Physiologische Bedürfnisse (Essen, Schlaf)', 'Sicherheitsbedürfnisse', 'Soziale Bedürfnisse', 'Wertschätzung / Anerkennung', 'Selbstverwirklichung'],
          explain: 'Basis = Grundbedürfnisse, Spitze = Selbstverwirklichung.' },
        { type: 'mc', q: 'Wann ist ein Kunde <b>zufrieden</b>?',
          options: ['Wenn die wahrgenommene Leistung die Erwartung erfüllt oder übertrifft', 'Wenn der Preis möglichst niedrig ist', 'Wenn er einen Rabatt erhält', 'Wenn er nie reklamiert hat'], correct: 0,
          explain: 'Zufriedenheit = Vergleich von Erwartung und tatsächlicher Leistung.' },
        { type: 'mc', q: 'Welche Maßnahmen dienen der <b>Kundenbindung</b>?',
          options: ['Bonusprogramm', 'Persönlicher Ansprechpartner', 'Wettbewerber-Preisliste ignorieren', 'Regelmäßige Kundenumfragen', 'Beschwerden unbearbeitet lassen'], correct: [0, 1, 3],
          explain: 'Beschwerden gehören bearbeitet – sie sind eine Chance. Preisliste ignorieren ist keine Bindungsmaßnahme.' },
        { type: 'calc', unit: '%', dec: 1, answer: 5, tol: 0.01,
          q: 'Zu Jahresbeginn hat ein Büroausstatter <b>800 Kunden</b>. Im Laufe des Jahres wandern <b>40</b> Kunden ab. Wie hoch ist die <b>Abwanderungsquote</b>?',
          explain: '40 ÷ 800 = 0,05 = <b>5 %</b>.' },
        { type: 'calc', unit: '%', dec: 1, answer: 80, tol: 0.1,
          q: 'ABC-Analyse: Gesamtumsatz <b>500.000 €</b>. Die drei größten Kunden (A-Kunden) haben zusammen <b>400.000 €</b> Umsatz. Wie viel Prozent des Umsatzes entfallen auf die A-Kunden?',
          explain: '400.000 ÷ 500.000 = 0,8 = <b>80 %</b>. Wenige Kunden, hoher Umsatzanteil → besonders intensiv betreuen.' },
        { type: 'calc', unit: '€', dec: 2, answer: 1500,
          q: 'Ein Stammkunde kauft im Jahr für <b>1.200 €</b> bei Dir ein. Die Gewinnspanne beträgt <b>25 %</b> des Umsatzes. Er bleibt voraussichtlich <b>5 Jahre</b> Kunde. Wie hoch ist der <b>Gewinn über die gesamte Kundenbeziehung</b>?',
          explain: '1.200 × 0,25 = 300 € pro Jahr. 300 × 5 = <b>1.500 €</b>. Das zeigt, warum Kundenbindung wirtschaftlich wichtig ist.' },
        { type: 'mc', q: 'Was bedeutet <b>CRM</b>?',
          options: ['Customer-Relationship-Management – systematische Kundenbeziehungspflege', 'Cost-Revenue-Management', 'Central Resource Manager', 'Computer-Related Marketing'], correct: 0,
          explain: 'Eine CRM-Software speichert Kundendaten, Kontakte, Angebote und Beschwerden zentral.' },
        { type: 'mc', q: 'Ein Kunde kommt mit dem Wunsch nach einem günstigen Drucker, hat aber <b>kein Budget</b> und kauft nichts. Was liegt vor?',
          options: ['Ein Bedürfnis, aber kein Bedarf', 'Bedarf und Nachfrage', 'Nur Nachfrage', 'Weder Bedürfnis noch Bedarf'], correct: 0,
          explain: 'Bedarf setzt Kaufkraft voraus. Ohne sie bleibt es beim Bedürfnis.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'kbp-marketing', modul: ['KBM.07.01'], title: 'Marketing-Mix & Marktforschung', minutes: 20,
      summary: '4 P, Produktlebenszyklus, AIDA, Primär-/Sekundärforschung.',
      lesson: `
<h2>Marketing – mehr als Werbung</h2>
<p><b>Marketing</b> bedeutet, das gesamte Unternehmen konsequent an den Bedürfnissen des Marktes auszurichten. Das Instrumentarium dazu ist der <b>Marketing-Mix</b> – die sinnvolle Kombination der „4 P“:</p>
<table><tr><th>P</th><th>Bereich</th><th>Beispiele</th></tr>
<tr><td><b>Product</b></td><td>Produktpolitik</td><td>Sortiment, Qualität, Verpackung, Marke, Service</td></tr>
<tr><td><b>Price</b></td><td>Preispolitik</td><td>Preishöhe, Rabatte, Skonto, Zahlungsbedingungen</td></tr>
<tr><td><b>Place</b></td><td>Distributionspolitik</td><td>Vertriebswege (direkt/indirekt), Lieferung, Onlineshop, Filialen</td></tr>
<tr><td><b>Promotion</b></td><td>Kommunikationspolitik</td><td>Werbung, Verkaufsförderung, PR, Social Media</td></tr></table>

<h2>Marktforschung</h2>
<ul><li><b>Primärforschung (Field Research):</b> Daten werden neu erhoben (Umfrage, Interview, Beobachtung, Test).</li>
<li><b>Sekundärforschung (Desk Research):</b> bereits vorhandene Daten auswerten (Statistiken, Fachzeitschriften, interne Verkaufsdaten).</li></ul>
<p><b>Marktanteil</b> = eigener Umsatz ÷ Marktvolumen × 100.</p>

<h2>Produktlebenszyklus</h2>
<p>Einführung → Wachstum → Reife → Sättigung → Rückgang. In der Einführung hohe Kosten und kaum Gewinn; in der Reifephase meist Gewinnmaximum; im Rückgang sinkt der Umsatz (Produkt auslaufen lassen oder verbessern).</p>

<h2>Werbung – das AIDA-Modell</h2>
<p><b>A</b>ttention (Aufmerksamkeit) → <b>I</b>nterest (Interesse) → <b>D</b>esire (Wunsch) → <b>A</b>ction (Handlung/Kauf). Gute Werbung führt den Kunden durch alle vier Stufen.</p>
<div class="box merke"><b class="t">Preisstrategien bei Neuprodukten</b><b>Skimming</b> (Abschöpfung): zuerst hoher Preis für zahlungskräftige Early Adopter. <b>Penetration</b>: niedriger Einstiegspreis, um schnell Marktanteile zu gewinnen.</div>`,
      exercises: [
        { type: 'mc', q: 'Wofür stehen die <b>4 P</b> des Marketing-Mix?',
          options: ['Product, Price, Place, Promotion', 'Person, Plan, Profit, Prozess', 'Preis, Produktion, Personal, Planung', 'Produkt, Politik, Partner, Prognose'], correct: 0,
          explain: 'Produkt-, Preis-, Distributions- und Kommunikationspolitik.' },
        { type: 'mc', q: 'Ein Büroausstatter verschickt Newsletter und schaltet Social-Media-Anzeigen. Welches „P“ ist das?',
          options: ['Promotion (Kommunikationspolitik)', 'Product', 'Price', 'Place'], correct: 0,
          explain: 'Alle Maßnahmen, die über das Angebot informieren und überzeugen, gehören zur Kommunikationspolitik.' },
        { type: 'mc', q: 'Welches Beispiel gehört zur <b>Preispolitik</b>?',
          options: ['Mengenrabatt und Skonto', 'Neue Produktverpackung', 'Eröffnung eines Onlineshops', 'Anzeige in der Tageszeitung'], correct: 0,
          explain: 'Onlineshop = Distribution. Verpackung = Produktpolitik. Anzeige = Kommunikation.' },
        { type: 'order', q: 'Bringe die Phasen des <b>Produktlebenszyklus</b> in die richtige Reihenfolge.',
          items: ['Einführung', 'Wachstum', 'Reife', 'Sättigung', 'Rückgang'], explain: 'Der Umsatz steigt bis zur Reife/Sättigung und fällt danach.' },
        { type: 'order', q: 'Bringe die Stufen des <b>AIDA-Modells</b> in die richtige Reihenfolge.',
          items: ['Attention – Aufmerksamkeit wecken', 'Interest – Interesse erzeugen', 'Desire – Kaufwunsch auslösen', 'Action – Kaufhandlung'], explain: 'AIDA: Attention, Interest, Desire, Action.' },
        { type: 'mc', q: 'Du wertest für den Marktbericht eine Branchenstudie des Statistischen Bundesamtes aus. Welche Art der Marktforschung ist das?',
          options: ['Sekundärforschung (Desk Research)', 'Primärforschung (Field Research)', 'Produktforschung', 'Werbeforschung'], correct: 0,
          explain: 'Bereits veröffentlichte Daten auszuwerten ist Sekundärforschung. Eine eigene Kundenumfrage wäre Primärforschung.' },
        { type: 'calc', unit: '%', dec: 1, answer: 12.5, tol: 0.05,
          q: 'Die Muster GmbH erzielt <b>2 Mio. €</b> Umsatz, das gesamte Marktvolumen beträgt <b>16 Mio. €</b>. Wie hoch ist ihr <b>Marktanteil</b>?',
          explain: '2 ÷ 16 = 0,125 = <b>12,5 %</b>.' },
        { type: 'scenario',
          intro: 'Die Kernwerk GmbH, ein kleiner Bürobedarfshändler, möchte als Neuprodukt einen ergonomischen Steh-Sitz-Schreibtisch einführen. Du bist in die Planung des Marketing-Mix eingebunden.',
          steps: [
            { q: 'Das Produkt ist neu und innovativ, es gibt kaum Konkurrenz. Die Geschäftsführung möchte zuerst Kunden ansprechen, die bereit sind, mehr zu zahlen. Welche Preisstrategie passt?',
              options: [{ t: 'Skimming: zunächst hoher Einführungspreis, später senken.', ok: true, fb: 'Ja – bei innovativen Produkten ohne Konkurrenz ist Abschöpfung sinnvoll.' },
                { t: 'Penetration: sehr niedriger Einstiegspreis', ok: false, fb: 'Penetration passt eher, wenn schnell viel Marktanteil gewonnen werden soll, z.B. bei vielen Wettbewerbern.' }] },
            { q: 'Wo und wie soll der Tisch bevorzugt vertrieben werden, wenn die Zielgruppe Büros und Selbstständige sind?',
              options: [{ t: 'Über Onlineshop und Außendienst mit Beratung vor Ort', ok: true, fb: 'Genau: Distributionspolitik, passend zur Zielgruppe und zum erklärungsbedürftigen Produkt.' },
                { t: 'Ausschließlich über Supermärkte', ok: false, fb: 'Für Büroausstattung und Beratung ist das wenig geeignet.' }] },
            { q: 'Welche Werbebotschaft folgt dem AIDA-Prinzip am besten?',
              options: [{ t: 'Auffälliger Slogan → Nutzen (Rückenfreundlich) → Wunsch (Probesitzen) → Handlung (Jetzt bestellen)', ok: true, fb: 'Das führt den Kunden durch alle vier Stufen.' },
                { t: 'Nur eine lange Liste der technischen Daten', ok: false, fb: 'So wird weder Aufmerksamkeit noch ein Kaufwunsch erzeugt.' }] }
          ],
          explain: 'Immer alle vier P aufeinander abstimmen: Produkt, Preis, Place, Promotion.' }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'kbp-beschwerde', modul: ['KBM.07.04'], title: 'Reklamation & Beschwerdemanagement', minutes: 20,
      summary: 'Beschwerden als Chance, strukturierter Ablauf, Quoten und Auswertung.',
      lesson: `
<h2>Beschwerde oder Reklamation?</h2>
<table><tr><th>Beschwerde</th><th>Reklamation</th></tr>
<tr><td>Äußerung von <b>Unzufriedenheit</b> (Service, Wartezeit, Ton, Lieferung)</td><td>Rechtliche <b>Mängelrüge</b> wegen eines Sachmangels (defekte oder falsche Ware, Menge fehlt)</td></tr>
<tr><td>Kein Rechtsanspruch nötig</td><td>Löst Mängelrechte aus (Nacherfüllung, Rücktritt, Minderung …)</td></tr></table>

<h2>Beschwerde = Chance</h2>
<p>Nur ein kleiner Teil unzufriedener Kunden beschwert sich – die meisten wandern stillschweigend ab. Wer professionell reagiert, kann den Kunden zurückgewinnen („Beschwerdeparadox“) und erfährt, wo die Prozesse verbessert werden müssen.</p>

<h2>Ablauf einer Beschwerdebearbeitung</h2>
<ol><li><b>Beschwerde annehmen</b> – ruhig zuhören, ausreden lassen, nicht unterbrechen</li>
<li><b>Verständnis zeigen</b> – ggf. entschuldigen, Kunde ernst nehmen</li>
<li><b>Sachverhalt klären</b> – Fragen stellen, Fakten notieren (Datum, Auftrag, Ansprechpartner)</li>
<li><b>Lösung anbieten</b> – Alternativen nennen, Kunden einbinden</li>
<li><b>Lösung umsetzen</b> – schnell und zuverlässig</li>
<li><b>Nachfassen</b> – Zufriedenheit prüfen</li>
<li><b>Auswerten</b> – Ursachen analysieren, Prozesse verbessern (Beschwerdecontrolling)</li></ol>
<div class="box achtung"><b class="t">Typische Fehler</b>Kunden unterbrechen · sich rechtfertigen oder Schuld auf Kollegen schieben · „Das ist nicht meine Abteilung“ · Versprechen machen, die man nicht halten kann · Beschwerde nicht dokumentieren.</div>

<h2>Auswertung: Beschwerdequote</h2>
<p><b>Beschwerdequote</b> = Anzahl Beschwerden ÷ Anzahl Aufträge (oder Kunden) × 100. Sie zeigt Schwachstellen auf, ist aber zurückhaltend zu interpretieren (nicht alle melden sich).</p>`,
      exercises: [
        { type: 'order', q: 'Bringe die Schritte der <b>Beschwerdebearbeitung</b> in die richtige Reihenfolge.',
          items: ['Beschwerde ruhig annehmen und zuhören', 'Verständnis zeigen', 'Sachverhalt klären', 'Lösung anbieten', 'Lösung umsetzen', 'Nachfassen und Beschwerde auswerten'],
          explain: 'Erst zuhören und Gefühle ernst nehmen, dann Fakten, dann Lösung.' },
        { type: 'mc', q: 'Was ist der Unterschied zwischen <b>Beschwerde</b> und <b>Reklamation</b>?',
          options: ['Eine Reklamation ist eine Mängelrüge wegen einer fehlerhaften Leistung; eine Beschwerde drückt allgemeine Unzufriedenheit aus.', 'Eine Beschwerde ist immer schriftlich, eine Reklamation mündlich.', 'Es gibt keinen Unterschied.', 'Eine Reklamation gibt es nur bei Dienstleistungen.'], correct: 0,
          explain: 'Die Reklamation löst Gewährleistungsrechte aus.' },
        { type: 'mc', q: 'Welche Verhaltensweisen sind bei einer Kundenbeschwerde <b>falsch</b>?',
          options: ['Den Kunden unterbrechen und sich sofort rechtfertigen', 'Aktiv zuhören und Verständnis zeigen', 'Die Schuld auf einen Kollegen schieben', 'Den Vorgang dokumentieren', 'Dem Kunden Lösungen anbieten'], correct: [0, 2],
          explain: 'Unterbrechen und Schuld abschieben eskalieren die Situation.' },
        { type: 'calc', unit: '%', dec: 1, answer: 2, tol: 0.01,
          q: 'Im Quartal gab es <b>1.800 Aufträge</b> und <b>36 Beschwerden</b>. Wie hoch ist die <b>Beschwerdequote</b>?',
          explain: '36 ÷ 1.800 = 0,02 = <b>2 %</b>.' },
        { type: 'mc', q: 'Warum ist eine Kundenbeschwerde für ein Unternehmen auch eine <b>Chance</b>?',
          options: ['Der Kunde kann zurückgewonnen werden, und das Unternehmen erfährt von Schwachstellen.', 'Beschwerden senken automatisch die Kosten.', 'Der Kunde kauft dann garantiert mehr.', 'Das Unternehmen muss nichts mehr verbessern.'], correct: 0,
          explain: 'Die meisten unzufriedenen Kunden schweigen und wandern ab.' },
        { type: 'scenario',
          intro: 'Du arbeitest im Kundenservice der Büroplus GmbH. Herr Aydin ruft aufgebracht an: Seine Bestellung (20 Ordner und 5 Tonerkartuschen) kam zwei Tage zu spät, und eine Tonerkartusche fehlt.',
          steps: [
            { q: 'Wie beginnst Du das Gespräch?',
              options: [{ t: 'Ruhig zuhören, ausreden lassen und zeigen, dass Du das Problem ernst nimmst.', ok: true, fb: 'Gut. Der Kunde muss sich zuerst gehört fühlen.' },
                { t: 'Sofort erklären, dass die Spedition schuld ist.', ok: false, fb: 'Rechtfertigung wirkt wie eine Ausrede und verschärft den Ärger.' },
                { t: 'Den Anruf an die Buchhaltung weiterleiten.', ok: false, fb: 'Herumreichen verärgert zusätzlich. Du bist jetzt der Ansprechpartner.' }] },
            { q: 'Herr Aydin hat sich beruhigt. Was fragst Du als Nächstes?',
              options: [{ t: 'Auftragsnummer, genaue Fehlmenge und Liefertermin erfragen und notieren.', ok: true, fb: 'Sachverhalt klären: Fakten sammeln, bevor Du eine Lösung versprichst.' },
                { t: 'Sofort Gutschrift über den gesamten Betrag anbieten.', ok: false, fb: 'Das ist übertrieben und voreilig, solange der Sachverhalt nicht geklärt ist.' }] },
            { q: 'Es stellt sich heraus: Eine Kartusche wurde nicht eingepackt. Welche Lösung bietest Du an?',
              options: [{ t: 'Kostenlose Nachlieferung per Express, kurze Entschuldigung, Nachfassen am nächsten Tag.', ok: true, fb: 'Das ist Nacherfüllung + Entschuldigung + Nachfassen – eine runde Lösung.' },
                { t: 'Er soll die Kartusche selbst im Laden abholen.', ok: false, fb: 'Das verlagert den Aufwand auf den Kunden. Der Fehler liegt bei uns.' }] }
          ],
          explain: 'Zuhören → Sachverhalt klären → Lösung → Nachfassen. Danach den Vorgang intern auswerten (Verpackungsprozess prüfen).' }
      ]
    }
  ]
});
