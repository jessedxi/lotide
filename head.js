//assertEqual Function
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
  
}; */

const assertEqual = require('./assertEqual');

//if the array isn't empty, it returns the first element of it - otherwise it returns undefined
const head = function(array) {
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};

//test cases
//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(["Hello", "LightHouse", "Labs"]), "Hello");

module.exports = head;