/* Returns a string with where the first character is always 
   capatilised and the rest are lowercase */
   const formatString = string => {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

const titleCase = (originalString, minorWords) => {
    minorWords ? (minorWords = minorWords.toLowerCase()) : (minorWords = "");

    if (originalString === "") return originalString

    const changedWords = originalString.split(" ").map(word => {
        if (minorWords.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        return formatString(word);
    });

    // Ensure first word of the string is always title cased
    changedWords[0] = formatString(changedWords[0]);
    return changedWords.join(" ");
};

module.exports = titleCase;