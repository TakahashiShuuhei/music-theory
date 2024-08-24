import { PitchClass } from './PitchClass';

export class Interval {
  private static readonly SEMITONES_IN_OCTAVE = 12;

  constructor(private semitones: number) {
    this.semitones = ((semitones % Interval.SEMITONES_IN_OCTAVE) + Interval.SEMITONES_IN_OCTAVE) % Interval.SEMITONES_IN_OCTAVE;
  }

  getSemitones(): number {
    return this.semitones;
  }

  getName(): string {
    const names = [
      'perfect unison', 'minor 2nd', 'major 2nd', 'minor 3rd', 'major 3rd', 'perfect 4th',
      'tritone', 'perfect 5th', 'minor 6th', 'major 6th', 'minor 7th', 'major 7th'
    ];
    return names[this.semitones];
  }

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

  apply(pitchClass: PitchClass): PitchClass {
    return PitchClass.fromSemitone((pitchClass.getSemitone() + this.semitones) % Interval.SEMITONES_IN_OCTAVE);
  }

  invert(): Interval {
    return new Interval(Interval.SEMITONES_IN_OCTAVE - this.semitones);
  }

  // 静的メソッドで主要な音程を提供
  static PERFECT_UNISON = new Interval(0);
  static MINOR_SECOND = new Interval(1);
  static MAJOR_SECOND = new Interval(2);
  static MINOR_THIRD = new Interval(3);
  static MAJOR_THIRD = new Interval(4);
  static PERFECT_FOURTH = new Interval(5);
  static TRITONE = new Interval(6);
  static PERFECT_FIFTH = new Interval(7);
  static MINOR_SIXTH = new Interval(8);
  static MAJOR_SIXTH = new Interval(9);
  static MINOR_SEVENTH = new Interval(10);
  static MAJOR_SEVENTH = new Interval(11);
  static PERFECT_OCTAVE = new Interval(12);
}