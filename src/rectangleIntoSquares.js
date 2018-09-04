const rectangleIntoSquares = (lng, wdth) => {
  let squares = [];
  if (lng === wdth) {
    return null;
  }

  const findMax = (length, width) => {
    return length > width ? length : width;
  };

  const findMin = (length, width) => {
    return length > width ? width : length;
  };

  const squareFinder = (length, width) => {
    const max = findMax(length, width);
    const min = findMin(length, width);
    
    if (max === min) return squares.push(min);
    squares.push(min);

    if (max - min > 0) squareFinder(min, max - min);
  };

  squareFinder(findMax(lng, wdth), findMin(lng, wdth));
  return squares;
};

module.exports = {
  rectangleIntoSquares
};
