const arr = [1, 2, 0, 53, 5, 0, 4];

// console.log(arr.length);

function moveZeroToEnd(arr) {
  let index = 0; // Position to place the next non-zero

  // Move non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }

  // Fill remaining positions with zero
  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }

  return arr;
}
console.log(moveZeroToEnd(arr));
