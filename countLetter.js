const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// loops through given string and returns an object counting each time a letter has arose
const countLetter = function (string) {
  const results = {}
  for (letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  }
  return results;
};
// Test Code:
let testString = "Lighthouse in the house"
let resultTest = countLetter(testString)


assertEqual(resultTest["h"], 4);