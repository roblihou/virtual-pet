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
    this.fitness = Math.min(10, this.fitness += 4);
  }
}



module.exports = {
  Pet
}