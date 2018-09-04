const { simpleStringExpansion } = require("../src/simpleStringExpansion");

test("a", () => {
  expect(simpleStringExpansion("a")).toBe("a");
});

test("2(a)", () => {
  expect(simpleStringExpansion("2(a)")).toBe("aa");
});

test.skip("3(ab)", () => {
  expect(simpleStringExpansion("3(ab)")).toBe("ababab");
});

test.skip("2(a3(b))", () => {
  expect(simpleStringExpansion("2(a3(b))")).toBe("abbbabbb");
});
