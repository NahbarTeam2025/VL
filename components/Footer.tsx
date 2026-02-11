import React from 'react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenImpressum, onOpenDatenschutz }) => {
  const links = [
    { title: 'Problem', href: '#market-inefficiency' },
    { title: 'System', href: '#agents' },
    { title: 'Methodik', href: '#methodology' },
    { title: 'Prozess', href: '#process' },
    { title: 'FAQ', href: '#faq' }
  ];

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
    <footer className="bg-bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
              <span className="font-bold text-xl text-white">VisibilityLab</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed pr-8">
              KI-gestütztes System für moderne SEO-, GEO- und Content-Strategien.
            </p>
          </div>

          {/* Column 2 & 3: Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.title}>
                    <a href={link.href} onClick={handleScroll} className="text-sm text-text-secondary hover:text-white transition-colors">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Rechtliches</p>
              <ul className="space-y-3">
                <li><button onClick={onOpenImpressum} className="text-sm text-text-secondary hover:text-white transition-colors text-left">Impressum</button></li>
                <li><button onClick={onOpenDatenschutz} className="text-sm text-text-secondary hover:text-white transition-colors text-left">Datenschutz</button></li>
              </ul>
            </div>
            {/* Socials can be added here if needed */}
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} VisibilityLab. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};