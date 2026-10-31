import React, { useState } from 'react';
import { 
  StoryInput, 
  StoryMood, 
  StoryLength, 
  StoryPersonality 
} from '../types';
import { STORY_PRESETS } from '../services/gemmaEngine';
import { 
  Sparkles, 
  Dices, 
  Flame, 
  Skull, 
  Clock, 
  MapPin, 
  User, 
  Disc, 
  Ghost,
  Loader2,
  CheckCircle2
} from 'lucide-react';

interface StoryGeneratorProps {
  onGenerate: (input: StoryInput) => Promise<void>;
  isGenerating: boolean;
}

const MOODS: { label: StoryMood; desc: string }[] = [
  { label: 'Mysterious', desc: 'Cryptic signals & unexplained anomalies' },
  { label: 'Terrifying', desc: 'Visceral dread & immediate peril' },
  { label: 'Psychological Horror', desc: 'Paranoia & shifting reality' },
  { label: 'Supernatural', desc: 'Spectral entities beyond physics' },
  { label: 'Sci-Fi Horror', desc: 'Sentient algorithms & cold tech' },
  { label: 'Dark Comedy', desc: 'Morbid absurdity in digital hell' },
];

const LENGTHS: { label: StoryLength; words: string }[] = [
  { label: 'Short', words: '~350 words' },
  { label: 'Medium', words: '~650 words' },
  { label: 'Long', words: '~1000+ words' },
];

const PERSONALITIES: { label: StoryPersonality; color: string; desc: string }[] = [
  { label: 'Friendly Ghost', color: 'text-emerald-400', desc: 'Melancholy, helpful, seeking peace' },
  { label: 'Evil Digital Spirit', color: 'text-rose-400', desc: 'Corrosive, malicious, hungry' },
  { label: 'Mysterious AI', color: 'text-cyan-400', desc: 'Cold mathematical inevitability' },
  { label: 'Revenge-Seeking Entity', color: 'text-amber-400', desc: 'Settling an ancient unlogged debt' },
];

const RANDOM_IDEAS = [
  "A Y2K patch that was meant to prevent the millennium bug awoke something dormant in the banking mainframe.",
  "An old graphics card begins rendering frames of a room you have never lived in, with someone standing behind you.",
  "The unreleased 1996 operating system had an undo button that rewinds real-world physical events.",
  "A git repository commit dated 1974 begins submitting pull requests to alter human nervous system maps.",
  "Every time this modem connects, the line noise spells out the names of passengers on a missing flight."
];

export const StoryGenerator: React.FC<StoryGeneratorProps> = ({ 
  onGenerate, 
  isGenerating 
}) => {
  const [idea, setIdea] = useState<string>(
    'An abandoned submarine sonar processor salvaged from the Arctic begins translating whale vocalizations into machine assembly code.'
  );
  const [character, setCharacter] = useState<string>('Dr. Aris Thorne, Acoustic Signal Analyst');
  const [location, setLocation] = useState<string>('Decommissioned Svalbard Research Bunker');
  const [object, setObject] = useState<string>('A corroded reel-to-reel magnetic tape deck marked "DO NOT PLAYBACK"');
  const [mood, setMood] = useState<StoryMood>('Psychological Horror');
  const [length, setLength] = useState<StoryLength>('Medium');
  const [personality, setPersonality] = useState<StoryPersonality>('Mysterious AI');
  const [activePresetIndex, setActivePresetIndex] = useState<number | null>(null);

  const handleApplyPreset = (index: number) => {
    const preset = STORY_PRESETS[index];
    setIdea(preset.input.idea);
    setCharacter(preset.input.character);
    setLocation(preset.input.location);
    setObject(preset.input.object);
    setMood(preset.input.mood);
    setLength(preset.input.length);
    setPersonality(preset.input.personality);
    setActivePresetIndex(index);
  };

  const handleRandomizeIdea = () => {
    const random = RANDOM_IDEAS[Math.floor(Math.random() * RANDOM_IDEAS.length)];
    setIdea(random);
    setActivePresetIndex(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || !character.trim() || !location.trim() || !object.trim()) {
      return;
    }
    onGenerate({
      idea,
      character,
      location,
      object,
      mood,
      length,
      personality
    });
  };

  return (
    <section id="generator" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-purple-400">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Gemma 2 Neural Story Weaver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Summon Your Story
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inject your characters, cursed hardware, and location. Watch Google Gemma 2 weave the narrative threads into digital nightmare.
          </p>
        </div>

        {/* Quick Inspiration Presets */}
        <div className="mb-8">
          <div className="text-xs font-mono-code text-slate-400 mb-3 flex items-center justify-between">
            <span>QUICK PRESETS (ONE-CLICK SEEDS):</span>
            <span className="text-purple-400">5 Curated Scenarios</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {STORY_PRESETS.map((preset, idx) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => handleApplyPreset(idx)}
                className={`p-3 text-left rounded-xl border text-xs transition-all ${
                  activePresetIndex === idx
                    ? 'bg-purple-950/80 border-purple-500 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-purple-800/60 hover:bg-slate-800/50'
                }`}
              >
                <div className="font-semibold text-slate-200 truncate">{preset.name}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{preset.tagline}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Generator Form Card */}
        <form 
          onSubmit={handleSubmit}
          className="rounded-2xl border border-purple-900/40 bg-[#090714]/80 p-6 sm:p-8 backdrop-blur-xl card-glow-purple space-y-8"
        >
          {/* Story Idea with Randomizer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="story-idea" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Skull className="w-4 h-4 text-purple-400" />
                <span>Story Premise / Idea</span>
              </label>
              <button
                type="button"
                onClick={handleRandomizeIdea}
                className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 font-mono-code transition-colors"
              >
                <Dices className="w-3.5 h-3.5" />
                <span>Randomize Premise</span>
              </button>
            </div>
            <textarea
              id="story-idea"
              rows={3}
              value={idea}
              onChange={(e) => { setIdea(e.target.value); setActivePresetIndex(null); }}
              placeholder="What strange digital horror occurs? e.g. A cursed compiler, ghost in the network..."
              required
              className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm leading-relaxed"
            />
          </div>

          {/* Three Parameters Grid: Character, Location, Object */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Character */}
            <div className="space-y-2">
              <label htmlFor="character" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <User className="w-4 h-4 text-orange-400" />
                <span>Main Character</span>
              </label>
              <input
                id="character"
                type="text"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                placeholder="e.g. Elena Vance, Senior SysAdmin"
                required
                className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Eerie Setting / Location</span>
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Subterranean Server Vault 4B"
                required
                className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Mysterious Object */}
            <div className="space-y-2">
              <label htmlFor="object" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Disc className="w-4 h-4 text-amber-400" />
                <span>Mysterious / Cursed Object</span>
              </label>
              <input
                id="object"
                type="text"
                value={object}
                onChange={(e) => setObject(e.target.value)}
                placeholder='e.g. Floppy labeled "DO_NOT_BOOT"'
                required
                className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

          </div>

          {/* Horror Mood Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Ghost className="w-4 h-4 text-purple-400" />
              <span>Story Mood</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {MOODS.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setMood(m.label)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    mood === m.label
                      ? 'bg-purple-900/40 border-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold text-xs text-slate-200">{m.label}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Personality and Length Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            
            {/* Story Personality */}
            <div className="md:col-span-7 space-y-3">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Story Personality (Entity Attitude)</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {PERSONALITIES.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setPersonality(p.label)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      personality === p.label
                        ? 'bg-orange-950/30 border-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.25)]'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className={`font-semibold text-xs ${p.color}`}>{p.label}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Length */}
            <div className="md:col-span-5 space-y-3">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Story Length</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {LENGTHS.map((l) => (
                  <button
                    key={l.label}
                    type="button"
                    onClick={() => setLength(l.label)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      length === l.label
                        ? 'bg-purple-900/50 border-purple-500 text-white shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-xs text-slate-200">{l.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{l.words}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Gemma 2 Open-Weight Pipeline Ready · Zero External API Key Required</span>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className={`w-full sm:w-auto px-8 py-4 text-sm font-bold text-white rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(147,51,234,0.4)] ${
                isGenerating
                  ? 'bg-purple-900/60 cursor-not-allowed opacity-80'
                  : 'bg-gradient-to-r from-purple-600 via-orange-600 to-amber-600 hover:from-purple-500 hover:via-orange-500 hover:to-amber-500 active:scale-[0.98]'
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-orange-300" />
                  <span>Summoning from Gemma Neural Core...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Ghost Story</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};
