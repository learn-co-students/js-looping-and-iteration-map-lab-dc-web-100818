// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(dr){return dr.toLowerCase();});
}

function nameToAttributes(arr) {
  return arr.map(function (dr) {
    let firstName = dr.split(" ")[0]
    let lastName = dr.split(" ")[1]
    return {["firstName"]:firstName, ["lastName"]:lastName}
  });
}


function attributesToPhrase(arr) {
  return arr.map(function (dr) {
    return `${dr.name} is from ${dr.hometown}`
  });
}
