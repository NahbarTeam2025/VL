import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
    <section className="relative hero-viewport flex flex-col items-center justify-evenly pt-24 pb-12 overflow-hidden bg-grid">
      {/* Background Orbs */}
      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] lg:w-[80%] lg:h-[80%] glow-orb pointer-events-none"></div>
      <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] lg:w-[80%] lg:h-[80%] glow-orb pointer-events-none opacity-50"></div>

      {/* Top/Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="relative mb-16">
          <div 
            className="absolute -inset-8 bg-accent-primary animate-logo-glow rounded-full -z-10"
          ></div>
          <span 
            className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-float animate-gradient-pan [background-size:200%_auto]"
          >
             VisibilityLab
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
          AI-DRIVEN VISIBILITY FRAMEWORK
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Digitale Autorität.</span> <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Systematisch konstruiert.</span>
        </h1>

        <p className="text-text-secondary text-base md:text-xl max-w-2xl font-light leading-relaxed">
          VisibilityLab kombiniert klare Struktur, echte Daten und autonome KI-Agenten, um nachhaltige Sichtbarkeit und thematische Autorität aufzubauen.
        </p>
      </div>

      {/* Bottom CTA - Anchored for Mobile "Wow" Effect */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center gap-8">
        <div className="flex justify-center w-full max-w-md mx-auto">
          <a 
            href="#contact"
            onClick={handleScroll}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white font-bold text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-3 group active:scale-95 whitespace-nowrap"
          >
            Kostenlose Analyse starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Hint */}
        <a href="#market-inefficiency" onClick={handleScroll} className="flex flex-col items-center gap-2 text-text-muted opacity-50 hover:text-white transition-colors duration-300 cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};