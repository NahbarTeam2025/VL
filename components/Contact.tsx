import React, { useState } from 'react';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { Modal } from './Modal';
import { DatenschutzContent } from './DatenschutzContent';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    message: '',
    agreement: false
  });
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) return;

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-bg-primary relative overflow-hidden" aria-labelledby="contact-title">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent"></div>
      <ParticlesBackground color="#3b82f6" count={30} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id="contact-title" className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-text-head leading-tight">Bereit für den <br /> <span className="text-blue-500">nächsten Schritt?</span></h2>
          <p className="text-base md:text-lg text-text-secondary font-light">
            <span className="lg:whitespace-nowrap block">Wir analysieren deine bestehende Struktur und zeigen dir konkret, wo Optimierung möglich ist.</span>
            <span className="block mt-2">Die Erst-Analyse ist kostenfrei und unverbindlich.</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative group rounded-[2.5rem] p-[1px] bg-gradient-to-br from-[#4FD1FF]/30 via-[#2F80FF]/30 to-[#4FD1FF]/30 animate-gradient-pan">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF] to-[#2F80FF] blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative bg-[#050b14]/95 [.light_&]:bg-white backdrop-blur-xl p-5 md:p-8 rounded-[2.4rem] shadow-2xl [.light_&]:shadow-xl overflow-hidden border border-white/5 [.light_&]:border-blue-100">
              {status === 'success' ? (
              <div className="text-center py-12 animate-fadeInUp relative z-10">
                <div className="w-16 h-16 bg-[#4FD1FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4FD1FF]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text-head mb-2">Anfrage gesendet</h3>
                <p className="text-text-secondary text-sm mb-6">Vielen Dank für deine Nachricht! Wir werden uns in Kürze bei dir melden.</p>
                <button onClick={() => setStatus('idle')} className="text-[#4FD1FF] font-bold uppercase tracking-widest text-xs hover:text-text-head transition-colors focus-visible:outline-[#4FD1FF]">Formular zurücksetzen</button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4 relative z-10"
                name="kontaktformular"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Netlify Hidden Fields */}
                <input type="hidden" name="form-name" value="kontaktformular" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group/field">
                    <label htmlFor="name" className="block text-[10px] font-black text-text-secondary uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-[#4FD1FF] transition-colors">Vollständiger Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-white/5 [.light_&]:bg-slate-50 border border-white/10 [.light_&]:border-slate-200 rounded-xl px-4 py-2.5 text-sm text-white [.light_&]:text-text-primary placeholder:text-white/20 [.light_&]:placeholder:text-slate-400 focus:outline-none focus:border-[#4FD1FF] focus:ring-4 focus:ring-[#4FD1FF]/10 transition-all"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="group/field">
                    <label htmlFor="email" className="block text-[10px] font-black text-text-secondary uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-[#4FD1FF] transition-colors">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-white/5 [.light_&]:bg-slate-50 border border-white/10 [.light_&]:border-slate-200 rounded-xl px-4 py-2.5 text-sm text-white [.light_&]:text-text-primary placeholder:text-white/20 [.light_&]:placeholder:text-slate-400 focus:outline-none focus:border-[#4FD1FF] focus:ring-4 focus:ring-[#4FD1FF]/10 transition-all"
                      placeholder="maxmustermann@web.de"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group/field">
                  <label htmlFor="status" className="block text-[10px] font-black text-text-secondary uppercase mb-1.5 tracking-[0.2em] group-focus-within/field:text-[#4FD1FF] transition-colors">Status Quo / Herausforderung</label>
                  <textarea
                    id="status"
                    name="nachricht"
                    required
                    rows={3}
                    className="w-full bg-white/5 [.light_&]:bg-slate-50 border border-white/10 [.light_&]:border-slate-200 rounded-xl px-4 py-2.5 text-sm text-white [.light_&]:text-text-primary placeholder:text-white/20 [.light_&]:placeholder:text-slate-400 focus:outline-none focus:border-[#4FD1FF] focus:ring-4 focus:ring-[#4FD1FF]/10 transition-all resize-none"
                    placeholder="Beschreibe kurz deine aktuelle Situation und dein Ziel..."
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 [.light_&]:bg-slate-50 rounded-xl border border-white/10 [.light_&]:border-slate-200">
                  <div className="flex items-center h-6">
                    <input
                      id="agreement"
                      name="datenschutz"
                      type="checkbox"
                      required
                      className="w-6 h-6 rounded border-white/20 [.light_&]:border-slate-300 bg-white/10 [.light_&]:bg-white text-[#4FD1FF] focus:ring-[#4FD1FF] cursor-pointer"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    />
                  </div>
                  <label htmlFor="agreement" className="text-sm text-text-secondary leading-relaxed cursor-pointer select-none">
                    Ich willige ein, dass meine Angaben zur Kontaktaufnahme gespeichert werden.{" "}
                    <button 
                      type="button" 
                      onClick={() => setIsDatenschutzOpen(true)}
                      className="text-[#4FD1FF] underline font-bold bg-transparent border-none p-0 cursor-pointer hover:text-text-head transition-colors focus-visible:outline-[#4FD1FF]"
                    >
                      Datenschutz
                    </button>
                    .*
                  </label>
                </div>

                <button
                  type="submit"
                  className="relative overflow-hidden w-full bg-gradient-to-r from-[#4FD1FF] via-[#2F80FF] to-[#4FD1FF] bg-[length:200%_auto] hover:bg-[position:right_center] text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(47,128,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-[#4FD1FF]/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
                  <span className="text-lg relative z-10">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                </button>
                <p className="text-center text-xs text-text-secondary mt-2">Antwort innerhalb von 24 Stunden.</p>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
      
      {isDatenschutzOpen && (
        <Modal title="Datenschutz" onClose={() => setIsDatenschutzOpen(false)}>
          <DatenschutzContent />
        </Modal>
      )}
    </section>
  );
};
