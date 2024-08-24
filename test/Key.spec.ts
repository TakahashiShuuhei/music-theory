import { PitchClass } from '../src/PitchClass';
import { MajorKey, MinorKey } from '../src/Key';
import { ChordQuality } from '../src/Chord';

describe('Key', () => {
  describe('MajorKey', () => {
    const cMajor = new MajorKey(new PitchClass('C'));

    it('generates correct scale', () => {
      const scale = cMajor.getScale().map(pc => pc.getName());
      expect(scale).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    });

    it('returns correct chords for each degree', () => {
      expect(cMajor.getDegreeChord(1).getQuality()).toBe(ChordQuality.Major);
      expect(cMajor.getDegreeChord(2).getQuality()).toBe(ChordQuality.Minor);
      expect(cMajor.getDegreeChord(3).getQuality()).toBe(ChordQuality.Minor);
      expect(cMajor.getDegreeChord(4).getQuality()).toBe(ChordQuality.Major);
      expect(cMajor.getDegreeChord(5).getQuality()).toBe(ChordQuality.Major);
      expect(cMajor.getDegreeChord(6).getQuality()).toBe(ChordQuality.Minor);
      expect(cMajor.getDegreeChord(7).getQuality()).toBe(ChordQuality.Diminished);
    });

    it('returns correct key signature', () => {
      expect(cMajor.getKeySignature()).toBe('');
      expect(new MajorKey(new PitchClass('G')).getKeySignature()).toBe('#');
      expect(new MajorKey(new PitchClass('F')).getKeySignature()).toBe('b');
    });
  });

  describe('MinorKey', () => {
    const aMinor = new MinorKey(new PitchClass('A'));

    it('generates correct scale', () => {
      const scale = aMinor.getScale().map(pc => pc.getName());
      expect(scale).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });

    it('returns correct chords for each degree', () => {
      expect(aMinor.getDegreeChord(1).getQuality()).toBe(ChordQuality.Minor);
      expect(aMinor.getDegreeChord(2).getQuality()).toBe(ChordQuality.Diminished);
      expect(aMinor.getDegreeChord(3).getQuality()).toBe(ChordQuality.Major);
      expect(aMinor.getDegreeChord(4).getQuality()).toBe(ChordQuality.Minor);
      expect(aMinor.getDegreeChord(5).getQuality()).toBe(ChordQuality.Minor);
      expect(aMinor.getDegreeChord(6).getQuality()).toBe(ChordQuality.Major);
      expect(aMinor.getDegreeChord(7).getQuality()).toBe(ChordQuality.Major);
    });

    it('returns correct key signature', () => {
      expect(aMinor.getKeySignature()).toBe('');
      expect(new MinorKey(new PitchClass('E')).getKeySignature()).toBe('#');
      expect(new MinorKey(new PitchClass('D')).getKeySignature()).toBe('b');
    });
  });
});