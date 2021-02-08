

const findKey = function(object, callback) {
   let foundKey = ""
  const keysOfObject = Object.keys(object);
  for (const key of keysOfObject) {
    if (callback(object[key])) {
      foundKey = key;
      return foundKey;
    }
 }
};

module.exports = findKey;

//Debug Code:
 /*console.log(key);
    console.log(object[key]);
    console.log(callback(key))
    console.log(key.stars);
    console.log("Blue Hill".stars); */
  
/*
results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "Akaleri"


console.log(results1);

assertEqual(results1, "noma");

console.log(results2);

assertEqual(results2, "Akaleri"); */
