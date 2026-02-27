import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative" aria-labelledby="about-title">
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
                width="800"
                height="1000"
                loading="lazy"
                className="w-full h-auto rounded-[2.2rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentBlue/10 text-accentBlue text-[10px] font-black uppercase tracking-widest mb-8 border border-accentBlue/20">
            DER EXPERTE HINTER DER TECHNIK
          </div>
          
          <h2 id="about-title" className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Über den <span className="text-accentBlue">Experten</span>
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed font-light">
            Als Senior Frontend Engineer und KI-Strategist verbinde ich tiefes technisches Verständnis mit modernsten Marketing-Methoden. Mein Ziel ist es, Unternehmen dabei zu helfen, in der Ära der generativen Suche nicht nur gefunden zu werden, sondern als unangefochtene Autorität wahrgenommen zu werden.
          </p>
          
          <ul className="space-y-6" role="list">
            {[
              "Über 10 Jahre Erfahrung in Full-Stack Engineering",
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
