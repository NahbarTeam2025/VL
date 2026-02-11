import React from 'react';
import { Box, FileText, Network } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="market-inefficiency" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <div className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-4">
            MARKET REALITY
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Warum klassische SEO-Ansätze ihre Wirkung verlieren.
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl font-light mx-auto">
            Suchmaschinen und KI-Modelle bewerten heute Zusammenhänge, nicht Einzelmaßnahmen. Wer keine strukturierte Themenautorität aufbaut, bleibt unsichtbar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Box,
              title: "Isolierte Keywords",
              desc: "Einzelne Keywords ohne thematischen Kontext erzeugen keine Autorität. Moderne Suchsysteme bewerten Themenräume, nicht Begriffe."
            },
            {
              icon: FileText,
              title: "Austauschbarer Content",
              desc: "Inhalte ohne strukturelle Tiefe und semantische Einbettung bleiben generisch. Relevanz entsteht durch systematische Abdeckung, nicht durch Textmenge."
            },
            {
              icon: Network,
              title: "Fehlende Architektur",
              desc: "Ohne klare Content-Architektur kann Wissen nicht wirken. Interne Verlinkung, Rollen und Hierarchie entscheiden über Sichtbarkeit."
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card group p-10 rounded-3xl">
              <div className="w-14 h-14 bg-blue-500/5 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 border border-blue-500/10 transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};