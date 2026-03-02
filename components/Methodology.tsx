import React from 'react';
import { Target, Search, FileText, Code, Bot, Globe, Sparkles, Cpu, Database } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const Methodology: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="leistung" className="py-20 md:py-24 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#2F80FF" count={25} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-text-head">Das VisibilityLab SEO-, GEO- und AEO-System im Detail</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto space-y-1 flex flex-col">
            <span>Ganzheitliche Optimierung für klassische Suchmaschinen und KI-Antwortsysteme.</span>
            <span>Wir sorgen dafür, dass dein Unternehmen dort sichtbar wird, wo heute Antworten entstehen.</span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "Optimierung für KI-Antworten",
              subtitle: "Answer Engine Optimization (AEO) – Optimierung für direkte Antwortsysteme wie Google AI Overviews",
              desc: "Wir strukturieren deine Inhalte so, dass sie in KI-Antworten und Google AI Overviews zitiert werden.",
              vorteil: "Du erscheinst direkt in der Antwort – nicht nur als Link in der Trefferliste.",
              graphic: (
                <div className="w-full h-48 bg-[#0a0f1a] [.light_&]:bg-slate-50 rounded-xl border border-white/10 [.light_&]:border-slate-200 p-3 flex flex-col gap-2 relative overflow-hidden mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent"></div>
                  {/* User Question */}
                  <div className="self-end bg-white/10 [.light_&]:bg-white rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] text-white/80 [.light_&]:text-slate-600 max-w-[80%] border border-white/5 [.light_&]:border-slate-200 shadow-sm">
                    Was ist ein SEO KI System?
                  </div>
                  {/* AI Answer */}
                  <div className="self-start bg-[#15305b]/50 [.light_&]:bg-blue-600/10 rounded-2xl rounded-tl-sm px-3 py-2 text-[10px] text-white/70 [.light_&]:text-slate-700 max-w-[90%] border border-[#4FD1FF]/20 [.light_&]:border-blue-200 shadow-[0_0_10px_rgba(79,209,255,0.1)]">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Bot className="w-3 h-3 text-[#4FD1FF] [.light_&]:text-blue-600" />
                      <span className="text-[#4FD1FF] [.light_&]:text-blue-600 font-medium">KI-Antwort</span>
                    </div>
                    <div className="space-y-1.5 mb-2">
                      <div className="h-1.5 bg-white/20 [.light_&]:bg-slate-200 rounded w-full"></div>
                      <div className="h-1.5 bg-white/20 [.light_&]:bg-slate-200 rounded w-5/6"></div>
                      <div className="h-1.5 bg-white/20 [.light_&]:bg-slate-200 rounded w-4/6"></div>
                    </div>
                    {/* Source Highlight */}
                    <div className="inline-flex items-center gap-1 bg-[#4FD1FF]/20 [.light_&]:bg-blue-600/20 border border-[#4FD1FF]/40 [.light_&]:border-blue-600/40 rounded px-1.5 py-0.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1FF] [.light_&]:bg-blue-600 animate-pulse"></div>
                      <span className="text-[8px] text-[#4FD1FF] [.light_&]:text-blue-700 font-bold">Quelle: dein Unternehmen</span>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Optimierung für generative KI-Systeme",
              subtitle: "Generative Engine Optimization (GEO) – Strukturierung von Inhalten für KI-Modelle wie ChatGPT, Gemini oder Claude",
              desc: "Wir machen deine Inhalte für Systeme wie ChatGPT, Gemini und Claude maschinenlesbar und verständlich.",
              vorteil: "Deine Marke wird Teil von KI-generierten Empfehlungen.",
              graphic: (
                <div className="w-full h-32 bg-[#0a0f1a] [.light_&]:bg-slate-50 rounded-xl border border-white/10 [.light_&]:border-slate-200 p-3 flex items-center justify-between relative overflow-hidden mt-4">
                  <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                  {/* Website */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-lg bg-white/5 [.light_&]:bg-white border border-white/20 [.light_&]:border-slate-200 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      <Globe className="w-5 h-5 text-white/60 [.light_&]:text-slate-400" />
                    </div>
                    <span className="text-[8px] text-white/50 [.light_&]:text-slate-500">Website</span>
                  </div>
                  
                  {/* Connections */}
                  <div className="relative z-10 flex-1 h-full flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent relative">
                      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-[#4FD1FF] [.light_&]:bg-blue-600 shadow-[0_0_8px_#4FD1FF] animate-ping"></div>
                      <div className="absolute top-1/2 left-2/4 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-[#4FD1FF] [.light_&]:bg-blue-600 shadow-[0_0_8px_#4FD1FF] animate-ping" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-[#4FD1FF] [.light_&]:bg-blue-600 shadow-[0_0_8px_#4FD1FF] animate-ping" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </div>

                  {/* AI Models */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#15305b]/80 [.light_&]:bg-blue-600/10 border border-[#4FD1FF]/30 [.light_&]:border-blue-200 flex items-center justify-center shadow-[0_0_10px_rgba(79,209,255,0.2)]">
                      <Bot className="w-4 h-4 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#15305b]/80 [.light_&]:bg-blue-600/10 border border-[#4FD1FF]/30 [.light_&]:border-blue-200 flex items-center justify-center shadow-[0_0_10px_rgba(79,209,255,0.2)]">
                      <Sparkles className="w-4 h-4 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#15305b]/80 [.light_&]:bg-blue-600/10 border border-[#4FD1FF]/30 [.light_&]:border-blue-200 flex items-center justify-center shadow-[0_0_10px_rgba(79,209,255,0.2)]">
                      <Cpu className="w-4 h-4 text-[#4FD1FF] [.light_&]:text-blue-600" />
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Strategische Content-Architektur",
              subtitle: "Skalierbare Content-Systeme",
              desc: "Wir bauen eine klare Themenstruktur mit logisch verknüpften Inhalten. So entsteht thematische Autorität.",
              vorteil: "Du wirst als Experte für dein Kernthema wahrgenommen.",
              graphic: (
                <div className="w-full h-32 bg-[#0a0f1a] [.light_&]:bg-slate-50 rounded-xl border border-white/10 [.light_&]:border-slate-200 relative overflow-hidden flex items-center justify-center mt-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,255,0.1)_0%,transparent_70%)]"></div>
                  
                  {/* Hub and Spoke */}
                  <div className="relative w-16 h-16">
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#15305b] [.light_&]:bg-blue-600 border-2 border-[#4FD1FF] [.light_&]:border-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(79,209,255,0.3)] z-20">
                      <Database className="w-4 h-4 text-[#4FD1FF] [.light_&]:text-white" />
                    </div>
                    
                    {/* Spokes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <div key={i} className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-y-1/2 origin-left z-10" style={{ transform: `rotate(${angle}deg)` }}>
                        <div className="w-full h-full bg-gradient-to-r from-[#4FD1FF]/40 [.light_&]:from-blue-600/40 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/5 [.light_&]:bg-white border border-white/20 [.light_&]:border-slate-200 flex items-center justify-center" style={{ transform: `rotate(-${angle}deg)` }}>
                          <FileText className="w-2.5 h-2.5 text-white/60 [.light_&]:text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            },
            {
              title: "Technische SEO & Performance",
              subtitle: "Technische Optimierung",
              desc: "Wir verbessern Struktur, Ladezeit, interne Verlinkung und strukturierte Daten (JSON-LD).",
              vorteil: "Suchmaschinen verstehen deine Website eindeutig und bewerten sie stabil.",
              graphic: (
                <div className="w-full h-32 bg-[#0a0f1a] [.light_&]:bg-slate-50 rounded-xl border border-white/10 [.light_&]:border-slate-200 p-3 flex flex-col relative overflow-hidden mt-4">
                  <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                  
                  {/* Code Window Header */}
                  <div className="flex items-center gap-1.5 mb-3 border-b border-white/10 [.light_&]:border-slate-200 pb-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 text-[8px] text-white/40 [.light_&]:text-slate-400 font-mono">layout.tsx</span>
                  </div>
                  
                  <div className="flex gap-4 relative z-10 h-full">
                    {/* Code Lines */}
                    <div className="flex-1 space-y-1.5">
                      <div className="h-1.5 bg-[#4FD1FF]/30 [.light_&]:bg-blue-600/30 rounded w-3/4"></div>
                      <div className="h-1.5 bg-white/10 [.light_&]:bg-slate-200 rounded w-1/2 ml-4"></div>
                      <div className="h-1.5 bg-white/10 [.light_&]:bg-slate-200 rounded w-5/6 ml-4"></div>
                      <div className="h-1.5 bg-white/10 [.light_&]:bg-slate-200 rounded w-2/3 ml-8"></div>
                      <div className="h-1.5 bg-[#4FD1FF]/30 [.light_&]:bg-blue-600/30 rounded w-1/4"></div>
                    </div>
                    
                    {/* Speed Meter */}
                    <div className="w-20 flex flex-col items-center justify-center gap-2 border-l border-white/10 [.light_&]:border-slate-200 pl-4">
                      <div className="relative w-12 h-12">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-white/10 [.light_&]:text-slate-200"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-green-400 [.light_&]:text-green-600 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]"
                            strokeDasharray="95, 100"
                            strokeWidth="3"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-green-400 [.light_&]:text-green-600">99</span>
                        </div>
                      </div>
                      <span className="text-[8px] text-white/50 [.light_&]:text-slate-500 uppercase tracking-wider">Performance</span>
                    </div>
                  </div>
                </div>
              )
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 [.light_&]:bg-none [.light_&]:bg-white backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-[#4FD1FF]/30 [.light_&]:border-blue-200 hover:border-[#4FD1FF]/60 shadow-[0_8px_32px_rgba(79,209,255,0.1)] [.light_&]:shadow-xl transition-all duration-300 node-glow overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-head mb-1 group-hover:text-[#4FD1FF] [.light_&]:group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <div className="text-[#4FD1FF] [.light_&]:text-blue-600 text-sm font-medium mb-4">{item.subtitle}</div>
                </div>
                <div className="text-text-secondary [.light_&]:text-slate-800 leading-relaxed text-sm group-hover:text-text-primary [.light_&]:group-hover:text-black transition-colors mb-5">
                  {item.desc}
                </div>
                <div className="mt-auto">
                  <div className="text-sm border-l-2 border-[#4FD1FF] [.light_&]:border-blue-600 pl-3 py-2 bg-[#4FD1FF]/5 [.light_&]:bg-blue-600/10 rounded-r mb-6">
                    <strong className="text-text-head [.light_&]:text-blue-900 block mb-1">Dein Vorteil:</strong>
                    <span className="text-text-secondary [.light_&]:text-slate-900">{item.vorteil}</span>
                  </div>
                  {item.graphic}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="#kontakt"
            onClick={handleScroll}
            className="relative overflow-hidden w-fit px-8 py-3.5 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold text-base shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 inline-flex items-center justify-center group active:scale-95 whitespace-nowrap focus-visible:outline-white backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
            <span className="relative z-10">Visibility freischalten</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};