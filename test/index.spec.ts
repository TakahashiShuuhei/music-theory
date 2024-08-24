import { getNoteName } from '../src/index';

describe('getNoteName', () => {
  it('returns correct note name for MIDI note number', () => {
    expect(getNoteName(60)).toBe('C');
    expect(getNoteName(62)).toBe('D');
    expect(getNoteName(64)).toBe('E');
  });
});