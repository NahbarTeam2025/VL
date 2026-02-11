import React from 'react';
import { ScanSearch, DraftingCompass, FileSignature, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Audit & Analyse", desc: "Unser Analyse-Agent scannt Ihre Seite und den Markt.", icon: ScanSearch },
    { num: "02", title: "Strategie-Entwicklung", desc: "Erstellung der Hub & Spoke Cluster und Keyword-Sets.", icon: DraftingCompass },
    { num: "03", title: "Content Creation", desc: "Produktion der optimierten Inhalte durch den Content-Agent.", icon: FileSignature },
    { num: "04", title: "Implementation", desc: "Integration der Inhalte und Verlinkungen auf Ihrer Plattform.", icon: Rocket }
  ];

  return (
    <section id="process" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Der Prozess</h2>
          <p className="text-text-secondary max-w-xl mx-auto">In vier Schritten zur algorithmischen Marktführerschaft.</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden md:block" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-bg-primary border-2 border-blue-500/50 mb-6 shadow-lg">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <step.icon className="w-8 h-8"/>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  <span className="text-blue-400 mr-2">{step.num}</span>{step.title}
                </h3>
                <p className="text-text-secondary text-sm max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};