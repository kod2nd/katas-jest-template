const decodeBits = function(bits) {
  const removeLeadandTrailZeros = arr => {
    const characters = arr.slice().split("");
    const firstIndexOf1 = characters.indexOf("1");
    const lastIndexOf1 = characters.lastIndexOf("1");
    return arr.slice(firstIndexOf1, lastIndexOf1 + 1);
  };

  const trimmedBits = removeLeadandTrailZeros(bits);

  const keyDown = trimmedBits.slice().split("0");
  const keyUp = trimmedBits.slice().split("1");
  const DOT = ".";
  const DASH = "-";

  const filteredKeyDown = keyDown.filter(key => {
    return key !== "";
  });
  const filteredKeyUp = keyUp.filter(key => {
    return key !== "";
  });

  let pseudoKeyTime;
  if (filteredKeyUp.length === 1) {
    pseudoKeyTime = filteredKeyUp[0].length;
  }

  let keyTime1 = filteredKeyDown[0].length;
  let keyTime2;

  filteredKeyDown.forEach(key => {
    if (key.length !== keyTime1) {
      keyTime2 = key.length;
    }
  });

  if (keyTime2 === undefined || keyTime1 === keyTime2) {
    if (pseudoKeyTime === keyTime1 * 3) {
      keyTime2 = pseudoKeyTime;
    }
    if (pseudoKeyTime === keyTime1 / 3) {
      keyTime1 = pseudoKeyTime;
    }
  }

  if (keyTime2 < keyTime1) {
    const currKeyTime1 = keyTime1;
    const currKeyTime2 = keyTime2;
    keyTime1 = currKeyTime2;
    keyTime2 = currKeyTime1;
  }

  const dot = "1".repeat(keyTime1);
  const pauseBetweenDotDash = "0".repeat(keyTime1);
  const pauseBetweenChar = "0".repeat(keyTime2);

  const morseChars = filteredKeyDown.map(input => {
    if (input === dot) {
      return DOT;
    }
    return DASH;
  });

  const morseSpaces = filteredKeyUp.map(input => {
    if (input === pauseBetweenDotDash) {
      return "";
    }
    if (input === pauseBetweenChar) {
      return " ";
    }
    return " ".repeat(3);
  });

  const morseCode = morseChars.map((char, index) => {
    if (morseSpaces[index] !== undefined) {
      return char + morseSpaces[index];
    }
    return char;
  });
  return morseCode.join("");
};

const decodeMorse = function(morseCode) {
  const morseCodeWords = morseCode.slice().split(" ".repeat(3));
  const decodeMorseCodeWord = morseCodeWord => {
    const characters = morseCodeWord.slice().split(" ");
    const letters = characters.map(character => {
      return MORSE_CODE[character];
    });
    return letters.join("");
  };

  const decodedWords = morseCodeWords.map(word => {
    return decodeMorseCodeWord(word);
  });

  return decodedWords.join(" ").trim();
};
