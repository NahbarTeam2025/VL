import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { Modal } from './Modal';

export const Footer: React.FC = () => {
  const links = [
    { title: 'USP', href: '#usp' },
    { title: 'Benefits', href: '#benefit' },
    { title: 'Leistungsspektrum', href: '#leistung' },
    { title: 'Case Study', href: '#case-study' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Download', href: '#download' },
    { title: 'Über mich', href: '#about-me' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Kontakt', href: '#contact' }
  ];

  const [isImpressumOpen, setIsImpressumOpen] = React.useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = React.useState(false);
  const [isAgbOpen, setIsAgbOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="agb-sitemap" className="bg-bg-secondary border-t border-border pt-8 pb-4 relative overflow-hidden">
      <ParticlesBackground color="#ffffff" count={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left: Logo and description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accentBlue">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
              <span className="font-bold text-xl brand-gradient">VisibilityLab</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              KI-gestütztes System für moderne SEO-, GEO- und Content-Strategien.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accentBlue hover:text-text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-red-600 hover:text-text-primary transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-pink-600 hover:text-text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Legals */}
          <div className="flex flex-wrap gap-6">
            <button onClick={() => setIsImpressumOpen(true)} className="text-sm text-text-secondary hover:text-text-primary transition-colors">Impressum</button>
            <button onClick={() => setIsDatenschutzOpen(true)} className="text-sm text-text-secondary hover:text-text-primary transition-colors">Datenschutz</button>
            <button onClick={() => setIsAgbOpen(true)} className="text-sm text-text-secondary hover:text-text-primary transition-colors">AGB KI-Klauseln</button>
            <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {isImpressumOpen && <Modal title="Impressum" onClose={() => setIsImpressumOpen(false)}>
        <div className="space-y-4">
          <p className="font-bold text-white">Angaben gemäß § 5 TMG</p>
          <p>Robert Erbach<br />Musterstraße 1<br />12345 Musterstadt</p>
          <p className="font-bold text-white mt-4">Kontakt</p>
          <p>Telefon: +49 123 456789<br />E-Mail: info@visibilitylab.de</p>
          <p className="text-xs text-text-muted mt-4">Dies ist ein Platzhalter-Impressum.</p>
        </div>
      </Modal>}
      {isDatenschutzOpen && <Modal title="Datenschutz" onClose={() => setIsDatenschutzOpen(false)}>
        <div className="space-y-4">
          <h4 className="font-bold text-white">1. Datenschutz auf einen Blick</h4>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <h4 className="font-bold text-white">2. Datenerfassung auf unserer Website</h4>
          <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten beispielsweise Name, Anschrift oder E-Mail-Adressen erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.</p>
          <p className="text-xs text-text-muted mt-4">Dies ist eine Platzhalter-Datenschutzerklärung.</p>
        </div>
      </Modal>}
      {isAgbOpen && <Modal title="AGB KI-Klauseln" onClose={() => setIsAgbOpen(false)}>
        <div className="space-y-4">
          <h4 className="font-bold text-white">Allgemeine Geschäftsbedingungen mit besonderen Klauseln für KI-Dienstleistungen</h4>
          <p><span className="font-bold text-white">1. Geltungsbereich</span><br />Diese Bedingungen gelten für alle Verträge zwischen VisibilityLab und dem Auftraggeber.</p>
          <p><span className="font-bold text-white">2. KI-Leistungen</span><br />Der Anbieter nutzt modernste KI-Technologien. Der Kunde ist sich bewusst, dass KI-generierte Inhalte einer Überprüfung bedürfen.</p>
          <p className="text-xs text-text-muted mt-4">Dies sind Platzhalter-AGB.</p>
        </div>
      </Modal>}
    </footer>
  );
};
