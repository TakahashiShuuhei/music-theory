import { PitchClass } from '../src/PitchClass';
import { MajorScale, NaturalMinorScale, MajorPentatonicScale, MinorPentatonicScale, WholeToneScale } from '../src/Scale';

describe('Scale', () => {
  describe('MajorScale', () => {
    const cMajor = new MajorScale(new PitchClass('C'));

    it('generates correct pitch classes', () => {
      const pitchClasses = cMajor.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    });

    it('returns correct name', () => {
      expect(cMajor.getName()).toBe('C Major');
    });
  });

  describe('NaturalMinorScale', () => {
    const aMinor = new NaturalMinorScale(new PitchClass('A'));

    it('generates correct pitch classes', () => {
      const pitchClasses = aMinor.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });

    it('returns correct name', () => {
      expect(aMinor.getName()).toBe('A Natural Minor');
    });
  });

  describe('MajorPentatonicScale', () => {
    const gMajorPentatonic = new MajorPentatonicScale(new PitchClass('G'));

    it('generates correct pitch classes', () => {
      const pitchClasses = gMajorPentatonic.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['G', 'A', 'B', 'D', 'E']);
    });

    it('returns correct name', () => {
      expect(gMajorPentatonic.getName()).toBe('G Major Pentatonic');
    });
  });

  describe('MinorPentatonicScale', () => {
    const eMinorPentatonic = new MinorPentatonicScale(new PitchClass('E'));

    it('generates correct pitch classes', () => {
      const pitchClasses = eMinorPentatonic.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['E', 'G', 'A', 'B', 'D']);
    });

    it('returns correct name', () => {
      expect(eMinorPentatonic.getName()).toBe('E Minor Pentatonic');
    });
  });

  describe('WholeToneScale', () => {
    const dWholeTone = new WholeToneScale(new PitchClass('D'));

    it('generates correct pitch classes', () => {
      const pitchClasses = dWholeTone.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['D', 'E', 'F#', 'G#', 'A#', 'C']);
    });

    it('returns correct name', () => {
      expect(dWholeTone.getName()).toBe('D Whole Tone');
    });
  });
});