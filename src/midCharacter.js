const midCharacter = string => {
    const median = Math.floor(string.length / 2);
    return string.length % 2 === 0
      ? string.substr(median - 1, 2)
      : string[median];
  };
  
  module.exports = midCharacter;