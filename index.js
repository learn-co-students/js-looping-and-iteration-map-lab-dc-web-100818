// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(drv) {return drv.toLowerCase();});
}

function nameToAttributes(drivers) {
  return drivers.map(function(drv) {
    return Object.assign({}, {firstName: drv.split(" ")[0], lastName: drv.split(" ")[1]});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(drv) {
    return `${drv['name']} is from ${drv['hometown']}`;
  });
}
