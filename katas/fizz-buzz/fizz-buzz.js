/**
 * Result generator for Fizz Buzz game
 * @param {number} number - Current number
 * @returns {string} The number given as a string Or Fizz is the number is a multiple of 3
 */
function fizzBuzz(number) {
  if (Number.isInteger(number/3)){
    return "Fizz";
  }
  return number.toString();
}

module.exports = fizzBuzz;