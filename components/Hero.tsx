import React from 'react';
import { ShieldCheck, Award, Zap } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { NeuralNetwork } from './NeuralNetwork';
import { motion } from 'framer-motion';

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
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-12 bg-bg-primary"
      aria-label="Hero Sektion"
    >
      <ParticlesBackground color="#4FD1FF" count={50} speed={0.3} />

      {/* Background Elements for Wow Factor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] opacity-80"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content F-Pattern */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full text-left mt-4 lg:-mt-8"
          >
            <h1 className="text-[clamp(1.75rem,8vw,4.5rem)] font-extrabold tracking-tight leading-[1.15] mb-4 md:mb-6 text-white lg:whitespace-nowrap">
              Was macht ein gutes <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF]">SEO KI System</span> aus?
            </h1>
            
            <p className="text-[#E6ECFF] text-base md:text-xl max-w-2xl font-light leading-relaxed mb-6 md:mb-8">
              Ein gutes SEO KI System verbindet klare Themenstruktur, echte Daten und automatische Lernprozesse.
            </p>

            <ul className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-10 text-text-secondary text-sm md:text-base">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#4FD1FF]" />
                <span><strong>Effizienzsteigerung:</strong> Automatisierte Prozesse sparen wertvolle Zeit.</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#4FD1FF]" />
                <span><strong>Kosten senken:</strong> Weniger manueller Aufwand, mehr Output.</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#4FD1FF]" />
                <span><strong>Sichtbarkeit:</strong> Dominieren Sie Suchmaschinen und KI-Antworten.</span>
              </li>
            </ul>
            
            <div className="flex flex-col gap-2 mb-6 md:mb-10 w-fit">
              <a 
                href="#contact"
                onClick={handleScroll}
                className="relative overflow-hidden w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold text-base md:text-lg shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 inline-flex items-center justify-center group active:scale-95 whitespace-nowrap focus-visible:outline-white backdrop-blur-sm border border-white/10"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
                <span className="relative z-10">Analyse kostenlos starten</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.6 }}
                className="flex items-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-[#000000] to-[#111111] rounded-full border border-[#4FD1FF]/30 shadow-[0_0_15px_rgba(79,209,255,0.15)]"
              >
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#4FD1FF]/10 flex items-center justify-center border border-[#4FD1FF]/20">
                  <ShieldCheck className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#4FD1FF]" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">DSGVO Konform</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.7 }}
                className="flex items-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-[#000000] to-[#111111] rounded-full border border-[#F59E0B]/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
              >
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20">
                  <Award className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#F59E0B]" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Marktführer</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.8 }}
                className="flex items-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-[#000000] to-[#111111] rounded-full border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                  <Zap className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#10B981]" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">High-Performance</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.9 }}
                className="flex items-center gap-1.5 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-br from-[#000000] to-[#111111] rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Lokal gehostet</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image / Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square md:aspect-[4/3] pointer-events-none"
          >
            <div 
              className="absolute -inset-[50%] w-[200%] h-[200%]"
              style={{
                maskImage: 'radial-gradient(circle closest-side at center, black 20%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(circle closest-side at center, black 20%, transparent 90%)'
              }}
            >
              <NeuralNetwork />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};