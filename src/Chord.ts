import { PitchClass } from './PitchClass';
import { Interval } from './Interval';

export class Chord {
  private pitchClasses: PitchClass[];

  constructor(private root: PitchClass, private quality: ChordQuality) {
    this.pitchClasses = this.generatePitchClasses();
  }

  private generatePitchClasses(): PitchClass[] {
    const intervals = Chord.getIntervalsForQuality(this.quality);
    return [this.root, ...intervals.map(interval => interval.apply(this.root))];
  }

  getRoot(): PitchClass {
    return this.root;
  }

  getQuality(): ChordQuality {
    return this.quality;
  }

  getPitchClasses(): PitchClass[] {
    return this.pitchClasses;
  }

  getName(): string {
    return `${this.root.getName()}${Chord.getQualitySuffix(this.quality)}`;
  }

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