import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-white font-bold">Angaben gemäß § 5 TMG</h4>
      <p>
        Robert Erbach<br />
        [Musterstraße 1]<br />
        [12345 Musterstadt]
      </p>

      <h4 className="text-white font-bold mt-4">Kontakt</h4>
      <p>
        E-Mail: roberterbach@web.de<br />
      </p>

      <h4 className="text-white font-bold mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
      <p>
        Robert Erbach<br />
        [Musterstraße 1]<br />
        [12345 Musterstadt]
      </p>
      
      <p className="text-sm text-text-muted mt-8">
        Hinweis: Dies ist eine Portfolio-Demo. Die Adressdaten sind Platzhalter.
      </p>
    </div>
  );
};