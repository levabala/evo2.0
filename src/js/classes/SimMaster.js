// @flow
import MapController from './SimMapController';
import CreaturesController from './CreaturesController';

class SimMaster {
  constructor(
    map_controller: MapController,
    creatures_controller: CreaturesController,
  ) {
    // controllers
    this.map_controller = map_controller;
    this.creatures_controller = creatures_controller;

    // tick params
    this.timeout_id = null;
    this.last = {
      timecode: Date.now(),
      duration: 0,
      speedup: 1,
    };
  }

  startSimulation() {
    this.simulationTick();
    this.scheduleNextTick();
  }

  /* eslint-disable */
  simulationTick() {
    // update map
    // update creatures
  }
  /* eslint-enable */

  scheduleNextTick() {
    const delay = 1; // TODO: set expression
    this.timeout_id = setTimeout(this.simulationTick.bind(this), delay);
  }
}

export default SimMaster;
