const { oneMissingNumber } = require("../src/oneMissingNumber");

test("should ", () => {
  expect(oneMissingNumber([])).toEqual([]);
});

test("should ", () => {
  expect(oneMissingNumber([3, 1])).toEqual([2]);
});

test("should ", () => {
  expect(oneMissingNumber([3, 1, 3])).toEqual([2, [3]]);
});

test("should ", () => {
  expect(oneMissingNumber([10,9,8,9,6,1,2,4,3,2,5,5,3])).toEqual([7, [2, 3, 5, 9]]);
});
