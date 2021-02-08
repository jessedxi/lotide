//if the array isn't empty, it returns the first element of it - otherwise it returns undefined
const head = function(array) {
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};



module.exports = head;