import { PitchClass } from '../src/PitchClass';
import { MajorKey, MinorKey } from '../src/Key';
import { ChordQuality, Chord } from '../src/Chord';
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

  describe('Diatonic chords', () => {
    const cMajor = new MajorKey(new PitchClass('C'));
    const aMinor = new MinorKey(new PitchClass('A'));

    it('returns correct diatonic triads for major key', () => {
      const diatonicChords = cMajor.getDiatonicChords();
      expect(diatonicChords.length).toBe(7);
      expect(diatonicChords[0].getName()).toBe('C');
      expect(diatonicChords[1].getName()).toBe('Dm');
      expect(diatonicChords[2].getName()).toBe('Em');
      expect(diatonicChords[3].getName()).toBe('F');
      expect(diatonicChords[4].getName()).toBe('G');
      expect(diatonicChords[5].getName()).toBe('Am');
      expect(diatonicChords[6].getName()).toBe('Bdim');
    });

    it('returns correct diatonic seventh chords for major key', () => {
      const diatonicChords = cMajor.getDiatonicChords(true);
      expect(diatonicChords.length).toBe(7);
      expect(diatonicChords[0].getName()).toBe('Cmaj7');
      expect(diatonicChords[1].getName()).toBe('Dm7');
      expect(diatonicChords[2].getName()).toBe('Em7');
      expect(diatonicChords[3].getName()).toBe('Fmaj7');
      expect(diatonicChords[4].getName()).toBe('G7');
      expect(diatonicChords[5].getName()).toBe('Am7');
      expect(diatonicChords[6].getName()).toBe('Bm7b5');
    });

    it('returns correct diatonic triads for minor key', () => {
      const diatonicChords = aMinor.getDiatonicChords();
      expect(diatonicChords.length).toBe(7);
      expect(diatonicChords[0].getName()).toBe('Am');
      expect(diatonicChords[1].getName()).toBe('Bdim');
      expect(diatonicChords[2].getName()).toBe('C');
      expect(diatonicChords[3].getName()).toBe('Dm');
      expect(diatonicChords[4].getName()).toBe('Em');
      expect(diatonicChords[5].getName()).toBe('F');
      expect(diatonicChords[6].getName()).toBe('G');
    });

    it('returns correct diatonic seventh chords for minor key', () => {
      const diatonicChords = aMinor.getDiatonicChords(true);
      expect(diatonicChords.length).toBe(7);
      expect(diatonicChords[0].getName()).toBe('Am7');
      expect(diatonicChords[1].getName()).toBe('Bm7b5');
      expect(diatonicChords[2].getName()).toBe('Cmaj7');
      expect(diatonicChords[3].getName()).toBe('Dm7');
      expect(diatonicChords[4].getName()).toBe('Em7');
      expect(diatonicChords[5].getName()).toBe('Fmaj7');
      expect(diatonicChords[6].getName()).toBe('G7');
    });

    it('correctly identifies diatonic chords', () => {
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('C'), ChordQuality.Major))).toBe(true);
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('Dm'), ChordQuality.Minor))).toBe(true);
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('F#'), ChordQuality.Major))).toBe(false);
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('C'), ChordQuality.Major7th))).toBe(true);
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('D'), ChordQuality.Minor7th))).toBe(true);
      expect(cMajor.isDiatonicChord(new Chord(new PitchClass('F#'), ChordQuality.Dominant7th))).toBe(false);
      
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('Am'), ChordQuality.Minor))).toBe(true);
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('C'), ChordQuality.Major))).toBe(true);
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('B'), ChordQuality.Major))).toBe(false);
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('Am'), ChordQuality.Minor7th))).toBe(true);
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('C'), ChordQuality.Major7th))).toBe(true);
      expect(aMinor.isDiatonicChord(new Chord(new PitchClass('B'), ChordQuality.Dominant7th))).toBe(false);
    });
  });
});