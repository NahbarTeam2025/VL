import React from 'react';

export const ImpressumContent: React.FC = () => (
  <div className="space-y-6 text-sm text-slate-300">
    <section>
      <h4 className="font-bold text-white text-lg mb-2">Angaben gemäß § 5 TMG</h4>
      <p>
        Robert Erbach<br />
        VisibilityLab<br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>
    </section>

    <section>
      <h4 className="font-bold text-white text-lg mb-2">Kontakt</h4>
      <p>
        Telefon: +49 (0) 123 456789<br />
        E-Mail: info@visibilitylab.de
      </p>
    </section>

    <section>
      <h4 className="font-bold text-white text-lg mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
      <p>
        Robert Erbach<br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>
    </section>
  </div>
);
