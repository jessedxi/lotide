//for debug use
/*const eqArrays = function (array1, array2) {
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
}; */


//Take until function, passes in an array, loops through indexes
//callback array tests element of index for required values
//if false, pushes data to temp array to be returned
//if true, stop point has been determined and loop exits

const takeUntil = function (array, callback) {
  let sliceArray = [];
  for (let index of array) {
    if (!callback(index)) {
      sliceArray.push((index));
    } else if (callback(index)) {
      break;
    }
  }
  return sliceArray;
};

module.exports = takeUntil;


/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2); */