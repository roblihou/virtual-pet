const { Pet } = require('../src/Pet');

test ('Pet creates a new pet object with a name property', () => {

  const Fido = new Pet('Fido')

  expect(Fido.name).toEqual('Fido');

});
