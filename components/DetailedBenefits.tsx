import React from 'react';
import { Check, TrendingUp, Shield, Zap, Globe, Users } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const DetailedBenefits: React.FC = () => {
  const groups = [
    {
      title: "Unternehmen",
      icon: TrendingUp,
      color: "text-accent-primary",
      benefits: [
        "Unabhängigkeit von steigenden Ad-Kosten CPC",
        "Steigerung des Unternehmenswertes durch digitale Assets",
        "Messbarer ROI und transparente KPIs",
        "Dominanz in lokalen und globalen Märkten",
        "Automatisierte Lead-Generierung rund um die Uhr"
      ]
    },
    {
      title: "Selbstständige",
      icon: Users,
      color: "text-accent-secondary",
      benefits: [
        "Expertenstatus und Thought Leadership in Ihrer Nische",
        "Zeitersparnis durch strategischen Fokus auf High-Impact Content",
        "Nachhaltige Sichtbarkeit statt Social Media 'Hamsterrad'",
        "Qualifizierte Anfragen statt Kaltakquise",
        "Kosteneffizientes Marketing-System"
      ]
    },
    {
      title: "Agenturen",
      icon: Shield,
      color: "text-purple-400",
      benefits: [
        "Erweiterung des Service-Portfolios um High-End SEO",
        "Wissenschaftlich fundierte Strategien für Kunden-Pitches",
        "White-Label Reporting und detaillierte Analysen",
        "Effizienzsteigerung durch KI-gestützte Workflows",
        "Höhere Kundenbindung durch nachweisbare Erfolge"
      ]
    }
  ];

  return (
    <section id="detailed-benefits" className="py-20 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#3b82f6" count={30} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold mb-4">Warum VisibilityLab?</h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Tiefergehende Vorteile für jeden Anspruch. Wir liefern nicht nur Traffic, sondern Geschäftswert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-blue-500 hover:to-purple-500 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-[#15305b]/80 via-[#0d1f3d]/80 to-[#050b14]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 overflow-hidden border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.1)]">
                <div className={`flex items-center gap-3 mb-6 ${group.color}`}>
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                </div>
                <ul className="space-y-4">
                  {group.benefits.map((benefit, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors">
                          <Check className={`w-3 h-3 ${group.color}`} />
                        </div>
                        <span className="text-text-secondary text-sm leading-relaxed">{benefit}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};