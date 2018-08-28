const {
  directionReduce,
  NORTH,
  SOUTH,
  EAST,
  WEST
} = require("../src/directionReduce");

test("NORTH and SOUTH should return an empty array", () => {
  expect(directionReduce([NORTH, SOUTH])).toEqual([]);
});

test("SOUTH and NORTH should return an empty array", () => {
  expect(directionReduce([SOUTH, NORTH])).toEqual([]);
});

test("EAST and WEST should return an empty array", () => {
  expect(directionReduce([EAST, WEST])).toEqual([]);
});

test("WEST and EAST should return an empty array", () => {
  expect(directionReduce([WEST, EAST])).toEqual([]);
});

test("NORTH. SOUTH, EAST, WEST, EAST, WEST should return an empty array", () => {
  expect(
    directionReduce(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
  ).toEqual([]);
});

test('"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" should return WEST', () => {
  expect(
    directionReduce([
      "NORTH",
      "SOUTH",
      "SOUTH",
      "EAST",
      "WEST",
      "NORTH",
      "WEST"
    ])
  ).toEqual([WEST]);
});

test("NORTH, WEST, SOUTH, EAST should return NORTH, WEST, SOUTH, EAST", () => {
  expect([NORTH, WEST, SOUTH, EAST]).toEqual([NORTH, WEST, SOUTH, EAST]);
});
