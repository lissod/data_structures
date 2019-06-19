// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 1;
  let result = str.charAt(0);
  let ac = {};
  str.split('').forEach((char, index) => {
    const ascii = char.charCodeAt(0);

    if(ac[ascii]){ // If already there, updates the quantity
      ac[ascii] = ac[ascii] + 1;
    } else { // If not there, adds the entry to the ac with the value of 1
        ac[ascii] = 1;
    }

    if(ac[ascii] > max) {  // If this char is the most repeated so far
      max = ac[ascii];
      result = str.charAt(index);
    }
  }, {});
  return result;
}

module.exports = maxChar;
