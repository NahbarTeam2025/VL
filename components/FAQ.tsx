import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Was unterscheidet VisibilityLab von einer klassischen SEO-Agentur?",
      a: "Wir setzen auf ein KI-gestütztes 3-Agenten-System. Statt manueller, oft subjektiver Arbeit liefern wir datengetriebene Präzision in Analyse, Strategie und Content – schneller und konsistenter als klassische Prozesse."
    },
    {
      q: "Für wen ist das System geeignet?",
      a: "VisibilityLab ist ideal für KMUs, Startups und ambitionierte Selbstständige, die ihre organische Sichtbarkeit skalieren wollen. Aber auch Agenturen nutzen unsere Technologie als White-Label-Lösung."
    },
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "SEO ist ein Marathon. Durch unsere strukturelle Optimierung Hub & Spoke indexieren Suchmaschinen die Inhalte jedoch oft schneller und werten sie höher. Erste signifikante Trendänderungen sind oft nach 3-6 Monaten sichtbar."
    },
    {
      q: "Ist das nur KI-Text oder echte Strategie?",
      a: "Der Content-Agent nutzt KI für die Erstellung, aber die Basis ist rein strategisch. Der Strategie-Agent definiert die Leitplanken. Jeder Text wird zudem WDF*IDF-optimiert und geprüft. Es ist 'Augmented Intelligence', nicht nur ein Chatbot."
    },
    {
      q: "Wie steht es um die DSGVO?",
      a: "Wir arbeiten strikt nach DSGVO. Unsere Server stehen in sicheren Umgebungen, wir tracken keine unnötigen Nutzerdaten und geben keine sensiblen Kundendaten an Dritte weiter."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-bg-secondary relative overflow-hidden" aria-labelledby="faq-title">
      <ParticlesBackground color="#10b981" count={25} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 id="faq-title" className="text-[clamp(1.75rem,5vw,3rem)] font-black mb-12 md:mb-16 text-center text-white leading-tight">Häufige Fragen</h2>
        
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`relative group rounded-2xl p-[1px] transition-all duration-500 ${openIndex === idx ? 'bg-gradient-to-r from-[#4FD1FF] to-[#2F80FF]' : 'bg-gradient-to-r from-white/10 to-white/5 hover:from-[#4FD1FF]/50 hover:to-[#2F80FF]/50'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-[#4FD1FF]/10 to-[#2F80FF]/10 blur-md transition-opacity duration-500 ${openIndex === idx ? 'opacity-50' : 'opacity-0 group-hover:opacity-20'}`}></div>
              <div className={`relative bg-bg-primary rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === idx ? 'bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl border border-[#4FD1FF]/15 shadow-[0_2px_10px_rgba(79,209,255,0.05)]' : ''}`}>
                <button 
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-start justify-between p-5 md:p-8 text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1FF] rounded-2xl"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className={`font-bold transition-colors text-base md:text-xl ${openIndex === idx ? 'text-white drop-shadow-md' : 'text-text-secondary group-hover:text-white'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-[#4FD1FF] transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : 'opacity-50 group-hover:opacity-100'}`} />
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className={`px-5 md:px-8 pb-6 md:pb-8 pt-0 leading-relaxed text-sm md:text-lg font-light ${openIndex === idx ? 'text-blue-100/90' : 'text-text-secondary'}`}>
                            {faq.a}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};