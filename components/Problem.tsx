import React from 'react';
import { AlertTriangle, XCircle, TrendingDown, ChevronRight } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="market-inefficiency" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Market Inefficiency</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Warum SEO-Alibi-Lösungen <br /><span className="text-text-muted">wertlos geworden sind.</span></h2>
          <p className="text-text-secondary text-xl max-w-2xl font-light">
            Die Zeit der billigen Tricks ist vorbei. Wer nicht strategisch baut, wird von der KI-Evolution aussortiert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: AlertTriangle,
              title: "Keyword-Blindheit",
              desc: "Der Fokus auf einzelne Begriffe ignoriert die semantische Realität von modernen LLMs. Wer nicht clustert, verliert."
            },
            {
              icon: XCircle,
              title: "Toter Content",
              desc: "Generische Texte ohne WDF*IDF-Tiefe erzeugen keine Autorität. Google erkennt substanzlose Inhalte sofort."
            },
            {
              icon: TrendingDown,
              title: "Strukturelles Chaos",
              desc: "Fehlende Architektur verhindert die Indexierung als Experte. Ihr Wissen versinkt in der Bedeutungslosigkeit."
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card group p-10 rounded-3xl hover:border-red-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {item.title}
                <ChevronRight className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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