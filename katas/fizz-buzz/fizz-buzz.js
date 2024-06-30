/**
 * Result generator for Fizz Buzz game
 * @param {number} number - Current number
 * @returns {string} The number given as a string Or
 * Fizz if the number is a multiple of 3
 * Buzz if the number is a muliple of 5
 */
function fizzBuzz(number) {
  if (Number.isInteger(number/3)){
    return "Fizz";
  } else if (Number.isInteger(number/5)){
    return "Buzz";
  }
  return number.toString();
}

module.exports = fizzBuzz;