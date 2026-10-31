import React from 'react';
import { Sparkles, Cpu, BookOpen, ArrowRight, Ghost } from 'lucide-react';

interface HeroProps {
  onScrollToGenerator: () => void;
  onScrollToGemma: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onScrollToGenerator, 
  onScrollToGemma 
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-orange-400">
              <span className="flex items-center gap-1">
                <Ghost className="w-3.5 h-3.5 text-purple-400" />
                Hacktoberfest Challenge
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Best Use of Gemma</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Google Open Weights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              Stories from <br />
              <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-amber-300 bg-clip-text text-transparent glow-purple">
                Beyond the Machine
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-200/90 font-medium italic">
              "Every machine has a story. Some should never be told."
            </p>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Step into the realm of haunted computers, sentient compiler errors, cursed algorithms, and digital ghosts. 
              Powered by Google’s authentic <span className="text-orange-400 font-semibold">Gemma 2 open-weight model</span>, GhostWriter transforms your deepest techno-fears into unforgettable supernatural horror literature.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onScrollToGenerator}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg hover:from-purple-500 hover:to-orange-500 transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Create Your Ghost Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToGemma}
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-purple-900/50 rounded-lg transition-colors flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Inside Gemma 2</span>
              </button>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-xl font-bold font-mono-code text-purple-300">Gemma 2</div>
                <div className="text-xs text-slate-400">9B & 2B Open Weights</div>
              </div>
              <div>
                <div className="text-xl font-bold font-mono-code text-orange-400">4 Endings</div>
                <div className="text-xs text-slate-400">Branching Fate Matrix</div>
              </div>
              <div>
                <div className="text-xl font-bold font-mono-code text-amber-300">0 API Key</div>
                <div className="text-xs text-slate-400">Instant Execution</div>
              </div>
            </div>

          </div>

          {/* Right Column: Marquee Visual Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 card-glow-purple bg-purple-950/20 group">
              {/* Scanline layer */}
              <div className="absolute inset-0 crt-scanlines opacity-40 pointer-events-none z-10" />
              
              {/* Image asset generated via generate_image */}
              <img
                src="/src/assets/images/hero_digital_ghost_1793447512613.jpg"
                alt="A haunted retro computer monitor with a translucent digital ghost emerging in an abandoned server room"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05040a] via-black/40 to-transparent z-10" />

              {/* Scrim Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono-code text-orange-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    LIVE MODEL ENGINE
                  </span>
                  <span>Gemma-2-9b-it</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">
                  "The screen did not power off. It just started looking back."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
