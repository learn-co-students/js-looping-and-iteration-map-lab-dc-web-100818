// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function(driver) {
    let driverName = driver.split(" ");
    return {firstName: driverName[0], lastName: driverName[1]};
  });
}

function attributesToPhrase(arr) {
  return arr.map(function(driver){
    return `${driver['name']} is from ${driver['hometown']}`;
  });
}
