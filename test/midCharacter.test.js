const midCharacter = require('../src/midCharacter');

it('smoke test', () => {
    expect(1).toBe(1);
});

it('String length 1 should return the entire string', () => {
    expect(midCharacter("A")).toBe("A");
})

it('String with odd length should return the middle character', () => {
    expect(midCharacter("testing")).toBe("t");
})

it('string with even length should return middle 2 characters', () => {
    expect(midCharacter("middle")).toBe("dd")
});

it('string with zero length should return empty characters', () => {
    expect(midCharacter("")).toBe("")
});