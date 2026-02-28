import React from 'react';
import { Target, Search, FileText, Code } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const Methodology: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="leistung" className="py-28 md:py-32 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#2F80FF" count={25} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Das VisibilityLab System im Detail</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Ganzheitliche Optimierung für die Suchsysteme von heute und morgen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Search,
              title: "Answer Engine Optimization AEO",
              desc: (
                <>
                  Wir optimieren Ihre Inhalte gezielt für KI-Suchmaschinen wie Google AI Overviews. So werden Sie als primäre Quelle in generierten Antworten zitiert.
                  <br /><br />
                  <strong>Ihr Vorteil:</strong> Sie erreichen Nutzer genau in dem Moment, in dem sie nach Lösungen suchen.
                </>
              ),
              tooltip: "Optimierung für Antwortmaschinen"
            },
            {
              icon: Target,
              title: "Generative Engine Optimization GEO",
              desc: (
                <>
                  Strukturierung von Daten für Chatbots und Sprachassistenten. Wir machen Ihr Wissen für ChatGPT, Claude und Co. maschinenlesbar und verständlich.
                  <br /><br />
                  <strong>Ihr Vorteil:</strong> Ihre Marke wird Teil des KI-Wissens und gewinnt massiv an Reichweite.
                </>
              ),
              tooltip: "Optimierung für generative KI-Modelle"
            },
            {
              icon: FileText,
              title: "Skalierbare Content-Systeme",
              desc: (
                <>
                  Aufbau von Topical Authority durch vernetzte Hub-and-Spoke Architekturen. Wir erstellen Inhalte, die semantische Tiefe und Relevanz beweisen.
                  <br /><br />
                  <strong>Ihr Vorteil:</strong> Durch Hub and Spoke werden Sie sichtbar und bauen echten Expertenstatus auf.
                </>
              ),
              tooltip: "Systematische Inhaltserstellung"
            },
            {
              icon: Code,
              title: "Technical SEO & Performance",
              desc: (
                <>
                  Fehlerfreie technische Basis für maximale Crawlbarkeit. Wir optimieren Ladezeiten, Core Web Vitals und strukturierte Daten JSON-LD.
                  <br /><br />
                  <strong>Ihr Vorteil:</strong> Bessere Rankings und eine perfekte Nutzererfahrung, die Besucher zu Kunden macht.
                </>
              ),
              tooltip: "Technische Webseitenoptimierung"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#4FD1FF]/30 hover:border-[#4FD1FF]/60 shadow-[0_8px_32px_rgba(79,209,255,0.1)] transition-all duration-300 node-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#4FD1FF]/10 rounded-xl flex items-center justify-center mb-6 text-[#4FD1FF] group-hover:scale-110 transition-transform duration-300 relative group/tooltip cursor-help">
                  <item.icon className="w-6 h-6" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-bg-primary border border-border text-xs text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-lg">
                    {item.tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-bg-primary"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4FD1FF] transition-colors">{item.title}</h3>
                <div className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors">{item.desc}</div>
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
            className="relative overflow-hidden w-fit px-8 py-3.5 bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-xl text-white font-bold text-base shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all duration-500 inline-flex items-center justify-center group active:scale-95 whitespace-nowrap focus-visible:outline-white backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
            <span className="relative z-10">Visibility freischalten</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};