// @flow
import SimplexNoize from 'simplex-noise';
import SimMap from './SimMap';

class MapController {
  constructor(map: SimMap) {
    this.map = map;
  }

  generateLandscape(): void {
    const noize = new SimplexNoize(Math.random);
    for (let x = 0; x < this.map.width; x++)
      for (let y = 0; y < this.map.height; y++) noize.noise2D(x, y);
  }
}

export default MapController;
