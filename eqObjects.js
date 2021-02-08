/*const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};


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
}; */

// Returns true if both objects have identical keys with identical values.
// tests if key values are arrays and if so, tests them if not arrays, tests as primitive type
// Otherwise returns false!

const eqObjects = function (object1, object2) {
  
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (const key of objectKeys1) {
    if (Array.isArray(object1[key] || Array.isArray(object2[key]))) {
      return (eqArrays(object1[key], object2[key]));
    } else if (object1[key] !== object2[key])
      return false;
  }
  return true;
};

module.exports = eqObjects;



/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false */