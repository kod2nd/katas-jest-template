const animalSorter = require('../src/animalSorter')

test('smoke test', () => {
    expect(1).toBe(1)
});

test('If null is passed, return null', () => {
    expect(animalSorter(null)).toBe(null)
});

test('If an empty array is passed, return empty array', () => {
    expect(animalSorter([])).toEqual([])
});


test('should return a new copy of the array ', () => {
    let cat = {
        name: "Elon Musk",
        numberOfLegs: 4
    }

    let bird = {
        name: "Elon Musk",
        numberOfLegs: 2
    }

    let originalList = [bird, cat]
    expect(animalSorter(originalList)).not.toBe(originalList);
});

test('If an array of 2 animals with different number of legs but same names is passed, return correctly sorted array', () => {
    let cat = {
        name: "Elon Musk",
        numberOfLegs: 4
    }

    let bird = {
        name: "Elon Musk",
        numberOfLegs: 2
    }

    expect(animalSorter([cat, bird])).toEqual([bird, cat])
});

test('If an array of 3 animals with different number of legs and different names is passed, return correctly sorted array', () => {
    let cat = {
        name: "Elon Musk",
        numberOfLegs: 4
    }

    let bird = {
        name: "Nikola Tesla",
        numberOfLegs: 2
    }

    let dog = {
        name: "Albert Einstein",
        numberOfLegs: 4
    }

    let originalList = [cat, bird, dog]

    expect(animalSorter(originalList)).toEqual([bird, dog, cat])
});

test("random sort", () => {
    var animal = [
      { name: "Centopede", numberOfLegs: 100 },
      { name: "Monster0", numberOfLegs: 7 },
      { name: "Monster1", numberOfLegs: 9 },
      { name: "Monster2", numberOfLegs: 8 },
      { name: "Monster3", numberOfLegs: 7 },
      { name: "Monster4", numberOfLegs: 3 },
      { name: "Monster5", numberOfLegs: 7 },
      { name: "Monster6", numberOfLegs: 3 },
      { name: "Monster7", numberOfLegs: 7 },
      { name: "Monster8", numberOfLegs: 9 },
      { name: "Monster9", numberOfLegs: 0 },
      { name: "Monster10", numberOfLegs: 8 },
      { name: "Monster11", numberOfLegs: 2 },
      { name: "Monster12", numberOfLegs: 3 },
      { name: "Monster13", numberOfLegs: 3 },
      { name: "Monster14", numberOfLegs: 8 },
      { name: "Monster15", numberOfLegs: 3 },
      { name: "Monster16", numberOfLegs: 9 },
      { name: "Monster17", numberOfLegs: 4 },
      { name: "Monster18", numberOfLegs: 7 },
      { name: "Monster19", numberOfLegs: 9 },
      { name: "Monster20", numberOfLegs: 9 },
      { name: "Monster21", numberOfLegs: 5 },
      { name: "Monster22", numberOfLegs: 8 },
      { name: "Monster23", numberOfLegs: 2 },
      { name: "Monster24", numberOfLegs: 5 },
      { name: "Monster25", numberOfLegs: 7 },
      { name: "Monster26", numberOfLegs: 8 },
      { name: "Monster27", numberOfLegs: 5 },
      { name: "Monster28", numberOfLegs: 9 },
      { name: "Monster29", numberOfLegs: 9 },
      { name: "Monster30", numberOfLegs: 1 },
      { name: "Monster31", numberOfLegs: 10 },
      { name: "Monster32", numberOfLegs: 0 },
      { name: "Monster33", numberOfLegs: 3 },
      { name: "Monster34", numberOfLegs: 0 },
      { name: "Monster35", numberOfLegs: 9 },
      { name: "Monster36", numberOfLegs: 1 },
      { name: "Monster37", numberOfLegs: 6 },
      { name: "Monster38", numberOfLegs: 2 },
      { name: "Monster39", numberOfLegs: 4 },
      { name: "Monster40", numberOfLegs: 8 },
      { name: "Monster41", numberOfLegs: 8 },
      { name: "Monster42", numberOfLegs: 2 },
      { name: "Monster43", numberOfLegs: 7 },
      { name: "Monster44", numberOfLegs: 5 },
      { name: "Monster45", numberOfLegs: 5 },
      { name: "Monster46", numberOfLegs: 5 },
      { name: "Monster47", numberOfLegs: 0 },
      { name: "Monster48", numberOfLegs: 1 },
      { name: "Monster49", numberOfLegs: 8 }
    ];
    expect(animalSorter(animal)).toEqual([
      { name: "Monster32", numberOfLegs: 0 },
      { name: "Monster34", numberOfLegs: 0 },
      { name: "Monster47", numberOfLegs: 0 },
      { name: "Monster9", numberOfLegs: 0 },
      { name: "Monster30", numberOfLegs: 1 },
      { name: "Monster36", numberOfLegs: 1 },
      { name: "Monster48", numberOfLegs: 1 },
      { name: "Monster11", numberOfLegs: 2 },
      { name: "Monster23", numberOfLegs: 2 },
      { name: "Monster38", numberOfLegs: 2 },
      { name: "Monster42", numberOfLegs: 2 },
      { name: "Monster12", numberOfLegs: 3 },
      { name: "Monster13", numberOfLegs: 3 },
      { name: "Monster15", numberOfLegs: 3 },
      { name: "Monster33", numberOfLegs: 3 },
      { name: "Monster4", numberOfLegs: 3 },
      { name: "Monster6", numberOfLegs: 3 },
      { name: "Monster17", numberOfLegs: 4 },
      { name: "Monster39", numberOfLegs: 4 },
      { name: "Monster21", numberOfLegs: 5 },
      { name: "Monster24", numberOfLegs: 5 },
      { name: "Monster27", numberOfLegs: 5 },
      { name: "Monster44", numberOfLegs: 5 },
      { name: "Monster45", numberOfLegs: 5 },
      { name: "Monster46", numberOfLegs: 5 },
      { name: "Monster37", numberOfLegs: 6 },
      { name: "Monster0", numberOfLegs: 7 },
      { name: "Monster18", numberOfLegs: 7 },
      { name: "Monster25", numberOfLegs: 7 },
      { name: "Monster3", numberOfLegs: 7 },
      { name: "Monster43", numberOfLegs: 7 },
      { name: "Monster5", numberOfLegs: 7 },
      { name: "Monster7", numberOfLegs: 7 },
      { name: "Monster10", numberOfLegs: 8 },
      { name: "Monster14", numberOfLegs: 8 },
      { name: "Monster2", numberOfLegs: 8 },
      { name: "Monster22", numberOfLegs: 8 },
      { name: "Monster26", numberOfLegs: 8 },
      { name: "Monster40", numberOfLegs: 8 },
      { name: "Monster41", numberOfLegs: 8 },
      { name: "Monster49", numberOfLegs: 8 },
      { name: "Monster1", numberOfLegs: 9 },
      { name: "Monster16", numberOfLegs: 9 },
      { name: "Monster19", numberOfLegs: 9 },
      { name: "Monster20", numberOfLegs: 9 },
      { name: "Monster28", numberOfLegs: 9 },
      { name: "Monster29", numberOfLegs: 9 },
      { name: "Monster35", numberOfLegs: 9 },
      { name: "Monster8", numberOfLegs: 9 },
      { name: "Monster31", numberOfLegs: 10 },
      { name: "Centopede", numberOfLegs: 100 }
    ]);
  });