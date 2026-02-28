import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/Hero';

const USP = lazy(() => import('./components/USP').then(m => ({ default: m.USP })));
const Benefits = lazy(() => import('./components/Benefits').then(m => ({ default: m.Benefits })));
const Methodology = lazy(() => import('./components/Methodology').then(m => ({ default: m.Methodology })));
const CaseStudy = lazy(() => import('./components/CaseStudy').then(m => ({ default: m.CaseStudy })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const DownloadCTA = lazy(() => import('./components/DownloadCTA').then(m => ({ default: m.DownloadCTA })));
const AboutMe = lazy(() => import('./components/AboutMe').then(m => ({ default: m.AboutMe })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const App: React.FC = () => {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex flex-col gap-y-8 md:gap-y-12">
        <Hero id="hero" />
        <Suspense fallback={<div className="min-h-screen bg-bg-primary"></div>}>
          <USP id="usp" /> {/* USP */}
          <Benefits id="benefit" /> {/* Benefit */}
          <Methodology id="leistung" /> {/* Leistungsspektrum */}
          <CaseStudy id="case-study" />
          <DownloadCTA id="download" /> {/* PDF Download */}
          <AboutMe id="about-me" />
          <Testimonials id="testimonials" />
          <FAQ id="faq" />
          <Contact id="contact" />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer id="agb" />
      </Suspense>
    </div>
  );
};

export default App;
