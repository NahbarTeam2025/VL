import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { Modal } from './Modal';
import { ImpressumContent } from './ImpressumContent';
import { DatenschutzContent } from './DatenschutzContent';
import { AgbContent } from './AgbContent';
import { useTheme } from './ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  
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
    <footer id="agb" className="bg-bg-secondary pt-6 pb-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent"></div>
      <ParticlesBackground color={theme === 'light' ? '#2F80FF' : '#ffffff'} count={20} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          {/* Left: Logo and description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accentBlue">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
              <span className="font-bold text-lg brand-gradient">VisibilityLab</span>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed max-w-sm">
              Integriertes SEO-, GEO- und AEO-System für moderne Such- und KI-Strategien.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 [.light_&]:bg-black/5 flex items-center justify-center text-text-secondary hover:bg-accentBlue hover:text-text-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/5 [.light_&]:bg-black/5 flex items-center justify-center text-text-secondary hover:bg-red-600 hover:text-text-primary transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 [.light_&]:bg-black/5 flex items-center justify-center text-text-secondary hover:bg-pink-600 hover:text-text-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Legals */}
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setIsImpressumOpen(true)} className="text-xs text-text-secondary hover:text-text-primary transition-colors">Impressum</button>
            <button onClick={() => setIsDatenschutzOpen(true)} className="text-xs text-text-secondary hover:text-text-primary transition-colors">Datenschutz</button>
            <button onClick={() => setIsAgbOpen(true)} className="text-xs text-text-secondary hover:text-text-primary transition-colors">AGB</button>
          </div>
        </div>
        <div className="text-center text-[10px] text-slate-500 mt-6 font-light tracking-widest uppercase">
          by Robert
        </div>
      </div>

      {isImpressumOpen && <Modal title="Impressum" onClose={() => setIsImpressumOpen(false)}>
        <ImpressumContent />
      </Modal>}
      {isDatenschutzOpen && <Modal title="Datenschutz" onClose={() => setIsDatenschutzOpen(false)}>
        <DatenschutzContent />
      </Modal>}
      {isAgbOpen && <Modal title="AGB" onClose={() => setIsAgbOpen(false)}>
        <AgbContent />
      </Modal>}
    </footer>
  );
};
