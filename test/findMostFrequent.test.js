const findMostFrequent = require("../src/findMostFrequent");

test("smoke test", () => {
  expect(1).toBe(1);
});

test("Result should return the number with the highest frequency", () => {
  expect(findMostFrequent([1, 1, 2, 3])).toEqual(new Set([1]));
});

test("If 2 or more items share the highest frequency. Return these items.", () => {
  expect(findMostFrequent([1, 1, 2, 2, 7, 4, 5, 5])).toEqual(new Set([1, 2, 5]));
});

test("findMostFrequent should be able to distinguish between a string and number", () => {
  expect(findMostFrequent([1, 1, 1, 2, 2, 2,'2', '2', '2', 5])).toEqual(new Set([1, 2, "2"]));
});