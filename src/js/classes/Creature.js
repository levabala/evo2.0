import P from '../assemblies/P';
import NeuralNetwork from './networks/NeuralNetwork';

// @flow

class Creature {
  constructor(
    pos: P,
    eating_type: number,
    fatigue_downgrade: number,
    max_age: number,
    food_variety: number,
    networks_input_requesters: Object<string, (Creature) => Array<number>>,
    networks: Object<string, NeuralNetwork>,
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

  setId(id: number): void {
    this.id = id;
  }
}

export default Creature;
