import { Pitch } from './Pitch';

export class Note {
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

  getPitch(): Pitch {
    return this.pitch;
  }

  getDuration(): number {
    return this.duration;
  }

  getVelocity(): number {
    return this.velocity;
  }
}