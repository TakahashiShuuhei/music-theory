import { PitchClass } from './PitchClass';

export class Pitch {
  constructor(private pitchClass: PitchClass, private octave: number) {
    if (octave < -1 || octave > 9) {
      throw new Error('オクターブは-1から9の間である必要があります。');
    }
  }

  getPitchClass(): PitchClass {
    return this.pitchClass;
  }

  getOctave(): number {
    return this.octave;
  }

  getMidiNoteNumber(): number {
    const baseNote = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(this.pitchClass.getName());
    return baseNote + (this.octave + 1) * 12;
  }

  getFrequency(): number {
    return 440 * Math.pow(2, (this.getMidiNoteNumber() - 69) / 12);
  }
}