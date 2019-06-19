// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const result = [];
  for(let i = 1; i<= n; i++){
    const printFizz = i % 3 === 0 ? 'fizz': '';
    const printBuzz = i % 5 === 0 ? 'buzz': '';
    let value;
    if (printFizz || printBuzz){
      value = printFizz + printBuzz;
    } else {
      value = i;
    }
    console.log(value);
    result[i] = value;
  }
}

module.exports = fizzBuzz;
