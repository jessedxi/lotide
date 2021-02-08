const assert = require('chai').assert;  
const tail = require('../tail');

describe('#tail', () => {
  it("should return ['What', 'Up'] when passed ['Howdy', 'What', 'Up']", () => {
    assert.deepEqual(tail(['Howdy', 'What', 'Up']), ['What', 'Up']);
  })
})

/*let words = ["Howdy", "What", "Up"];
let result = tail(words);
let test = ["What", "Up"];
assertEqual(words.length, 3);
assertEqual(result[0], "What");
assertEqual(result.join(), test.join());*/