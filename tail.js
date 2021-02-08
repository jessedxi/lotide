

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
assertEqual(result, ["What", "Up"]);
//assertEqual(result.join(), test.join()); */

module.exports = tail;




