// @flow
import Range from './Range';

class P {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(dx: number, dy: number): P {
    this.x += dx;
    this.y += dy;
    return this;
  }

  add(p: P): P {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  clone(): P {
    return new P(this.x, this.y);
  }

  inRange(x_range: Range, y_range: Range, include: boolean = true): boolean {
    return x_range.isIn(this.x, include) && y_range.isIn(this.y, include);
  }

  toString(): string {
    return `${this.x}:${this.y}`;
  }
}

export default P;
