import React from 'react';
import { Check, X } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const USP: React.FC = () => {
  return (
    <section id="usp" className="py-24 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#4FD1FF" count={30} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Warum klassische SEO 2026 nicht mehr ausreicht
          </h2>
          <p className="text-text-secondary text-lg max-w-4xl mx-auto leading-relaxed">
            KI-Antwortmaschinen verändern die Suche grundlegend. Während klassische SEO oft nur auf isolierte Keywords und Backlinks setzt, analysiert unser KI-System semantische Zusammenhänge in Echtzeit und baut eine echte thematische Autorität auf. 
            <br/><br/>
            Wir nutzen fortschrittliche Algorithmen, um Inhalte so zu strukturieren, dass sie von Google Gemini, ChatGPT und Perplexity nicht nur gefunden, sondern als primäre Antwortquelle bevorzugt werden. Das VisibilityLab System transformiert Ihre Website von einer einfachen Informationsquelle zu einem vernetzten Wissensgraphen, der von KI-Modellen als hochrelevant eingestuft wird.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-morphism rounded-3xl overflow-hidden border border-border"
        >
          <div className="grid grid-cols-2 bg-bg-primary/50 border-b border-border">
            <div className="p-3 md:p-6 text-center font-bold text-text-secondary text-sm md:text-base">Traditionelle SEO</div>
            <div className="p-3 md:p-6 text-center font-bold text-[#4FD1FF] bg-[#4FD1FF]/5 text-sm md:text-base">VisibilityLab System</div>
          </div>
          
          {[
            { old: "Fokus auf einzelne Keywords", new: "Aufbau von Topical Authority" },
            { old: "Manuelle Texterstellung", new: "KI-gestützte Content-Skalierung" },
            { old: "Optimierung für 10 blaue Links", new: "Optimierung für GEO und AEO" },
            { old: "Bauchgefühl bei der Themenwahl", new: "Datenbasierte WDF*IDF Analysen" },
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
      </div>
    </section>
  );
};