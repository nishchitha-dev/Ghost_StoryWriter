import React from 'react';
import { Ghost, Terminal } from 'lucide-react';

interface FooterProps {
  onScrollToGenerator: () => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onScrollToGenerator,
  onOpenDeployModal
}) => {
  return (
    <footer className="border-t border-purple-950/60 bg-[#030206] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Mission */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-base font-bold font-display text-white">
              <span role="img" aria-label="Ghost">👻</span>
              <span>GhostWriter</span>
            </div>
            <p className="text-xs text-slate-400">
              "Every machine has a story. Some should never be told."
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <button 
              onClick={onScrollToGenerator}
              className="hover:text-purple-300 transition-colors"
            >
              Story Generator
            </button>
            <a 
              href="#inside-machine" 
              className="hover:text-purple-300 transition-colors"
            >
              Gemma Architecture
            </a>
            <a 
              href="#features" 
              className="hover:text-purple-300 transition-colors"
            >
              Features
            </a>
            <button 
              onClick={onOpenDeployModal}
              className="hover:text-orange-300 transition-colors flex items-center gap-1"
            >
              <Terminal className="w-3 h-3" />
              <span>Render Deployment</span>
            </button>
          </div>

          {/* Copyright & Hacktoberfest */}
          <div className="text-xs text-slate-500 font-mono-code text-center md:text-right space-y-1">
            <div>Hacktoberfest · Best Use of Gemma Track</div>
            <div>MIT License · Powered by Google Gemma 2</div>
          </div>

        </div>
      </div>
    </footer>
  );
};
