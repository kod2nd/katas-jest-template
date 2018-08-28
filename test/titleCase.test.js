const titleCase = require("../src/titleCase");

test("testing", () => {
    expect(true).toBe(true);
});

test("Single word should return capatilsed first letter", () => {
    expect(titleCase("SINGLE")).toBe("Single");
});

test("Two or more words should return title case respectively", () => {
    expect(titleCase("THE cat sHOES")).toBe("The Cat Shoes");
});

test('Word in the second arg, should be returned in lowercase, not title case', () => {
    expect(titleCase("THE cat of PennY laNE", "OF")).toBe("The Cat of Penny Lane")
});

test('Words in the second arg, should be returned in lowercase, not title case', () => {
    expect(titleCase("THE cat of A PennY laNE", "of A THE")).toBe("The Cat of a Penny Lane")
});