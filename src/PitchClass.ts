import { Interval } from "./Interval";

/**
 * Represents a pitch class in music theory.
 * A pitch class is an equivalence class of pitches under octave transposition.
 */
export class PitchClass {
  private static readonly SEMITONES = 12;
  private static readonly NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  private static readonly FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  
  private semitone: number;
  
  /**
   * Creates a new PitchClass instance.
   * @param name The name of the pitch class (e.g., 'C', 'F#', 'Bb').
   * @throws {Error} If an invalid pitch name is provided.
   */
  constructor(name: string) {
    const normalizedName = this.normalizeName(name);
    this.semitone = PitchClass.NOTE_NAMES.indexOf(normalizedName);
    if (this.semitone === -1) {
      this.semitone = PitchClass.FLAT_NAMES.indexOf(normalizedName);
    }
    if (this.semitone === -1) {
      throw new Error('Invalid pitch name. Use C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#, Ab, A, A#, Bb, or B.');
    }
  }
  
  private normalizeName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  /**
   * Gets the name of the pitch class.
   * @param preferSharp If true, prefers sharp notation; otherwise, uses flat notation.
   * @returns The name of the pitch class.
   */
  getName(preferSharp = true): string {
    return preferSharp ? PitchClass.NOTE_NAMES[this.semitone] : PitchClass.FLAT_NAMES[this.semitone];
  }
  
  /**
   * Checks if this pitch class is equal to another.
   * @param other The other PitchClass to compare.
   * @returns True if the pitch classes are equal, false otherwise.
   */
  equals(other: PitchClass): boolean {
    return this.semitone === other.semitone;
  }
  
  /**
   * Gets the semitone value of the pitch class.
   * @returns The semitone value (0-11).
   */
  getSemitone(): number {
    return this.semitone;
  }
  
  /**
   * Creates a PitchClass from a semitone value.
   * @param semitone The semitone value (0-11).
   * @returns A new PitchClass instance.
   */
  static fromSemitone(semitone: number): PitchClass {
    return new PitchClass(PitchClass.NOTE_NAMES[semitone % PitchClass.SEMITONES]);
  }
  
  /**
   * Transposes the pitch class by a given interval.
   * @param interval The interval to transpose by.
   * @returns A new PitchClass representing the transposed pitch.
   */
  transpose(interval: Interval): PitchClass {
    const newSemitone = (this.semitone + interval.getSemitones()) % PitchClass.SEMITONES;
    return PitchClass.fromSemitone(newSemitone);
  }
}