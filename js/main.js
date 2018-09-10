// @flow
import CreaturesController from './classes/CreaturesController';
import MapController from './classes/SimMapController';
import SimMaster from './classes/SimMaster';
import Map from './classes/SimMap';

const map = new Map();
const map_controller = new MapController(map);
const creatures_controller = new CreaturesController();
const sim_master = new SimMaster(map_controller, creatures_controller);

sim_master.startSimulation();
