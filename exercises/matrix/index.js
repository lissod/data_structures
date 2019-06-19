// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//

function matrix(n) {
  let result = Array.from(new Array(n), () => new Array(n));
  let x = 0;
  let y = 0;
  let direction = 'right';
  let nextElement;

  function moveUp(){
    x = x - 1;
    direction = 'up';
  }

  function moveDown(){
    x = x + 1;
    direction = 'down';
  }

  function moveLeft(){
    y = y - 1;
    direction = 'left';
  }

  function moveRight(){
    y = y + 1;
    direction = 'right';
  }

  function isTaken(value){
    return value && typeof value === 'number';
  }

  for(let i = 0; i < n * n; i++) {
    result[x][y] = i + 1;
    switch (direction) {
      case 'right':
        if(y >= n - 1 || isTaken(result[x][y + 1])){
          moveDown();
        } else {
           moveRight();
        }
        break;
      case 'down':
        if(x >= n - 1 || isTaken(result[x + 1][y])) {
          moveLeft();
        } else {
           moveDown();
        }
        break;
      case 'left':
        if(y <= 0 || isTaken(result[x][y - 1])){
          moveUp();
        } else {
           moveLeft();
        }
        break;
      case 'up':
        if(x <= 0 || isTaken(result[x - 1][y])){
          moveRight();
        } else {
           moveUp();
        }
        break;
    }
  }
  return result;
}

module.exports = matrix;
