import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-24 bg-bg-secondary" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-title" className="text-3xl md:text-5xl font-black mb-16 text-center text-white">Häufige Fragen</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl transition-all duration-300 bg-bg-primary border ${openIndex === idx ? 'border-blue-500/50 shadow-premium' : 'border-border hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-start justify-between p-6 md:p-8 text-left gap-4 group"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className={`font-bold transition-colors text-lg md:text-xl ${openIndex === idx ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-blue-400 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : 'opacity-50'}`} />
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
          ))}
        </div>
      </div>
    </section>
  );
};