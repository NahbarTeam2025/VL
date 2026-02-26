import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';

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
    className={`group relative transition-all duration-300 py-2 px-3 text-sm font-medium block w-full text-center md:text-left md:inline-block md:w-auto ${
      isActive 
        ? 'text-[#4FD1FF] drop-shadow-[0_0_8px_rgba(79,209,255,0.5)]' 
        : 'text-text-secondary hover:text-white'
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF] transition-transform duration-300 hidden md:block ${
      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`}></span>
  </a>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

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
    { id: 'agb-sitemap', title: 'AGB Sitemap' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    
    if (targetId === 'glossary') {
      setIsGlossaryOpen(true);
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
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
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
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary focus:ring-[#4FD1FF]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} bg-bg-primary border-t border-border`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {sections.map((section) => (
              <NavLink 
                key={section.id} 
                href={`#${section.id}`} 
                onClick={handleScroll}
                isActive={activeSection === section.id}
              >
                {section.title}
              </NavLink>
            ))}
            <button 
              onClick={() => { setIsGlossaryOpen(true); setIsOpen(false); }}
              className="relative text-text-primary hover:text-[#4FD1FF] transition-colors py-2 px-3 text-sm font-medium block w-full text-center"
            >
              Glossar
            </button>
          </div>
        </div>
      </motion.nav>

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
    </>
  );
};
