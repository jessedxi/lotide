

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;

//test code
/*
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
assertArraysEqual(['string', 'string', 'string', 'string', 'string'], results4); */
