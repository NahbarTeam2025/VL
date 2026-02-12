import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyBlockProps {
  title: string;
  children: React.ReactNode;
}

const CaseStudyBlock: React.FC<CaseStudyBlockProps> = ({ title, children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 py-8 border-t border-white/5">
    <div className="lg:col-span-1">
      <h3 className="text-lg font-bold text-blue-400 sticky top-24">{title}</h3>
    </div>
    <div className="lg:col-span-2 text-text-secondary space-y-4 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="text-blue-500 mt-1.5 shrink-0">•</span>
    <span>{children}</span>
  </li>
);

export const CaseStudy: React.FC = () => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="case-study" className="py-24 bg-bg-secondary/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16 relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 mt-4">Fallstudie: Digitale Positionierung einer Stadtplattform</h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto font-light">
              Wie VisibilityLab aus einem reinen Verwaltungsportal eine thematisch strukturierte Autoritätsplattform entwickelt hat.
            </p>
          </header>

          <div className="bg-bg-primary p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
            <p className="text-center text-text-secondary mb-12 italic">
              Diese Fallstudie zeigt exemplarisch, wie Analyse, Architektur und Content-Systeme zusammenspielen, um Sichtbarkeit für Suchmaschinen und KI-Systeme gleichermaßen aufzubauen.
            </p>

            <CaseStudyBlock title="Ausgangslage: Informationsportal ohne klare Positionierung">
              <p>Die Website von falkenberg-elster.de fungierte primär als klassisches Verwaltungs- und Informationsportal. Touristische Attraktivität, emotionale Bindung und thematische Differenzierung waren für Nutzer und Suchsysteme nicht klar erkennbar.</p>
              <ul className="space-y-2">
                <BulletPoint>Unklarer 3-Sekunden-Eindruck zwischen Verwaltung und Tourismus</BulletPoint>
                <BulletPoint>Keine visuelle oder semantische Hierarchie</BulletPoint>
                <BulletPoint>Eisenbahnhistorie und Kiebitz-See nicht als kombinierter USP positioniert</BulletPoint>
                <BulletPoint>Fehlende SEO-Landingpages für strategische Themen</BulletPoint>
              </ul>
            </CaseStudyBlock>

            <CaseStudyBlock title="Technische Basis & UX-Bewertung">
              <p>Die technische Grundlage war solide, zeigte jedoch Schwächen bei Interaktion, Barrierefreiheit und Performance.</p>
              <ul className="space-y-2">
                <BulletPoint>Erhöhte INP-Werte bei Formularen</BulletPoint>
                <BulletPoint>Hohe LCP-Zeiten durch nicht optimierte Header-Bilder</BulletPoint>
                <BulletPoint>Unzureichende Kontraste in Navigation und Footer</BulletPoint>
                <BulletPoint>Zu kleine Tap-Targets für mobile Nutzung</BulletPoint>
              </ul>
            </CaseStudyBlock>

            <CaseStudyBlock title="Marktumfeld & Suchverhalten">
              <p>Die Wettbewerbsanalyse zeigte, dass vergleichbare Städte bereits stärker auf visuelle Inhalte und strukturierte Fakten setzen.</p>
              <ul className="space-y-2">
                <BulletPoint>Zunehmende Nutzung von Video-Snippets in Suchergebnissen</BulletPoint>
                <BulletPoint>Nutzer stellen komplexe Fragen an KI-Systeme (GEO-Search)</BulletPoint>
                <BulletPoint>Fehlende Faktenanker führen zu Unsichtbarkeit in LLM-Antworten</BulletPoint>
                <BulletPoint>Hoher Freizeitwert pro Quadratmeter, jedoch schwache semantische Abbildung</BulletPoint>
              </ul>
            </CaseStudyBlock>
            
            <CaseStudyBlock title="Strategische Themencluster">
                <p>Die Sichtbarkeit wurde nicht über einzelne Keywords, sondern über thematische Vollständigkeit geplant.</p>
                <div className="space-y-3">
                    <p className="font-bold text-text-primary">Hauptthemen:</p>
                    <p>Kiebitz-See, Falkenberg Elster, Eisenbahnmuseum, Verwaltung & Bürgerservice</p>
                    <p className="font-bold text-text-primary">Secondary & Longtail:</p>
                    <p>Camping Brandenburg, Wandern Elbe-Elster-Land, Bürgerservice online, Workation am See</p>
                     <p className="font-bold text-text-primary">GEO-Bezug:</p>
                    <p>Ausflugsziele in meiner Nähe, Badesee Südbrandenburg</p>
                </div>
            </CaseStudyBlock>

            <CaseStudyBlock title="Architektur: Hub-and-Spoke-Modell">
                <p>Die neue Struktur basiert auf einer zentralen Pillar-Page mit thematisch klar getrennten, aber logisch vernetzten Unterseiten.</p>
                 <div className="space-y-3">
                    <p><strong className="text-text-primary">Hub:</strong> „Falkenberg/Elster: Wo Geschichte auf Erholung trifft“</p>
                    <p><strong className="text-text-primary">Spokes:</strong> Abenteuer Kiebitz-See, Digitale Verwaltung & Bürgerservice, Wirtschaftsstandort & Wohnen</p>
                    <p><strong className="text-text-primary">Zusatz:</strong> Integration kurzer Video-Touchpoints (Reels, Shorts) zur emotionalen Verstärkung</p>
                </div>
            </CaseStudyBlock>

            <CaseStudyBlock title="Autorität durch Quellen & Expertenwissen">
                <p>Zur Absicherung der thematischen Autorität (E-E-A-T) wurden überprüfbare Quellen und Expertenaussagen integriert.</p>
                 <ul className="space-y-2">
                    <BulletPoint>Offizielle Messdaten zur Wasserqualität des Kiebitz-Sees</BulletPoint>
                    <BulletPoint>Historische Einordnung durch Eisenbahn-Experten</BulletPoint>
                    <BulletPoint>Klare Faktenstrukturen für KI-Zitation</BulletPoint>
                 </ul>
            </CaseStudyBlock>

            <CaseStudyBlock title="Ergebnis: Struktur statt Zufall">
              <p>Die Fallstudie zeigt, wie durch klare Architektur, semantische Tiefe und systematische Inhalte eine Plattform entsteht, die für Nutzer, Suchmaschinen und KI-Systeme gleichermaßen verständlich ist.</p>
              <ul className="space-y-2">
                <BulletPoint>Klare Positionierung zwischen Erholung und Historie</BulletPoint>
                <BulletPoint>Verbesserte UX- und Performance-Grundlagen</BulletPoint>
                <BulletPoint>Höhere thematische Vollständigkeit</BulletPoint>
                <BulletPoint>Vorbereitung auf KI-basierte Suche</BulletPoint>
              </ul>
            </CaseStudyBlock>

          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-text-secondary mb-6">Sie möchten sehen, wie dieses System auf Ihre Website angewendet wird?</p>
            <a 
                href="#contact"
                onClick={handleScroll}
                className="inline-flex items-center justify-center gap-3 group px-8 py-4 bg-blue-600/80 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all"
            >
                Analyse anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};