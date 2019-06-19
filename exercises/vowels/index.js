// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   return str.split('').filter(letter.toLowerCase() => ['a','e','i','o','u'].includes(letter)).length;
// }
//
function vowels(str) {
  return str.split('').filter(letter => letter.toLowerCase().match(/[aeiou]/)).length;
}

module.exports = vowels;
