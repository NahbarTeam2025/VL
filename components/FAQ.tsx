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
    <section id="faq" className="py-24 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Häufige Fragen</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl transition-all duration-300 ${openIndex === idx ? 'bg-bg-secondary border border-blue-500/30' : 'bg-bg-secondary/50 border border-transparent hover:border-white/10'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-start justify-between p-5 text-left gap-4"
              >
                <span className={`font-semibold transition-colors text-base ${openIndex === idx ? 'text-white' : 'text-text-primary'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ml-2 mt-1 ${openIndex === idx ? 'transform rotate-180 text-blue-400' : ''}`} />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                  <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 text-text-secondary leading-relaxed">
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