function lowerCaseDrivers(arr) {
  return arr.map(function lowercaser(driver) {return driver.toLowerCase()})
}

function nameToAttributes(arr) {
  return arr.map(function splitter(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]})
  })
}

function attributesToPhrase (arr) {
  return arr.map(function stringer(driver) {
    return `${driver[`name`]} is from ${driver[`hometown`]}`
  })
}
