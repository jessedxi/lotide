//asserEqual function
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}; */

// adds all items from current array to new array, besides the first element
const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

//Test cases using suggested answer & .join() method
/*let words = ["Howdy", "What", "Up"];
let result = tail(words);
let test = ["What", "Up"];
assertEqual(words.length, 3);
assertEqual(result[0], "What");
assertEqual(result.join(), test.join()); */

module.exports = tail;




