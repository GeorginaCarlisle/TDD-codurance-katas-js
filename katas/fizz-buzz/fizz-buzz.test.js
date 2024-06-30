const fizzBuzz = require("./fizz-buzz");

test.each([
  [1, "1"],
  [2, "2"],
  [4, "4"],
])('fizzBuzz converts standard numbers to their string equivalent', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});

test.each([
  [3, "Fizz"],
  [6, "Fizz"],
  [9, "Fizz"]
])('fizzBuzz returns Fizz for multiples of 3', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});

test.each([
  [5, "Buzz"],
  [10, "Buzz"],
  [20, "Buzz"]
])('fizzBuzz returns Buzz for multiples of 5', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});
