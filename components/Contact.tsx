import React, { useState } from 'react';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    message: '',
    agreement: false
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) return;
    const subject = `Inquiry VisibilityLab: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AStatus Quo / Herausforderung: ${formData.status}`;
    window.location.href = `mailto:roberterbach@web.de?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary border-t border-border relative overflow-hidden" aria-labelledby="contact-title">
      <ParticlesBackground color="#3b82f6" count={30} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/10 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 id="contact-title" className="text-[clamp(2.5rem,8vw,4.5rem)] font-black mb-6 md:mb-8 text-white leading-tight">Bereit für den <br /> <span className="text-blue-500">Durchbruch?</span></h2>
          <p className="text-base md:text-xl text-text-secondary font-light">Lassen Sie uns Ihre Architektur gemeinsam validieren. Starten Sie jetzt Ihre kostenfreie Erst-Analyse.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative group rounded-[2.5rem] p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 animate-gradient-pan">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white p-5 md:p-10 rounded-[2.4rem] shadow-2xl overflow-hidden">
              {status === 'success' ? (
              <div className="text-center py-16 animate-fadeInUp relative z-10">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Anfrage gesendet</h3>
                <p className="text-black text-base mb-8">Wir haben Ihren E-Mail-Client vorbereitet. Bitte senden Sie die Nachricht ab.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:text-blue-800 transition-colors focus-visible:outline-blue-600">Formular zurücksetzen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label htmlFor="name" className="block text-xs font-black text-black uppercase mb-2 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Vollständiger Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="group/field">
                    <label htmlFor="email" className="block text-xs font-black text-black uppercase mb-2 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="maxmustermann@web.de"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group/field">
                  <label htmlFor="status" className="block text-xs font-black text-black uppercase mb-2 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Status Quo / Herausforderung</label>
                  <textarea
                    id="status"
                    name="status"
                    required
                    rows={4}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                    placeholder="Beschreiben Sie kurz Ihre aktuelle Situation und Ihr Ziel..."
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center h-6">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      required
                      className="w-6 h-6 rounded border-blue-300 bg-white text-blue-600 focus:ring-blue-500 cursor-pointer"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    />
                  </div>
                  <label htmlFor="agreement" className="text-sm text-black leading-relaxed cursor-pointer select-none">
                    Ich willige ein, dass meine Angaben zur Kontaktaufnahme gespeichert werden.{" "}
                    <button 
                      type="button" 
                      className="text-blue-600 underline font-bold bg-transparent border-none p-0 cursor-pointer hover:text-blue-800 transition-colors focus-visible:outline-blue-600"
                    >
                      Datenschutz
                    </button>
                    .*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-blue-500/50"
                >
                  <span className="text-lg">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};