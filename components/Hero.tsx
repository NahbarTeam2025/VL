import React from 'react';
import { ShieldCheck, Award, Zap } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-24 bg-bg-primary"
      aria-label="Hero Sektion"
    >
      <ParticlesBackground color="#4FD1FF" count={50} speed={0.3} />

      {/* Background Elements for Wow Factor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-subtle opacity-[0.03]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#4FD1FF]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B1020_100%)] opacity-80"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content F-Pattern */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#4FD1FF] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
              VisibilityLab System
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Was macht ein gutes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF]">SEO KI System</span> aus?
            </h1>
            
            <p className="text-[#E6ECFF] text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10">
              Ein gutes SEO KI System verbindet klare Themenstruktur, echte Daten und automatische Lernprozesse.
            </p>
            
            <div className="flex flex-col gap-2 mb-10 w-fit">
              <a 
                href="#contact"
                onClick={handleScroll}
                className="relative overflow-hidden w-full px-8 py-4 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold text-lg shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all duration-500 inline-flex items-center justify-center group active:scale-95 whitespace-nowrap focus-visible:outline-white"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
                <span className="relative z-10">Analyse kostenlos starten</span>
              </a>
              <p className="text-[10px] text-text-secondary/60 pl-1 text-center sm:text-left">
                * Ergebnisse können je nach individueller Ausgangslage variieren.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.6 }}
                className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-[#0B1020] to-[#1a2333] rounded-full border border-[#4FD1FF]/30 shadow-[0_0_15px_rgba(79,209,255,0.15)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#4FD1FF]/10 flex items-center justify-center border border-[#4FD1FF]/20">
                  <ShieldCheck className="w-4 h-4 text-[#4FD1FF]" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">DSGVO Konform</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.7 }}
                className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-[#0B1020] to-[#1a2333] rounded-full border border-[#F59E0B]/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Marktführer</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.8 }}
                className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-[#0B1020] to-[#1a2333] rounded-full border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                  <Zap className="w-4 h-4 text-[#10B981]" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">High-Performance</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="absolute -inset-4 bg-[#4FD1FF]/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/seed/neural-network/800/600.webp" 
              alt="Visualisierung neuronaler Netzwerke und KI-Datenströme" 
              width="800"
              height="600"
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};