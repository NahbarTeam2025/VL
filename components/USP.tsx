import React from 'react';
import { Check, X } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const USP: React.FC = () => {
  return (
    <section id="usp" className="py-20 md:py-24 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#4FD1FF" count={30} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white leading-tight">
            Warum klassisches SEO allein nicht mehr ausreicht.
          </h2>
          <p className="text-text-secondary text-base max-w-3xl mx-auto leading-relaxed space-y-3 flex flex-col">
            <span>KI-Suchsysteme wie GPT, Gemini oder Perplexity verändern gerade, wie Informationen gefunden werden. Unternehmen, die ihre Inhalte nicht strukturiert und KI-lesbar aufbauen, verlieren schrittweise digitale Reichweite. Viele Unternehmen bemerken diesen Verlust erst, wenn Anfragen stagnieren oder Wettbewerber deutlich präsenter erscheinen.</span>
            <span>Während klassisches SEO allein nicht mehr ausreicht, kombinieren wir strategische Themenarchitektur, strukturierte Daten und KI-Optimierung zu einem ganzheitlichen SEO KI System.</span>
            <strong className="text-white font-medium">So sicherst du dir nachhaltige Sichtbarkeit – in Suchmaschinen und in KI-Antworten.</strong>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-white font-medium text-lg">
            Der Unterschied liegt nicht in einzelnen Maßnahmen – sondern im strukturellen Ansatz.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)]"
        >
          <div className="grid grid-cols-2 bg-[#000000]/50 border-b border-[#4FD1FF]/20">
            <div className="p-3 md:p-6 text-center font-bold text-text-secondary text-sm md:text-base">Traditionelles SEO</div>
            <div className="p-3 md:p-6 text-center font-bold text-[#4FD1FF] bg-[#4FD1FF]/5 text-sm md:text-base">VisibilityLab System</div>
          </div>
          
          {[
            { old: "Fokus auf einzelne Keywords", new: "Aufbau von Topical Authority" },
            { old: "Manuelle Texterstellung", new: "KI-gestützte Content-Skalierung" },
            { old: "Optimierung für 10 blaue Links", new: "Optimierung für GEO und AEO" },
            { old: "Reaktive Themenwahl", new: "Datenbasierte Themenanalyse" },
            { old: "Isolierte Blogbeiträge", new: "Vernetztes Hub-and-Spoke Modell" }
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-2 border-b border-border/50 last:border-0 hover:bg-white/[0.02] transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4FD1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="p-3 md:p-6 flex items-center gap-2 md:gap-3 text-text-secondary group-hover:text-white transition-colors relative z-10">
                <X className="w-4 h-4 md:w-5 md:h-5 text-red-400 shrink-0" />
                <span className="text-xs md:text-base">{row.old}</span>
              </div>
              <div className="p-3 md:p-6 flex items-center gap-2 md:gap-3 text-white bg-[#4FD1FF]/5 node-glow group-hover:bg-[#4FD1FF]/10 transition-colors relative z-10">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#4FD1FF] shrink-0" />
                <span className="text-xs md:text-base font-medium">{row.new}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-text-secondary text-sm md:text-base mb-4">
            Ob dein Unternehmen bereits KI-ready ist, zeigt unser kurzer Visibility-Check.
          </p>
          <a 
            href="#contact"
            className="relative overflow-hidden inline-flex w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold text-base shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 items-center justify-center group active:scale-95 whitespace-nowrap focus-visible:outline-white backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
            <span className="relative z-10">Visibility prüfen</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};