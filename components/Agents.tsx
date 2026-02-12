import React from 'react';
import { Search, Compass, PenTool, Check } from 'lucide-react';

export const Agents: React.FC = () => {
  const agents = [
    {
      label: "ANALYSE-AGENT",
      title: "Auditor",
      text: "Identifiziert relevante Themenräume, Wettbewerbslücken und strukturelle Schwächen Ihrer aktuellen Sichtbarkeit.",
      icon: Search,
      color: "text-blue-400",
      features: [
        "Markt- und SERP-Analyse auf Themenebene",
        "Erkennung unbesetzter Autoritätscluster",
        "Priorisierung nach strategischem Impact"
      ]
    },
    {
      label: "STRATEGIE-AGENT",
      title: "Architekt",
      text: "Übersetzt Analyseergebnisse in eine skalierbare Content-Architektur mit klaren Rollen, Hierarchien und Verlinkungslogik.",
      icon: Compass,
      color: "text-purple-400",
      features: [
        "Hub-and-Spoke-Struktur pro Themenraum",
        "Interne Verlinkungs- und Autoritätslogik",
        "Langfristige Skalierungsstrategie"
      ]
    },
    {
      label: "CONTENT-AGENT",
      title: "Redakteur",
      text: "Produziert strukturierten, faktenbasierten Content, der für klassische Suchmaschinen und KI-Systeme gleichermaßen optimiert ist.",
      icon: PenTool,
      color: "text-emerald-400",
      features: [
        "Semantisch präzise Inhalte",
        "Konsistente Themenabdeckung",
        "Optimiert für KI- und Suchsysteme"
      ]
    }
  ];

  return (
    <section id="agents" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Das Triaden-System für algorithmische Autorität.</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Drei spezialisierte Agenten arbeiten synchron, um Themenautorität systematisch aufzubauen, abzusichern und zu skalieren.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {agents.map((agent) => (
              <div key={agent.title} className="glass-card p-8 rounded-[2.5rem] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <agent.icon className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${agent.color}`}>{agent.label}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{agent.title}</h3>
                    </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-6 leading-relaxed font-light flex-grow">
                  {agent.text}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {agent.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-text-muted">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${agent.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};