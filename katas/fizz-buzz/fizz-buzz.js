/**
 * Result generator for Fizz Buzz game
 * @param {number} number - Number being evaluated
 * @returns {string} The number given as a string Or
 * Fizz if the number is a multiple of 3
 * Buzz if the number is a muliple of 5
 * FizzBuzz if the number is a multiple of 5 and 3
 */
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0){
    return "FizzBuzz";
  } else if (number % 3 === 0){
    return "Fizz";
  } else if (number % 5 === 0){
    return "Buzz";
  }
  return number.toString();
}

module.exports = fizzBuzz;