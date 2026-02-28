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
            {/* Background veil removed as requested */}
            <div className="relative glass-morphism p-6 rounded-[2.5rem] overflow-hidden h-full flex items-center justify-center min-h-[450px] lg:min-h-[550px] bg-[#050b14]/50 border border-white/5 shadow-2xl">
              {/* Professional Technical Illustration */}
              <svg viewBox="0 0 400 500" className="w-full h-full max-w-[340px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4FD1FF" />
                    <stop offset="100%" stopColor="#2F80FF" />
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4FD1FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                
                {/* Background Technical Grid Elements */}
                <g opacity="0.1">
                  <circle cx="200" cy="200" r="150" stroke="#4FD1FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="100" stroke="#4FD1FF" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#4FD1FF" strokeWidth="0.5" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#4FD1FF" strokeWidth="0.5" />
                </g>

                {/* Abstract Neural Profile (Head) */}
                <path 
                  d="M200 80C140 80 110 130 110 190C110 250 140 280 160 300C160 330 150 360 120 380C150 380 180 370 200 340C220 370 250 380 280 380C250 360 240 330 240 300C260 280 290 250 290 190C290 130 260 80 200 80Z" 
                  fill="url(#innerGlow)" 
                  className="animate-pulse"
                />
                
                {/* Connection Lines (Circuitry) */}
                <g stroke="#4FD1FF" strokeWidth="0.8" opacity="0.4">
                  <path d="M200 120V160" />
                  <path d="M160 180H140" />
                  <path d="M240 180H260" />
                  <path d="M200 220V240" />
                  <path d="M170 150L150 130" />
                  <path d="M230 150L250 130" />
                  <path d="M170 210L150 230" />
                  <path d="M230 210L250 230" />
                </g>

                {/* Glowing Data Nodes */}
                <g filter="url(#neonGlow)">
                  <circle cx="200" cy="180" r="6" fill="url(#coreGrad)">
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="180" r="3" fill="#4FD1FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="240" cy="180" r="3" fill="#4FD1FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" delay="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="140" r="3" fill="#4FD1FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" delay="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="220" r="3" fill="#4FD1FF" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" delay="0.2s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* HUD Elements */}
                <g opacity="0.5">
                  <path d="M320 100H350V130" stroke="#4FD1FF" strokeWidth="1" />
                  <path d="M80 100H50V130" stroke="#4FD1FF" strokeWidth="1" />
                  <path d="M320 300H350V270" stroke="#4FD1FF" strokeWidth="1" />
                  <path d="M80 300H50V270" stroke="#4FD1FF" strokeWidth="1" />
                  
                  {/* Binary/Data Stream Effect */}
                  <g className="text-[6px] font-mono fill-[#4FD1FF]/40">
                    <text x="310" y="150">01101</text>
                    <text x="310" y="165">10110</text>
                    <text x="310" y="180">11001</text>
                    <text x="60" y="150">VIS</text>
                    <text x="60" y="165">LAB</text>
                    <text x="60" y="180">SYS</text>
                  </g>
                </g>

                {/* Scanning Vertical Line */}
                <rect x="100" y="80" width="200" height="1" fill="url(#coreGrad)" opacity="0.3">
                  <animate attributeName="y" values="80;320;80" dur="6s" repeatCount="indefinite" />
                </rect>
              </svg>
              
              {/* Technical Label */}
              <div className="absolute top-8 right-8 flex flex-col items-end">
                <span className="text-[10px] font-mono text-[#4FD1FF]/60 uppercase tracking-widest">Visibility_Engine_v2.5</span>
                <div className="flex gap-1 mt-1">
                  <div className="w-1 h-1 bg-[#4FD1FF] rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-[#4FD1FF]/40 rounded-full"></div>
                  <div className="w-1 h-1 bg-[#4FD1FF]/40 rounded-full"></div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
                Neural Architecture // Robert Erbach
              </div>
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
