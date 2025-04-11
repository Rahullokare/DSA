const array = [1, 2, 3, 4, 5, 6, 7];

function twoPointers(arr) {
  let left = 0;
  let right = arr.length;
  let target = 11;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoPointers(array));

twoPointers(array);

function palinDromeChecker(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return `Given string ${string} is palindrome`;
}

console.log(palinDromeChecker("nitin"));
