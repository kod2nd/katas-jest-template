const splitTheBill = require("../src/splitTheBill");

test("should give {A:5, B:0} when A paid 20, B paid 15", () => {
  const group1 = {
    A: 20,
    B: 10,
  }
  expect(splitTheBill(group1)).toEqual({ A: 5, B: -5 });
});

test("should give {A:5, B:0, C:-5} when A paid 20, B paid 15, C paid 10", () => {
  const group1 = {
    A: 20,
    B: 15,
    C: 10
  }
  expect(splitTheBill(group1)).toEqual({ A: 5, B: 0, C: -5 });
});

test("should give { A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 } when { A: 40, B: 25, C: 10, D: 153, E: 58 }", () => {

  expect(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 })).toEqual({ A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 });
});