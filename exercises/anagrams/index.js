// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCharTotalsFor(text){
  const cleanString = text.replace(/[\s\t\.\,]/g, '');
  const stringACount = {};
  charTotals = {};
  for(let char of cleanString){
    const code = char.toLowerCase().charCodeAt(0);
    charTotals[code] = charTotals[code] ? charTotals[code] + 1 : 1;
  }
  return charTotals;
}

function compareCharTotals(total1, total2) {
  if(Object.keys(total1).length !== Object.keys(total2).length){
    return false;
  }
  return Object.keys(total1).every((key)=>{
    return total1[key] === total2[key];
  });
}

function anagrams(stringA, stringB) {
  const stringATotals = getCharTotalsFor(stringA);
  // console.log('Total 1---------> ', stringATotals);
  const stringBTotals = getCharTotalsFor(stringB);
  // console.log('Total 2---------> ', stringBTotals);
  return compareCharTotals(stringATotals, stringBTotals) ;
}

module.exports = anagrams;
