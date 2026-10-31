import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';
import { ambientAudio } from '../services/ambientAudio';

interface NavbarProps {
  onScrollToGenerator: () => void;
  onOpenDeployModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onScrollToGenerator,
  onOpenDeployModal
}) => {
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const active = ambientAudio.toggleAmbient();
    setIsAudioActive(active);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05040a]/90 backdrop-blur-md border-b border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-bold font-display tracking-wider text-slate-100 hover:text-purple-300 transition-colors whitespace-nowrap shrink-0"
        >
          <span className="text-2xl" role="img" aria-label="Ghost">👻</span>
          <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            GhostWriter
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a 
            href="#generator" 
            onClick={(e) => { e.preventDefault(); onScrollToGenerator(); }}
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Story Generator
          </a>
          <a 
            href="#inside-machine" 
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Inside the Machine
          </a>
          <a 
            href="#architecture" 
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a 
            href="#features" 
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </a>
          <button 
            onClick={onOpenDeployModal}
            className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Render & GitHub</span>
          </button>
        </nav>

        {/* Zone 3: Primary action + Atmospheric audio toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleAudio}
            title={isAudioActive ? "Mute haunted drone ambiance" : "Play haunted drone ambiance"}
            className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              isAudioActive 
                ? 'bg-purple-950/80 border-purple-500/60 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]' 
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span className="hidden sm:inline text-xs">Ambiance On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Ambiance Off</span>
              </>
            )}
          </button>

          <button
            onClick={onScrollToGenerator}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg hover:from-purple-500 hover:to-orange-500 transition-all shadow-[0_0_18px_rgba(147,51,234,0.35)] whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Summon Story</span>
          </button>
        </div>

      </div>
    </header>
  );
};
