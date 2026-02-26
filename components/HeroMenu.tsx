import React from 'react';
import { motion } from 'framer-motion';

export const HeroMenu: React.FC = () => {
  const menuItems = [
    { name: 'USP', href: '#usp' },
    { name: 'Benefits', href: '#benefit' },
    { name: 'Leistungsspektrum', href: '#leistung' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Download', href: '#download' },
    { name: 'Über mich', href: '#about-me' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative z-30 -mt-10 mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Hauptnavigation"
    >
      <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl bg-bg-secondary border border-border shadow-lg glass-morphism">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={handleScroll}
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
