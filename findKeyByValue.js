
// For debug purposes
/*
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

}; */

/* loop through object keys
test if key is equal to value
 sets foundKey to key holding value
 sets foundKey to undefined otherwise
*/

const findKeyByValue = function (object, value) {
  const keyOfObject = Object.keys(object);
  let foundKey = "";
  for (const key of keyOfObject) {
    if (object[key] === value) {
      foundKey = key;
    } else {
      foundKey = undefined;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;

//test code:
/*
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */