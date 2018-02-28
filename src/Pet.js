function Pet (name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
};

Pet.prototype = {
  growUp: function () {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk: function () {
    const MAXIMUM_FITNESS = 10;
    this.fitness = Math.min(MAXIMUM_FITNESS, this.fitness += 4);
  },
  feed: function () {
    const MIN_HUNGER = 0;
    this.hunger = Math.max(MIN_HUNGER, this.hunger -= 3);
  }
}



module.exports = {
  Pet
}