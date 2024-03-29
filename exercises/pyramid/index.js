// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const stringDimension = n * 2 -1;
  for(let i = 0; i < n; i++ ) {
    const hashCount = (2 * i + 1 );
    const spaceCount = (stringDimension - hashCount) / 2;
    console.log(' '.repeat(spaceCount) + '#'.repeat(hashCount) + ' '.repeat(spaceCount));
  }
}

module.exports = pyramid;
