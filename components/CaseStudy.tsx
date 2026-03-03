import React from 'react';
import { ArrowRight, SearchX, Network, TrendingUp, Bot, Database, Link2Off, Link2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const CaseStudy: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="case-study" className="py-20 md:py-24 bg-bg-primary relative overflow-hidden">
      <ParticlesBackground color="#2F80FF" count={40} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 relative"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4FD1FF] bg-[#4FD1FF]/10 px-3 py-1 rounded-full border border-[#4FD1FF]/20">Case Study</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 mt-6 text-text-head leading-tight">Vom digitalen Schatten zur regionalen Instanz: Der Falkenberg-Blueprint.</h2>
            <p className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto font-light">
              Wie das VisibilityLab System durch Topical Authority und KI-optimierte Datenstrukturen eine Stadtplattform zur regionalen Instanz skaliert.
            </p>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#000000]/80 via-[#2F80FF]/10 to-[#000000]/80 [.light_&]:from-white [.light_&]:via-[#f0f9ff] [.light_&]:to-white backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-[#4FD1FF]/60 [.light_&]:border-blue-200 shadow-[0_0_40px_rgba(79,209,255,0.2)] [.light_&]:shadow-xl text-text-primary node-glow"
          >
            <div className="flex flex-col gap-10 mb-10">
              {/* Status Quo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-head mb-3">Status Quo</h3>
                  <p className="text-text-secondary text-sm leading-relaxed space-y-2">
                    <span className="block">Die Stadt Falkenberg/Elster hatte eine klassische Website ohne klare Themenstruktur. Wichtige Inhalte waren vorhanden, aber nicht logisch miteinander verknüpft.</span>
                    <span className="block mt-2">Suchmaschinen und KI-Systeme konnten die Relevanz für zentrale lokale Themen wie den Kiebitz-See oder touristische Angebote nicht eindeutig erkennen. Die digitale Sichtbarkeit war gering. Informationen erreichten Bürger und Besucher nur eingeschränkt.</span>
                  </p>
                </div>
                <div className="relative bg-white/5 [.light_&]:bg-slate-50 border border-white/10 [.light_&]:border-slate-200 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                  <div className="relative z-10 flex items-center justify-center gap-4 opacity-60 [.light_&]:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-white/10 [.light_&]:bg-white flex items-center justify-center border border-white/20 [.light_&]:border-slate-200 shadow-sm">
                      <Database className="w-6 h-6 text-white/50 [.light_&]:text-slate-400" />
                    </div>
                    <Link2Off className="w-6 h-6 text-red-400/50 [.light_&]:text-red-500" />
                    <div className="w-12 h-12 rounded-full bg-white/10 [.light_&]:bg-white flex items-center justify-center border border-white/20 [.light_&]:border-slate-200 shadow-sm">
                      <SearchX className="w-6 h-6 text-white/50 [.light_&]:text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Unser Ansatz */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-head mb-3">Unser Ansatz</h3>
                  <p className="text-text-secondary text-sm leading-relaxed space-y-2">
                    <span className="block">Wir entwickelten eine klare Themenarchitektur. Inhalte wurden neu strukturiert, logisch miteinander verbunden und semantisch aufgebaut.</span>
                    <span className="block mt-2">Wichtige Themen erhielten zentrale Hub-Seiten. Unterseiten wurden strategisch angebunden. Strukturierte Daten verbesserten die maschinelle Lesbarkeit.</span>
                    <span className="block mt-2">Die Website wurde so optimiert, dass sowohl klassische Suchmaschinen als auch KI-Systeme Inhalte eindeutig verstehen konnten.</span>
                  </p>
                </div>
                <div className="relative bg-gradient-to-br from-[#2F80FF]/10 to-transparent [.light_&]:bg-blue-50 border border-[#4FD1FF]/30 [.light_&]:border-blue-200 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-subtle opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4FD1FF]/5 to-transparent"></div>
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4FD1FF]/20 [.light_&]:bg-blue-600/10 flex items-center justify-center border border-[#4FD1FF]/50 [.light_&]:border-blue-400 shadow-[0_0_15px_rgba(79,209,255,0.3)]">
                      <Network className="w-6 h-6 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    </div>
                    <Link2 className="w-6 h-6 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    <div className="w-12 h-12 rounded-full bg-[#2F80FF]/20 [.light_&]:bg-blue-600/10 flex items-center justify-center border border-[#2F80FF]/50 [.light_&]:border-blue-400 shadow-[0_0_15px_rgba(47,128,255,0.3)]">
                      <Bot className="w-6 h-6 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Das messbare Ergebnis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-head mb-3">Das messbare Ergebnis</h3>
                  <p className="text-text-secondary text-sm leading-relaxed space-y-2">
                    <strong className="block text-lg text-[#4FD1FF]">1.800 % mehr organische Sichtbarkeit in nur 6 Monaten.</strong>
                    <span className="block mt-2">Basierend auf der messbaren Entwicklung des Sichtbarkeitsindex im Analysezeitraum.</span>
                    <span className="block mt-2">Deutlich bessere Rankings für zentrale lokale Suchanfragen. Spürbar höhere Interaktion von Bürgern und Besuchern.</span>
                    <span className="block mt-2">Die Stadt wurde digital als thematische Autorität wahrgenommen.</span>
                  </p>
                </div>
                <div className="relative bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 [.light_&]:from-blue-600/10 [.light_&]:to-blue-600/20 border border-[#4FD1FF]/50 [.light_&]:border-blue-300 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(79,209,255,0.2)] [.light_&]:shadow-xl">
                  <div className="absolute inset-0 bg-grid-subtle opacity-40"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-[#4FD1FF] [.light_&]:text-blue-600 mb-2 drop-shadow-[0_0_8px_rgba(79,209,255,0.8)]" />
                    <div className="text-3xl font-black text-white [.light_&]:text-blue-900 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      +1.800%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <blockquote className="relative bg-white/5 [.light_&]:bg-blue-50/50 p-8 rounded-2xl border border-white/10 [.light_&]:border-blue-100">
                <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-[#4FD1FF] opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl italic text-text-primary mb-6 relative z-10">
                  "Dank des VisibilityLab Systems konnten wir unsere digitale Reichweite massiv steigern. Die KI-gestützte Strategie hat uns geholfen, genau die Themen zu besetzen, die für unsere Bürger und Touristen relevant sind. Ein echter Gamechanger für <span className="whitespace-nowrap">Falkenberg/Elster</span>."
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#15305b] border border-[#4FD1FF]/30 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4FD1FF]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h8v4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-text-head">Stadtverwaltung</div>
                    <div className="text-sm text-text-secondary whitespace-nowrap">Falkenberg/Elster</div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="mt-10 text-center">
              <p className="text-text-secondary text-sm md:text-base font-medium">
                Die Methodik lässt sich auf andere Branchen und Märkte übertragen.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};