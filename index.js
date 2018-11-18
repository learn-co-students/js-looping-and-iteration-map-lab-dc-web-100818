// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(el) {
    return el[0].toLowerCase() + el.substr(1);
  })
}

function nameToAttributes(arr) {
  return arr.map(function (el) {
    const elFirst = el.split(' ')[0];
    const elLast = el.split(' ')[1];
    return {firstName: elFirst, lastName: elLast};
  });
}

function attributesToPhrase(arr) {
  return arr.map (function (el) {
    return `${el.name} is from ${el.hometown}`;
  })
}
