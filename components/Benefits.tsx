import React from 'react';
import { Bot, Sparkles, Search, MousePointerClick, CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

const GradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-[#4FD1FF] hover:to-[#2F80FF] transition-all duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative h-full bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)] node-glow flex flex-col">
      {children}
    </div>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefit" className="py-20 md:py-24 bg-bg-primary relative overflow-hidden">
      <ParticlesBackground color="#4FD1FF" count={30} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white leading-tight">
            Ihre Vorteile durch KI-Sichtbarkeit
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Mehr Sichtbarkeit. Mehr Anfragen. Mehr strategische Kontrolle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Kachel 1 */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <GradientCard className="h-full">
              <div className="p-6 flex flex-col h-full">
                {/* Graphic */}
                <div className="w-full h-32 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col gap-3 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent"></div>
                  {/* Search Query */}
                  <div className="self-end bg-white/10 rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] text-white/80 max-w-[80%] border border-white/5 relative z-10">
                    Beste Lösung für...
                  </div>
                  {/* AI Answer */}
                  <div className="self-start bg-[#15305b]/50 rounded-2xl rounded-tl-sm px-3 py-2 text-[10px] text-white/70 w-[90%] border border-[#4FD1FF]/20 shadow-[0_0_10px_rgba(79,209,255,0.1)] relative z-10">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Bot className="w-3 h-3 text-[#4FD1FF]" />
                      <span className="text-[#4FD1FF] font-medium">KI-Antwort</span>
                    </div>
                    <div className="space-y-1.5 mb-2">
                      <div className="h-1.5 bg-white/20 rounded w-full"></div>
                      <div className="h-1.5 bg-white/20 rounded w-5/6"></div>
                    </div>
                    {/* Source Highlight */}
                    <div className="inline-flex items-center gap-1 bg-[#4FD1FF]/20 border border-[#4FD1FF]/40 rounded px-1.5 py-0.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1FF] animate-pulse"></div>
                      <span className="text-[8px] text-[#4FD1FF] font-bold">Ihre Marke</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">Präsenz in KI-Antworten</h3>
                <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                  <p>Ihr Unternehmen wird in generierten Antworten sichtbar, wenn potenzielle Kunden nach konkreten Lösungen suchen.</p>
                  <p className="text-white/90 font-medium">Sie werden Teil der Entscheidung – nicht nur eine Option unter vielen.</p>
                </div>
              </div>
            </GradientCard>
          </motion.div>

          {/* Kachel 2 */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <GradientCard className="h-full">
              <div className="p-6 flex flex-col h-full">
                {/* Graphic */}
                <div className="w-full h-32 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col gap-2 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                  {/* Search Bar */}
                  <div className="w-full h-6 rounded-full bg-white/5 border border-white/10 flex items-center px-3 mb-2 relative z-10">
                    <Search className="w-3 h-3 text-white/40 mr-2" />
                    <div className="h-1 bg-white/20 rounded w-1/3"></div>
                  </div>
                  {/* AI Answer Box (Dominant) */}
                  <div className="w-full bg-gradient-to-r from-[#15305b]/80 to-[#0d1f3d]/80 rounded-lg border border-[#4FD1FF]/40 p-2.5 shadow-[0_0_15px_rgba(79,209,255,0.15)] relative z-10">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3 h-3 text-[#4FD1FF]" />
                      <div className="h-1.5 bg-[#4FD1FF]/50 rounded w-1/4"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 bg-white/30 rounded w-full"></div>
                      <div className="h-1 bg-white/30 rounded w-5/6"></div>
                    </div>
                    <div className="mt-2 inline-block px-2 py-0.5 rounded bg-[#4FD1FF]/20 border border-[#4FD1FF]/30">
                      <span className="text-[7px] text-[#4FD1FF] font-bold">Ihr Unternehmen</span>
                    </div>
                  </div>
                  {/* Organic Results (Faded) */}
                  <div className="w-full space-y-2 opacity-30 relative z-10 mt-1">
                    <div className="space-y-1">
                      <div className="h-1.5 bg-blue-400/50 rounded w-1/2"></div>
                      <div className="h-1 bg-white/20 rounded w-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-blue-400/50 rounded w-2/3"></div>
                      <div className="h-1 bg-white/20 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Sichtbarkeit im direkten Antwortbereich</h3>
                <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                  <p>Sie erscheinen dort, wo Suchmaschinen Fragen direkt beantworten – noch vor den klassischen Suchergebnissen.</p>
                  <p className="text-white/90 font-medium">Maximale Aufmerksamkeit bei hoher Kaufabsicht.</p>
                </div>
              </div>
            </GradientCard>
          </motion.div>

          {/* Kachel 3 */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <GradientCard className="h-full">
              <div className="p-6 flex flex-col h-full">
                {/* Graphic */}
                <div className="w-full h-32 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col justify-center relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(79,209,255,0.1)_0%,transparent_70%)]"></div>
                  
                  {/* Funnel Steps */}
                  <div className="flex items-center justify-between w-full relative z-10 px-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                        <Search className="w-3 h-3 text-white/50" />
                      </div>
                      <span className="text-[6px] text-white/40 uppercase">Suche</span>
                    </div>
                    <div className="w-4 h-[1px] bg-white/20"></div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-[#15305b] border border-[#4FD1FF]/40 flex items-center justify-center shadow-[0_0_8px_rgba(79,209,255,0.2)]">
                        <Bot className="w-3 h-3 text-[#4FD1FF]" />
                      </div>
                      <span className="text-[6px] text-[#4FD1FF] uppercase">KI</span>
                    </div>
                    <div className="w-4 h-[1px] bg-[#4FD1FF]/40"></div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-[#15305b] border border-[#4FD1FF]/60 flex items-center justify-center shadow-[0_0_10px_rgba(79,209,255,0.3)]">
                        <MousePointerClick className="w-3 h-3 text-[#4FD1FF]" />
                      </div>
                       <span className="text-[6px] text-[#4FD1FF] uppercase">Klick</span>
                    </div>
                    <div className="w-4 h-[1px] bg-[#4FD1FF]/60"></div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#4FD1FF]/20 border border-[#4FD1FF] flex items-center justify-center shadow-[0_0_15px_rgba(79,209,255,0.4)]">
                        <CheckCircle2 className="w-4 h-4 text-[#4FD1FF]" />
                      </div>
                      <span className="text-[7px] text-[#4FD1FF] font-bold uppercase">Lead</span>
                    </div>
                  </div>
                  
                  {/* Rising Curve */}
                  <div className="absolute bottom-0 left-0 w-full h-12 opacity-40 pointer-events-none">
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M0,30 Q20,25 40,20 T80,10 T100,5 L100,30 Z" fill="url(#grad)" />
                      <path d="M0,30 Q20,25 40,20 T80,10 T100,5" fill="none" stroke="#4FD1FF" strokeWidth="1" />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4FD1FF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#4FD1FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Mehr qualifizierte Anfragen</h3>
                <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                  <p>Sie erreichen Entscheider genau im Moment der aktiven Suche – mit klarer Positionierung und hoher Relevanz.</p>
                  <p className="text-white/90 font-medium">Nicht mehr Traffic. Sondern die richtigen Kontakte.</p>
                </div>
              </div>
            </GradientCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
