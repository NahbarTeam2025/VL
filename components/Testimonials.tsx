import React from 'react';
import { Star } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Michael S.",
    role: "Geschäftsführer, SaaS Startup",
    text: "Endlich ein System, das man versteht. Unsere Sichtbarkeit hat sich in 3 Monaten verdoppelt."
  },
  {
    name: "Sarah K.",
    role: "Marketing Leitung, B2B",
    text: "Die Kombination aus technischem SEO und echtem Content-Fokus ist unschlagbar."
  },
  {
    name: "Thomas M.",
    role: "Gründer, E-Commerce",
    text: "Wir ranken jetzt für Begriffe, die vorher unerreichbar schienen. Absolute Empfehlung."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-secondary relative overflow-hidden">
      <ParticlesBackground color="#4FD1FF" count={20} />
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-text-head">Das sagen unsere Kunden</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Messbare Ergebnisse und nachhaltiges Wachstum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 [.light_&]:bg-white backdrop-blur-xl p-8 rounded-2xl border border-white/10 [.light_&]:border-slate-200 hover:border-[#4FD1FF]/30 transition-colors relative overflow-hidden group [.light_&]:shadow-xl"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ y: "10%" }}
                whileInView={{ y: "-10%" }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4FD1FF] text-[#4FD1FF]" />
                  ))}
                </div>
                <p className="text-text-secondary italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="text-white [.light_&]:text-text-head font-bold">{testimonial.name}</p>
                  <p className="text-text-muted [.light_&]:text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
