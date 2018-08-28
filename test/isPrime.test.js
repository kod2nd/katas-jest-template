const { isPrime } = require("../src/isPrime");

test("2 should return true", () => {
  expect(isPrime(2)).toBe(true);
});

test("0 should return false", () => {
  expect(isPrime(0)).toBe(false);
});

test("1 should return false", () => {
  expect(isPrime(1)).toBe(false);
});

test("-1 should return false", () => {
  expect(isPrime(-1)).toBe(false);
});

test("An even number should return false", () => {
  expect(isPrime(20)).toBe(false);
});

test("21 is not prime and should return false", () => {
  expect(isPrime(21)).toBe(false);
});

test("97 is prime and should return true", () => {
  expect(isPrime(97)).toBe(true);
});
