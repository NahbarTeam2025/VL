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
    <section id="contact" className="py-24 bg-bg-secondary border-t border-border relative overflow-hidden" aria-labelledby="contact-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/10 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="contact-title" className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 text-white">Bereit für den <br /> <span className="text-blue-500">Durchbruch?</span></h2>
          <p className="text-lg sm:text-xl text-text-secondary font-light">Lassen Sie uns Ihre Architektur gemeinsam validieren. Starten Sie jetzt Ihre kostenfreie Erst-Analyse.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-200 p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {status === 'success' ? (
              <div className="text-center py-20 animate-fadeInUp relative z-10">
                <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Anfrage gesendet</h3>
                <p className="text-slate-700 text-lg mb-10">Wir haben Ihren E-Mail-Client vorbereitet. Bitte senden Sie die Nachricht ab.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:text-blue-800 transition-colors focus-visible:outline-blue-600">Formular zurücksetzen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group/field">
                    <label htmlFor="name" className="block text-xs font-black text-black uppercase mb-3 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Vollständiger Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-black placeholder:text-black focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="group/field">
                    <label htmlFor="email" className="block text-xs font-black text-black uppercase mb-3 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-black placeholder:text-black focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="maxmustermann@web.de"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group/field">
                  <label htmlFor="website" className="block text-xs font-black text-black uppercase mb-3 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Unternehmens-Webseite (URL)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-black placeholder:text-black focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    placeholder="https://www.company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
                
                <div className="group/field">
                  <label htmlFor="message" className="block text-xs font-black text-black uppercase mb-3 tracking-[0.2em] group-focus-within/field:text-blue-600 transition-colors">Status Quo / Herausforderung</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-black placeholder:text-black focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                    placeholder="Wo stehen Sie aktuell?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start gap-4 p-6 bg-blue-50/30 rounded-2xl border border-blue-100">
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
                      onClick={onOpenDatenschutz} 
                      className="text-blue-600 underline font-bold bg-transparent border-none p-0 cursor-pointer hover:text-blue-800 transition-colors focus-visible:outline-blue-600"
                    >
                      Datenschutz
                    </button>
                    .*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-blue-500/50"
                >
                  <span className="text-xl">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
                  <div className="flex items-center h-6">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      required
                      className="w-6 h-6 rounded border-green-300 bg-white text-green-600 focus:ring-green-500 cursor-pointer"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    />
                  </div>
                  <label htmlFor="agreement" className="text-sm text-slate-700 leading-relaxed cursor-pointer select-none">
                    Ich willige ein, dass meine Angaben zur Kontaktaufnahme gespeichert werden.{" "}
                    <button 
                      type="button" 
                      onClick={onOpenDatenschutz} 
                      className="text-green-700 underline font-bold bg-transparent border-none p-0 cursor-pointer hover:text-green-800 transition-colors focus-visible:outline-green-600"
                    >
                      Datenschutz
                    </button>
                    .*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-500/20 transition-all flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-green-500/50"
                >
                  <span className="text-xl">Jetzt kostenlos analysieren</span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};