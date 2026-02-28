import React from 'react';

export const AgbContent: React.FC = () => (
  <div className="space-y-8 text-sm text-slate-300">
    <section>
      <h3 className="text-xl font-bold text-white mb-4">Allgemeine Geschäftsbedingungen (AGB)</h3>
      <p className="mb-4">
        Stand: {new Date().toLocaleDateString('de-DE')}
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Teil A: Allgemeine Bestimmungen</h3>
      
      <h4 className="font-semibold text-white mt-4 mb-2">§ 1 Geltungsbereich</h4>
      <p className="mb-4">
        (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") von VisibilityLab, Inh. Robert Erbach, Musterstraße 1, 12345 Musterstadt (nachfolgend "Anbieter"), gelten für alle Verträge über die Erbringung von Dienstleistungen, insbesondere im Bereich SEO, GEO (Generative Engine Optimization) und Webentwicklung, die ein Unternehmer (nachfolgend "Kunde") mit dem Anbieter abschließt.
        <br />(2) Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich zugestimmt hat.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 2 Vertragsschluss</h4>
      <p className="mb-4">
        (1) Die Angebote des Anbieters sind freibleibend und unverbindlich.
        <br />(2) Ein Vertrag kommt erst durch die schriftliche oder in Textform (z. B. per E-Mail) erfolgte Auftragsbestätigung des Anbieters oder durch den Beginn der Leistungserbringung zustande.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 3 Leistungen des Anbieters</h4>
      <p className="mb-4">
        (1) Der Anbieter erbringt Beratungs- und Agenturdienstleistungen im Bereich der Suchmaschinenoptimierung (SEO) und KI-gestützten Sichtbarkeitsoptimierung (GEO).
        <br />(2) Der Anbieter schuldet die Erbringung der vereinbarten Dienstleistung (Dienstvertrag), jedoch keinen bestimmten wirtschaftlichen Erfolg (z. B. das Erreichen einer bestimmten Platzierung in Suchmaschinen oder garantierte Umsätze), sofern nicht ausdrücklich etwas anderes vereinbart wurde.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 4 Mitwirkungspflichten des Kunden</h4>
      <p className="mb-4">
        (1) Der Kunde unterstützt den Anbieter bei der Erbringung der vertraglich geschuldeten Leistungen. Er wird dem Anbieter rechtzeitig alle für die Leistungserbringung erforderlichen Informationen, Zugangsdaten und Materialien zur Verfügung stellen.
        <br />(2) Kommt der Kunde seinen Mitwirkungspflichten nicht nach, so verlängern sich etwaige Leistungsfristen angemessen.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 5 Vergütung und Zahlungsbedingungen</h4>
      <p className="mb-4">
        (1) Die Vergütung richtet sich nach der im Vertrag getroffenen Vereinbarung. Alle Preise verstehen sich netto zuzüglich der jeweils gültigen gesetzlichen Umsatzsteuer.
        <br />(2) Rechnungen des Anbieters sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig, sofern nichts anderes vereinbart ist.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 6 Allgemeine Haftung</h4>
      <p className="mb-4">
        (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
        <br />(2) Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 7 Schlussbestimmungen</h4>
      <p className="mb-4">
        (1) Es gilt das Recht der Bundesrepublik Deutschland.
        <br />(2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Sitz des Anbieters, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-bold text-white mb-4 mt-8 border-b border-white/10 pb-2">Teil B: Besondere Klauseln für KI-Dienstleistungen</h3>
      <p className="mb-4">
        Die nachfolgenden besonderen Bestimmungen ergänzen die Allgemeinen Bestimmungen (Teil A) und gelten spezifisch für alle Verträge, die die Erbringung von KI-gestützten Dienstleistungen (insbesondere GEO/AEO) zum Gegenstand haben.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 1 Definition und Beschaffenheit der KI-Dienstleistung</h4>
      <p className="mb-4">
        Die vom Anbieter erbrachten Leistungen basieren auf dem Einsatz von Künstlicher Intelligenz, insbesondere sogenannten Large Language Models (LLMs). Der Kunde erkennt an, dass diese Systeme auf probabilistischen Modellen beruhen. Die generierten Inhalte stellen Wahrscheinlichkeitsberechnungen dar und keine deterministischen Fakten. Systembedingte Ungenauigkeiten, inhaltliche Fehler oder sogenannte „Halluzinationen“ der KI können nach dem aktuellen Stand der Technik nicht vollständig ausgeschlossen werden und stellen keinen Mangel der Dienstleistung dar.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 2 Nutzungsrechte und Urheberrechtsschutz</h4>
      <p className="mb-4">
        Der Anbieter überträgt dem Kunden die einfachen, räumlich und zeitlich unbeschränkten Nutzungsrechte an den generierten Arbeitsergebnissen (Output), sobald die vereinbarte Vergütung vollständig geleistet wurde. 
      </p>
      <p className="mb-4">
        Der Kunde wird ausdrücklich darauf hingewiesen, dass KI-generierte Inhalte nach geltendem Recht (insbesondere dem UrhG) mangels menschlicher Schöpfungshöhe im Regelfall nicht urheberrechtlich geschützt sind. Der Anbieter übernimmt keine Garantie oder Gewährleistung für die Urheberrechtsfähigkeit des Outputs oder die Freiheit von Rechten Dritter, sofern die KI-Modelle unbeabsichtigt bestehende Werke reproduzieren.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 3 Abnahmepflicht und Fact-Checking durch den Kunden</h4>
      <p className="mb-4">
        Aufgrund der in Teil B § 1 beschriebenen Beschaffenheit der KI-Dienstleistung obliegt dem Kunden eine strenge Prüfpflicht. Der Kunde ist verpflichtet, sämtliche vom Anbieter gelieferten KI-generierten Inhalte vor deren Veröffentlichung, Nutzung oder Weitergabe eigenverantwortlich auf fachliche Richtigkeit, Plausibilität sowie rechtliche Zulässigkeit (insbesondere Wettbewerbsrecht, Markenrecht und Urheberrecht) zu prüfen (Fact-Checking). 
      </p>
      <p className="mb-4">
        Der Anbieter haftet nicht für Schäden, Abmahnungen oder rechtliche Konsequenzen, die aus der ungeprüften Veröffentlichung der generierten Inhalte durch den Kunden resultieren.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 4 Haftungsausschluss für Ranking-Veränderungen</h4>
      <p className="mb-4">
        Die Dienstleistungen des Anbieters zielen auf die Optimierung der Sichtbarkeit in Suchmaschinen und KI-Antwortmaschinen (GEO/AEO) ab. Der Anbieter schuldet die fachgerechte Ausführung der Optimierungsmaßnahmen, jedoch keinen bestimmten wirtschaftlichen Erfolg oder ein spezifisches Ranking.
      </p>
      <p className="mb-4">
        Der Anbieter schließt jegliche Haftung für Ranking-Verluste, Sichtbarkeitseinbußen oder daraus resultierende wirtschaftliche Schäden aus, die durch unangekündigte Algorithmus-Änderungen, Updates oder Richtlinienanpassungen von Drittanbietern (wie z. B. Google, OpenAI/SearchGPT, Microsoft) verursacht werden.
      </p>

      <h4 className="font-semibold text-white mt-4 mb-2">§ 5 Datenschutz und Nutzung von LLM-Schnittstellen</h4>
      <p className="mb-4">
        Zur Erbringung der Dienstleistung greift der Anbieter über API-Schnittstellen auf KI-Modelle von Drittanbietern (z. B. OpenAI, Anthropic, Google) zu. Der Kunde willigt ein, dass zur Ausführung des Auftrags erforderliche Daten (z. B. Briefings, Unternehmensinformationen) an diese Drittanbieter übermittelt werden. 
      </p>
      <p className="mb-4">
        Der Anbieter verpflichtet sich, bei der Nutzung von Schnittstellen die datenschutzrechtlichen Vorgaben (DSGVO) einzuhalten und, soweit möglich, Einstellungen zu wählen, die eine Nutzung der übermittelten Daten zu Trainingszwecken durch den Drittanbieter ausschließen (z. B. Zero-Data-Retention-Policies bei APIs). Dennoch wird dem Kunden empfohlen, keine sensiblen personenbezogenen Daten oder streng vertrauliche Geschäftsgeheimnisse für die Verarbeitung durch die KI bereitzustellen.
      </p>
    </section>
  </div>
);
