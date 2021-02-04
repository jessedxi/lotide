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


const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
console.log(results2);

const results3 = map(words, word => word.length);
console.log(results3);

const results4 = map(words, word => typeof word);
console.log(results4);

assertArraysEqual(["g", "c", "t", "m", "t"], results1);
assertArraysEqual(["r", "o", "o", "a", "o"], results2);
assertArraysEqual([6, 7, 2, 5, 3], results3);
assertArraysEqual(['string', 'string', 'string', 'string', 'string'], results4);
