import { PitchClass } from './PitchClass';

/**
 * Represents a specific pitch in music, combining a pitch class with an octave.
 */
export class Pitch {
    /**
     * Creates a new Pitch instance.
     * @param pitchClass The pitch class of the pitch.
     * @param octave The octave of the pitch (-1 to 9).
     * @throws {Error} If an invalid octave is provided.
     */
  constructor(private pitchClass: PitchClass, private octave: number) {
    if (octave < -1 || octave > 9) {
      throw new Error('オクターブは-1から9の間である必要があります。');
    }
  }

  /**
   * Gets the pitch class of the pitch.
   * @returns The PitchClass of the pitch.
   */
  getPitchClass(): PitchClass {
    return this.pitchClass;
  }

  /**
   * Gets the octave of the pitch.
   * @returns The octave of the pitch.
   */
  getOctave(): number {
    return this.octave;
  }

  /**
   * Gets the MIDI note number of the pitch.
   * @returns The MIDI note number.
   */
  getMidiNoteNumber(): number {
    const baseNote = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(this.pitchClass.getName());
    return baseNote + (this.octave + 1) * 12;
  }

  /**
   * Gets the frequency of the pitch.
   * @returns The frequency of the pitch in Hz.
   */
  getFrequency(): number {
    return 440 * Math.pow(2, (this.getMidiNoteNumber() - 69) / 12);
  }

  /**
   * Gets the scientific pitch notation of the pitch.
   * @returns A string representing the pitch in scientific pitch notation (e.g., "C4" for middle C).
   */
  getScientificNotation(): string {
    return `${this.pitchClass.getName()}${this.octave}`;
  }
}