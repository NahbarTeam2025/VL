import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-28 md:py-32 px-6 max-w-7xl mx-auto relative" aria-labelledby="about-title">
      <ParticlesBackground color="#14b8a6" count={25} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none -z-10"></div>
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column: Image */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-4 bg-accentBlue/20 blur-2xl rounded-full"></div>
            <div className="relative glass-morphism p-2 rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/expert/800/1000.webp" 
                alt="Porträt von Robert Erbach, Experte für KI-Sichtbarkeit" 
                title="Porträt von Robert Erbach"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[2.2rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1">
          <h2 id="about-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            KI <span className="text-accentBlue">mehr als nur</span> eine Passion
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl mb-6 leading-relaxed font-light">
            Für mich ist Künstliche Intelligenz nicht nur ein Werkzeug, sondern eine grundlegende Veränderung unserer digitalen Welt. Ich brenne dafür, komplexe Algorithmen und Datenstrukturen so zu formen, dass sie echten Mehrwert schaffen. Als Senior Frontend Engineer und KI-Strategist verbinde ich dieses tiefe technische Verständnis mit modernsten Marketing-Methoden. Mein Ziel ist es, Unternehmen dabei zu helfen, in der Ära der generativen Suche nicht nur gefunden zu werden, sondern als unangefochtene Autorität wahrgenommen zu werden.
          </p>
          
          <div className="mb-10 -mt-2">
            <span className="font-signature text-2xl md:text-3xl text-accentBlue/80 select-none">Robert Erbach</span>
          </div>
          
          <ul className="space-y-6" role="list">
            {[
              "Über 3 Jahre Erfahrung in Full-Stack Engineering",
              "Spezialisierung auf GEO Generative Engine Optimization",
              "Entwickler des VisibilityLab Frameworks"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="p-1 bg-accentBlue/10 rounded-lg shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accentBlue" />
                </div>
                <span className="text-text-primary font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
