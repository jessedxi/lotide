// eqArrays for use with later function
/*
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
// function tests if arrays are equal, can be used to test if source arrat is changed
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};
*/

// return value of middle indexes of an array
const middle = function (array) {
  let midValue = [];
  let halfPoint = Math.ceil((array.length / 2) - 1);
  if (array.length <= 2) {
    midvalue = [];
  } else if ((array.length % 2) !== 0) {
    midValue.push(array[halfPoint]);
  } else {
    midValue.push(array[halfPoint]);
    midValue.push(array[halfPoint + 1]);
  }
  return midValue;
};
/*
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]); */

module.exports = middle;