import { PitchClass } from '../src/PitchClass';
import { MajorKey, MinorKey } from '../src/Key';
import { ChordQuality } from '../src/Chord';
import { MajorScale, NaturalMinorScale } from '../src/Scale';

describe('Key', () => {
  describe('MajorKey', () => {
    const cMajor = new MajorKey(new PitchClass('C'));

    it('creates correct scale', () => {
      const scale = cMajor.getScale();
      expect(scale).toBeInstanceOf(MajorScale);
      const pitchClasses = scale.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
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

    it('creates correct scale', () => {
      const scale = aMinor.getScale();
      expect(scale).toBeInstanceOf(NaturalMinorScale);
      const pitchClasses = scale.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
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

  describe('Key and Scale integration', () => {
    it('MajorKey uses MajorScale', () => {
      const dMajor = new MajorKey(new PitchClass('D'));
      expect(dMajor.getScale()).toBeInstanceOf(MajorScale);
      expect(dMajor.getScale().getTonic().getName()).toBe('D');
    });

    it('MinorKey uses NaturalMinorScale', () => {
      const bMinor = new MinorKey(new PitchClass('B'));
      expect(bMinor.getScale()).toBeInstanceOf(NaturalMinorScale);
      expect(bMinor.getScale().getTonic().getName()).toBe('B');
    });
  });
});