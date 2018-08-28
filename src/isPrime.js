/* Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

const isPrime = num => {
  const isEven = num % 2 === 0;
  const isZero = num === 0;
  const isOne = Math.abs(num) === 1;
  const isTwo = num === 2;

  if (isTwo) {
    return true;
  }

  if (isZero || isOne || isEven) {
    return false;
  }

  const FIRST_ODD_NUMBER_ABOVE_ONE = 3;

  let oddNumberCount = FIRST_ODD_NUMBER_ABOVE_ONE;

  const divisibleBySomeOddNumber = num % oddNumberCount === 0;

  while (oddNumberCount < num) {
    if (divisibleBySomeOddNumber) {
      return false;
    }
    oddNumberCount += 2;
  }
  
  return true;
};

module.exports = {
  isPrime
};
