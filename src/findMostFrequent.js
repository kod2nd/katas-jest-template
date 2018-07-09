const createStrNumObj = (obj, item, arrType) => {
    return { ...obj, [item]: arrType.filter(arrElement => { return arrElement === item; }).length }
}

const findMostFrequent = inputArray => {
    let numObject = {};
    let strObject = {};
    let numbers = [];
    let strings = [];
    let result = [];

    // Split the arrary based on strings and Numbers
    inputArray.forEach(element => {
        if (typeof element === 'string') {
            strings = [...strings, element];
            strObject = createStrNumObj(strObject, element, strings)
            return strObject
        } else
            numbers = [...numbers, element];
        numObject = createStrNumObj(numObject, element, numbers)
    });

    // Split the objects in to Keys and Values array
    const numObjValues = Object.values(numObject)
    const numObjKeys = Object.keys(numObject).map(
        (key) => { return Number(key) })
    let maxNumFrequency = Math.max(...numObjValues)

    const strObjValues = Object.values(strObject)
    const strObjKeys = Object.keys(strObject)
    let maxStrFrequency = Math.max(...strObjValues)

    // Check the max frequency of items in the array
    if (maxStrFrequency >= maxNumFrequency) {
        maxNumFrequency = maxStrFrequency
    }

    // Add it to results array
    const addToResult = (keys, obj) => {
        keys.forEach((key) => {
            if (obj[key] === maxNumFrequency) { result = [...result, key] }
        })
    }

    addToResult(numObjKeys, numObject)
    addToResult(strObjKeys, strObject)

    return new Set(result)
};

module.exports = findMostFrequent;