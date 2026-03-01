import React from 'react';
import { FileDown, CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 relative" aria-labelledby="download-title">
      <ParticlesBackground color="#4FD1FF" count={20} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-[#000000]/80 via-[#4FD1FF]/10 to-[#000000]/80 backdrop-blur-xl border border-[#4FD1FF]/60 shadow-[0_0_50px_rgba(79,209,255,0.2)] p-6 sm:p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden z-10 node-glow"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4FD1FF] to-transparent opacity-50"></div>
        
        <div className="text-center mb-10">
          <h2 id="download-title" className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-white leading-tight tracking-tight">
            Das VisibilityLab Strategie-Briefing: Die Entscheidungsgrundlage für dein Team-Meeting.
          </h2>
          
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Eine kompakte Entscheidungsgrundlage für Geschäftsführer und Marketingverantwortliche: Aufbau, Logik und strategischer Nutzen unseres KI-SEO-Systems. Ideal zur internen Diskussion auf Geschäftsführungs- oder Marketingleitungsebene.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Was Dich in der PDF erwartet</h3>
          <ul className="space-y-4">
            {[
              "Wie sich KI-Sichtbarkeit von klassischem SEO unterscheidet",
              "Der strukturelle Aufbau des VisibilityLab Systems",
              "Welche Voraussetzungen intern erfüllt sein sollten",
              "Typische Fehler, die Unternehmen aktuell machen",
              "Konkrete nächste Schritte zur Umsetzung"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD1FF] shrink-0 mt-0.5" />
                <span className="text-text-secondary text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 group active:scale-95 focus-visible:outline-white backdrop-blur-sm border border-white/10 mb-4"
            aria-label="System-PDF anfordern"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
            <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform relative z-10" />
            <span className="relative z-10">System-PDF anfordern</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
