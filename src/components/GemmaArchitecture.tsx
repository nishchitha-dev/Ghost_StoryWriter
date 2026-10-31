import React, { useState } from 'react';
import { 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Code2, 
  Terminal, 
  Zap,
  ArrowRight,
  Database
} from 'lucide-react';

export const GemmaArchitecture: React.FC = () => {
  const [selectedTokenTab, setSelectedTokenTab] = useState<'input' | 'formatted' | 'output'>('formatted');

  return (
    <section id="inside-machine" className="py-16 md:py-24 relative bg-[#040308] border-y border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-orange-400">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Technical Deep Dive · Hacktoberfest Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Inside the Ghost Machine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            How Google’s open-weight Gemma 2 model processes human input, applies architectural attention mechanisms, and generates terrifying digital fiction.
          </p>
        </div>

        {/* High-Fidelity Architecture Flow Diagram */}
        <div className="rounded-2xl border border-purple-900/50 bg-[#070511] p-6 sm:p-10 card-glow-purple relative overflow-hidden">
          <div className="text-xs font-mono-code text-slate-400 mb-6 flex items-center justify-between">
            <span>APPLICATION ARCHITECTURE PIPELINE:</span>
            <span className="text-purple-400">End-to-End Gemma 2 Integration</span>
          </div>

          {/* Flow Steps: User → Flask Backend → Gemma Model → Generated Story → Website */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: User */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-orange-400">01. INITIATION</span>
                <span className="text-lg">👤</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">User Input</div>
              <div className="text-xs text-slate-400">Story premise, character, eerie setting, and cursed relic parameters.</div>
            </div>

            {/* Step 2: Flask Backend */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-purple-400">02. ROUTING</span>
                <Database className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-sm font-semibold text-slate-100">Flask Backend</div>
              <div className="text-xs text-slate-400">Input validation, rate limiting, and exact Gemma instruction framing.</div>
            </div>

            {/* Step 3: Gemma Model */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/70 space-y-2 relative shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-amber-300">03. INFERENCE</span>
                <Cpu className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-sm font-semibold text-white">Gemma 2 Model</div>
              <div className="text-xs text-purple-200/80">google/gemma-2-9b-it running with GQA and sliding-window attention.</div>
            </div>

            {/* Step 4: Generated Story */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-orange-400">04. SYNTHESIS</span>
                <Sparkles className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-sm font-semibold text-slate-100">Generated Story</div>
              <div className="text-xs text-slate-400">Multi-paragraph horror narrative, continuations, and 4 endings.</div>
            </div>

            {/* Step 5: Website */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-emerald-400">05. RENDER</span>
                <span className="text-lg">🖥️</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">GhostWriter UI</div>
              <div className="text-xs text-slate-400">CRT scanline display, ambient synthesizer, and speech narration.</div>
            </div>

          </div>
        </div>

        {/* Why Gemma 2 is Essential Grid */}
        <div id="architecture" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Core Asset */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-purple-900/50 bg-[#070511] relative group flex flex-col justify-between">
            <div className="p-6 relative z-10">
              <div className="text-xs font-mono-code text-orange-400 mb-1">NEURAL SUBSTRATE</div>
              <h3 className="text-xl font-bold font-display text-white">The Gemma 2 Architecture</h3>
              <p className="text-xs text-slate-300 mt-2">
                Built upon the technological breakthroughs of Google's flagship Gemini models, Gemma 2 provides unprecedented creative reasoning in an open-weights form factor.
              </p>
            </div>

            <div className="relative mt-4">
              <img
                src="/src/assets/images/gemma_neural_core_1793447527745.jpg"
                alt="Gemma AI neural core floating in an obsidian chamber"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070511] via-transparent to-transparent" />
            </div>

            <div className="p-6 border-t border-purple-950/60 bg-black/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span>Model Family:</span>
                <span className="text-purple-300 font-semibold">Google Gemma 2 (9B / 2B)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span>License:</span>
                <span className="text-emerald-400">Gemma Terms of Use</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span>Vocab Size:</span>
                <span className="text-slate-200">256,000 tokens</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Architectural Innovations */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                <Layers className="w-4 h-4" />
                <span>1. Sliding Window & Global Attention</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Gemma 2 alternates between local sliding-window attention (4096 tokens) and full global attention. In supernatural horror, this allows the model to recall subtle sensory clues laid down paragraphs earlier without degrading latency or memory efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                <Zap className="w-4 h-4" />
                <span>2. Grouped-Query Attention (GQA)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By grouping key-value heads, Gemma 2 slashes KV-cache memory overhead. This enables rapid autoregressive token generation for branching storylines ("Continue the Nightmare") while running smoothly on accessible hardware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>3. Open-Weight Sovereignty & Unconstrained Fiction</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike closed APIs that over-censor fictional suspense and gothic horror tropes, Gemma 2's open weights allow genuine literary tension, uncanny dread, and dark computational horror while maintaining strict safety against real-world harm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Code2 className="w-4 h-4" />
                <span>4. Massive 256k Vocabulary</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Gemma 2 shares the Gemini vocabulary of 256,000 subwords. This allows it to effortlessly handle specialized vintage computing nomenclature (CRT phosphors, BIOS registers, EEPROMs, RS-232 serial specs) alongside evocative literary adjectives.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
