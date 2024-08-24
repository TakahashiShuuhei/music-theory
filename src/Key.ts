import { PitchClass } from './PitchClass';
import { Interval } from './Interval';
import { Chord, ChordQuality } from './Chord';

export abstract class Key {
  protected scale: PitchClass[];

  constructor(protected tonic: PitchClass) {
    this.scale = this.generateScale();
  }

  abstract getScaleIntervals(): Interval[];

  protected generateScale(): PitchClass[] {
    return [this.tonic, ...this.getScaleIntervals().map(interval => interval.apply(this.tonic))];
  }

  getScale(): PitchClass[] {
    return this.scale;
  }

  abstract getDegreeChord(degree: number): Chord;

  getTonic(): PitchClass {
    return this.tonic;
  }

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

export class MajorKey extends Key {
  getScaleIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MAJOR_THIRD,
      Interval.PERFECT_FOURTH,
      Interval.PERFECT_FIFTH,
      Interval.MAJOR_SIXTH,
      Interval.MAJOR_SEVENTH
    ];
  }

  getDegreeChord(degree: number): Chord {
    const chordRoot = this.scale[(degree - 1) % 7];
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

export class MinorKey extends Key {
  getScaleIntervals(): Interval[] {
    return [
      Interval.MAJOR_SECOND,
      Interval.MINOR_THIRD,
      Interval.PERFECT_FOURTH,
      Interval.PERFECT_FIFTH,
      Interval.MINOR_SIXTH,
      Interval.MINOR_SEVENTH
    ];
  }

  getDegreeChord(degree: number): Chord {
    const chordRoot = this.scale[(degree - 1) % 7];
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

  getKeySignature(): string {
    // マイナーキーの調号は、その平行長調の調号と同じです
    const relativeMinor = new MajorKey(new PitchClass(this.tonic.getName()).transpose(Interval.MINOR_THIRD));
    return relativeMinor.getKeySignature();
  }
}