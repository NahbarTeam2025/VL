import React from 'react';
import { Target, GitMerge, BarChart, Info } from 'lucide-react';

const Tooltip = ({ text, content }: { text: string; content: string }) => (
  <span className="group relative inline-block cursor-help">
    <span className="border-b border-dotted border-accent-secondary/50 hover:border-accent-secondary hover:text-accent-secondary transition-colors flex items-center gap-1">
      {text}
      <Info className="w-3 h-3 opacity-50 group-hover:opacity-100" />
    </span>
    <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-bg-secondary border border-accent-primary/30 rounded-lg text-xs text-text-primary shadow-xl z-50 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
      {content}
      <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-accent-primary/30"></span>
    </span>
  </span>
);

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wissenschaft statt Voodoo.</h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Unsere Methodik basiert auf bewährten informatischen und linguistischen Prinzipien. 
              Wir überlassen nichts dem Zufall.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <GitMerge className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Tooltip 
                      text="Hub-and-Spoke Modell" 
                      content="Eine zentrale Hauptseite (Hub) verknüpft mehrere thematisch tiefe Detailseiten (Spokes). Dies strukturiert Expertenwissen für Suchmaschinen optimal."
                    />
                  </h3>
                  <p className="text-text-secondary">
                    Wir erstellen eine zentrale "Hub"-Seite für ein Hauptthema und verknüpfen sie intelligent mit spezifischen "Spoke"-Artikeln. 
                    Dies signalisiert Suchmaschinen tiefe Expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Tooltip 
                      text="WDF*IDF Analyse" 
                      content="Within Document Frequency * Inverse Document Frequency. Eine Formel, die berechnet, welche Begriffe in welcher Häufigkeit vorkommen müssen, um thematische Relevanz zu beweisen."
                    />
                  </h3>
                  <p className="text-text-secondary">
                    Nicht nur Keyword-Dichte, sondern semantische Relevanz. Wir analysieren, welche Begriffe im Kontext Ihres Themas bei den Top-Rankings vorkommen und optimieren darauf.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Tooltip 
                      text="Suchintention & GEO" 
                      content="Erkennung, ob der Nutzer kaufen, wissen oder navigieren will. GEO (Generative Engine Optimization) optimiert Inhalte speziell für KI-gestützte Antworten."
                    />
                  </h3>
                  <p className="text-text-secondary">
                    Wir verstehen, was der Nutzer *wirklich* will – ob Kauf, Info oder Navigation. Zudem optimieren wir für Generative Engine Optimization (GEO), die Zukunft der Suche.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full"></div>
             <div className="relative bg-bg-primary border border-border rounded-2xl p-6 shadow-2xl">
               <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                  <span className="text-sm font-mono text-text-muted">strategie_matrix.json</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
               </div>
               <div className="space-y-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-purple-400 w-24">Cluster:</span>
                    <span className="text-text-primary">"Finanzsoftware KMU"</span>
                  </div>
                  <div className="flex">
                    <span className="text-blue-400 w-24">Type:</span>
                    <span className="text-text-primary">Hub_Page</span>
                  </div>
                  <div className="flex">
                    <span className="text-emerald-400 w-24">Score:</span>
                    <span className="text-text-primary">98/100 (WDF*IDF)</span>
                  </div>
                  <div className="pl-4 border-l border-border mt-4 pt-2">
                    <div className="text-text-muted mb-2">// Linked Spokes</div>
                    <div className="text-accent-secondary">→ "Buchhaltung automatisieren"</div>
                    <div className="text-accent-secondary">→ "Rechnungsprogramm Vergleich 2024"</div>
                    <div className="text-accent-secondary">→ "GoBD Konformität Checkliste"</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};