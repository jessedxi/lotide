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

const without = function (source, itemsToRemove) {
  let sourceEdit = [];
  for (let k = 0; k < source.length; k++) {
    sourceEdit.push(source[k]);
  }
  for (let i = 0; i < sourceEdit.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceEdit[i] === itemsToRemove[j]) {
        sourceEdit.splice(i, 1);
      }
    }
  }
  return console.log(sourceEdit);
};

without([1, 2, 3], [3]);
without(["1", "2", "3"], [1, 2, "1"]);
without(["Hello", "Goodybe", "Here"], ["Here"]);
const words = ["Hey", "Man", "Nice", "Shot"];
without(words, ["Man"]);
assertArraysEqual(words,["Hey", "Man", "Nice", "Shot"]);