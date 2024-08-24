import { Pitch } from './Pitch';

/**
 * Represents a musical note with a pitch and duration.
 */
export class Note {
  /**
   * Creates a new Note instance.
   * @param pitch The pitch of the note.
   * @param duration The duration of the note in beats.
   * @param velocity The velocity of the note (0-127).
   */
  constructor(
    private pitch: Pitch,
    private duration: number,
    private velocity: number
  ) {
    if (duration <= 0) {
      throw new Error('音符の長さは正の値である必要があります。');
    }
    if (velocity < 0 || velocity > 127) {
      throw new Error('ベロシティは0から127の間である必要があります。');
    }
  }

  /**
   * Gets the pitch of the note.
   * @returns The pitch of the note.
   */
  getPitch(): Pitch {
    return this.pitch;
  }

  /**
   * Gets the duration of the note in beats.
   * @returns The duration of the note in beats.
   */
  getDuration(): number {
    return this.duration;
  }

  /**
   * Gets the velocity of the note (0-127).
   * @returns The velocity of the note.
   */
  getVelocity(): number {
    return this.velocity;
  }
}