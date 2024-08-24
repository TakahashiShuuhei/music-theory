import { PitchClass } from './PitchClass';

/**
 * Represents a musical interval.
 * An interval is the difference in pitch between two sounds.
 */
export class Interval {
  private static readonly SEMITONES_IN_OCTAVE = 12;

  /**
   * Creates a new Interval instance.
   * @param semitones The number of semitones in the interval.
   */
  constructor(private semitones: number) {
    this.semitones = ((semitones % Interval.SEMITONES_IN_OCTAVE) + Interval.SEMITONES_IN_OCTAVE) % Interval.SEMITONES_IN_OCTAVE;
  }

  /**
   * Gets the number of semitones in the interval.
   * @returns The number of semitones.
   */
  getSemitones(): number {
    return this.semitones;
  }

  /**
   * Gets the name of the interval.
   * @returns A string representing the interval name.
   */
  getName(): string {
    const names = [
      'perfect unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th',
      'tritone', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'
    ];
    return names[this.semitones];
  }

  /**
   * Creates an Interval instance from a name.
   * @param name The name of the interval.
   * @returns A new Interval instance.
   * @throws {Error} If an invalid interval name is provided.
   */
  static fromName(name: string): Interval {
    const names = [
      'perfect unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th',
      'tritone', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'
    ];
    const index = names.indexOf(name.toLowerCase());
    if (index === -1) {
      throw new Error('Invalid interval name.');
    }
    return new Interval(index);
  }

  /**
   * Applies the interval to a given pitch class.
   * @param pitchClass The PitchClass to apply the interval to.
   * @returns A new PitchClass resulting from applying the interval.
   */
  apply(pitchClass: PitchClass): PitchClass {
    return PitchClass.fromSemitone((pitchClass.getSemitone() + this.semitones) % Interval.SEMITONES_IN_OCTAVE);
  }

  /**
   * Inverts the interval.
   * @returns A new Interval that is the inversion of this interval.
   */
  invert(): Interval {
    return new Interval(Interval.SEMITONES_IN_OCTAVE - this.semitones);
  }

  // Static properties for common intervals
  /** Perfect unison interval (0 semitones) */
  static PERFECT_UNISON = new Interval(0);
  /** Minor second interval (1 semitone) */
  static MINOR_SECOND = new Interval(1);
  /** Major second interval (2 semitones) */
  static MAJOR_SECOND = new Interval(2);
  /** Minor third interval (3 semitones) */
  static MINOR_THIRD = new Interval(3);
  /** Major third interval (4 semitones) */
  static MAJOR_THIRD = new Interval(4);
  /** Perfect fourth interval (5 semitones) */
  static PERFECT_FOURTH = new Interval(5);
  /** Tritone interval (6 semitones) */
  static TRITONE = new Interval(6);
  /** Perfect fifth interval (7 semitones) */
  static PERFECT_FIFTH = new Interval(7);
  /** Minor sixth interval (8 semitones) */
  static MINOR_SIXTH = new Interval(8);
  /** Major sixth interval (9 semitones) */
  static MAJOR_SIXTH = new Interval(9);
  /** Minor seventh interval (10 semitones) */
  static MINOR_SEVENTH = new Interval(10);
  /** Major seventh interval (11 semitones) */
  static MAJOR_SEVENTH = new Interval(11);
  /** Perfect octave interval (12 semitones) */
  static PERFECT_OCTAVE = new Interval(12);
}