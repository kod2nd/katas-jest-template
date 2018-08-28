const animalSorter = (list) => {
    if (!list) { return list }
    let listCopy = list.map((element) => {
        return element
    })
    if (listCopy.length === 0) { return listCopy }

    const sorter = (first, second) => {
        const legsComparision = first.numberOfLegs - second.numberOfLegs;

        if (legsComparision !== 0) {
            return first.numberOfLegs - second.numberOfLegs;
        }

        if (first.name.toUpperCase() < second.name.toUpperCase()) { return - 1 }
        if (first.name.toUpperCase() >= second.name.toUpperCase()) { return 1 }

    }

    return listCopy.sort(sorter)
}

module.exports = animalSorter