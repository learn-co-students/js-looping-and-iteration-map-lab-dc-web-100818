// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map( driver => driver.toLowerCase() )
}

function nameToAttributes(arr) {
  return arr.map( function(driver) {
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]

    return { firstName: first, lastName: last }
  })
}

function attributesToPhrase(arr) {
  return arr.map( driver => `${driver.name} is from ${driver.hometown}`)
}
