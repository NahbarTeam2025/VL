import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-bg-secondary w-full max-w-2xl max-h-[90vh] rounded-2xl border border-border shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-text-secondary leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};