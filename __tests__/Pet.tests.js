const { Pet } = require('../src/Pet');


test ('Pet creates a new pet object with a name property', () => {
  const Fido = new Pet('Fido')
  expect(Fido.name).toEqual('Fido');
});

test ('growUp adds 1 year to pets age', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  expect(Fido.age).toEqual(1);
});

test ('growUp increases hunger by 5', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  expect(Fido.hunger).toEqual(5);
});

test ('growUp decreases fitness by 3', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  expect(Fido.fitness).toEqual(7);
});

test ('walk increases fitness by 4', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  Fido.growUp();
  Fido.walk();
  expect(Fido.fitness).toEqual(8);
});

test ('walk increases fitness by 4', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  Fido.growUp();
  Fido.walk();
  Fido.walk();
  expect(Fido.fitness).toEqual(10);
});

test ('feed decraeses hunger by 3', () => {
  const Fido = new Pet('Fido')
  Fido.hunger = 5;
  Fido.feed();
  expect(Fido.hunger).toEqual(2);
});

test ('feed decraeses hunger by 3 but hunger never goes below 0', () => {
  const Fido = new Pet('Fido')
  Fido.hunger = 2;
  Fido.feed();
  expect(Fido.hunger).toEqual(0);
});


test ('checkUp returns I need a walk if fitness is 3 or less', () => {
  const Fido = new Pet('Fido')
  Fido.fitness = 2;
  //let checkUpResult = Fido.checkUp();
  expect(Fido.checkUp()).toEqual('I need a walk');
});

test ('checkUp returns I am hungry if hunger is 5 or more', () => {
  const Fido = new Pet('Fido')
  Fido.fitness = 4;
  Fido.hunger = 5;
  //let checkUpResult = Fido.checkUp();
  expect(Fido.checkUp()).toEqual('I am hungry');
});

test ('checkUp returns I am hungry and I need a walk if hunger is 5 or more and fitness is 3 or less', () => {
  const Fido = new Pet('Fido')
  Fido.fitness = 3;
  Fido.hunger = 6;
  //let checkUpResult = Fido.checkUp();
  expect(Fido.checkUp()).toEqual('I am hungry AND I need a walk');
});

test ('checkUp returns I feel great if hunger is less than 5 and fitness is more than 3', () => {
  const Fido = new Pet('Fido')
  Fido.fitness = 4;
  Fido.hunger = 2;
  //let checkUpResult = Fido.checkUp();
  expect(Fido.checkUp()).toEqual('I feel great!');
});

test ('isAlive returns false if fitness is 0 or less', () => {
  const Fido = new Pet('Fido');
  Fido.fitness = 0;
  Fido.age = 10;
  Fido.hunger = 5;
  expect(Fido.isAlive()).toEqual(false);
});

test ('isAlive returns false if hunger is more than 10', () => {
  const Fido = new Pet('Fido');
  Fido.fitness = 5;
  Fido.age = 10;
  Fido.hunger = 11;
  expect(Fido.isAlive()).toEqual(false);
});

test ('isAlive returns false if age is more than 30', () => {
  const Fido = new Pet('Fido');
  Fido.fitness = 5;
  Fido.age = 31;
  Fido.hunger = 5;
  expect(Fido.isAlive()).toEqual(false);
});


test ('isAlive returns true if age is 30 or less and hunger is 10 or less and fitness is more than 0', () => {
  const Fido = new Pet('Fido');
  Fido.fitness = 5;
  Fido.age = 29;
  Fido.hunger = 5;
  expect(Fido.isAlive()).toEqual(true);
});