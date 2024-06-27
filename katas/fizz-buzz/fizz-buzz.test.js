const fizzBuzz = require("./fizz-buzz");

test('fizzBuzz converts 1 to "1"', () => {
  expect(fizzBuzz(1)).toBe("1");
});

test('fizzBuzz converts 2 to "2"', () => {
  expect(fizzBuzz(2)).toBe("2");
});