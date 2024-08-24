import { Chord, ChordQuality } from '../src/Chord';
import { PitchClass } from '../src/PitchClass';

describe('Chord', () => {
  describe('constructor and getPitchClasses', () => {
    it('correctly generates pitch classes for major chord', () => {
      const chord = new Chord(new PitchClass('C'), ChordQuality.Major);
      const pitchClasses = chord.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['C', 'E', 'G']);
    });

    it('correctly generates pitch classes for minor chord', () => {
      const chord = new Chord(new PitchClass('A'), ChordQuality.Minor);
      const pitchClasses = chord.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['A', 'C', 'E']);
    });

    it('correctly generates pitch classes for dominant 7th chord', () => {
      const chord = new Chord(new PitchClass('G'), ChordQuality.Dominant7th);
      const pitchClasses = chord.getPitchClasses().map(pc => pc.getName());
      expect(pitchClasses).toEqual(['G', 'B', 'D', 'F']);
    });
  });

  describe('getName', () => {
    it('returns correct name for major chord', () => {
      const chord = new Chord(new PitchClass('C'), ChordQuality.Major);
      expect(chord.getName()).toBe('C');
    });

    it('returns correct name for minor chord', () => {
      const chord = new Chord(new PitchClass('D'), ChordQuality.Minor);
      expect(chord.getName()).toBe('Dm');
    });

    it('returns correct name for dominant 7th chord', () => {
      const chord = new Chord(new PitchClass('F#'), ChordQuality.Dominant7th);
      expect(chord.getName()).toBe('F#7');
    });
  });
});