const splitTheBill = (group) => {

  let total = 0
  // Array of keys/'name of person'
  const groupNamesList = Object.keys(group)

  groupNamesList.forEach(person => {
    total = total + group[person]
  })

  // Average cost per pax
  const perPerson = total / groupNamesList.length

  let returnObject = {}

  groupNamesList.forEach(person => {
    let difference = group[person] - perPerson
    let nearestWhole = difference.toFixed(0)
    
    if (difference !== nearestWhole) {
      // toFixed returns a string, so convert it to a number
      difference = Number(difference.toFixed(2))
    }

    returnObject = { ...returnObject, [person]: difference }
  })

  return returnObject
}


module.exports = splitTheBill;
