//takes in an array of drivers
function lowerCaseDrivers(drivers) {
  return drivers.map( function (driver){return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map( function (driver){
     let nameArr = driver.split(" ");
     return {firstName: nameArr[0], lastName: nameArr[1]};
  })
}

// takes in an array of drivers
function attributesToPhrase (drivers) {
  return drivers.map( driver => {
    return `${driver.name} is from ${driver.hometown}`;
  })

}
//returns a string
