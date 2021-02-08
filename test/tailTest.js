const assertEqual = require('../assertEqual');
const tail = require('../tail');

let words = ["Howdy", "What", "Up"];
let result = tail(words);
let test = ["What", "Up"];
assertEqual(words.length, 3);
assertEqual(result[0], "What");
assertEqual(result.join(), test.join());