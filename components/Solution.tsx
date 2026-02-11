import React from 'react';
import { CheckCircle2, Activity, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-32 bg-bg-secondary/40 border-y border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-500/20">
            <Zap className="w-3 h-3" />
            Engineering Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
            Automatisierte <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">Themen-Autorität.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed font-light">
            Wir ersetzen isolierte Optimierung durch ein <span className="text-white font-medium">ganzheitliches Ökosystem</span>. VisibilityLab verwandelt Ihre Website in einen Magneten für qualifizierten Traffic, indem es semantische Netze knüpft, die KI-Modelle und klassische Algorithmen gleichermaßen verstehen.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Topical Mapping", d: "Mathematische Erfassung Ihrer Nische." },
              { t: "AI Integration", d: "Optimiert für Perplexity & SearchGPT." },
              { t: "Cluster Engines", d: "Skalierbare Content-Architekturen." },
              { t: "Semantic Depth", d: "Nachgewiesene Relevanz durch WDF*IDF." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="mt-1 p-1 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 tracking-tight">{item.t}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full order-1 lg:order-2 relative group">
          <div className="relative p-px bg-gradient-to-br from-blue-500/40 via-white/10 to-purple-500/40 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-bg-primary/90 backdrop-blur-2xl rounded-[2.45rem] p-6 md:p-8 relative overflow-hidden">
              {/* Scanline effect */}
              <div className="absolute top-0 inset-x-0 h-20 w-full bg-gradient-to-b from-blue-500/10 to-transparent animate-beam pointer-events-none opacity-50"></div>
              
              <div className="flex flex-col gap-8 h-full relative z-10">
                 {/* Header */}
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <Activity className="w-6 h-6 text-blue-400 animate-pulse" />
                        </div>
                        <div>
                            <span className="text-xs text-text-muted font-black uppercase tracking-widest">SYSTEM MONITOR</span>
                            <div className="text-sm text-white font-mono flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span>ACTIVE</span>
                            </div>
                        </div>
                    </div>
                    <span className="text-[10px] text-text-muted font-mono self-end whitespace-nowrap">VISIBILITY_CORE v3 · LIVE ANALYSIS</span>
                 </div>

                 {/* Progress Bar */}
                 <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                        <span>RELEVANCE SCORE</span>
                        <span className="text-white">84 %</span>
                    </div>
                    <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[84%]" style={{ animation: `pulse 2s infinite` }}></div>
                    </div>
                 </div>

                 {/* Secondary Metrics */}
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Topical Coverage</span>
                        <p className="text-2xl font-black text-white tracking-tighter mt-1">92 %</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Entity Density</span>
                        <p className="text-2xl font-black text-white tracking-tighter mt-1 leading-tight">38 <span className="text-sm font-normal text-text-muted">geprüfte Entitäten</span></p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Content Nodes</span>
                        <p className="text-2xl font-black text-white tracking-tighter mt-1 leading-tight">14 <span className="text-sm font-normal text-text-muted">aktive Cluster</span></p>
                    </div>
                 </div>

                 {/* Technical Details Footer */}
                 <div className="border-t border-white/5 pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <span className="text-[9px] text-text-muted uppercase font-bold tracking-wider">WDF*IDF Balance</span>
                        <p className="text-sm font-semibold text-emerald-400 mt-1">optimal</p>
                    </div>
                    <div>
                        <span className="text-[9px] text-text-muted uppercase font-bold tracking-wider">Internal Link Depth</span>
                        <p className="text-sm font-semibold text-white mt-1">2.1</p>
                    </div>
                    <div>
                        <span className="text-[9px] text-text-muted uppercase font-bold tracking-wider">Semantic Consistency</span>
                        <p className="text-sm font-semibold text-emerald-400 mt-1">high</p>
                    </div>
                    <div>
                        <span className="text-[9px] text-text-muted uppercase font-bold tracking-wider">Latency</span>
                        <p className="text-sm font-semibold text-white mt-1">12 ms</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative floating dots */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/20 blur-xl rounded-full animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 blur-xl rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};