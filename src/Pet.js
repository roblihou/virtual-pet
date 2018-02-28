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
  },
  checkUp: function () {
    if(this.fitness <= 3 && this.hunger >= 5){
      return 'I am hungry AND I need a walk';
    }
    else if(this.fitness <= 3){
      return 'I need a walk';
    }
    else if(this.hunger >= 5){
      return 'I am hungry';
    }
    else{
      return 'I feel great!';
    }
  },
  isAlive: function () {
    if(this.fitness <= 0 || this.age > 30 || this.hunger > 10){
      return false;
    }
    else{
      return true;
    }
  }
}



module.exports = {
  Pet
}