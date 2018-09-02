const { balancedParentheses } = require("../src/balancedParentheses");

test("0 should return no parentheis ", () => {
  expect(balancedParentheses(0)).toEqual([""]);
});

test("1  ", () => {
  expect(balancedParentheses(1)).toEqual(["()"]);
});

test.only("2", () => {
  expect(balancedParentheses(2)).toEqual(["(())","()()"]);
});

test("3 ", () => {
  expect(balancedParentheses(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
});

/* 
["(",]
parenthesis(2, 0, 0, 0);
openUsed 0 < 2
  add "("" to array[0]
  parenthesis(2,1,1 0)

*/
