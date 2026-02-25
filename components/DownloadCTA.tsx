import React from 'react';
import { FileDown } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-20 px-6" aria-labelledby="download-title">
      <div className="max-w-4xl mx-auto glass-morphism p-12 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50"></div>
        
        <h2 id="download-title" className="text-2xl md:text-3xl font-bold mb-6">
          Für Entscheider: Laden Sie jetzt die vollständige Produktübersicht und Methodik als PDF herunter.
        </h2>
        
        <p className="text-text-secondary mb-10 max-w-2xl mx-auto">
          Erhalten Sie exklusive Einblicke in unsere KI-gestützten Workflows und wie wir Themenautorität für Marktführer aufbauen.
        </p>
        
        <button 
          className="neon-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-accent-blue text-accent-blue font-bold hover:bg-accent-blue hover:text-white transition-all group"
          aria-label="Produktübersicht PDF herunterladen"
        >
          <FileDown className="w-5 h-5 group-hover:bounce" />
          <span>Jetzt PDF herunterladen</span>
        </button>
      </div>
    </section>
  );
};
