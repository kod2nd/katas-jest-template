const {narcissisticNumber} = require('../src/narcissisticNumber');

test('single digits should be a narcissisticNumber ', () => {
    expect(narcissisticNumber(1)).toBe(true)
    expect(narcissisticNumber(7)).toBe(true)
});

test('10 is not a narcissiticNumber', () => {
    expect(narcissisticNumber(10)).toBe(false)
});

test('121 is not a narcissiticNumber', () => {
    expect(narcissisticNumber(121)).toBe(false)
});

test('153 is not a narcissiticNumber', () => {
    expect(narcissisticNumber(153)).toBe(true)
});

test('1634 is not a narcissiticNumber', () => {
    expect(narcissisticNumber(1634)).toBe(true)
});