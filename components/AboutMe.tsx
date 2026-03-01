import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { DataFlow } from './DataFlow';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-12 md:py-16 px-6 max-w-6xl mx-auto relative min-h-screen flex items-center" aria-labelledby="about-title">
      <ParticlesBackground color="#14b8a6" count={25} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none -z-10"></div>
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 w-full">
        {/* Left Column: Image - Expanded width */}
        <div className="flex-[1.2] w-full lg:mx-0">
          <div className="relative h-full">
            {/* Background veil removed as requested */}
            <div className="relative glass-morphism rounded-[2.5rem] overflow-hidden h-full min-h-[500px] lg:min-h-[600px] bg-[#050b14]/30 border border-white/5 shadow-2xl">
              <DataFlow shape="head" />
              
              {/* Technical Label */}
              <div className="absolute top-8 right-8 flex flex-col items-end pointer-events-none">
                <span className="text-[10px] font-mono text-[#4FD1FF]/60 uppercase tracking-widest">Visibility_Engine_v2.5</span>
                <div className="flex gap-1 mt-1">
                  <div className="w-1 h-1 bg-[#4FD1FF] rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-[#4FD1FF]/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-[#4FD1FF]/40 rounded-full"></div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] pointer-events-none">
                Neural Architecture // Robert Erbach
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 flex flex-col justify-center py-2 lg:py-0">
          <div>
            <h2 id="about-title" className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight">
              Strategisches Denken ist mein <span className="text-accentBlue">Fundament.</span>
            </h2>
            
            <div className="text-text-secondary text-sm md:text-base mb-6 leading-relaxed font-light space-y-3">
              <p>
                Für mich ist KI kein kurzfristiger Trend, sondern ein dynamisches System, das sich kontinuierlich weiterentwickelt. Ich bin Robert, 36, und ich verbringe meine Zeit am liebsten damit, die Grenzen von Systemen wie GPT, Gemini oder Claude auszuloten. Nicht, weil ich muss, sondern weil ich es will.
              </p>
              <p>
                Mich treibt der Anspruch an Präzision und Verständnis. Wenn eine Datenstruktur nicht sauber greift, analysiere ich sie so lange, bis Ursache und Wirkung klar sind. Wer mit mir arbeitet, erhält keine theoretischen Konzepte, sondern Strategien, die auf realem Testing und strukturiertem Vorgehen basieren.
              </p>
              <p>
                Um den Kopf nach solchen Nächten wieder freizubekommen, brauche ich den Kontrast: Die Natur hier in Falkenberg oder einfach Zeit mit den Menschen, die mir wichtig sind. Das ist mein Anker, bevor ich am nächsten Morgen wieder tief in den Maschinenraum abtauche. Für mich gibt es keinen Stillstand – nur den nächsten Test, das nächste Modell und die nächste Erkenntnis.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <span className="font-signature text-xl text-white select-none">Robert Erbach</span>
            </div>
            
            <ul className="space-y-2" role="list">
              {[
                "Seit über 2 Jahren intensive Praxis mit KI- und Suchsystemen",
                "Entwicklung eines eigenen, strukturierten Visibility-Frameworks",
                "Fokus auf umsetzbare Strategien statt Marketing-Floskeln"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="p-1 bg-accentBlue/10 rounded-lg shrink-0">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-accentBlue" />
                  </div>
                  <span className="text-text-primary text-xs md:text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
