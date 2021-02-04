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



const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

  /* loops through letters of a sentence
  checks if the key already exists, if so pushes the index of the letter to its array
  checks if the index is " ", if it isnt:
  creats a key for th results object;
  assigns current index to array.
  */

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      (results[sentence[i]]).push(i);
    } else if (sentence[i] !== " ") {
      results[sentence[i]] = [];
      (results[sentence[i]]).push(i);
    }
  }
  return results;
};

let testString1 = "Lighthouse in the house";
console.log(letterPositions(testString1));
assertArraysEqual(letterPositions("hello").e, [1]);