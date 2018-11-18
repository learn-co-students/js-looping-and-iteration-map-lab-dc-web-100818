// Code your solution in this file.
function lowerCaseDrivers(array) {
  let lower_array = array.map(function(name) {
    return name.toLowerCase();
  });
  return lower_array
}

const drivers = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];

function nameToAttributes(array) {
  return array.map(driverName => {
    let obj = {}
    let firstName = driverName.split(" ")[0]
    let lastName = driverName.split(" ")[1]
    
    obj["firstName"] = firstName;
    obj["lastName"] = lastName

    return obj;
  });
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

