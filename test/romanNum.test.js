const { romanNum } = require("../src/romanNum");

test("expect 1 to be I", () => {
  expect(romanNum(1)).toBe("I");
});

test("expect 2 to be II", () => {
  expect(romanNum(2)).toBe("II");
});

test("expect 3 to be III", () => {
  expect(romanNum(3)).toBe("III");
});

test("expect 4 to be IV", () => {
  expect(romanNum(4)).toBe("IV");
});

test("expect 9 to be IX", () => {
  expect(romanNum(9)).toBe("IX");
});

test("expect 11 to be XI", () => {
  expect(romanNum(11)).toBe("XI");
});

test("expect 50 to be L", () => {
  expect(romanNum(50)).toBe("L");
});

test("expect 58 to be LVIII", () => {
  expect(romanNum(58)).toBe("LVIII");
});

test("expect 1666 to be MDCLXVI", () => {
  expect(romanNum(1666)).toBe("MDCLXVI");
});


