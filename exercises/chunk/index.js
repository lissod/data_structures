// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(list, size) {
//   const newArray = [];
//   for(let i=0; i< list.length ; i+=size){
//     const subArray = [];
//     for(let j=0; j< size; j++){
//       if(list[j+i]){
//         subArray[j] = list[j+i];
//       }
//     }
//     newArray.push(subArray);
//   }
//   return newArray;
// }

function chunk(list, size) {
  const newArray = [];
  for(let i=0; i< list.length ; i += size){
    const lastPosition = Math.min(i + size, list.length);
    newArray.push(list.slice(i, lastPosition));
  }
  return newArray;
}

module.exports = chunk;
