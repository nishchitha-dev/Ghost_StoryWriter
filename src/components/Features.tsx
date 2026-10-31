import React from 'react';
import { 
  FastForward, 
  GitFork, 
  BrainCircuit, 
  Sparkles, 
  Radio, 
  Terminal, 
  Flame,
  Ghost
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-purple-400">
            <Ghost className="w-4 h-4 text-orange-400" />
            <span>Digital Horror Feature Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Crafted for Hacktoberfest
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every feature is engineered to showcase the full range of Google Gemma 2's reasoning, atmosphere generation, and structural narrative control.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Continue the Nightmare (Span 1) */}
          <div className="p-6 rounded-2xl bg-[#080612] border border-slate-800/80 hover:border-purple-600/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400">
              <FastForward className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Continue the Nightmare</h3>
              <p className="text-xs text-slate-400 mt-1">Autoregressive Narrative Extension</p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When a story reaches its initial cliffhanger, Gemma 2 seamlessly ingests previous context into its KV-cache and writes the next harrowing sequence without losing tonal consistency.
            </p>
          </div>

          {/* Card 2: 4 Alternative Endings (Span 2) */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-[#080612] border border-slate-800/80 hover:border-orange-600/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-800/40 flex items-center justify-center text-orange-400">
                <GitFork className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Alternative Endings Matrix</h3>
                <p className="text-xs text-slate-400 mt-1">Four Distinct Narrative Paths</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose the fate of your protagonist: a miraculous <strong>Happy Escape</strong>, a grim <strong>Tragic Demise</strong>, an <strong>Unexpected Mind-Bending Twist</strong>, or a lingering <strong>Open-Ended Haunting</strong>. Gemma customizes each resolution to the initial relic and setting.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-900">
              <div className="text-[11px] font-mono-code text-emerald-400">01. Happy</div>
              <div className="text-[11px] font-mono-code text-rose-400">02. Tragic</div>
              <div className="text-[11px] font-mono-code text-cyan-400">03. Twist</div>
              <div className="text-[11px] font-mono-code text-amber-400">04. Open</div>
            </div>
          </div>

          {/* Card 3: Visual Showcase with Cursed Server Rack (Span 2) */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-purple-900/50 bg-[#080612] relative group flex flex-col justify-between">
            <div className="p-6 relative z-10 space-y-2">
              <div className="text-xs font-mono-code text-purple-400">THE SETTING ENGINE</div>
              <h3 className="text-xl font-bold font-display text-white">Atmospheric Hardware Dread</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                Gemma grounding techniques bring vintage tech to life: flickering phosphor greens, oscillating relays, magnetic tape chatter, and the cold isolation of abandoned data vaults.
              </p>
            </div>

            <div className="relative mt-2">
              <img
                src="/src/assets/images/cursed_server_rack_1793447527003.jpg"
                alt="Corridor of abandoned server racks with tangled cables and eerie violet glow"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080612] via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 4: Decode the Nightmare (Span 1) */}
          <div className="p-6 rounded-2xl bg-[#080612] border border-slate-800/80 hover:border-cyan-600/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Decode the Nightmare</h3>
              <p className="text-xs text-slate-400 mt-1">Literary & Symbolism Analysis</p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Beyond fiction generation, Gemma operates as a literary critic—dissecting underlying psychological themes, techno-anxieties, and philosophical metaphors embedded in each tale.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
