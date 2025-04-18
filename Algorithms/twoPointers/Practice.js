let arr = [1, 2, 3, 4, 5];

function removeElement(arr, removeElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === removeElement) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function findTargetSumfromArr(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  for (let nums of arr) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [arr[left], arr[right]];
    }
    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
}
console.log(findTargetSumfromArr(arr, 4));
