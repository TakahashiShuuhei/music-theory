import { PitchClass } from './PitchClass';
import { Interval } from './Interval';

/**
 * Represents a musical chord.
 * A chord is a harmonic set of pitches consisting of multiple notes sounded simultaneously.
 */
export class Chord {
  private pitchClasses: PitchClass[];

  /**
   * Creates a new Chord instance.
   * @param root The root note of the chord.
   * @param quality The quality of the chord (e.g., major, minor, diminished).
   */
  constructor(private root: PitchClass, private quality: ChordQuality) {
    this.pitchClasses = this.generatePitchClasses();
  }

  /**
   * Generates the pitch classes for the chord based on its root and quality.
   * @returns An array of PitchClass instances representing the chord tones.
   */
  private generatePitchClasses(): PitchClass[] {
    const intervals = Chord.getIntervalsForQuality(this.quality);
    return [this.root, ...intervals.map(interval => interval.apply(this.root))];
  }

  /**
   * Gets the root note of the chord.
   * @returns The root PitchClass of the chord.
   */
  getRoot(): PitchClass {
    return this.root;
  }

  /**
   * Gets the quality of the chord.
   * @returns The ChordQuality of the chord.
   */
  getQuality(): ChordQuality {
    return this.quality;
  }

  /**
   * Gets all pitch classes that make up the chord.
   * @returns An array of PitchClass instances representing the chord tones.
   */
  getPitchClasses(): PitchClass[] {
    return this.pitchClasses;
  }

  /**
   * Gets the name of the chord.
   * @returns A string representation of the chord (e.g., "C", "Dm", "G7").
   */
  getName(): string {
    return `${this.root.getName()}${Chord.getQualitySuffix(this.quality)}`;
  }

  /**
   * Determines the intervals that make up a chord of a given quality.
   * @param quality The ChordQuality to get intervals for.
   * @returns An array of Intervals that define the chord quality.
   * @throws {Error} If an unsupported chord quality is provided.
   */
  private static getIntervalsForQuality(quality: ChordQuality): Interval[] {
    switch (quality) {
      case ChordQuality.Major:
        return [Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH];
      case ChordQuality.Minor:
        return [Interval.MINOR_THIRD, Interval.PERFECT_FIFTH];
      case ChordQuality.Diminished:
        return [Interval.MINOR_THIRD, Interval.TRITONE];
      case ChordQuality.Augmented:
        return [Interval.MAJOR_THIRD, Interval.MINOR_SIXTH];
      case ChordQuality.Dominant7th:
        return [Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH, Interval.MINOR_SEVENTH];
      case ChordQuality.Major7th:
        return [Interval.MAJOR_THIRD, Interval.PERFECT_FIFTH, Interval.MAJOR_SEVENTH];
      case ChordQuality.Minor7th:
        return [Interval.MINOR_THIRD, Interval.PERFECT_FIFTH, Interval.MINOR_SEVENTH];
      case ChordQuality.Diminished7th:
        return [Interval.MINOR_THIRD, Interval.TRITONE, Interval.MAJOR_SIXTH];
      default:
        throw new Error('Unsupported chord quality');
    }
  }

  /**
   * Gets the suffix used in chord notation for a given chord quality.
   * @param quality The ChordQuality to get the suffix for.
   * @returns A string representing the chord quality suffix.
   * @throws {Error} If an unsupported chord quality is provided.
   */
  private static getQualitySuffix(quality: ChordQuality): string {
    switch (quality) {
      case ChordQuality.Major:
        return '';
      case ChordQuality.Minor:
        return 'm';
      case ChordQuality.Diminished:
        return 'dim';
      case ChordQuality.Augmented:
        return 'aug';
      case ChordQuality.Dominant7th:
        return '7';
      case ChordQuality.Major7th:
        return 'maj7';
      case ChordQuality.Minor7th:
        return 'm7';
      case ChordQuality.Diminished7th:
        return 'dim7';
      default:
        throw new Error('Unsupported chord quality');
    }
  }
}

/**
 * Represents the quality of a chord.
 */
export enum ChordQuality {
  Major,
  Minor,
  Diminished,
  Augmented,
  Dominant7th,
  Major7th,
  Minor7th,
  Diminished7th,
}