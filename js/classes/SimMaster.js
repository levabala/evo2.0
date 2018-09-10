// @flow
import MapController from './SimMapController';
import CreaturesController from './CreaturesController';

class SimMaster {
  map_controller: MapController;
  creatures_controller: CreaturesController;

  constructor(
    map_controller: MapController,
    creatures_controller: CreaturesController,
  ) {
    this.map_controller = map_controller;
    this.creatures_controller = creatures_controller;
  }

  // eslint-disable-next-line
  startSimulation() {}
}

export default SimMaster;
