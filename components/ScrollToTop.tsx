import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(79,209,255,0.4)] hover:border-[#4FD1FF]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1FF]/50 group overflow-hidden"
            aria-label="Nach oben scrollen"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:text-[#4FD1FF] transition-colors duration-300" />
          </motion.button>
      )}
    </AnimatePresence>
  );
};
