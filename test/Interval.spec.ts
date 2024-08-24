import { Interval } from '../src/Interval';
import { PitchClass } from '../src/PitchClass';

describe('Interval', () => {
  describe('constructor and getSemitones', () => {
    it('正しく半音数を保持する', () => {
      expect(new Interval(4).getSemitones()).toBe(4);
      expect(new Interval(13).getSemitones()).toBe(1);
      expect(new Interval(-1).getSemitones()).toBe(11);
    });
  });

  describe('getName', () => {
    it('returns correct interval name', () => {
      expect(Interval.PERFECT_UNISON.getName()).toBe('perfect unison');
      expect(Interval.MAJOR_THIRD.getName()).toBe('major 3rd');
      expect(Interval.PERFECT_FIFTH.getName()).toBe('perfect 5th');
    });
  });

  describe('fromName', () => {
    it('creates Interval correctly from name', () => {
      expect(Interval.fromName('minor 3rd').getSemitones()).toBe(3);
      expect(Interval.fromName('perfect 5th').getSemitones()).toBe(7);
      expect(() => Interval.fromName('invalid interval')).toThrow('Invalid interval name.');
    });
  });

  describe('apply', () => {
    it('applies correctly to PitchClass', () => {
      const c = new PitchClass('C');
      expect(Interval.MAJOR_THIRD.apply(c).getName()).toBe('E');
      expect(Interval.PERFECT_FIFTH.apply(c).getName()).toBe('G');
    });
  });

  describe('invert', () => {
    it('inverts interval correctly', () => {
      expect(Interval.MAJOR_THIRD.invert().getName()).toBe('minor 6th');
      expect(Interval.PERFECT_FIFTH.invert().getName()).toBe('perfect 4th');
    });
  });
});