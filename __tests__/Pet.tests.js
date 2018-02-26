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


