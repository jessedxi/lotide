const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

let words = ["Howdy", "What", "Up"];
let result = tail(words);
let test = ["What", "Up"];
assertEqual(words.length, 3);
assertEqual(result[0], "What");
assertEqual(result.join(), test.join());




