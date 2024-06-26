const fizzBuzz = require("./fizz-buzz");

test('fizzBuzz returns "Error: integer values only" if value passed in is not an integer', () => {
  expect(fizzBuzz(1.45)).toBe("Error: integer values only");
});