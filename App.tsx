import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { Menu, X, Info, ArrowUp } from 'lucide-react';

// Lazy-load components that are not immediately visible
const Problem = lazy(() => import('./components/Problem').then(module => ({ default: module.Problem })));
const Solution = lazy(() => import('./components/Solution').then(module => ({ default: module.Solution })));
const Agents = lazy(() => import('./components/Agents').then(module => ({ default: module.Agents })));
const Methodology = lazy(() => import('./components/Methodology').then(module => ({ default: module.Methodology })));
const Benefits = lazy(() => import('./components/Benefits').then(module => ({ default: module.Benefits })));
const DetailedBenefits = lazy(() => import('./components/DetailedBenefits').then(module => ({ default: module.DetailedBenefits })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const Modal = lazy(() => import('./components/Modal').then(module => ({ default: module.Modal })));
const Impressum = lazy(() => import('./components/legal/Impressum').then(module => ({ default: module.Impressum })));
const Datenschutz = lazy(() => import('./components/legal/Datenschutz').then(module => ({ default: module.Datenschutz })));

const Loader = () => (
  <div className="flex justify-center items-center py-20 text-text-secondary">
    Lade Sektion...
  </div>
);

const CookieBanner = () => {
  const [show, setShow] = useState(() => !localStorage.getItem('visibility_lab_consent'));

  const accept = () => {
    localStorage.setItem('visibility_lab_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[200] bg-bg-secondary border border-white/10 p-5 rounded-3xl shadow-2xl backdrop-blur-2xl">
      <div className="flex gap-4 items-center mb-4 text-xs text-text-secondary leading-relaxed">
        <Info className="w-5 h-5 text-blue-500 shrink-0" />
        <p>Wir nutzen technisch notwendige Cookies für die Systemstabilität.</p>
      </div>
      <button onClick={accept} className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all">Akzeptieren</button>
    </div>
  );
};

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-blue-600/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="Nach oben scrollen"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};


export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Problem', href: '#market-inefficiency' },
    { title: 'System', href: '#agents' },
    { title: 'Methodik', href: '#methodology' },
    { title: 'Prozess', href: '#process' },
    { title: 'Kontakt', href: '#contact' }
  ];
  
  const handleMenuScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-blue-600 selection:text-white scroll-smooth">
      <nav className="fixed top-0 w-full z-[100] bg-bg-primary/75 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 group-hover:text-blue-400 transition-colors">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
             </svg>
            <span className="font-bold tracking-tighter text-white">VisibilityLab</span>
          </a>

          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-text-secondary hover:text-white transition-colors relative z-[110]"
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black h-screen z-[105] flex flex-col items-center justify-center gap-8 animate-fadeIn">
            {menuItems.map(item => (
              <a key={item.title} href={item.href} onClick={handleMenuScroll} className="text-4xl font-black text-white hover:text-blue-500 transition-all">{item.title}</a>
            ))}
            <div className="mt-12 flex gap-6 text-[10px] font-bold uppercase tracking-widest text-text-muted">
              <button onClick={() => { setLegalModal('impressum'); setIsMenuOpen(false); }}>Impressum</button>
              <button onClick={() => { setLegalModal('datenschutz'); setIsMenuOpen(false); }}>Datenschutz</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Problem />
          <Solution />
          <Agents />
          <Methodology />
          <Benefits />
          <DetailedBenefits />
          <Process />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onOpenImpressum={() => setLegalModal('impressum')} onOpenDatenschutz={() => setLegalModal('datenschutz')} />
      </Suspense>

      <CookieBanner />
      <BackToTopButton />

      {legalModal && (
        <Suspense fallback={null}>
          <Modal onClose={() => setLegalModal(null)} title={legalModal === 'impressum' ? 'Impressum' : 'Datenschutz'}>
            {legalModal === 'impressum' ? <Impressum /> : <Datenschutz />}
          </Modal>
        </Suspense>
      )}
    </div>
  );
}