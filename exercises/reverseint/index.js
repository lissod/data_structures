// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const multiply = n < 0 ? -1 : 1;
  return multiply * parseInt((Math.abs(n) + '').split('').reverse().join()) ;
}

module.exports = reverseInt;
