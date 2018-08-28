const { pileOfCubes } = require("../src/pileOfCubes");

test("should return 1 when totalVolume is 1", () => {
  expect(pileOfCubes(1)).toEqual(1);
});

test("should return 2 when totalVolume is 9", () => {
  expect(pileOfCubes(135440716410000)).toEqual(4824);
});
