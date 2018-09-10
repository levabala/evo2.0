import P from '../assemblies/P';
import NeuralNetwork from './NeuralNetwork';

// @flow

class Creature {
  pos: P;
  eating_type: number;
  fatigue_downgrade: number;
  max_age: number;
  food_variety: number;
  networks_input_requesters: Object;
  networks: Array<NeuralNetwork>;
  constructor(
    pos,
    eating_type,
    fatigue_downgrade,
    max_age,
    food_variety,
    networks_input_requesters,
    networks,
  ) {
    // input properties
    this.pos = pos;
    this.eating_type = eating_type;
    this.fatigue_downgrade = fatigue_downgrade;
    this.max_age = max_age;
    this.food_variety = food_variety;
    this.networks_input_requesters = networks_input_requesters;
    this.networks = networks;

    // other properties
    this.id = 0;
    this.age = 0;
    this.fatigue = 0;
  }

  setId(id) {
    this.id = id;
  }
}

export default Creature;
