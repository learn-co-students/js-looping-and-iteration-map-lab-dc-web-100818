// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(names) {
    return names.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const bothNames = name.split(' ');
    return {firstName: bothNames[0], lastName: bothNames[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
