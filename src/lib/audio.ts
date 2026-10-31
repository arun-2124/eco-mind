// Web Audio API Synthesizer for ECO//MIND UI Sound Effects & Atmospheric Music
// Pure procedural audio - zero external audio assets, zero network latency

class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  private ambientNodes: { oscs: OscillatorNode[]; gain: GainNode } | null = null;
  public isAtmospherePlaying: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Soft adventure dialogue chime
  playDialogueAdvance() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(540, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  }

  // Soft UI click
  playClick() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  }

  // Choice confirmation
  playConfirm() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  }

  // Distant thunder rumble
  playThunder() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(140, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 1.8);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 1.8);
  }

  // Sustainable consequence fanfare (uplifting chord)
  playSustainableSuccess() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [440, 554.37, 659.25, 880]; // A major arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.09, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
    });
  }

  // Warning consequence alert
  playUnsustainableAlert() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.setValueAtTime(190, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  }

  // Procedural Cinematic Ambient Music Pad (The Last of Us / Firewatch moody strings)
  playAtmosphere() {
    if (!this.enabled || this.isAtmospherePlaying) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const chords = [110, 130.81, 164.81, 220]; // A minor chord (A2, C3, E3, A3)
      const oscs: OscillatorNode[] = [];
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(380, ctx.currentTime);

      chords.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq + (idx * 0.5), ctx.currentTime);

        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) {
          panner.pan.value = (idx - 1.5) / 2;
          osc.connect(panner);
          panner.connect(filter);
        } else {
          osc.connect(filter);
        }

        osc.start();
        oscs.push(osc);
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      this.ambientNodes = { oscs, gain: masterGain };
      this.isAtmospherePlaying = true;
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Item / Clue discovery chime (mysterious ethereal shimmer)
  playItemDiscovery() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [587.33, 783.99, 1046.5, 1318.51]; // D5, G5, C6, E6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.06, ctx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.06);
      osc.stop(ctx.currentTime + idx * 0.06 + 0.35);
    });
  }

  // Telltale-style relationship trust cue
  playTrustChange(isPositive: boolean = true) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    if (isPositive) {
      // Warm uplifting acoustic chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, ctx.currentTime + 0.15); // B5

      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } else {
      // Somber muted minor tone
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(329.63, ctx.currentTime); // E4
      osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 0.2); // C4

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    }
  }

  // Cinematic dramatic beat (deep sub-bass heartbeat when dilemma is revealed)
  playDramaticBeat() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(80, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(38, ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.7);
  }

  // Character-specific dialogue audio blip
  playCharacterVoice(speaker: string) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const name = speaker.toLowerCase();
    let freq = 500;
    let type: OscillatorType = "sine";

    if (name.includes("maya")) {
      freq = 620; // brisk, bright
      type = "sine";
    } else if (name.includes("elias")) {
      freq = 430; // grounded, calm
      type = "triangle";
    } else if (name.includes("adrian")) {
      freq = 240; // deep, commanding
      type = "sawtooth";
    } else if (name.includes("lena")) {
      freq = 530; // warm, empathetic
      type = "sine";
    } else if (name.includes("noah")) {
      freq = 740; // nimble tech chirp
      type = "sine";
    } else if (name.includes("ori")) {
      freq = 920; // synthetic AI crystalline pulse
      type = "square";
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.95, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  }

  stopAtmosphere() {
    if (!this.ambientNodes || !this.ctx) return;
    try {
      this.ambientNodes.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        if (this.ambientNodes) {
          this.ambientNodes.oscs.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // already stopped
            }
          });
          this.ambientNodes.gain.disconnect();
          this.ambientNodes = null;
        }
        this.isAtmospherePlaying = false;
      }, 1500);
    } catch {
      this.isAtmospherePlaying = false;
    }
  }
}

export const sound = new SoundEngine();
