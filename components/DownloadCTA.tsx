import React from 'react';
import { FileDown } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 px-6 relative" aria-labelledby="download-title">
      <ParticlesBackground color="#4FD1FF" count={20} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B1020]/80 via-[#4FD1FF]/10 to-[#0B1020]/80 backdrop-blur-xl border border-border shadow-[0_0_50px_rgba(79,209,255,0.1)] p-12 rounded-[2.5rem] text-center relative overflow-hidden z-10 node-glow"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4FD1FF] to-transparent opacity-50"></div>
        
        <h2 id="download-title" className="text-3xl md:text-5xl font-black mb-6 text-white">
          Das VisibilityLab System im Detail
        </h2>
        
        <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Eine kompakte Übersicht für Entscheider: Wie unser KI-SEO-System funktioniert und welche Vorteile es bietet.
        </p>
        
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2F80FF] hover:bg-[#4FD1FF] text-white font-bold shadow-[0_0_30px_rgba(47,128,255,0.3)] transition-all group active:scale-95 focus-visible:outline-white"
          aria-label="System-PDF anfordern"
        >
          <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          <span>System-PDF anfordern</span>
        </a>
      </motion.div>
    </section>
  );
};
