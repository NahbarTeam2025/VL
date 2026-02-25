import React from 'react';
import { Building2, User, Briefcase } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ihr Vorteil</h2>
          <p className="text-text-secondary">Maßgeschneiderter Impact für jede Unternehmensgröße.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          <div className="p-8 rounded-2xl bg-bg-primary border border-border hover:border-accent-primary/50 transition-all text-center">
            <Building2 className="w-10 h-10 text-accent-primary mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-text-primary mb-4">Für Unternehmen</h3>
            <ul className="space-y-3 text-text-secondary text-sm inline-block text-left">
              <li className="flex gap-2"><span className="text-accent-primary">•</span> Skalierbare Sichtbarkeit ohne Ad-Spend</li>
              <li className="flex gap-2"><span className="text-accent-primary">•</span> Dominanz in der Marktnische</li>
              <li className="flex gap-2"><span className="text-accent-primary">•</span> Langfristiger Markenaufbau</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-bg-primary border border-border hover:border-accent-primary/50 transition-all text-center">
            <User className="w-10 h-10 text-accent-secondary mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-text-primary mb-4">Für Selbstständige</h3>
            <ul className="space-y-3 text-text-secondary text-sm inline-block text-left">
              <li className="flex gap-2"><span className="text-accent-secondary">•</span> Zeitersparnis durch Automation</li>
              <li className="flex gap-2"><span className="text-accent-secondary">•</span> Expertenstatus in der Branche</li>
              <li className="flex gap-2"><span className="text-accent-secondary">•</span> Bezahlbare High-End Strategie</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-bg-primary border border-border hover:border-accent-primary/50 transition-all text-center">
            <Briefcase className="w-10 h-10 text-purple-400 mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-text-primary mb-4">Für Agenturen</h3>
            <ul className="space-y-3 text-text-secondary text-sm inline-block text-left">
              <li className="flex gap-2"><span className="text-purple-400">•</span> White-Label Lösungen</li>
              <li className="flex gap-2"><span className="text-purple-400">•</span> Schnellere Delivery für Kunden</li>
              <li className="flex gap-2"><span className="text-purple-400">•</span> Wissenschaftlich fundierte Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};