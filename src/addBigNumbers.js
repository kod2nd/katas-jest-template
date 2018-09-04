/* We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives */

const add = (a, b) => {
  const removeTrailingZeros = num => {
    const numCopy = num.slice().split("");
    const index = numCopy.findIndex(number => {
      return number > 0;
    });
    return num.slice(index);
  };
  a = removeTrailingZeros(a);
  b = removeTrailingZeros(b);

  let num1 = a;
  let num2 = b;

  if (b.length > a.length) {
    num1 = b;
    num2 = a;
  }

  const num1Digits = num1
    .slice()
    .split("")
    .reverse();

  num1Digits.push("0");
  const num2Digits = num2
    .slice()
    .split("")
    .reverse();

  num2Digits.push("0");
  const sum = num1Digits
    .map((digit, index) => {
      let secondNumber = 0;
      if (num2Digits[index]) {
        secondNumber = Number(num2Digits[index]);
      }
      return Number(digit) + secondNumber;
    })
    .map((digit, index, arr) => {
      const remainder = digit % 10;
      const digitsInNextOrder = digit - remainder;

      if (digit > 9) {
        arr[index + 1] += digitsInNextOrder / 10;
        return digit - digitsInNextOrder;
      }

      return digit;
    });

  if (sum[sum.length - 1] === 0) {
    sum.pop();
  }

  return sum.reverse().join("");
};

module.exports = {
  add
};
