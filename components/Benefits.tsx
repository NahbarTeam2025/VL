import React from 'react';
import { Building2, User, Briefcase } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

const GradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-blue-500 hover:to-purple-500 transition-all duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative h-full bg-bg-secondary rounded-2xl overflow-hidden">
      {children}
    </div>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-bg-primary relative overflow-hidden">
      <ParticlesBackground color="#3b82f6" count={30} />
      <div className="absolute inset-0 bg-dots-subtle opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ihr Vorteil</h2>
          <p className="text-text-secondary">Maßgeschneiderter Impact für jede Unternehmensgröße.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          <GradientCard>
            <div className="p-8 text-center h-full flex flex-col items-center">
              <Building2 className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-xl font-bold text-text-primary mb-4">Für Unternehmen</h3>
              <ul className="space-y-3 text-text-secondary text-sm text-left w-full">
                <li className="flex gap-2"><span className="text-accent-primary shrink-0">•</span> Skalierbare Sichtbarkeit ohne Ad-Spend</li>
                <li className="flex gap-2"><span className="text-accent-primary shrink-0">•</span> Dominanz in der Marktnische</li>
                <li className="flex gap-2"><span className="text-accent-primary shrink-0">•</span> Langfristiger Markenaufbau</li>
              </ul>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="p-8 text-center h-full flex flex-col items-center">
              <User className="w-10 h-10 text-accent-secondary mb-6" />
              <h3 className="text-xl font-bold text-text-primary mb-4">Für Selbstständige</h3>
              <ul className="space-y-3 text-text-secondary text-sm text-left w-full">
                <li className="flex gap-2"><span className="text-accent-secondary shrink-0">•</span> Zeitersparnis durch Automation</li>
                <li className="flex gap-2"><span className="text-accent-secondary shrink-0">•</span> Expertenstatus in der Branche</li>
                <li className="flex gap-2"><span className="text-accent-secondary shrink-0">•</span> Bezahlbare High-End Strategie</li>
              </ul>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="p-8 text-center h-full flex flex-col items-center">
              <Briefcase className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-text-primary mb-4">Für Agenturen</h3>
              <ul className="space-y-3 text-text-secondary text-sm text-left w-full">
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">•</span> White-Label Lösungen</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">•</span> Schnellere Delivery für Kunden</li>
                <li className="flex gap-2"><span className="text-purple-400 shrink-0">•</span> Wissenschaftlich fundierte Reports</li>
              </ul>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
};
