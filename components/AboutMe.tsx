import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-20 md:py-24 px-6 max-w-6xl mx-auto relative" aria-labelledby="about-title">
      <ParticlesBackground color="#14b8a6" count={25} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none -z-10"></div>
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-accentBlue/20 blur-2xl rounded-full"></div>
            <div className="relative glass-morphism p-2 rounded-[2rem] overflow-hidden h-full flex flex-col">
              <img 
                src="https://picsum.photos/seed/expert/800/1000.webp" 
                alt="Porträt von Robert Erbach, Experte für KI-Sichtbarkeit" 
                title="Porträt von Robert Erbach"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="w-full h-full min-h-[300px] lg:min-h-[450px] rounded-[1.8rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 flex flex-col justify-between py-2 lg:py-4">
          <div>
            <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              KI ist für mich <span className="text-accentBlue">mehr als ein Trend</span>
            </h2>
            
            <div className="text-text-secondary text-base md:text-lg mb-8 leading-relaxed font-light space-y-4">
              <p>
                Für mich ist Künstliche Intelligenz kein Hype und kein Buzzword. Sie ist eine technologische Entwicklung, die unsere Art zu suchen, zu entscheiden und sichtbar zu werden grundlegend verändert.
              </p>
              <p>
                Ich habe mich in den letzten zwei Jahren intensiv und praxisnah mit KI-Systemen, Suchmaschinenlogik und Content-Strukturen beschäftigt. Nicht aus einer Pflicht heraus – sondern aus echter Begeisterung. Was als persönliches Interesse begann, wurde zu einem strukturierten System.
              </p>
              <p>
                Ich teste, analysiere und optimiere kontinuierlich. Jede Strategie basiert auf praktischer Anwendung, nicht auf Theorie. Aus dieser Arbeit ist das VisibilityLab System entstanden – mit einem klaren Ziel: Unternehmen dabei zu helfen, in der Ära der KI-Suche nicht nur präsent, sondern relevant zu sein.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <span className="font-signature text-xl md:text-2xl text-accentBlue/80 select-none">Robert Erbach</span>
            </div>
            
            <ul className="space-y-3" role="list">
              {[
                "Seit über 2 Jahren intensive Praxis mit KI- und Suchsystemen",
                "Entwicklung eines eigenen, strukturierten Visibility-Frameworks",
                "Fokus auf umsetzbare Strategien statt Marketing-Floskeln"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="p-1 bg-accentBlue/10 rounded-lg shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accentBlue" />
                  </div>
                  <span className="text-text-primary text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
