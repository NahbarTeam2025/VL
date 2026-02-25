import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

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
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-24"
      aria-label="Hero Sektion"
    >
      <ParticlesBackground color="#60a5fa" count={50} speed={0.3} />
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505]/95 z-10"></div>
        <div className="absolute inset-0 bg-black/90 z-0"></div>
      </div>

      {/* Top/Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fadeInUp mt-8 sm:mt-16">
        <div className="relative mb-6 sm:mb-10">
          <div 
            className="absolute -inset-16 bg-blue-600/20 blur-[80px] rounded-full -z-10 animate-logo-glow"
          ></div>
          <span className="inline-block text-5xl md:text-8xl font-black tracking-tighter brand-gradient">
             VisibilityLab
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 sm:mb-8">
          AI-DRIVEN VISIBILITY FRAMEWORK
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 sm:mb-8">
          <span className="text-white block mb-2">Digitale Autorität.</span>
          <span className="inline-block gradient-text-multi sm:whitespace-nowrap">
            Systematisch konstruiert.
          </span>
        </h1>

        <p className="text-[#E0E0E0] text-base md:text-xl max-w-3xl font-light leading-relaxed mb-8 sm:mb-10">
          VisibilityLab kombiniert klare Struktur, echte Daten und autonome KI-Agenten, <br className="hidden md:block" />
          um nachhaltige Sichtbarkeit und thematische Autorität aufzubauen.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-20 w-full px-6 flex flex-col items-center gap-6 sm:gap-10">
        <div className="flex justify-center w-full max-w-md mx-auto">
          <a 
            href="#contact"
            onClick={handleScroll}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-base shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-3 group active:scale-95 whitespace-nowrap focus-visible:outline-white"
          >
            Kostenlose Analyse starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Hint */}
        <a href="#market-inefficiency" onClick={handleScroll} className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors duration-300 cursor-pointer focus-visible:outline-white mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};