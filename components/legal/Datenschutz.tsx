import React from 'react';

export const Datenschutz: React.FC = () => {
  return (
    <div className="space-y-4 text-sm">
      <h4 className="text-white font-bold text-base">1. Datenschutz auf einen Blick</h4>
      <p>
        <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>
      
      <h4 className="text-white font-bold text-base mt-4">2. Hosting und Content Delivery Networks (CDN)</h4>
      <p>
        Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
      </p>

      <h4 className="text-white font-bold text-base mt-4">3. Allgemeine Hinweise und Pflichtinformationen</h4>
      <p>
        <strong>Datenschutz:</strong> Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      
      <p>
        <strong>Hinweis zur verantwortlichen Stelle:</strong><br/>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/>
        Robert Erbach<br/>
        [Musterstraße 1]<br/>
        [12345 Musterstadt]<br/>
        E-Mail: roberterbach@web.de
      </p>

      <h4 className="text-white font-bold text-base mt-4">4. Datenerfassung auf dieser Website</h4>
      <p>
        <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      
      <p>
        <strong>Cookies:</strong> Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Daten zur Bereitstellung der Seite verarbeitet.
      </p>
    </div>
  );
};