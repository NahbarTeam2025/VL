import React, { useState } from 'react';
import { Send, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onOpenDatenschutz: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenDatenschutz }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    agreement: false
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) return;
    const subject = `Inquiry VisibilityLab: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AWebsite: ${formData.website}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:roberterbach@web.de?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 lg:mb-8">Bereit für den <br /> <span className="text-blue-500">Durchbruch?</span></h2>
          <p className="text-lg sm:text-xl text-text-secondary font-light">Lassen Sie uns Ihre Architektur gemeinsam validieren. Starten Sie jetzt Ihre kostenfreie Erst-Analyse.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-16 rounded-[2.5rem] shadow-premium">
            {status === 'success' ? (
              <div className="text-center py-20 animate-fadeIn">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-400">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Initiated</h3>
                <p className="text-text-secondary text-lg mb-10">Wir haben Ihren E-Mail-Client vorbereitet. Bitte senden Sie die Nachricht ab.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-400 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Formular zurücksetzen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs font-black text-text-muted uppercase mb-3 tracking-[0.2em] group-focus-within:text-blue-400 transition-colors">Vollständiger Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-xs font-black text-text-muted uppercase mb-3 tracking-[0.2em] group-focus-within:text-blue-400 transition-colors">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all"
                      placeholder="maxmustermann@web.de"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="website" className="block text-xs font-black text-text-muted uppercase mb-3 tracking-[0.2em] group-focus-within:text-blue-400 transition-colors">Unternehmens-Webseite (URL)</label>
                  <input
                    type="url"
                    id="website"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all"
                    placeholder="https://www.company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-xs font-black text-text-muted uppercase mb-3 tracking-[0.2em] group-focus-within:text-blue-400 transition-colors">Status Quo / Herausforderung</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all resize-none"
                    placeholder="Wo stehen Sie aktuell?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                  <div className="flex items-center h-6">
                    <input
                      id="agreement"
                      type="checkbox"
                      required
                      className="w-5 h-5 rounded border-white/10 bg-bg-secondary text-blue-500 focus:ring-blue-500 cursor-pointer"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    />
                  </div>
                  <label htmlFor="agreement" className="text-xs text-text-secondary leading-relaxed cursor-pointer select-none">
                    Ich willige ein, dass meine Angaben zur Kontaktaufnahme gespeichert werden.{" "}
                    <button 
                      type="button" 
                      onClick={onOpenDatenschutz} 
                      className="text-blue-400 underline font-bold bg-transparent border-none p-0 cursor-pointer hover:text-blue-300 transition-colors"
                    >
                      Datenschutz
                    </button>
                    .*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-5 rounded-2xl shadow-premium hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
                >
                  <span className="text-lg">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};