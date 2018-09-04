const { rectangleIntoSquares } = require("../src/rectangleIntoSquares");

test("should ", () => {
  expect(rectangleIntoSquares(2, 1)).toEqual([1, 1]);
});

test("should ", () => {
  expect(rectangleIntoSquares(2, 3)).toEqual([2, 1, 1]);
});

test("should ", () => {
  expect(rectangleIntoSquares(3, 2)).toEqual([2, 1, 1]);
});

test("should ", () => {
  expect(rectangleIntoSquares(3, 5)).toEqual([3, 2, 1, 1]);
});

test("should ", () => {
  expect(rectangleIntoSquares(3, 3)).toBe(null);
});





