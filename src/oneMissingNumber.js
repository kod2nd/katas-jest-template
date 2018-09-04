const oneMissingNumber = arr => {
  const output = [];
  const duplicates = [];

  const set = new Set(arr);
  const sortedUniqueNumbers = Array.from(set).sort((a, b) => a - b);

//   Find Duplicates
  sortedUniqueNumbers.forEach(number => {
    if (duplicates.indexOf(number) === -1) {
      if (arr.indexOf(number) !== arr.lastIndexOf(number)) {
        duplicates.push(number);
      }
    }
  });

// Find missing number
  let counter = sortedUniqueNumbers[0];
  sortedUniqueNumbers.forEach(number => {
    if (number !== counter) {
      output.push(counter);
      counter = number;
    }
    counter += 1;
  });

  if (duplicates.length > 0) {
    output.push(duplicates);
  }

  return output;
};

module.exports = {
  oneMissingNumber
};
