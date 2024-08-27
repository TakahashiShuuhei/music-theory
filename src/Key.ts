import { PitchClass } from './PitchClass';
import { Interval } from './Interval';
import { Chord, ChordQuality } from './Chord';
import { Scale, MajorScale, NaturalMinorScale } from './Scale';

/**
 * Represents a musical key.
 * A key is a group of pitches, or scale upon which a music composition is created in classical, Western art, and Western pop music.
 */
export abstract class Key {
  protected scale: Scale;

  /**
   * Creates a new Key instance.
   * @param tonic The tonic (root note) of the key.
   */
  constructor(protected tonic: PitchClass) {
    this.scale = this.createScale();
  }

  /**
   * Creates the scale for this key.
   * @returns A Scale instance representing the scale of this key.
   */
  protected abstract createScale(): Scale;

  /**
   * Gets the scale of the key.
   * @returns The Scale instance representing the scale of this key.
   */
  getScale(): Scale {
    return this.scale;
  }

  /**
   * Gets the chord for a specific scale degree.
   * @param degree The scale degree (1-7).
   * @returns A Chord instance for the specified scale degree.
   */
  abstract getDegreeChord(degree: number): Chord;

  /**
   * Gets the tonic of the key.
   * @returns The PitchClass representing the tonic of the key.
   */
  getTonic(): PitchClass {
    return this.tonic;
  }

  /**
   * Gets the key signature for this key.
   * @returns A string representing the key signature (e.g., "b" for one flat, "###" for three sharps).
   */
  getKeySignature(): string {
    // この実装は簡略化されています。実際には、調号の計算はもっと複雑になります。
    const sharpKeys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#'];
    const flatKeys = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'];
    const tonicName = this.tonic.getName();

    if (sharpKeys.includes(tonicName)) {
      return '#'.repeat(sharpKeys.indexOf(tonicName));
    } else if (flatKeys.includes(tonicName)) {
      return 'b'.repeat(flatKeys.indexOf(tonicName) + 1);
    }
    return '';
  }
}

/**
 * Represents a major key in music.
 */
export class MajorKey extends Key {
  protected createScale(): Scale {
    return new MajorScale(this.tonic);
  }

  /**
   * Gets the chord for a specific scale degree in the major key.
   * @param degree The scale degree (1-7).
   * @returns A Chord instance for the specified scale degree.
   * @throws {Error} If an invalid scale degree is provided.
   */
  getDegreeChord(degree: number): Chord {
    const scalePitchClasses = this.scale.getPitchClasses();
    const chordRoot = scalePitchClasses[(degree - 1) % 7];
    switch (degree) {
      case 1:
      case 4:
      case 5:
        return new Chord(chordRoot, ChordQuality.Major);
      case 2:
      case 3:
      case 6:
        return new Chord(chordRoot, ChordQuality.Minor);
      case 7:
        return new Chord(chordRoot, ChordQuality.Diminished);
      default:
        throw new Error('Invalid scale degree');
    }
  }
}

/**
 * Represents a minor key in music.
 */
export class MinorKey extends Key {
  protected createScale(): Scale {
    return new NaturalMinorScale(this.tonic);
  }

  /**
   * Gets the chord for a specific scale degree in the minor key.
   * @param degree The scale degree (1-7).
   * @returns A Chord instance for the specified scale degree.
   * @throws {Error} If an invalid scale degree is provided.
   */
  getDegreeChord(degree: number): Chord {
    const scalePitchClasses = this.scale.getPitchClasses();
    const chordRoot = scalePitchClasses[(degree - 1) % 7];
    switch (degree) {
      case 1:
      case 4:
      case 5:
        return new Chord(chordRoot, ChordQuality.Minor);
      case 3:
      case 6:
      case 7:
        return new Chord(chordRoot, ChordQuality.Major);
      case 2:
        return new Chord(chordRoot, ChordQuality.Diminished);
      default:
        throw new Error('Invalid scale degree');
    }
  }

  /**
   * Gets the key signature for this minor key.
   * @returns A string representing the key signature.
   */
  getKeySignature(): string {
    // マイナーキーの調号は、その平行長調の調号と同じです
    const relativeMajor = new MajorKey(this.tonic.transpose(Interval.MINOR_THIRD));
    return relativeMajor.getKeySignature();
  }
}