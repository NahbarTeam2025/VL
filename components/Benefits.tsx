import React from 'react';
import { Bot, Sparkles, Search, MousePointerClick, CheckCircle2, ArrowRight, Award } from 'lucide-react';
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
            Vom Suchergebnis zur relevanten Quelle.
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Positioniere dein Unternehmen dort, wo Entscheidungen vorbereitet werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Kachel 1: Strategische Resilienz */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-[#4FD1FF] hover:to-[#2F80FF] transition-all duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)] node-glow flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  {/* Graphic */}
                  <div className="w-full h-40 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col justify-center relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      <div className="flex flex-col items-center gap-2 opacity-50">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <Search className="w-5 h-5 text-white/30" />
                        </div>
                        <div className="text-[10px] text-white/40">Hoffnungs-Marketing</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#4FD1FF]" />
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-[#15305b] border border-[#4FD1FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(79,209,255,0.2)]">
                          <CheckCircle2 className="w-6 h-6 text-[#4FD1FF]" />
                        </div>
                        <div className="text-[10px] text-[#4FD1FF] font-bold">Daten-Architektur</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Strategische Resilienz</h3>
                  <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                    <p>Keine strategischen Überraschungen bei Google-Updates. Durch den Aufbau von Topical Authority und tiefen Datenstrukturen bleibt deine Sichtbarkeit auch dann bestehen, wenn KI-Modelle ihr Ranking-Schema ändern.</p>
                    <p className="text-white/90 font-medium">Du baust kein Kartenhaus, sondern ein Fundament.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kachel 2: Zero-Waste Content */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-[#4FD1FF] hover:to-[#2F80FF] transition-all duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)] node-glow flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  {/* Graphic */}
                  <div className="w-full h-40 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col justify-center relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent"></div>
                    <div className="flex items-end justify-center gap-16 h-24 pb-2">
                      <div className="w-8 bg-white/5 rounded-t-sm h-[40%] border-t border-x border-white/10 relative group">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap">Keyword-Fokus</div>
                      </div>
                      <div className="w-8 bg-[#15305b] rounded-t-sm h-[80%] border-t border-x border-[#4FD1FF]/40 relative group shadow-[0_0_15px_rgba(79,209,255,0.1)]">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-[#4FD1FF] font-bold whitespace-nowrap">Antwort-Relevanz</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Zero-Waste Content</h3>
                  <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                    <p>Content ohne Maschinenlesbarkeit ist 2026 eine Fehlinvestition. Wir sorgen dafür, dass jeder Euro doppelt einzahlt: In den klassischen Index für menschliche Besucher und in den Knowledge Graph für KI-Agents.</p>
                    <p className="text-white/90 font-medium">Isolierte Inhalte ohne strategische Struktur verlieren zunehmend an Wirkung.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kachel 3: Informationshoheit */}
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-[#4FD1FF] hover:to-[#2F80FF] transition-all duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)] node-glow flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  {/* Graphic */}
                  <div className="w-full h-40 bg-[#0a0f1a] rounded-xl border border-white/10 p-4 flex flex-col justify-center relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,255,0.1)_0%,transparent_70%)]"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-[#15305b] border border-[#4FD1FF] flex items-center justify-center shadow-[0_0_20px_rgba(79,209,255,0.3)] relative z-10">
                          <Bot className="w-8 h-8 text-[#4FD1FF]" />
                        </div>
                        {/* Orbiting rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#4FD1FF]/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#4FD1FF]/10 rounded-full"></div>
                        {/* Badge */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#4FD1FF] text-[#050b14] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-20 shadow-lg">
                          Primärquelle
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Informationsführerschaft</h3>
                  <div className="text-text-secondary text-sm leading-relaxed space-y-3 flex-1">
                    <p>Präge die Informationsstruktur deiner Branche. Wer in Systemen wie ChatGPT oder Gemini als Quelle erscheint, wird frühzeitig in Entscheidungsprozesse eingebunden.</p>
                    <p className="text-white/90 font-medium">Es geht nicht nur um Ranking #1, sondern um nachhaltige Relevanz.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
