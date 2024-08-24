export class PitchClass {
    private static readonly SEMITONES = 12;
    private static readonly NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    private static readonly FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  
    private semitone: number;
  
    constructor(name: string) {
      const normalizedName = this.normalizeName(name);
      this.semitone = PitchClass.NOTE_NAMES.indexOf(normalizedName);
      if (this.semitone === -1) {
        this.semitone = PitchClass.FLAT_NAMES.indexOf(normalizedName);
      }
      if (this.semitone === -1) {
        throw new Error('無効な音名です。C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#, Ab, A, A#, Bb, B のいずれかを使用してください。');
      }
    }
  
    private normalizeName(name: string): string {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  
    getName(preferSharp = true): string {
      return preferSharp ? PitchClass.NOTE_NAMES[this.semitone] : PitchClass.FLAT_NAMES[this.semitone];
    }
  
    equals(other: PitchClass): boolean {
      return this.semitone === other.semitone;
    }
  
    getSemitone(): number {
      return this.semitone;
    }
  
    static fromSemitone(semitone: number): PitchClass {
      return new PitchClass(PitchClass.NOTE_NAMES[semitone % PitchClass.SEMITONES]);
    }
  }