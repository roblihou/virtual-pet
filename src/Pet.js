function Pet (name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
};

Pet.prototype = {
  growUp: function () {
    if(!this.isAlive()){ return 'Your pet is no longer alive :(' }
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
    return 'Your pet has aged a year';
  },
  walk: function () {
    if(!this.isAlive()){ throw 'Your pet is no longer alive :(' }
    const MAXIMUM_FITNESS = 10;
    this.fitness = Math.min(MAXIMUM_FITNESS, this.fitness += 4);
    return 'Your pets fitness has increased';
  },
  feed: function () {
    if(!this.isAlive()){ return 'Your pet is no longer alive :(' }
    const MIN_HUNGER = 0;
    this.hunger = Math.max(MIN_HUNGER, this.hunger -= 3);
    return 'Your pets hunger has decreased';
  },
  checkUp: function () {
    if(!this.isAlive()){ return 'Your pet is no longer alive :(' }
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