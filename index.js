// Code your solution in this file.

function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    const driverObj = {}
    driverObj['firstName'] = driver.split(' ')[0]
    driverObj['lastName'] = driver.split(' ')[1]
    return driverObj
  })
}

function attributesToPhrase (driverObjs) {
  return driverObjs.map(function (driverObj) {
    return `${driverObj.name} is from ${driverObj.hometown}`
  })
}
