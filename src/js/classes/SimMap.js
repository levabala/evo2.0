// @flow
import Cell from './Cell';

class SimMap {
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = [];
  }

  createCells(): void {
    for (let x = 0; x < this.width; x++)
      for (let y = 0; y < this.height; y++)
        this.cells[x][y] = new Cell(x, y, 0);
  }
}

export default SimMap;
