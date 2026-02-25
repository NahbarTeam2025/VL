import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Schmidt",
    role: "CEO, TechFlow Solutions",
    text: "Die algorithmische Themenautorität hat unsere organische Reichweite in nur 4 Monaten verdreifacht. Ein absoluter Gamechanger für unser B2B-Marketing.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Markus Weber",
    role: "Head of SEO, Global Retail",
    text: "Endlich ein System, das KI nicht nur als Spielerei nutzt, sondern echte strategische Tiefe bietet. Die Ergebnisse sprechen für sich.",
    image: "https://picsum.photos/seed/markus/100/100"
  },
  {
    name: "Elena Petrova",
    role: "Gründerin, CreativeHub",
    text: "Die Hub-and-Spoke Architektur ist genial. Unsere Conversion Rate ist signifikant gestiegen, da wir nun genau die richtigen Nutzer ansprechen.",
    image: "https://picsum.photos/seed/elena/100/100"
  },
  {
    name: "Thomas Meyer",
    role: "Marketing Director, FinLeap",
    text: "VisibilityLab hat uns geholfen, in einem extrem kompetitiven Markt Fuß zu fassen. Die KI-Agenten arbeiten präziser als jede Agentur.",
    image: "https://picsum.photos/seed/thomas/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-3xl md:text-5xl font-black mb-16 text-center">
        Was unsere Partner sagen
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="glass-morphism p-8 rounded-2xl flex flex-col justify-between transition-all hover:scale-[1.02] border border-white/10"
          >
            <div>
              <div className="flex gap-1 mb-6" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-8 text-text-main">
                "{t.text}"
              </blockquote>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.image} 
                alt={`Profilbild von ${t.name}`} 
                className="w-12 h-12 rounded-full border-2 border-accent-blue/30"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <cite className="text-sm text-text-secondary not-italic">{t.role}</cite>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
