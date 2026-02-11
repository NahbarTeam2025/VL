import React from 'react';
import { Search, Compass, PenTool, Check } from 'lucide-react';

export const Agents: React.FC = () => {
  const agents = [
    {
      id: 1,
      title: "Auditor",
      role: "Analyse-Agent",
      desc: "Vollständiger Scan Ihres Marktes. Erkennt Lücken, die Mitbewerber übersehen.",
      icon: Search,
      color: "text-blue-400"
    },
    {
      id: 2,
      title: "Architekt",
      role: "Strategie-Agent",
      desc: "Entwickelt Hub-and-Spoke Architekturen für maximale Themen-Autorität.",
      icon: Compass,
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "Redakteur",
      role: "Content-Agent",
      desc: "Produziert wissenschaftlich optimierten Content für KI- und klassische Suche.",
      icon: PenTool,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="agents" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Das Triaden-System.</h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg font-light">
            Drei spezialisierte Einheiten, die Ihre Sichtbarkeit algorithmisch absichern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="glass-card p-10 rounded-[2.5rem]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <agent.icon className={`w-7 h-7 ${agent.color}`} />
              </div>
              
              <div className="mb-6">
                <span className={`text-[10px] font-black uppercase tracking-widest ${agent.color}`}>{agent.role}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{agent.title}</h3>
              </div>
              
              <p className="text-text-secondary mb-8 leading-relaxed font-light">
                {agent.desc}
              </p>
              
              <div className="space-y-3">
                {[1, 2].map(i => (
                  <div key={i} className="flex items-center gap-3 text-xs text-text-muted">
                    <Check className={`w-3.5 h-3.5 ${agent.color}`} />
                    <span>Optimized Workflow Unit {i}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};