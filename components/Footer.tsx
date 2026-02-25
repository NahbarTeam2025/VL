import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenImpressum, onOpenDatenschutz }) => {
  const links = [
    { title: 'Problem', href: '#market-inefficiency' },
    { title: 'Lösung', href: '#solution' },
    { title: 'System', href: '#agents' },
    { title: 'Case Study', href: '#case-study' },
    { title: 'Methodik', href: '#methodology' },
    { title: 'Vorteile', href: '#benefits' },
    { title: 'Prozess', href: '#process' },
    { title: 'Über mich', href: '#about' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Kontakt', href: '#contact' }
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
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <ParticlesBackground color="#ffffff" count={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
              <span className="font-bold text-xl brand-gradient">VisibilityLab</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pr-8">
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
                    <a href={link.href} onClick={handleScroll} className="text-sm text-slate-300 hover:text-white transition-colors">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Rechtliches</p>
              <ul className="space-y-3">
                <li><button onClick={onOpenImpressum} className="text-sm text-slate-300 hover:text-white transition-colors text-left">Impressum</button></li>
                <li><button onClick={onOpenDatenschutz} className="text-sm text-slate-300 hover:text-white transition-colors text-left">Datenschutz</button></li>
              </ul>
            </div>
            
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Social</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} VisibilityLab. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};
