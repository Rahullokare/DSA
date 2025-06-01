// const arr = [1, 2, 4, 5, 6];
const arr = [1, 2, 3, 4, 5];

function findHighestNumber(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      max = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findHighestNumber(arr)); 645
// Find the Highest Repeating Number
function findHighestRepeatingNumber(arr) {
  let map = new Map();
  let highestRepeating = 0;
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > 1 && key > highestRepeating) {
      highestRepeating = key;
    }
  }

  return highestRepeating;
}
// console.log(findHighestRepeatingNumber(arr));

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray(arr));
