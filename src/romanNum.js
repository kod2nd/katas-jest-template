/* Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row. */

const romanNum = number => {
  const romanTens = ["I", "X", "C", "M"];
  const romanFives = ["V", "L", "D"];

  const numberConverter = (num, index) => {
    if (num === "1" || num === "2" || num === "3")
      return romanTens[index].repeat(num);

    if (num === "4") return romanTens[index] + romanFives[index];

    if (num === "5") return romanFives[index];

    if (num === "6" || num === "7" || num === "8")
      return romanFives[index] + romanTens[index].repeat(num - 5);

    if (num === "9") return romanTens[index] + romanTens[index + 1];

    return "";
  };

  const numbersUsed = String(number)
    .slice()
    .split("")
    .reverse();

  const output = numbersUsed.reduce((sum, digit, index) => {
    return numberConverter(digit, index) + sum;
  }, "");

  return output;
};

module.exports = {
  romanNum
};
