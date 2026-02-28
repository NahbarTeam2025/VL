import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { ImpressumContent } from './ImpressumContent';
import { DatenschutzContent } from './DatenschutzContent';
import { AgbContent } from './AgbContent';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`group relative transition-all duration-300 py-2 px-3 text-sm font-medium block w-full text-center ${
      isActive 
        ? 'text-[#4FD1FF] drop-shadow-[0_0_8px_rgba(79,209,255,0.5)]' 
        : 'text-text-secondary hover:text-white'
    }`}
  >
    <span className="relative inline-block">
      {children}
      <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF] transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </span>
  </a>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [isAgbOpen, setIsAgbOpen] = useState(false);

  const sections = [
    { id: 'usp', title: 'USP' },
    { id: 'benefit', title: 'Vorteile' },
    { id: 'leistung', title: 'Leistung' },
    { id: 'case-study', title: 'Case Study' },
    { id: 'testimonials', title: 'Kunden' },
    { id: 'download', title: 'PDF' },
    { id: 'about-me', title: 'Über Mich' },
    { id: 'faq', title: 'FAQ' },
    { id: 'contact', title: 'Kontakt' },
    { id: 'agb', title: 'AGB' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    
    if (targetId === 'glossary') {
      setIsGlossaryOpen(true);
      setIsOpen(false);
      return;
    }

    if (targetId === 'agb') {
      setIsAgbOpen(true);
      setIsOpen(false);
      return;
    }

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu on click
      }
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer group">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 transition-transform duration-300">
                  <defs>
                    <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4FD1FF">
                        <animate attributeName="stop-color" values="#4FD1FF; #2F80FF; #4FD1FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#2F80FF">
                        <animate attributeName="stop-color" values="#2F80FF; #4FD1FF; #2F80FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="url(#navLogoGrad)" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="text-2xl font-black tracking-tight brand-gradient">
                  VisibilityLab
                </span>
              </a>
            </div>
            <div className="flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative z-50 inline-flex items-center justify-center p-2 rounded-full text-text-secondary hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <span className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Moved outside motion.nav to avoid transform clipping */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-bg-primary flex flex-col items-center overflow-y-auto"
      >
        {/* Close Button for Mobile Menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-text-secondary hover:text-white transition-colors"
          aria-label="Menü schließen"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            <span className="block w-6 h-0.5 bg-current absolute rotate-45"></span>
            <span className="block w-6 h-0.5 bg-current absolute -rotate-45"></span>
          </div>
        </button>

        <div className="w-full max-w-sm px-6 pt-32 pb-12 flex flex-col gap-2">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: isOpen ? i * 0.05 : 0 }}
            >
              <a
                href={`#${section.id}`}
                onClick={handleScroll}
                className={`block text-xl font-bold text-center py-3 transition-all duration-300 rounded-xl ${
                  activeSection === section.id 
                    ? 'text-white bg-white/5 shadow-[0_0_20px_rgba(79,209,255,0.1)] border border-[#4FD1FF]/20' 
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={activeSection === section.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF]' : ''}>
                  {section.title}
                </span>
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              x: isOpen ? 0 : -20 
            }}
            transition={{ duration: 0.3, delay: isOpen ? sections.length * 0.05 : 0 }}
            className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1"
          >
            <button 
              onClick={() => { setIsGlossaryOpen(true); setIsOpen(false); }}
              className="block w-full text-lg font-medium text-center py-3 text-text-muted hover:text-[#4FD1FF] transition-colors hover:bg-white/5 rounded-xl"
            >
              Glossar
            </button>
            <div className="flex justify-center gap-4 mt-2">
              <button 
                onClick={() => { setIsImpressumOpen(true); setIsOpen(false); }}
                className="text-sm text-text-muted hover:text-white transition-colors py-2 px-3"
              >
                Impressum
              </button>
              <button 
                onClick={() => { setIsDatenschutzOpen(true); setIsOpen(false); }}
                className="text-sm text-text-muted hover:text-white transition-colors py-2 px-3"
              >
                Datenschutz
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {isGlossaryOpen && (
        <Modal title="Glossar" onClose={() => setIsGlossaryOpen(false)}>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white">SEO Search Engine Optimization</h4>
              <p className="text-sm">Optimierung von Webseiten für Suchmaschinen wie Google, um in den organischen Suchergebnissen höher gerankt zu werden.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">GEO Generative Engine Optimization</h4>
              <p className="text-sm">Optimierung von Inhalten speziell für KI-gestützte Suchmaschinen und Antwortmaschinen wie ChatGPT oder Google Gemini.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">LLM Large Language Model</h4>
              <p className="text-sm">Große Sprachmodelle, die auf riesigen Datenmengen trainiert wurden, um menschenähnlichen Text zu verstehen und zu generieren.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">RAG Retrieval Augmented Generation</h4>
              <p className="text-sm">Eine Technik, die LLMs mit externen, aktuellen Datenquellen verbindet, um präzisere und faktenbasierte Antworten zu liefern.</p>
            </div>
          </div>
        </Modal>
      )}

      {isImpressumOpen && (
        <Modal title="Impressum" onClose={() => setIsImpressumOpen(false)}>
          <ImpressumContent />
        </Modal>
      )}

      {isDatenschutzOpen && (
        <Modal title="Datenschutz" onClose={() => setIsDatenschutzOpen(false)}>
          <DatenschutzContent />
        </Modal>
      )}

      {isAgbOpen && (
        <Modal title="AGB" onClose={() => setIsAgbOpen(false)}>
          <AgbContent />
        </Modal>
      )}
    </>
  );
};
