/* Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"] */

const balancedParentheses = numberOfPairs => {
  let output = [];
  let combination = [];

  const parenthesis = (
    numberOfPairs,
    index,
    numOpenBracketsUsed,
    numClosedBracketsUsed
  ) => {

    // Termination case
    if (numClosedBracketsUsed === numberOfPairs) {
      return output.push(combination.join(""));
    }

    // Action
    if (numOpenBracketsUsed < numberOfPairs) {
        combination[index] = "(";
      parenthesis(
        numberOfPairs,
        index + 1,
        numOpenBracketsUsed + 1,
        numClosedBracketsUsed
      );
    }
    if (numOpenBracketsUsed > numClosedBracketsUsed) {
      combination[index] = ")";
      parenthesis(
        numberOfPairs,
        index + 1,
        numOpenBracketsUsed,
        numClosedBracketsUsed + 1
      );
    }

  };

  if (numberOfPairs > 0) {
    parenthesis(numberOfPairs, 0, 0, 0);
    return output
  }
  return [""];
};

module.exports = {
  balancedParentheses
};
