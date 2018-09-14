class Cell {
  constructor(x: number, y: number, fertility: number) {
    this.x = x;
    this.y = y;
    this.fertility = fertility;
    this.amount = 0;
  }

  grow(time: number, max_amount: number): void {
    this.amount = Math.min(this.amount + time * this.fertility, max_amount);
  }
}

export default Cell;
