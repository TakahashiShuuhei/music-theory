import { PitchClass } from '../src/PitchClass';

describe('PitchClass', () => {
  describe('constructor', () => {
    it('有効な音名で正しくインスタンス化される', () => {
      expect(() => new PitchClass('C')).not.toThrow();
      expect(() => new PitchClass('F#')).not.toThrow();
      expect(() => new PitchClass('Bb')).not.toThrow();
    });

    it('無効な音名でエラーをスローする', () => {
      expect(() => new PitchClass('H')).toThrow('無効な音名です');
      expect(() => new PitchClass('C##')).toThrow('無効な音名です');
      expect(() => new PitchClass('Fb')).toThrow('無効な音名です');
    });
  });

  describe('getName', () => {
    it('デフォルトでシャープ表記を返す', () => {
      expect(new PitchClass('C').getName()).toBe('C');
      expect(new PitchClass('C#').getName()).toBe('C#');
      expect(new PitchClass('Db').getName()).toBe('C#');
    });

    it('フラット表記を返すオプションが機能する', () => {
      expect(new PitchClass('C').getName(false)).toBe('C');
      expect(new PitchClass('C#').getName(false)).toBe('Db');
      expect(new PitchClass('Db').getName(false)).toBe('Db');
    });
  });

  describe('equals', () => {
    it('異名同音を同一視する', () => {
      const cSharp = new PitchClass('C#');
      const dFlat = new PitchClass('Db');
      expect(cSharp.equals(dFlat)).toBe(true);
    });

    it('異なる音を区別する', () => {
      const c = new PitchClass('C');
      const cSharp = new PitchClass('C#');
      expect(c.equals(cSharp)).toBe(false);
    });
  });

  describe('getSemitone', () => {
    it('正しい半音値を返す', () => {
      expect(new PitchClass('C').getSemitone()).toBe(0);
      expect(new PitchClass('F#').getSemitone()).toBe(6);
      expect(new PitchClass('B').getSemitone()).toBe(11);
    });
  });

  describe('fromSemitone', () => {
    it('半音値から正しいPitchClassを生成する', () => {
      expect(PitchClass.fromSemitone(0).getName()).toBe('C');
      expect(PitchClass.fromSemitone(6).getName()).toBe('F#');
      expect(PitchClass.fromSemitone(11).getName()).toBe('B');
    });

    it('12以上の半音値を正しく処理する', () => {
      expect(PitchClass.fromSemitone(12).getName()).toBe('C');
      expect(PitchClass.fromSemitone(13).getName()).toBe('C#');
      expect(PitchClass.fromSemitone(25).getName()).toBe('C#');
    });
  });
});