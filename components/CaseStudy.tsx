import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

export const CaseStudy: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="case-study" className="py-28 md:py-32 bg-bg-primary relative overflow-hidden">
      <ParticlesBackground color="#2F80FF" count={40} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4FD1FF] bg-[#4FD1FF]/10 px-3 py-1 rounded-full border border-[#4FD1FF]/20">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 mt-4 text-white">1.800% mehr Sichtbarkeit – Die Erfolgsstory der Stadt <span className="whitespace-nowrap">Falkenberg/Elster</span></h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto font-light">
              Wie wir durch den systematischen Aufbau von Topical Authority die digitale Präsenz einer Stadtplattform transformiert haben.
            </p>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#000000]/80 via-[#2F80FF]/10 to-[#000000]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#4FD1FF]/60 shadow-[0_0_40px_rgba(79,209,255,0.2)] text-text-primary node-glow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Status Quo</h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  Die Stadt <span className="whitespace-nowrap">Falkenberg/Elster</span> hatte eine klassische Website ohne klare thematische Ausrichtung. Weder Suchmaschinen noch moderne KI-Systeme konnten die Relevanz für wichtige lokale Themen wie den Kiebitz-See oder touristische Angebote erkennen. Die digitale Sichtbarkeit war minimal, und wichtige Informationen erreichten die Bürger nicht effektiv.
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">Unser Ergebnis</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Wir implementierten ein umfassendes Hub-and-Spoke Modell. Durch tiefe, semantisch verknüpfte Inhalte entstand echte Topical Authority. Wir strukturierten Daten neu, optimierten für Voice Search und KI-Antworten.
                  <br /><br />
                  <strong>Das Ergebnis:</strong> 1.800% mehr organische Sichtbarkeit in nur 6 Monaten und eine signifikante Steigerung der Bürgerinteraktion.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#4FD1FF]/20 blur-2xl rounded-full -z-10"></div>
                {/* Image Prompt: Photorealistic visualization of dashboard, 3D nodes, dark tech background, cinematic lighting, colors #000000, #2F80FF, #4FD1FF. */}
                <img 
                  src="https://picsum.photos/seed/chart/600/400.webp" 
                  alt="Wachstumschart der organischen Sichtbarkeit" 
                  title="Wachstumschart der organischen Sichtbarkeit"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl border border-border shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-12">
              <blockquote className="relative bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-[#4FD1FF] opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl italic text-text-primary mb-6 relative z-10">
                  "Dank des VisibilityLab Systems konnten wir unsere digitale Reichweite massiv steigern. Die KI-gestützte Strategie hat uns geholfen, genau die Themen zu besetzen, die für unsere Bürger und Touristen relevant sind. Ein echter Gamechanger für <span className="whitespace-nowrap">Falkenberg/Elster</span>."
                </p>
                <footer className="flex items-center gap-4">
                  <img 
                    src="https://picsum.photos/seed/person1/80/80" 
                    alt="Stadtverwaltung Falkenberg/Elster" 
                    className="w-10 h-10 rounded-full object-cover border border-[#4FD1FF]/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-white">Stadtverwaltung</div>
                    <div className="text-sm text-text-secondary whitespace-nowrap">Falkenberg/Elster</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};