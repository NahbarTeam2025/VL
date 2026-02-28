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
    <section id="contact" className="py-20 md:py-24 bg-bg-primary border-t border-border relative overflow-hidden" aria-labelledby="contact-title">
      <ParticlesBackground color="#3b82f6" count={30} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id="contact-title" className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white leading-tight">Bereit für den <br /> <span className="text-blue-500">nächsten Schritt?</span></h2>
          <p className="text-base md:text-lg text-text-secondary font-light space-y-2 flex flex-col">
            <span>Wir analysieren Ihre bestehende Struktur und zeigen Ihnen konkret, wo Optimierung möglich ist.</span>
            <span>Die Erst-Analyse ist kostenfrei und unverbindlich.</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative group rounded-[2.5rem] p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 animate-gradient-pan">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white p-5 md:p-8 rounded-[2.4rem] shadow-2xl overflow-hidden">
              {status === 'success' ? (
              <div className="text-center py-12 animate-fadeInUp relative z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Anfrage gesendet</h3>
                <p className="text-black text-sm mb-6">Wir haben Ihren E-Mail-Client vorbereitet. Bitte senden Sie die Nachricht ab.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase tracking-widest text-xs hover:text-blue-800 transition-colors focus-visible:outline-blue-600">Formular zurücksetzen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group/field">
                    <label htmlFor="name" className="block text-[10px] font-black text-black uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Vollständiger Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="group/field">
                    <label htmlFor="email" className="block text-[10px] font-black text-black uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="maxmustermann@web.de"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group/field">
                  <label htmlFor="status" className="block text-[10px] font-black text-black uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Status Quo / Herausforderung</label>
                  <textarea
                    id="status"
                    name="status"
                    required
                    rows={3}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
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
                  className="relative overflow-hidden w-full bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-blue-500/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
                  <span className="text-lg relative z-10">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
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