import React from 'react';
import { Bot, Sparkles, Search } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

const GradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-[#4FD1FF] hover:to-[#2F80FF] transition-all duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/20 to-[#2F80FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative h-full bg-bg-secondary rounded-2xl overflow-hidden node-glow">
      {children}
    </div>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefit" className="py-24 bg-bg-primary relative overflow-hidden">
      <ParticlesBackground color="#4FD1FF" count={30} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Messbare Präsenz in der Ära der Künstlichen Intelligenz
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Wir positionieren Ihre Marke dort, wo Entscheidungen heute getroffen werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <GradientCard className="h-full">
              <div className="p-8 text-center h-full flex flex-col items-center">
                <Bot className="w-12 h-12 text-[#4FD1FF] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Sichtbarkeit in ChatGPT</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Ihre Inhalte werden so strukturiert, dass ChatGPT sie als verlässliche Quelle zitiert. Wir optimieren gezielt für AEO Answer Engine Optimization.
                </p>
              </div>
            </GradientCard>
          </motion.div>

          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <GradientCard className="h-full">
              <div className="p-8 text-center h-full flex flex-col items-center">
                <Sparkles className="w-12 h-12 text-[#2F80FF] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Präsenz in Google Gemini</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Durch den Aufbau von Topical Authority erkennt Gemini Ihre Expertise. Sie werden Teil der generierten KI-Antworten in der Google Suche.
                </p>
              </div>
            </GradientCard>
          </motion.div>

          <motion.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <GradientCard className="h-full">
              <div className="p-8 text-center h-full flex flex-col items-center">
                <Search className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Google Top 5 Rankings</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Klassische Suchanfragen bleiben relevant. Mit datenbasierten WDF*IDF-Analysen sichern wir Ihnen nachhaltige Top-Rankings für kaufbereite Suchbegriffe.
                </p>
              </div>
            </GradientCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
