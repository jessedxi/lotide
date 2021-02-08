/*const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    return console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

}; */

//const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  if (array1 === array2) {
    return true;
  } else if (array1 == null || array2 == null) {
    return false;
  } else if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); */


module.exports = eqArrays;