/* Consider the following expansion:

solve("3(ab)") = "ababab" -- "ab" repeats 3 times
solve("2(a3(b))" = "abbbabbb" -- "a3(b)" == "abbb" repeats twice.
Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck! */

const simpleStringExpansion = str => {
  const startIndex = str.indexOf("(");
  if (startIndex === -1) {
    return str;
  }

  const digitIndex = startIndex - 1;
  const endIndex = str.lastIndexOf(")");
  const start = str.substring(0, digitIndex);
  const digit = str.charAt(digitIndex);

  const expansion = simpleStringExpansion(str.substring(startIndex + 1, endIndex));
  
  const end = str.substr(endIndex + 1);
  return (
    (digit >= "0" && digit <= "9"
      ? start + expansion.repeat(digit)
      : digit + expansion) + end
  );
};

module.exports = {
  simpleStringExpansion
};

// [2,(,a,b,)]

/* 
if number, return number
if bracket, return bracket.
if !number and !bracket add to text holder

*/
