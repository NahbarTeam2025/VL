import React, { useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
      return;
    }
    setLoadingIndex(idx);
    setTimeout(() => {
      setLoadingIndex(null);
      setOpenIndex(idx);
    }, 400);
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
      a: "SEO ist ein Marathon. Durch unsere strukturelle Optimierung (Hub & Spoke) indexieren Suchmaschinen die Inhalte jedoch oft schneller und werten sie höher. Erste signifikante Trendänderungen sind oft nach 3-6 Monaten sichtbar."
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
        <h2 id="faq-title" className="text-3xl md:text-5xl font-black mb-16 text-center text-white">Häufige Fragen</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`relative group rounded-2xl p-[1px] transition-all duration-500 ${openIndex === idx ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-white/10 to-white/5 hover:from-blue-500/50 hover:to-purple-500/50'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl transition-opacity duration-500 ${openIndex === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              <div className="relative bg-bg-primary rounded-2xl overflow-hidden">
                <button 
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-start justify-between p-6 md:p-8 text-left gap-4 group"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className={`font-bold transition-colors text-lg md:text-xl ${openIndex === idx ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>{faq.q}</span>
                  {loadingIndex === idx ? (
                    <Loader2 className="w-6 h-6 text-blue-400 animate-spin shrink-0" />
                  ) : (
                    <ChevronDown className={`w-6 h-6 text-blue-400 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : 'opacity-50'}`} />
                  )}
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="px-6 md:px-8 pb-8 pt-0 text-text-secondary leading-relaxed text-lg font-light">
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