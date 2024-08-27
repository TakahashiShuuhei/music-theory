import { PitchClass } from './PitchClass';
import { Interval } from './Interval';

/**
 * Represents a musical scale.
 * A scale is a series of notes ordered by pitch or fundamental frequency.
 */
export abstract class Scale {
  protected pitchClasses: PitchClass[];

  /**
   * Creates a new Scale instance.
   * @param tonic The tonic (root note) of the scale.
   */
  constructor(protected tonic: PitchClass) {
    this.pitchClasses = this.generateScale();
  }

  /**
   * Gets the intervals that define the scale.
   * @returns An array of Intervals that define the scale.
   */
  abstract getIntervals(): Interval[];

  /**
   * Generates the scale based on the tonic and intervals.
   * @returns An array of PitchClass instances representing the scale.
   */
  protected generateScale(): PitchClass[] {
    return [this.tonic, ...this.getIntervals().map(interval => interval.apply(this.tonic))];
  }

  /**
   * Gets the pitch classes that make up the scale.
   * @returns An array of PitchClass instances representing the scale.
   */
  getPitchClasses(): PitchClass[] {
    return this.pitchClasses;
  }

  /**
   * Gets the tonic of the scale.
   * @returns The PitchClass representing the tonic of the scale.
   */
  getTonic(): PitchClass {
    return this.tonic;
  }

  /**
   * Gets the name of the scale.
   * @returns A string representing the name of the scale.
   */
  abstract getName(): string;
}

/**
 * Represents a major scale in music.
 */
export class MajorScale extends Scale {
  getIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MAJOR_THIRD,
      Interval.PERFECT_FOURTH,
      Interval.PERFECT_FIFTH,
      Interval.MAJOR_SIXTH,
      Interval.MAJOR_SEVENTH
    ];
  }

  getName(): string {
    return `${this.tonic.getName()} Major`;
  }
}

/**
 * Represents a natural minor scale in music.
 */
export class NaturalMinorScale extends Scale {
  getIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MINOR_THIRD,
      Interval.PERFECT_FOURTH,
      Interval.PERFECT_FIFTH,
      Interval.MINOR_SIXTH,
      Interval.MINOR_SEVENTH
    ];
  }

  getName(): string {
    return `${this.tonic.getName()} Natural Minor`;
  }
}

/**
 * Represents a major pentatonic scale in music.
 */
export class MajorPentatonicScale extends Scale {
  getIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MAJOR_THIRD,
      Interval.PERFECT_FIFTH,
      Interval.MAJOR_SIXTH
    ];
  }

  getName(): string {
    return `${this.tonic.getName()} Major Pentatonic`;
  }
}

/**
 * Represents a minor pentatonic scale in music.
 */
export class MinorPentatonicScale extends Scale {
  getIntervals(): Interval[] {
    return [
      Interval.MINOR_THIRD,
      Interval.PERFECT_FOURTH,
      Interval.PERFECT_FIFTH,
      Interval.MINOR_SEVENTH
    ];
  }

  getName(): string {
    return `${this.tonic.getName()} Minor Pentatonic`;
  }
}

/**
 * Represents a whole tone scale in music.
 */
export class WholeToneScale extends Scale {
  getIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MAJOR_THIRD,
      Interval.TRITONE,
      Interval.MINOR_SIXTH,
      Interval.MINOR_SEVENTH
    ];
  }

  getName(): string {
    return `${this.tonic.getName()} Whole Tone`;
  }
}