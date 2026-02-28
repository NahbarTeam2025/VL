import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground color="#ffffff" count={30} />
      </div>
      <div 
        className="relative z-10 bg-gradient-to-br from-[#15305b] via-[#0d1f3d] to-[#050b14] backdrop-blur-2xl w-full max-w-2xl max-h-[90vh] rounded-2xl border border-[#4FD1FF]/30 shadow-[0_8px_32px_rgba(79,209,255,0.15)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#4FD1FF]/20 bg-black/20 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-text-secondary leading-relaxed space-y-4 bg-black/20 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  );
};