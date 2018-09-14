// @flow
import MapL from 'assemblies';
import SimplexNoize from 'simplex-noise';
import SimMap from './SimMap';

class MapController {
  constructor(map: SimMap) {
    this.map = map;
    this.seeds = new MapL([
      ['fertility', 0],
      ['sea_level', 0],
      ['humidity', 0],
    ]);
    this.states = new MapL(this.seeds);
    this.noizes = this.seeds.map(([name, seed]) => [
      name,
      new SimplexNoize(seed),
    ]);
  }

  generateLandscape(): void {
    for (let x = 0; x < this.map.width; x++)
      for (let y = 0; y < this.map.height; y++) {
        const { fertility, sea_level, humidity } = this.noizes.mapToObject(
          ([name, noize]) => noize.noize3d(x, y, this.states.get(name)),
        );
        const cell = this.map.cells[x][y];
        cell.fertility = fertility;
        cell.sea_level = sea_level;
        cell.humidity = humidity;
      }
  }
}

export default MapController;
