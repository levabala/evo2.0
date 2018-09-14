// @flow
import * as Creature from './Creature';

class CreaturesController {
  constructor() {
    this.creatures_counter = 0;
    this.creatures = {};
  }

  addCreature(creature: Creature) {
    creature.setId(this.creatures_counter);
    this.creatures[creature.id] = creature;
    this.creatures_counter++;
  }
}

export default CreaturesController;
