/**
 * GhostWriter Spooky Audio & Narration Service
 * Uses standard Web Audio API for synthetic ambient drone soundscapes
 * and Web Speech API for eerie narration without external dependencies.
 */

class AmbientAudioService {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private lfo: OscillatorNode | null = null;
  private isSpeaking: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggleAmbient(): boolean {
    this.initContext();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient() {
    if (!this.ctx) this.initContext();
    if (!this.ctx) return;
    if (this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;

      // Master gain with smooth ramp
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, now + 3);

      // Lowpass resonant filter for dark drone sound
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(140, now);
      this.filter.Q.setValueAtTime(4, now);

      // LFO to slowly sweep filter cutoff (eerie breath)
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.15, now);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(60, now);
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);
      this.lfo.start();

      // Osc 1: Deep low-frequency drone (55Hz / A1)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sawtooth';
      this.droneOsc1.frequency.setValueAtTime(55, now);

      // Osc 2: Slightly detuned drone (54.2Hz for haunting acoustic beating)
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(54.2, now);

      // Sub Osc: Ultra-low rumble (27.5Hz / A0)
      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = 'sine';
      this.subOsc.frequency.setValueAtTime(27.5, now);

      this.droneOsc1.connect(this.filter);
      this.droneOsc2.connect(this.filter);
      this.subOsc.connect(this.filter);

      this.filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.droneOsc1.start(now);
      this.droneOsc2.start(now);
      this.subOsc.start(now);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stopAmbient() {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

      setTimeout(() => {
        try {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.subOsc?.stop();
          this.lfo?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.subOsc?.disconnect();
          this.filter?.disconnect();
          this.gainNode?.disconnect();
        } catch {
          // Ignore cleanup errors
        }
        this.isPlaying = false;
      }, 1600);
    } catch {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Spooky Web Speech Narrator
   */
  public speakStory(text: string, onEnd?: () => void, onError?: () => void): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return false;
    }

    window.speechSynthesis.cancel();

    if (this.isSpeaking) {
      this.isSpeaking = false;
      return false;
    }

    const cleanText = text.replace(/[*#_`]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Find deep or distinctive voice
    const voices = window.speechSynthesis.getVoices();
    const spookyVoice = voices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Google') || 
      v.lang.startsWith('en')
    );

    if (spookyVoice) {
      utterance.voice = spookyVoice;
    }

    utterance.pitch = 0.85; // Slightly lower, eerie pitch
    utterance.rate = 0.92;  // Deliberate, tense cadence

    utterance.onend = () => {
      this.isSpeaking = false;
      onEnd?.();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      onError?.();
    };

    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  public stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const ambientAudio = new AmbientAudioService();
